# Biblioteca Skills Jurídicas

[![Astro](https://img.shields.io/badge/Astro-6-1b1b1b?style=flat-square)](https://astro.build/)
[![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-123c31?style=flat-square)](https://carloslimadv.github.io/biblioteca-skills-juridicas/)
[![Skills](https://img.shields.io/badge/skills-12-9a5a2e?style=flat-square)](skills/)
[![pt-BR](https://img.shields.io/badge/idioma-pt--BR-2f6f59?style=flat-square)](#)

Biblioteca pública com 12 skills jurídicas para Codex, Claude Code e outras LLMs compatíveis com instruções em Markdown. O projeto foi pensado para advogados que querem transformar rotinas recorrentes em métodos instaláveis, sem perder revisão humana, sigilo, LGPD, ética profissional e controle das fontes.

**Página pública:** [carloslimadv.github.io/biblioteca-skills-juridicas](https://carloslimadv.github.io/biblioteca-skills-juridicas/)

**Instagram:** [@carloslimadv](https://www.instagram.com/carloslimadv/)

<a href="https://www.buymeacoffee.com/carloslimadv" target="_blank" rel="noopener noreferrer">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Compre-me um café" width="210" />
</a>

## Para que serve

Skills são instruções persistentes com método, limites e arquivos auxiliares. Em vez de repetir prompts longos, o advogado instala uma pasta com `SKILL.md`, referências, modelos e scripts. O agente passa a saber quando usar aquele fluxo, como trabalhar, quando parar e o que não pode inventar.

Na prática, esta biblioteca ajuda a:

- redigir e revisar petições com lastro documental;
- analisar autos, peças e provas;
- auditar contratos brasileiros;
- pesquisar e validar jurisprudência;
- testar teses jurídicas antes de usar em peça;
- criar marketing jurídico com filtro OAB/LGPD;
- trabalhar melhor com PDFs, handoffs e QA visual.

## Instalação rápida

Instalar todas as skills:

```bash
npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas
```

O instalador detecta o ambiente disponível e, quando necessário, mostra opções para escolher Codex, Claude Code ou outra ferramenta compatível.

Opção avançada para forçar Claude Code:

```bash
npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas --agent claude-code
```

Listar antes de instalar:

```bash
npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas --list
```

Guia detalhado: [INSTALL.md](INSTALL.md).

## Skills incluídas

| Skill | Função principal |
| --- | --- |
| [`peticao-completa`](skills/peticao-completa/) | Redigir ou adaptar petições completas em DOCX, com leitura de documentos e revisão final. |
| [`peticao-analyzer`](skills/peticao-analyzer/) | Analisar peças, autos, documentos, argumentos, pedidos e provas. |
| [`revisao-senior-peticao`](skills/revisao-senior-peticao/) | Revisar peça pronta antes do protocolo, com veredicto e pendências por gravidade. |
| [`analise-probatoria`](skills/analise-probatoria/) | Valorar documentos, força probatória, lacunas e risco adversarial. |
| [`contrato-analyzer-br`](skills/analise-contratos/) | Auditar contratos brasileiros existentes. |
| [`jurisprudencia-miner`](skills/jurisprudencia-miner/) | Pesquisar, validar e classificar jurisprudência em fonte confiável. |
| [`tese-juridica-validator`](skills/tese-juridica-validator/) | Testar solidez de teses, argumentos e estratégias processuais. |
| [`marketing-juridico`](skills/marketing-juridico/) | Criar e revisar marketing jurídico com filtro OAB/LGPD. |
| [`pdf`](skills/pdf/) | Ler, criar e revisar PDFs quando layout importa. |
| [`session-handoff`](skills/session-handoff/) | Gerar handoff Markdown para retomar trabalho em outra sessão. |
| [`find-skills`](skills/find-skills/) | Descobrir e avaliar outras skills. |
| [`playwright-interactive`](skills/playwright-interactive/) | Testar interfaces locais com Playwright persistente. |

Cada pasta em [`skills/`](skills/) pode ser baixada, lida e adaptada individualmente.

## Uso responsável

Estas skills são material de apoio. Elas não substituem a responsabilidade profissional do advogado.

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

Referências úteis:

- [OpenAI Skills](https://openai.com/pt-BR/academy/skills/)
- [OpenAI Codex plugins e skills](https://openai.com/academy/codex-plugins-and-skills/)
- [Claude Code Skills](https://code.claude.com/docs/en/skills)
- [skills CLI](https://github.com/vercel-labs/skills)

## Apoie o projeto

Se esta biblioteca economiza tempo no escritório ou ajuda sua equipe a trabalhar melhor com IA, considere apoiar a manutenção:

[Buy Me a Coffee](https://www.buymeacoffee.com/carloslimadv)

Você também pode acompanhar atualizações no Instagram: [@carloslimadv](https://www.instagram.com/carloslimadv/).

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
