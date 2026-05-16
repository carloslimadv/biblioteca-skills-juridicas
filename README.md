# Biblioteca Skills Jurídicas

Biblioteca pública de skills jurídicas para Codex, Claude Code e outras LLMs compatíveis com instruções em Markdown.

O objetivo é permitir que advogados instalem métodos de trabalho prontos para tarefas recorrentes, como petições, análise de provas, revisão contratual, pesquisa jurisprudencial, marketing jurídico, PDFs e handoff de sessão.

**Página pública:** https://carloslimadv.github.io/biblioteca-skills-juridicas/

## Instalação rápida

Para instalar todas as skills no Codex:

```bash
npx skills add carloslimadv/biblioteca-skills-juridicas --skill '*' --global --agent codex --yes
```

Para instalar todas as skills no Claude Code:

```bash
npx skills add carloslimadv/biblioteca-skills-juridicas --skill '*' --global --agent claude-code --yes
```

Para ver a lista antes de instalar:

```bash
npx skills add carloslimadv/biblioteca-skills-juridicas --list
```

Guia completo: [INSTALL.md](INSTALL.md).

## Skills incluídas

| Skill | Para que serve |
| --- | --- |
| `peticao-completa` | Redigir ou adaptar petições completas em DOCX, com leitura de documentos e revisão final. |
| `peticao-analyzer` | Analisar peças, autos, documentos, argumentos, pedidos e provas. |
| `revisao-senior-peticao` | Revisar peça pronta antes do protocolo. |
| `analise-probatoria` | Valorar documentos, força probatória, lacunas e risco adversarial. |
| `contrato-analyzer-br` | Auditar contratos brasileiros existentes. |
| `jurisprudencia-miner` | Pesquisar e validar jurisprudência em fonte confiável. |
| `tese-juridica-validator` | Testar solidez de teses, argumentos e estratégias. |
| `marketing-juridico` | Criar e revisar marketing jurídico com filtro OAB/LGPD. |
| `pdf` | Ler, criar e revisar PDFs quando layout importa. |
| `session-handoff` | Gerar handoff Markdown para retomar trabalho em outra sessão. |
| `find-skills` | Descobrir e avaliar outras skills. |
| `playwright-interactive` | Testar interfaces locais com Playwright persistente. |

Cada pasta em [`skills/`](skills/) pode ser baixada, lida e adaptada individualmente.

## Uso responsável

Estas skills são material de apoio para trabalho profissional com IA. Elas não substituem a responsabilidade técnica do advogado.

Antes de usar qualquer saída em petição, contrato, parecer, publicidade, comunicação com cliente ou decisão estratégica, confira:

- fatos, documentos, datas, valores e prazos;
- fundamentos legais e jurisprudência;
- sigilo profissional e LGPD;
- ética da OAB;
- adequação ao caso concreto;
- revisão humana final.

Veja também: [docs/uso-responsavel.md](docs/uso-responsavel.md).

## Compatibilidade

As skills foram desenhadas para Codex, mas usam o formato `SKILL.md`, que também pode ser entendido ou adaptado por Claude Code e outras LLMs. Recursos que dependem de arquivos, scripts, renderização visual ou permissões locais podem variar conforme a ferramenta.

Referências:

- [OpenAI Skills](https://openai.com/pt-BR/academy/skills/)
- [OpenAI Codex plugins e skills](https://openai.com/academy/codex-plugins-and-skills/)
- [Claude Code Skills](https://code.claude.com/docs/en/skills)
- [skills CLI](https://github.com/vercel-labs/skills)

## Desenvolvimento local

```bash
npm install
npm run dev
```

Build da página:

```bash
npm run build
```

## Licença

Este repositório reúne materiais de autoria e curadoria própria, além de skills auxiliares que podem conter licenças próprias em suas pastas. Confira arquivos `LICENSE` e `NOTICE` quando existirem.
