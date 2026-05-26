#!/usr/bin/env python3
"""Extract compact text from a case folder for petition drafting."""

from __future__ import annotations

import argparse
import json
import shutil
import subprocess
import tempfile
from dataclasses import dataclass
from pathlib import Path


TEXT_EXTS = {".txt", ".md", ".csv", ".json", ".rtf"}
IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".tif", ".tiff", ".bmp", ".webp"}
DOCX_EXTS = {".docx"}
PDF_EXTS = {".pdf"}
SKIP_DIRS = {"_peticao_extract", ".git", "__pycache__"}


@dataclass
class Extracted:
    path: Path
    kind: str
    method: str
    chars: int
    text: str
    error: str = ""


def run(cmd: list[str], *, timeout: int = 180) -> subprocess.CompletedProcess[str]:
    return subprocess.run(cmd, text=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, timeout=timeout)


def clipped(text: str, limit: int) -> str:
    text = "\n".join(line.rstrip() for line in text.replace("\x00", "").splitlines())
    text = "\n".join(line for line in text.splitlines() if line.strip())
    if len(text) <= limit:
        return text
    return text[:limit].rstrip() + "\n\n[... corte automatico para economizar contexto ...]"


def iter_files(folder: Path) -> list[Path]:
    files: list[Path] = []
    for path in folder.rglob("*"):
        if not path.is_file():
            continue
        if any(part in SKIP_DIRS for part in path.parts):
            continue
        if any(part.startswith(".") for part in path.relative_to(folder).parts):
            continue
        files.append(path)
    return sorted(files, key=lambda p: str(p).lower())


def extract_text_file(path: Path, limit: int) -> Extracted:
    try:
        text = path.read_text(encoding="utf-8", errors="ignore")
        return Extracted(path, "texto", "read_text", len(text), clipped(text, limit))
    except Exception as exc:
        return Extracted(path, "texto", "read_text", 0, "", str(exc))


def extract_docx(path: Path, limit: int) -> Extracted:
    try:
        from docx import Document

        doc = Document(path)
        text = "\n".join(p.text for p in doc.paragraphs if p.text.strip())
        return Extracted(path, "docx", "python-docx", len(text), clipped(text, limit))
    except Exception as exc:
        textutil = shutil.which("textutil")
        if textutil:
            proc = run([textutil, "-convert", "txt", "-stdout", str(path)], timeout=120)
            text = proc.stdout.strip()
            if text:
                return Extracted(path, "docx", "textutil", len(text), clipped(text, limit))
        return Extracted(path, "docx", "python-docx/textutil", 0, "", str(exc))


def extract_pdf(path: Path, limit: int, ocr: bool) -> Extracted:
    pdftotext = shutil.which("pdftotext")
    if pdftotext:
        proc = run([pdftotext, "-layout", str(path), "-"], timeout=120)
        text = proc.stdout.strip()
        if len(text) >= 80:
            return Extracted(path, "pdf", "pdftotext", len(text), clipped(text, limit))

    if ocr and shutil.which("ocrmypdf"):
        with tempfile.TemporaryDirectory(prefix="peticao_ocr_") as tmp:
            sidecar = Path(tmp) / "sidecar.txt"
            out_pdf = Path(tmp) / "ocr.pdf"
            proc = run(
                [
                    "ocrmypdf",
                    "--skip-text",
                    "--sidecar",
                    str(sidecar),
                    "-l",
                    "por+eng",
                    str(path),
                    str(out_pdf),
                ],
                timeout=600,
            )
            if sidecar.exists():
                text = sidecar.read_text(encoding="utf-8", errors="ignore").strip()
                if text:
                    return Extracted(path, "pdf", "ocrmypdf por+eng", len(text), clipped(text, limit))
            return Extracted(path, "pdf", "ocrmypdf por+eng", 0, "", proc.stderr.strip())

    return Extracted(path, "pdf", "none", 0, "", "sem texto pesquisavel; OCR indisponivel ou desativado")


def extract_image(path: Path, limit: int, ocr: bool) -> Extracted:
    if not ocr:
        return Extracted(path, "imagem", "none", 0, "", "OCR desativado")
    tesseract = shutil.which("tesseract")
    if not tesseract:
        return Extracted(path, "imagem", "none", 0, "", "tesseract nao encontrado")
    proc = run([tesseract, str(path), "stdout", "-l", "por+eng"], timeout=240)
    text = proc.stdout.strip()
    return Extracted(path, "imagem", "tesseract por+eng", len(text), clipped(text, limit), proc.stderr.strip() if not text else "")


def extract(path: Path, limit: int, ocr: bool) -> Extracted:
    ext = path.suffix.lower()
    if ext in TEXT_EXTS:
        return extract_text_file(path, limit)
    if ext in DOCX_EXTS:
        return extract_docx(path, limit)
    if ext in PDF_EXTS:
        return extract_pdf(path, limit, ocr)
    if ext in IMAGE_EXTS:
        return extract_image(path, limit, ocr)
    return Extracted(path, "ignorado", "unsupported", 0, "", "extensao nao suportada")


def write_outputs(folder: Path, output: Path, results: list[Extracted]) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    lines = [
        "# Documentos Extraidos Para Peticao",
        "",
        f"Pasta: `{folder}`",
        "",
        "Use este arquivo como indice de leitura. Confira o documento original antes de afirmar fato decisivo.",
        "",
        "## Inventario",
        "",
    ]
    for item in results:
        rel = item.path.relative_to(folder)
        status = "ok" if item.text else "pendente"
        lines.append(f"- `{rel}` | {item.kind} | {item.method} | {item.chars} chars | {status}")
        if item.error and not item.text:
            lines.append(f"  - erro: {item.error[:240]}")

    lines.extend(["", "## Extracoes", ""])
    for item in results:
        if not item.text:
            continue
        rel = item.path.relative_to(folder)
        lines.extend([f"### `{rel}`", "", item.text, ""])

    output.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")
    manifest = [
        {
            "path": str(item.path.relative_to(folder)),
            "kind": item.kind,
            "method": item.method,
            "chars": item.chars,
            "has_text": bool(item.text),
            "error": item.error,
        }
        for item in results
    ]
    output.with_suffix(".json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser(description="Extract text from a case folder into compact Markdown.")
    parser.add_argument("folder", type=Path)
    parser.add_argument("--output", type=Path)
    parser.add_argument("--per-file-limit", type=int, default=12000)
    parser.add_argument("--no-ocr", action="store_true")
    args = parser.parse_args()

    folder = args.folder.expanduser().resolve()
    output = args.output or folder / "_peticao_extract" / "documentos-extraidos.md"
    files = iter_files(folder)
    results = [extract(path, args.per_file_limit, not args.no_ocr) for path in files]
    write_outputs(folder, output, results)
    print(output)
    print(output.with_suffix(".json"))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
