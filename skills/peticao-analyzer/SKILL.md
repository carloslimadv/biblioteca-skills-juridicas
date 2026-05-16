---
name: peticao-analyzer
description: "Use quando o usuario trouxer peca processual, documento dos autos, laudo, recurso, contestacao, inicial ou conjunto documental para analise, resumo, extracao estruturada de informacoes, mapeamento de argumentos, pedidos, provas, preliminares, defesas, cronologia ou pontos controvertidos. Tambem usar em pedidos como resumir autos, ler esta peticao, organizar o processo, identificar pedidos e provas, preparar despacho saneador, pauta de audiencia ou visao consolidada do caso. Nao usar como skill principal para redigir peticao nova, contestacao, replica ou outra peca completa; para isso, usar peticao-completa."
---

# Peticao Analyzer

Analise estruturada de pecas e autos. A skill extrai informacao, cruza argumentos e aponta pontos de decisao; nao redige peca final.

## Objetivo

Organizar material processual existente para que a proxima providencia fique clara, sem transformar resumo em decisao juridica pronta.

## Criterios de sucesso

- Partes, objeto, causas de pedir, argumentos, pedidos, provas, defesas e lacunas identificados.
- Fato alegado, fato documentalmente demonstrado e inferencia separados.
- Pedidos cruzados com defesas, provas e pontos controvertidos.
- Riscos processuais e proxima providencia indicados de forma objetiva.

## Framework CAPPD

Extrair pelo CAPPD:

- `Causas de pedir`: fatos narrados e fundamentos juridicos.
- `Argumentos`: teses principais, subsidiarias e defensivas.
- `Pedidos`: principais, subsidiarios, cumulados, acessorios e urgentes.
- `Provas`: documentos juntados, provas requeridas, lacunas probatorias.
- `Defesas/excecoes`: preliminares, prejudiciais, merito, reconvencao.

## Fluxo

1. Identificar tipo de material: inicial, contestacao, replica, recurso, laudo, autos completos ou pauta de audiencia.
2. Aplicar CAPPD.
3. Separar fato alegado, fato documentalmente demonstrado e inferencia.
4. Mapear pedidos contra defesas e provas.
5. Apontar preliminares, prejudiciais, nulidades, prescricao/decadencia ou competencia quando aparecerem no material.
6. Indicar lacunas sem inventar documento ou tese.
7. Escolher formato de saida e carregar somente a referencia necessaria.

## Regras de parada

Se o material estiver incompleto, ilegivel ou sem peca central, entregar analise parcial marcada como tal e listar exatamente o que falta. Se a tarefa exigir redacao final, migrar para `peticao-completa` em vez de improvisar nesta skill.

## Decisao de template

- Inicial isolada: ler `references/inicial.md`.
- Contestacao isolada: ler `references/contestacao.md`.
- Inicial + contestacao ou autos para decisao: ler `references/consolidada.md`.
- Recurso: ler `references/recurso.md`.
- Laudo pericial: ler `references/laudo.md`.
- Audiencia: ler `references/audiencia.md`.

## Saida minima

```text
ANALISE PROCESSUAL

1. PARTES E OBJETO
2. CAUSAS DE PEDIR / TESES
3. PEDIDOS
4. DEFESAS OU CONTRAPONTOS
5. PROVAS E LACUNAS
6. PONTOS CONTROVERTIDOS
7. RISCOS PROCESSUAIS
8. PROXIMA PROVIDENCIA
```

## Regras

- Nao redigir peticao completa nesta skill.
- Nao presumir fato, documento, prazo, valor ou jurisprudencia ausente.
- Nao tratar resumo como decisao pronta.
- Quando houver tese juridica incerta, encaminhar para `tese-juridica-validator` ou `jurisprudencia-miner`.
- Quando a tarefa passar de analise para redacao final, usar `peticao-completa`.
