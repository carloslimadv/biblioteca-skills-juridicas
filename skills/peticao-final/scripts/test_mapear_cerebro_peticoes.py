import pytest
from pathlib import Path
import sys
import os

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from mapear_cerebro_peticoes import classify

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
