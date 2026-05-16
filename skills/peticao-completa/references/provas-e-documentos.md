# Provas E Documentos

Use este fluxo sempre que o usuario indicar uma pasta do caso.

## Leitura Da Pasta

- Inventariar todos os arquivos antes de redigir: PDF, imagem, DOCX, planilha, audio transcrito, conversa, contrato, BO, comprovante, decisao, contestacao, recurso e certidao.
- Extrair texto de PDFs pesquisaveis; usar OCR ou leitura visual para imagens e PDFs digitalizados.
- Para economizar contexto, preferir rodar `scripts/extrair_documentos_caso.py /pasta/do/caso --output /pasta/do/caso/_peticao_extract/documentos-extraidos.md` antes de abrir documentos individualmente.
- Usar `pdfgrep` para buscas pontuais em PDFs pesquisaveis e `ocrmypdf --sidecar` quando o PDF for digitalizado.
- Em imagens, usar `tesseract imagem saida -l por+eng` ou deixar o script de extracao chamar o OCR automaticamente.
- Em documentos longos, identificar primeiro peca central, decisao atacada, contratos, comprovantes de pagamento, protocolos, notificacoes e documentos pessoais.
- Registrar datas, valores, IDs/eventos, paginas e nomes exatamente como aparecem.
- Nao usar informacao ilegivel como fato provado; marcar como pendencia.

## Mapa Interno Obrigatorio

Antes de redigir, montar:

```text
FATO:
PROVA:
INFERENCIA PERMITIDA:
FUNDAMENTO:
PEDIDO:
RISCO/LACUNA:
```

Use este mapa para impedir pedido sem prova e fundamento sem consequencia.

## Separacao De Confianca

- `comprovado`: consta expressamente de documento legivel.
- `alegado`: informado pelo usuario ou por narrativa, mas sem documento conferido.
- `inferido`: conclusao razoavel extraida de documento; deve ser descrita com cautela.
- `pendente`: falta documento, pagina, valor, data ou identificacao.
- `risco`: ponto que a parte contraria pode explorar.

## Documentos Em Peticao

- Citar documentos por referencia simples: `doc. 01`, `ID`, `evento`, `fls.` ou nome do arquivo, conforme o padrao do processo.
- Explicar o que o documento comprova quando for decisivo.
- Nao criar lista de documentos inexistente.
- Em recurso, vincular argumento ao ID da decisao, peticao ou prova quando houver.

## Dados Que Exigem Confirmacao

Parar antes da peca final se faltar:

- nome completo ou identificacao minima de autor/reu/recorrente/recorrido;
- competencia, comarca, vara, tribunal ou turma;
- prazo ou data de intimacao em recurso/embargos;
- decisao atacada e capitulo impugnado;
- valor da causa ou base de calculo;
- comprovante de pagamento, contrato, BO, notificacao, negativa administrativa ou documento central do caso;
- pedido principal.
