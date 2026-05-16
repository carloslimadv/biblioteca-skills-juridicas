# Instalação

Este guia foi escrito para advogados e equipes sem rotina de programação.

## Antes de começar

Você precisa de:

- computador com acesso à internet;
- Node.js instalado, pois ele fornece o comando `npx`;
- Codex ou Claude Code instalado;
- permissão para instalar arquivos na pasta de skills do agente.

Você não precisa criar conta npm para usar o método abaixo.

## Instalar no Codex

1. Abra o terminal.
2. Cole o comando:

```bash
npx skills add carloslimadv/biblioteca-skills-juridicas --skill '*' --global --agent codex --yes
```

3. Reinicie ou atualize a sessão do Codex se a ferramenta não reconhecer as skills imediatamente.
4. Use uma skill chamando pelo nome, por exemplo:

```text
Use $peticao-completa para gerar uma petição completa em .docx a partir desta pasta de documentos.
```

## Instalar no Claude Code

1. Abra o terminal.
2. Cole o comando:

```bash
npx skills add carloslimadv/biblioteca-skills-juridicas --skill '*' --global --agent claude-code --yes
```

3. Reinicie ou atualize a sessão do Claude Code se necessário.
4. Use a skill pelo nome, por exemplo:

```text
/peticao-analyzer analise estes autos e entregue argumentos, pedidos, provas e pontos controvertidos.
```

## Instalar só uma skill

Troque o nome da skill no comando:

```bash
npx skills add carloslimadv/biblioteca-skills-juridicas --skill peticao-completa --global --agent codex --yes
```

Outros exemplos:

```bash
npx skills add carloslimadv/biblioteca-skills-juridicas --skill jurisprudencia-miner --global --agent codex --yes
npx skills add carloslimadv/biblioteca-skills-juridicas --skill marketing-juridico --global --agent claude-code --yes
npx skills add carloslimadv/biblioteca-skills-juridicas --skill contrato-analyzer-br --global --agent codex --yes
```

## Ver a lista antes de instalar

```bash
npx skills add carloslimadv/biblioteca-skills-juridicas --list
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
