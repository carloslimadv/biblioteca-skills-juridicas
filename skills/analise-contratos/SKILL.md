---
name: contrato-analyzer-br
description: |
  Use quando a tarefa principal for analisar contrato existente, revisar minuta recebida, apontar riscos, identificar clausulas abusivas, checar validade, comparar versoes, fazer auditoria contratual, destacar red flags ou sugerir ajustes em contratos brasileiros. Abrange contratos de imoveis, servicos, bancarios, financeiros, empresariais e de consumo, com foco em CDC, Codigo Civil, requisitos de validade, distribuicao de riscos e inconformidades legais. Nao usar como skill principal para redigir do zero uma minuta extrajudicial completa.
---

# Contrato Analyzer BR

Audita contratos brasileiros existentes. A skill identifica validade, risco, lacunas, abusividade aparente e ajustes recomendados. Nao redige instrumento novo do zero.

## Objetivo

Entregar relatorio pratico de risco contratual, distinguindo risco juridico, risco comercial e ponto de negociacao.

## Criterios de sucesso

- Tipo de contrato, partes, objeto, valor, prazo e finalidade pratica identificados.
- Requisitos gerais de validade considerados: capacidade, objeto licito, forma exigida e manifestacao de vontade.
- Checklist especifico carregado somente quando pertinente.
- Riscos classificados por impacto: `critico`, `alto`, `medio`, `baixo`.
- Ajuste recomendado ligado a clausula, lacuna ou ponto negociavel.
- Conclusao evita ilegalidade categorica sem base normativa/contextual.

## Fluxo essencial

1. Identificar tipo de contrato, partes, objeto, valor, prazo e finalidade pratica.
2. Checar requisitos gerais: capacidade, objeto licito, forma exigida, manifestacao de vontade.
3. Selecionar checklist sob demanda:
   - imoveis/locacao: `references/imoveis-locacao.md`
   - servicos/tecnologia: `references/servicos-tecnologia.md`
   - bancario/financeiro: `references/bancario-financeiro.md`
4. Mapear riscos por clausula e impacto.
5. Classificar: `critico`, `alto`, `medio`, `baixo`.
6. Sugerir ajuste objetivo ou ponto de negociacao.
7. Emitir parecer final usando `references/relatorio.md`.

## Regras de parada

Se faltar contrato completo, anexos essenciais, contexto de finalidade, lei aplicavel ou dado que altere a conclusao, marcar lacuna antes de afirmar invalidade, abusividade ou obrigacao de ajuste.

## Restrições

- Nao afirmar ilegalidade categórica sem base normativa ou contexto suficiente.
- Distinguir risco juridico, risco comercial e ponto de negociacao.
- Se a norma ou entendimento puder estar desatualizado, marcar para verificacao.
- Nao reescrever contrato inteiro salvo pedido expresso.
- Se a tarefa for criar contrato novo do zero, nao acionar esta skill como principal; usar as informacoes do usuario e as skills de documento aplicaveis para produzir a minuta.

## Saida minima

```text
RELATORIO DE ANALISE CONTRATUAL

TIPO
PARTES
OBJETO
VALOR/PRAZO

RISCOS CRITICOS
RISCOS ALTOS
RISCOS MEDIOS/BAIXOS
CLAUSULAS AUSENTES
AJUSTES RECOMENDADOS
PARECER FINAL
```
