export type SkillCategory =
  | 'peticoes'
  | 'provas'
  | 'contratos'
  | 'jurisprudencia'
  | 'marketing'
  | 'produtividade';

export type SkillRisk = 'juridico' | 'operacional' | 'baixo';

export type SkillItem = {
  id: string;
  folder: string;
  name: string;
  title: string;
  category: SkillCategory;
  categoryLabel: string;
  risk: SkillRisk;
  summary: string;
  serves: string;
  whenToUse: string[];
  whenNotToUse: string[];
  howItWorks: string[];
  bestUse: string;
  trigger: string;
  installCommand: string;
  codexPrompt: string;
  claudePrompt: string;
  limitations: string[];
  files: string[];
};

export const repository = {
  owner: 'carloslimadv',
  name: 'biblioteca-skills-juridicas',
  url: 'https://github.com/carloslimadv/biblioteca-skills-juridicas',
  pagesUrl: 'https://carloslimadv.github.io/biblioteca-skills-juridicas/',
};

export const installCommands = {
  codex: 'npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas',
  claude: 'npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas',
  list: 'npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas --list',
};

export const categories: Array<{ id: 'all' | SkillCategory; label: string; description: string }> = [
  { id: 'all', label: 'Todas', description: 'Catálogo completo' },
  { id: 'peticoes', label: 'Petições', description: 'Peças, autos e revisão' },
  { id: 'provas', label: 'Provas', description: 'Documentos, lacunas e lastro' },
  { id: 'contratos', label: 'Contratos', description: 'Risco contratual' },
  { id: 'jurisprudencia', label: 'Jurisprudência', description: 'Pesquisa e validação' },
  { id: 'marketing', label: 'Marketing', description: 'OAB, LGPD e conteúdo' },
  { id: 'produtividade', label: 'Produtividade', description: 'Handoff e descoberta' },
];

export const command = (skillName: string, agent = 'codex') =>
  agent === 'claude-code'
    ? `npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas --skill ${skillName} --agent claude-code`
    : `npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas --skill ${skillName}`;

export const skills: SkillItem[] = [
  {
    id: 'peticao-final',
    folder: 'peticao-final',
    name: 'peticao-final',
    title: 'Petição Final',
    category: 'peticoes',
    categoryLabel: 'Petições',
    risk: 'juridico',
    summary: 'Gera, adapta ou revisa para protocolo petições brasileiras completas em DOCX, com fatos comprovados e fundamentos verificados.',
    serves: 'Transformar uma pasta de caso em minuta final revisável, com fatos, provas, fundamentos, pedidos e arquivo Word no padrão do escritório.',
    whenToUse: ['petição inicial, réplica, recurso, contrarrazões ou incidente', 'quando houver documentos do caso para ler', 'quando a entrega final deve ser um .docx revisável'],
    whenNotToUse: ['quando faltarem fatos ou documentos essenciais', 'para inventar jurisprudência ou preencher lacunas por suposição', 'para substituir revisão profissional antes do protocolo'],
    howItWorks: ['lê os documentos do caso', 'monta quadro de fatos, provas, lacunas e riscos', 'consulta referências internas da skill sob demanda', 'gera e audita o .docx final'],
    bestUse: 'Entregue uma pasta organizada do caso, diga a peça desejada, rito/fase, pedido principal, prazo e documentos indispensáveis. Se faltar algo essencial, a skill deve parar.',
    trigger: '$peticao-final',
    installCommand: command('peticao-final'),
    codexPrompt: 'Use $peticao-final para gerar uma petição completa em .docx a partir da pasta de documentos do caso.',
    claudePrompt: '/peticao-final gere uma minuta em DOCX a partir destes documentos, separando fatos, provas, lacunas e riscos.',
    limitations: ['não inventa fatos, documentos, valores, prazos ou precedentes', 'jurisprudência decisiva precisa de fonte verificada', 'o modelo de petição deve ser adaptado ao escritório do usuário'],
    files: ['SKILL.md', 'references/', 'scripts/', 'assets/modelo-peticao.docx'],
  },
  {
    id: 'analise-autos',
    folder: 'analise-autos',
    name: 'analise-autos',
    title: 'Análise de Autos',
    category: 'peticoes',
    categoryLabel: 'Petições',
    risk: 'juridico',
    summary: 'Analisa peças, autos e documentos processuais para extrair argumentos, pedidos, provas, defesas e cronologia.',
    serves: 'Criar uma visão consolidada de autos ou peça existente antes de decidir estratégia, audiência, réplica, recurso ou saneamento.',
    whenToUse: ['quando já existe petição, contestação, laudo, recurso ou conjunto documental', 'para resumir autos', 'para mapear pontos controvertidos'],
    whenNotToUse: ['quando a peça final ainda precisa ser redigida do zero', 'quando a tarefa principal é pesquisar jurisprudência', 'quando os arquivos estão ilegíveis'],
    howItWorks: ['identifica o tipo de material', 'extrai pedidos, provas e teses', 'separa fatos de inferências', 'aponta lacunas e riscos processuais'],
    bestUse: 'Envie a peça ou a pasta dos autos e peça uma saída específica: quadro de argumentos, cronologia, mapa de provas ou pauta de audiência.',
    trigger: '$analise-autos',
    installCommand: command('analise-autos'),
    codexPrompt: 'Use $analise-autos para analisar esta peça ou autos e mapear causas, argumentos, pedidos, provas e defesas.',
    claudePrompt: '/analise-autos analise estes autos e entregue pedidos, provas, defesas, cronologia e pontos controvertidos.',
    limitations: ['não redige a peça completa', 'não presume autenticidade ou completude dos documentos', 'prazos e requisitos devem ser conferidos quando decisivos'],
    files: ['SKILL.md', 'references/'],
  },
  {
    id: 'revisao-peticao',
    folder: 'revisao-peticao',
    name: 'revisao-peticao',
    title: 'Revisão de Petição',
    category: 'peticoes',
    categoryLabel: 'Petições',
    risk: 'juridico',
    summary: 'Revisa peça já pronta como controle de qualidade pré-protocolo, com veredicto e pendências por gravidade.',
    serves: 'Dizer se uma peça pode ser protocolada, se requer revisão ou se possui bloqueadores críticos.',
    whenToUse: ['quando a peça já existe', 'antes de protocolo', 'para checar coerência entre fatos, provas, fundamentos e pedidos'],
    whenNotToUse: ['quando só há briefing', 'quando o usuário quer redigir do zero', 'quando falta a peça para leitura'],
    howItWorks: ['testa admissibilidade aparente', 'confere coerência lógica', 'audita lastro probatório', 'separa crítico, importante e aprimoramento'],
    bestUse: 'Cole ou anexe a peça final e informe prazo, rito, fase, tribunal e documentos relevantes. Peça veredicto objetivo.',
    trigger: '$revisao-peticao',
    installCommand: command('revisao-peticao'),
    codexPrompt: 'Use $revisao-peticao para revisar esta peça e apontar itens críticos antes do protocolo.',
    claudePrompt: '/revisao-peticao revise esta peça como controle final antes do protocolo.',
    limitations: ['não substitui revisão humana', 'não pesquisa jurisprudência ampla por padrão', 'não corrige tudo automaticamente sem pedido expresso'],
    files: ['SKILL.md', 'agents/openai.yaml'],
  },
  {
    id: 'analise-provas',
    folder: 'analise-provas',
    name: 'analise-provas',
    title: 'Análise de Provas',
    category: 'provas',
    categoryLabel: 'Provas',
    risk: 'juridico',
    summary: 'Valora documentos e evidências, ligando cada prova ao fato que ela sustenta e ao risco de impugnação.',
    serves: 'Evitar que a tese dependa de documentos fracos, incompletos, contraditórios ou mal apresentados.',
    whenToUse: ['antes de redigir petição', 'quando há prints, contratos, e-mails, comprovantes ou laudos', 'quando a narrativa precisa ser testada contra a prova'],
    whenNotToUse: ['para redigir a peça completa', 'quando os documentos estão inacessíveis', 'para presumir autoria, data ou autenticidade técnica'],
    howItWorks: ['inventaria documentos', 'classifica força probatória de 1 a 5', 'mapeia lacunas por fato essencial', 'antecipa ataques da parte contrária'],
    bestUse: 'Forneça os documentos e a narrativa esperada. Peça matriz documento, fato provado, força, risco e cautela de redação.',
    trigger: '$analise-provas',
    installCommand: command('analise-provas'),
    codexPrompt: 'Use $analise-provas para avaliar estes documentos e montar a estratégia probatória.',
    claudePrompt: '/analise-provas avalie estes documentos e diga o que cada um prova, sua força e seus riscos.',
    limitations: ['não presume autenticidade técnica', 'não resolve lacuna probatória com retórica', 'não substitui perícia quando ela for necessária'],
    files: ['SKILL.md', 'agents/openai.yaml'],
  },
  {
    id: 'analise-contrato',
    folder: 'analise-contrato',
    name: 'analise-contrato',
    title: 'Análise de Contrato',
    category: 'contratos',
    categoryLabel: 'Contratos',
    risk: 'juridico',
    summary: 'Audita contratos brasileiros existentes, classificando riscos, lacunas, abusividade aparente e pontos de negociação.',
    serves: 'Ajudar o advogado a revisar uma minuta recebida ou contrato assinado sem transformar tudo em reescrita automática.',
    whenToUse: ['contratos de imóveis, serviços, tecnologia, bancários, financeiros e consumo', 'comparação de versões', 'relatório de riscos para negociação'],
    whenNotToUse: ['para criar contrato novo do zero', 'quando falta o contrato completo', 'para afirmar ilegalidade categórica sem contexto'],
    howItWorks: ['identifica tipo, partes, objeto, prazo e valor', 'checa requisitos gerais de validade', 'carrega checklist específico quando pertinente', 'classifica riscos por impacto'],
    bestUse: 'Anexe o contrato completo e diga finalidade prática, lado representado, pontos sensíveis e objetivo da revisão.',
    trigger: '$analise-contrato',
    installCommand: command('analise-contrato'),
    codexPrompt: 'Use $analise-contrato para analisar este contrato existente e apontar riscos, abusividades e falhas.',
    claudePrompt: '/analise-contrato revise este contrato e entregue riscos por gravidade, lacunas e ajustes recomendados.',
    limitations: ['não redige instrumento novo como tarefa principal', 'não afirma nulidade sem base normativa/contextual', 'distingue risco jurídico, comercial e ponto negociável'],
    files: ['SKILL.md', 'references/'],
  },
  {
    id: 'pesquisa-jurisprudencial',
    folder: 'pesquisa-jurisprudencial',
    name: 'pesquisa-jurisprudencial',
    title: 'Pesquisa Jurisprudencial',
    category: 'jurisprudencia',
    categoryLabel: 'Jurisprudência',
    risk: 'juridico',
    summary: 'Pesquisa, localiza, valida e compara jurisprudência brasileira sem inventar número, relator, data, órgão ou tese.',
    serves: 'Encontrar base jurisprudencial confiável para petições, pareceres, teses e análise de risco.',
    whenToUse: ['pesquisa de STJ, STF, súmulas, repetitivos, repercussão geral, IRDR ou tribunal local', 'quando a citação será usada profissionalmente', 'quando há risco de entendimento recente'],
    whenNotToUse: ['para apenas testar a lógica de uma tese sem buscar precedente', 'quando o usuário quer redação de peça', 'quando não há fonte primária disponível e a citação seria decisiva'],
    howItWorks: ['define tema, ramo, fase e tribunal', 'prioriza precedentes qualificados', 'valida achados em fonte primária', 'classifica confiança e utilidade'],
    bestUse: 'Informe tese, tribunal relevante, fase do processo e palavras-chave. Exija links oficiais quando a citação entrar em peça.',
    trigger: '$pesquisa-jurisprudencial',
    installCommand: command('pesquisa-jurisprudencial'),
    codexPrompt: 'Use $pesquisa-jurisprudencial para localizar, validar e comparar precedentes sobre este tema.',
    claudePrompt: '/pesquisa-jurisprudencial pesquise precedentes oficiais sobre esta tese e classifique confiança e utilidade.',
    limitations: ['memória do modelo não é fonte final', 'se fonte oficial falhar, o achado deve ficar como a verificar', 'não promete pesquisa exaustiva salvo pedido'],
    files: ['SKILL.md', 'references/'],
  },
  {
    id: 'validar-tese',
    folder: 'validar-tese',
    name: 'validar-tese',
    title: 'Validar Tese',
    category: 'jurisprudencia',
    categoryLabel: 'Jurisprudência',
    risk: 'juridico',
    summary: 'Testa a solidez de teses, argumentos e estratégias processuais antes de usá-los em peça ou decisão.',
    serves: 'Mostrar força, fragilidade, lacunas e como a parte contrária atacaria a tese.',
    whenToUse: ['comparar linhas argumentativas', 'avaliar chance argumentativa sem fingir precisão numérica', 'reformular tese ampla ou vulnerável'],
    whenNotToUse: ['para localizar precedentes como tarefa principal', 'quando faltam fatos e provas mínimos', 'para substituir pesquisa oficial quando a jurisprudência é decisiva'],
    howItWorks: ['formula a tese em uma frase', 'testa norma, fatos, jurisprudência, coerência e ataque adversarial', 'classifica como forte, defensável, frágil, temerária ou necessita pesquisa'],
    bestUse: 'Forneça tese, lado processual, fase, tribunal, pedido e prova disponível. Peça uma resposta adversarial, não apenas favorável.',
    trigger: '$validar-tese',
    installCommand: command('validar-tese'),
    codexPrompt: 'Use $validar-tese para testar esta tese juridica e apontar fragilidades e vulnerabilidades.',
    claudePrompt: '/validar-tese teste esta tese e diga como a parte contrária atacaria.',
    limitations: ['não dá probabilidade numérica rígida', 'não cita jurisprudência não verificada como final', 'classifica como necessita pesquisa quando faltam dados'],
    files: ['SKILL.md', 'references/teses-por-area.md'],
  },
  {
    id: 'marketing-juridico',
    folder: 'marketing-juridico',
    name: 'marketing-juridico',
    title: 'Marketing Jurídico',
    category: 'marketing',
    categoryLabel: 'Marketing',
    risk: 'juridico',
    summary: 'Planeja e revisa marketing jurídico brasileiro com filtros de OAB, LGPD, sobriedade e risco reputacional.',
    serves: 'Criar conteúdo, calendário, landing page, anúncios e governança de comunicação sem captação mercantilizada.',
    whenToUse: ['conteúdo, SEO, anúncios, landing page, WhatsApp, calendário editorial e crise', 'quando a comunicação será pública', 'quando é necessário QA OAB/LGPD'],
    whenNotToUse: ['para redigir petição, parecer ou contrato', 'para prometer resultado jurídico', 'para expor cliente, prova ou caso concreto'],
    howItWorks: ['classifica o tipo de pedido', 'carrega referência temática', 'aplica filtro OAB/LGPD', 'entrega material com status de QA'],
    bestUse: 'Informe área, público, região, canal, objetivo, tom e restrições. Peça sempre bloco final de QA OAB/LGPD.',
    trigger: '$marketing-juridico',
    installCommand: command('marketing-juridico'),
    codexPrompt: 'Use $marketing-juridico para criar um plano de conteudo juridico com QA OAB antes da publicacao.',
    claudePrompt: '/marketing-juridico crie este material e faça QA OAB/LGPD antes da versão final.',
    limitations: ['não substitui aprovação do advogado responsável', 'não promete resultado', 'normas e políticas de plataformas podem exigir conferência atual'],
    files: ['SKILL.md', 'references/'],
  },
  {
    id: 'session-handoff',
    folder: 'session-handoff',
    name: 'session-handoff',
    title: 'Handoff de Sessão',
    category: 'produtividade',
    categoryLabel: 'Produtividade',
    risk: 'operacional',
    summary: 'Gera um Markdown autossuficiente para retomar uma conversa ou trabalho em outra sessão sem perder contexto.',
    serves: 'Documentar objetivo, estado atual, próximos passos, lacunas, riscos e artefatos relevantes.',
    whenToUse: ['ao encerrar sessão longa', 'antes de trocar de conversa ou agente', 'quando há documentos, código ou estratégia em andamento'],
    whenNotToUse: ['para resumir sem criar arquivo quando o usuário pediu continuidade operacional', 'quando não há trabalho a preservar', 'para inventar decisões não tomadas'],
    howItWorks: ['identifica objetivo e condição de sucesso', 'inspeciona artefatos relevantes', 'separa fato, prova, inferência, lacuna e risco', 'cria arquivo Markdown datado'],
    bestUse: 'Peça um handoff antes de encerrar uma tarefa longa. Inclua onde quer salvar o arquivo se não for no diretório atual.',
    trigger: '$session-handoff',
    installCommand: command('session-handoff'),
    codexPrompt: 'Use $session-handoff para encerrar esta conversa com um documento Markdown autossuficiente para retomar o trabalho em outra sessão.',
    claudePrompt: '/session-handoff gere um arquivo de handoff completo para outra sessão continuar.',
    limitations: ['depende da inspeção dos artefatos disponíveis', 'não deve registrar suposições como fatos', 'não substitui backup do projeto'],
    files: ['SKILL.md', 'agents/openai.yaml'],
  },
  {
    id: 'find-skills',
    folder: 'find-skills',
    name: 'find-skills',
    title: 'Find Skills',
    category: 'produtividade',
    categoryLabel: 'Produtividade',
    risk: 'baixo',
    summary: 'Ajuda a descobrir e avaliar skills do ecossistema aberto antes de instalar.',
    serves: 'Evitar recomendações fracas, abandonadas ou pouco confiáveis quando o usuário procura novas capacidades.',
    whenToUse: ['quando alguém pergunta se existe uma skill para uma tarefa', 'para buscar alternativas no ecossistema', 'para comparar qualidade antes da instalação'],
    whenNotToUse: ['quando a skill necessária já é conhecida', 'para instalar sem revisar origem', 'para tarefas jurídicas que exigem outra skill principal'],
    howItWorks: ['entende o domínio', 'consulta opções', 'verifica reputação básica', 'apresenta comandos de instalação'],
    bestUse: 'Use para triagem. Revise sempre origem, permissões, scripts e reputação antes de instalar algo de terceiros.',
    trigger: '$find-skills',
    installCommand: command('find-skills'),
    codexPrompt: 'Use $find-skills para localizar uma skill confiavel para esta tarefa.',
    claudePrompt: '/find-skills encontre skills confiáveis para esta necessidade.',
    limitations: ['não garante segurança de terceiros', 'popularidade não equivale a adequação jurídica', 'instalação deve ser decisão consciente'],
    files: ['SKILL.md'],
  },
];

export const skillById = new Map(skills.map((skill) => [skill.id, skill]));
