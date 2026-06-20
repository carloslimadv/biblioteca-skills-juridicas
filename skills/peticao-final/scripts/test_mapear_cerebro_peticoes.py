import pytest
from pathlib import Path
import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from mapear_cerebro_peticoes import classify, year_key

def test_classify_with_standard_separator():
    path = Path("Reclamação Trabalhista - João.md")
    assert classify(path) == "Reclamação Trabalhista"

def test_classify_with_multiple_separators():
    path = Path("Ação de Indenização - Maria - 2024.docx")
    assert classify(path) == "Ação de Indenização"

def test_classify_with_extension_only():
    path = Path("Contestação.pdf")
    assert classify(path) == "Contestação"

def test_classify_with_multiple_extensions():
    path = Path("Recurso.Inominado.doc")
    assert classify(path) == "Recurso.Inominado"

def test_classify_with_raw_name():
    path = Path("Agravo")
    assert classify(path) == "Agravo"

def test_year_key_valid_year():
    assert year_key(Path("documentos/2023/peticao.md")) == 2023
    assert year_key(Path("/var/docs/2024/arquivo.txt")) == 2024

def test_year_key_invalid_string():
    assert year_key(Path("documentos/sem_ano/peticao.md")) == 0
    assert year_key(Path("pasta/123a/arquivo.txt")) == 0

def test_year_key_not_enough_parts():
    assert year_key(Path("peticao.md")) == 0
    assert year_key(Path("")) == 0
