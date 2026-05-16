# Instalação

Este guia foi escrito para advogados e equipes sem rotina de programação.

## Antes de começar

Você precisa de:

- computador com acesso à internet;
- Node.js instalado, pois ele fornece o comando `npx`;
- Codex, Claude Code ou outra ferramenta compatível;
- permissão para instalar arquivos na pasta de skills da ferramenta.

Você não precisa criar conta npm para usar o método abaixo.

## Instalar todas as skills

1. Abra o terminal.
2. Cole o comando:

```bash
npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas
```

3. Se o instalador mostrar opções, escolha Codex, Claude Code ou a ferramenta que você usa.
4. Reinicie ou atualize a sessão da ferramenta se ela não reconhecer as skills imediatamente.
5. Use uma skill chamando pelo nome, por exemplo:

```text
Use $peticao-completa para gerar uma petição completa em .docx a partir desta pasta de documentos.
```

## Forçar Claude Code

Na maioria dos casos, o comando principal já resolve. Se quiser direcionar explicitamente para o Claude Code, use:

```bash
npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas --agent claude-code
```

Exemplo de uso no Claude:

```text
/peticao-analyzer analise estes autos e entregue argumentos, pedidos, provas e pontos controvertidos.
```

## Instalar só uma skill

Troque o nome da skill no comando:

```bash
npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas --skill peticao-completa
```

Outros exemplos:

```bash
npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas --skill jurisprudencia-miner
npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas --skill marketing-juridico --agent claude-code
npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas --skill contrato-analyzer-br
```

## Ver a lista antes de instalar

```bash
npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas --list
```

## Usar em outras LLMs

Se a sua ferramenta não suporta instalação automática por `npx skills`, você ainda pode usar as skills manualmente:

1. Abra a pasta [`skills/`](skills/).
2. Escolha uma skill.
3. Copie o conteúdo de `SKILL.md`.
4. Cole como instrução persistente, projeto, system prompt ou contexto do agente.
5. Se a skill tiver `references/`, `assets/` ou `scripts/`, copie também os arquivos necessários.

Essa forma funciona melhor em tarefas textuais. Skills que usam scripts, DOCX, PDF ou Playwright dependem da ferramenta permitir acesso a arquivos e comandos locais.

## Por que não há um CLI próprio neste v1

Um comando de marca, como:

```bash
npx @carloslimadv/skills-juridicas
```

é possível, mas exigiria publicar e manter um pacote npm próprio, com conta npm, autenticação, versionamento, tokens e rotina de segurança. Para o v1, o caminho mais simples e confiável é usar o instalador aberto:

```bash
npx skills
```

## Problemas comuns

### O terminal diz que `npx` não existe

Instale o Node.js em https://nodejs.org/ e tente novamente.

### A skill instalou, mas o agente não reconhece

Feche e abra uma nova sessão do Codex ou Claude Code. Algumas ferramentas carregam skills apenas no início da sessão.

### Uma skill com PDF ou DOCX falhou

Algumas rotinas dependem de ferramentas locais, como Python, Poppler, OCR ou LibreOffice. Leia o `SKILL.md` da skill para ver dependências.

### Quero adaptar para meu escritório

Copie a pasta da skill, edite `SKILL.md`, ajuste exemplos, modelos, logotipo e referências. Em petições, revise especialmente templates, assinatura, rodapé, estilo e regras de jurisprudência.
