import pytest
from pathlib import Path

import sys
import os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from mapear_cerebro_peticoes import year_key

def test_year_key_valid_year():
    assert year_key(Path("documentos/2023/peticao.md")) == 2023
    assert year_key(Path("/var/docs/2024/arquivo.txt")) == 2024

def test_year_key_invalid_string():
    assert year_key(Path("documentos/sem_ano/peticao.md")) == 0
    assert year_key(Path("pasta/123a/arquivo.txt")) == 0

def test_year_key_not_enough_parts():
    assert year_key(Path("peticao.md")) == 0
    assert year_key(Path("")) == 0
