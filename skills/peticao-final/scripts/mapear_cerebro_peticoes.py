#!/usr/bin/env python3
"""Build a compact, refreshable synthesis of the petition corpus."""

from __future__ import annotations

import argparse
import collections
import os
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_CORPUS = Path(os.getenv("PETICAO_CORPUS_DIR", ROOT / "corpus"))
DEFAULT_OUTPUT = ROOT / "references" / "sintese-cerebro.md"

HEADING_RE = re.compile(r"^(?:#+\s*)?(?:\*\*)?([A-ZÁÀÂÃÉÊÍÓÔÕÚÇ0-9ºª .,/():-]{5,})(?:\*\*)?\s*$")
ITALIC_RE = re.compile(r"^\*([^*]{4,80})\*\s*$")
LEGAL_RE = re.compile(r"\b(?:art\. ?\d+[A-Za-zº°-]*|S[uú]mula ?\d+|Tema ?\d+|REsp|AREsp|AgInt|TJBA|STJ|CPC|CDC)\b", re.IGNORECASE)


def classify(path: Path) -> str:
    name = path.name
    if " - " in name:
        return name.split(" - ", 1)[0].strip()
    return name.rsplit(".", 1)[0].strip()


def year_key(path: Path) -> int:
    try:
        return int(path.parts[-2])
    except Exception:
        return 0


def iter_markdown(corpus: Path) -> list[Path]:
    files = [p for p in corpus.rglob("*.md") if p.is_file()]
    return sorted(files, key=lambda p: (-year_key(p), p.name.lower()))


def extract_heading(line: str) -> str | None:
    stripped = line.strip()
    if not stripped:
        return None
    match = HEADING_RE.match(stripped)
    if match:
        return re.sub(r"\s+", " ", match.group(1).strip("*# ")).strip()
    match = ITALIC_RE.match(stripped)
    if match:
        return f"subtitulo: {match.group(1).strip()}"
    return None


def build(corpus: Path, output: Path, max_examples: int = 5) -> Path:
    files = iter_markdown(corpus)
    by_year = collections.Counter(str(year_key(p)) for p in files)
    by_type = collections.Counter(classify(p) for p in files)
    headings = collections.Counter()
    subtitles = collections.Counter()
    legal_refs = collections.Counter()
    representative: dict[str, list[Path]] = collections.defaultdict(list)

    for path in files:
        text = path.read_text(encoding="utf-8", errors="ignore")
        piece_type = classify(path)
        if len(representative[piece_type]) < max_examples:
            representative[piece_type].append(path)
        for line in text.splitlines():
            heading = extract_heading(line)
            if heading:
                if heading.startswith("subtitulo: "):
                    subtitles[heading.removeprefix("subtitulo: ")] += 1
                else:
                    headings[heading] += 1
            for ref in LEGAL_RE.findall(line):
                legal_refs[ref.upper()] += 1

    lines: list[str] = [
        "# Sintese Do Cerebro De Peticoes",
        "",
        "Arquivo gerado por `scripts/mapear_cerebro_peticoes.py`. Use como indice rapido; para redigir, consulte tambem as pecas recentes diretamente no acervo.",
        "",
        "## Prioridade",
        "",
        "- Ao buscar estilo e estrutura, priorizar arquivos por ano: `2026 > 2025 > 2024 > 2023`.",
        "- Preferir exemplos do mesmo tipo de peca e tema antes de usar padroes gerais.",
        "",
        "## Volume Por Ano",
        "",
    ]
    for year, count in sorted(by_year.items(), key=lambda item: item[0], reverse=True):
        lines.append(f"- {year}: {count} arquivos")

    lines.extend(["", "## Tipos Mais Frequentes", ""])
    for piece_type, count in by_type.most_common(20):
        lines.append(f"- {piece_type}: {count}")

    lines.extend(["", "## Titulos Recorrentes", ""])
    for heading, count in headings.most_common(25):
        lines.append(f"- {heading}: {count}")

    lines.extend(["", "## Subtitulos Internos Recorrentes", ""])
    for subtitle, count in subtitles.most_common(25):
        lines.append(f"- {subtitle}: {count}")

    lines.extend(["", "## Referencias Juridicas Frequentes", ""])
    for ref, count in legal_refs.most_common(25):
        lines.append(f"- {ref}: {count}")

    lines.extend(["", "## Exemplos Recentes Por Tipo", ""])
    for piece_type, paths in sorted(representative.items()):
        lines.append(f"### {piece_type}")
        for path in paths:
            lines.append(f"- `{path.relative_to(corpus)}`")
        lines.append("")

    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")
    return output


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate a compact synthesis of the petition corpus.")
    parser.add_argument("--corpus", type=Path, default=DEFAULT_CORPUS)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--max-examples", type=int, default=5)
    args = parser.parse_args()
    path = build(args.corpus, args.output, args.max_examples)
    print(path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
