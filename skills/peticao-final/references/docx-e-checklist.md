# DOCX E Checklist

Use `assets/modelo-peticao.docx` como base da peca final. Se o arquivo nao existir ou estiver corrompido, gere novamente com `scripts/build_template_docx.py`.

## Configuracao Do Word

- Pagina A4, orientacao retrato.
- Idioma: Portugues do Brasil.
- Cabecalho: 0 cm.
- Rodape: 0 cm.
- Margens: superior 2,5 cm; inferior 2,5 cm; esquerda 3,5 cm; direita 3,5 cm.
- Fonte normal: Helvetica, 12 pt, preta.
- Hifenizacao: ativada por padrao em todas as pecas.
- Paragrafo normal: justificado; entrelinhas multiplo 1,2; antes 0 pt; depois 8 pt; recuo esquerdo 0 cm; recuo direito 0 cm; primeira linha nenhum; especial nenhum.
- Cabecalho padrao: logo `Carlos Lima Advogados` no canto superior direito, no mesmo tamanho do template.
- Rodape padrao: endereco, e-mail e telefone no canto inferior direito; fonte Helvetica 7 pt; cor cinza `7F7F7F`; linhas sem espaco extra entre si.

## Estilos

- Titulos principais: negrito, 12 pt, caixa alta, justificados, sem centralizar.
- Subtitulos internos: italico, 12 pt.
- Citacoes contratuais e jurisprudenciais: 11 pt, recuo esquerdo de 2,5 cm, sem recuo de primeira linha.
- Pedidos: alineas manuais, sem lista automatica; letras em negrito e palavras-chave em italico.
- Assinatura: `Carlos Henrique Santana Lima` em negrito 12 pt; `OAB 60.427/BA` em 11 pt regular.

## Espacamentos Da Peca

- Depois do enderecamento: inserir dois paragrafos em branco.
- Depois do paragrafo completo de qualificacao/abertura: inserir dois paragrafos em branco.
- Entre topicos principais: inserir um paragrafo em branco.
- Entre subtitulos dentro dos fundamentos: inserir um paragrafo em branco quando a tese anterior terminar.
- Nao usar quebras manuais excessivas para empurrar conteudo entre paginas; preservar o ritmo acima e revisar visualmente.

## Proibicoes De Formato

- Nao usar lista automatica para pedidos.
- Nao converter Markdown genericamente para DOCX quando isso achatar estilos.
- Nao centralizar titulo principal.
- Nao usar fonte diferente salvo se o usuario enviar novo template.
- Nao remover logo, rodape ou hifenizacao do template.
- Nao deixar comentarios internos, marcadores de pendencia ou jurisprudencia nao verificada no arquivo final.

## Checklist Final

Antes de entregar:

- Tipo de peca, fase, rito e juizo/tribunal conferidos.
- Partes e qualificacoes correspondem aos documentos.
- Fatos essenciais possuem prova ou foram tratados como alegacao.
- Fundamentos legais estao vigentes e pertinentes.
- Jurisprudencia citada foi verificada e e real.
- Cada fundamento desemboca em pedido ou providencia.
- Pedidos sao completos, executaveis e coerentes com o valor da causa.
- Tutela de urgencia demonstra probabilidade do direito, perigo de dano e medida concreta.
- Requerimentos de provas fazem sentido para o caso.
- Assinatura e OAB estao corretos.
- Cabecalho, rodape e hifenizacao foram preservados.
- `.docx` passou por auditoria do template.
- Quando possivel, o `.docx` foi renderizado e revisado visualmente com a skill `documents`.
