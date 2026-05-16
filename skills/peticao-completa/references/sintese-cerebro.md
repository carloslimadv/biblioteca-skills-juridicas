# Sintese Do Cerebro De Peticoes

Este arquivo e um ponto de partida publico para a skill `peticao-completa`.

Na instalacao original do escritorio, esta sintese e gerada a partir de um acervo privado de peticoes em Markdown. Para publicar a skill com seguranca, o indice privado nao acompanha o repositorio. Cada usuario deve gerar a propria sintese a partir do seu acervo, sem expor dados de clientes, processos, documentos internos ou caminhos locais.

## Como Gerar A Sua Sintese

1. Organize seus modelos de peticao em uma pasta local, preferencialmente em Markdown.
2. Remova ou anonimize dados de clientes, numeros de processo, documentos pessoais, valores sensiveis e qualquer informacao protegida por sigilo profissional.
3. Rode o script informando o caminho da sua pasta:

```bash
python3 scripts/mapear_cerebro_peticoes.py --corpus /caminho/para/seu/acervo
```

Opcionalmente, use a variavel de ambiente:

```bash
PETICAO_CORPUS_DIR=/caminho/para/seu/acervo python3 scripts/mapear_cerebro_peticoes.py
```

## Como A Skill Deve Usar Este Arquivo

- Use a sintese apenas como indice rapido de estilo, estrutura e recorrencias.
- Antes de redigir uma peca, confira os modelos reais do acervo do usuario.
- Priorize exemplos mais recentes e do mesmo tipo de peca.
- Nao copie fatos, nomes, numeros de processo ou dados de clientes de modelos antigos.
- Nao trate esta sintese como fonte juridica, fonte jurisprudencial ou prova.

## Estrutura Esperada Apos Geracao

O script cria secoes como:

- volume por ano;
- tipos de peca mais frequentes;
- titulos recorrentes;
- subtitulos internos recorrentes;
- referencias juridicas frequentes;
- exemplos recentes por tipo.

Se este arquivo ainda estiver com este texto padrao, considere que nao ha indice de acervo carregado.
