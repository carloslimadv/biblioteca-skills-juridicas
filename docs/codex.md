# Uso no Codex

## Instalação recomendada

```bash
npx skills add carloslimadv/biblioteca-skills-juridicas --skill '*' --global --agent codex --yes
```

## Como chamar uma skill

Use o gatilho da própria skill:

```text
Use $peticao-completa para gerar uma petição completa em .docx a partir da pasta de documentos do caso.
```

```text
Use $jurisprudencia-miner para localizar, validar e comparar precedentes sobre este tema.
```

```text
Use $marketing-juridico para criar um plano de conteúdo com QA OAB antes da publicação.
```

## Melhor prática

Forneça:

- objetivo;
- documentos ou arquivos;
- contexto do caso;
- formato de saída;
- restrições;
- condição de parada.

Exemplo:

```text
Use $analise-probatoria. Analise os PDFs desta pasta, monte matriz documento -> fato provado -> força -> risco e pare se algum arquivo estiver ilegível.
```

## Cuidados

- Não peça para a IA inventar dados faltantes.
- Peça confirmação em fonte oficial quando houver lei, jurisprudência, norma, prazo, valor ou regra atual.
- Para peças jurídicas, use revisão humana antes de protocolo.
- Para material publicável, confira OAB, LGPD, sigilo e reputação.
