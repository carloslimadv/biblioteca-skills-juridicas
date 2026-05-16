# Uso no Claude Code

## Instalação recomendada

```bash
npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas
```

Se quiser forçar a instalação no Claude Code:

```bash
npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas --agent claude-code
```

## Como chamar uma skill

Dependendo da configuração, você pode chamar a skill pelo nome ou pedir explicitamente:

```text
/peticao-analyzer analise estes autos e entregue pedidos, provas, defesas e pontos controvertidos.
```

```text
Use a skill jurisprudencia-miner para pesquisar precedentes oficiais sobre esta tese.
```

## Compatibilidade

As skills são arquivos Markdown com instruções, referências e, em alguns casos, scripts ou assets. O conteúdo principal pode ser lido por outras LLMs, mas a execução de arquivos, comandos locais, DOCX, PDF ou Playwright depende das permissões e ferramentas do ambiente.

## Instalação manual

Se o instalador automático não for usado:

1. Baixe a pasta da skill desejada em `skills/`.
2. Copie `SKILL.md` para o local de skills ou instruções do Claude.
3. Copie também `references/`, `assets/` e `scripts/` quando existirem.
4. Reinicie a sessão para garantir que a skill foi carregada.
