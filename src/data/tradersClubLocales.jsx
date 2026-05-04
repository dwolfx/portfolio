import React from 'react';

export const tradersClubLocales = {
  'pt-br': {
    hero: {
      tag: 'Estudo de Caso · TC (TradersClub)',
      tags: ['Fintech', 'B2B', 'Investimentos', 'Research'],
      subtitle: 'Da fundação da unidade de negócios B2B à automação das Lâminas de Investimento para gestoras de fundos',
      downloadBtn: '⬇ Baixar este case em PDF'
    },
    overview: {
      items: [
        { label: 'Empresa', value: 'TC (TradersClub)' },
        { label: 'Meu papel', value: 'Product Designer' },
        { label: 'Foco', value: 'B2B, Automação e DS' },
        { label: 'Plataforma', value: 'Web (SaaS)' },
        { label: 'Entregável', value: 'Gerador de Lâminas (Factsheets)' },
        { label: 'Impacto', value: 'Geração de Receita' },
      ]
    },
    confidentiality: {
      title: 'Nota de Confidencialidade',
      text1: 'Devido a acordos de não-divulgação (NDA), os detalhes visuais exibidos são restritos a interfaces já publicadas.',
      text2: 'Este estudo foca na estratégia de UX, segurança transacional e conformidade regulatória.'
    },
    context: {
      eyebrow: '01 · Contexto',
      title: 'Criando uma Nova Unidade de Negócio',
      p1: <>O TC é amplamente conhecido por sua força no mercado B2C, educando e conectando investidores individuais. <br/>Minha missão ao entrar na companhia foi um desafio de <b>"página em branco"</b>: fundar do zero a unidade de negócios B2B (Business-to-Business).</>,
      p2: <>Sem conhecimento prévio no setor financeiro, primeiro tive um tempo de aprendizado sobre investimentos para então mergulhar em um processo intensivo de aprendizado B2B para entender como o TC poderia rentabilizar e agregar valor para instituições financeiras e casas de análise.</>
    },
    discovery: {
      eyebrow: '02 · Discovery',
      title: 'Identificando o Gargalo das "Lâminas"',
      p1: <>Através de um <b>discovery profundo</b> e sessões de <b>pesquisa com donos</b> de gestoras e fundos de investimento, identifiquei uma dor operacional crítica: a criação das <b>Lâminas Mensais de Fundos.</b></>,
      decisionLabel: 'O Problema e o Custo',
      decisionP: <><b>O Problema:</b> No Brasil, os fundos são obrigados a emitir mensalmente um documento (PDF) detalhando movimentações, rentabilidade e estratégias.<br/><br/><b>O Custo da Ineficiência:</b> As gestoras levavam, em média, duas semanas por mês para consolidar dados e diagramar esses documentos, muitas vezes precisando contratar equipes dedicadas apenas para essa tarefa manual.<br/><br/>Após mapear a jornada completa das gestoras, utilizamos uma <b>matriz de priorização</b> para focar no problema das Lâminas Mensais. Identificamos que este era o maior gargalo operacional, e a automação traria o <b>ROI (Retorno sobre Investimento)</b> mais imediato para a nova vertical B2B.</>
    },
    designSystem: {
      eyebrow: '03 · Estratégia de Design System',
      title: 'Fugindo do Óbvio',
      p1: <>Um dos pontos mais críticos foi a decisão de <b>não utilizar o Design System B2C do TC</b>. Enquanto o produto para o público geral migrava para uma estética arredondada e moderna (inspirada no Material Design), minha pesquisa revelou um perfil de usuário B2B completamente oposto, por isso seguimos com o uso do <b>Design system Carbon, da IBM</b>, o que fez a curva de entendimento dos usuários cair drasticamente.</>,
      decisionLabel: 'Público 45+ e Acostumado com IBM/Oracle',
      decisionP: <><b>Persona:</b> Homens, 45+ anos, habituados a interfaces densas como Excel, e ferramentas da IBM e Oracle.<br/><br/><b>A Decisão:</b> Optamos por implementar o <b>Carbon Design System (IBM)</b>. Uma interface mais "quadrada", escura e técnica, que prioriza a densidade de informações e transmite a solidez necessária para o ambiente corporativo financeiro. A escolha do Carbon não foi apenas estética, mas para reduzir a carga cognitiva de usuários acostumados com softwares de infraestrutura robusta.</>
    },
    solution: {
      eyebrow: '04 · A Solução',
      title: 'Automação e Flexibilidade',
      p1: <>Antes de prosseguir para o desenvolvimento, realizamos sessões de <b>testes de usabilidade</b> com protótipos de alta fidelidade. A escolha do Carbon Design System foi validada na prática: os usuários 45+ demonstraram uma <b>curva de aprendizado quase nula</b>, pois a interface refletia a densidade e a seriedade dos terminais financeiros que já utilizavam no dia a dia.<br/><br/>Projetei um gerador inteligente onde o sistema consumia os dados e gerava gráficos automaticamente. O único esforço humano era a análise subjetiva do gestor.</>,
      highlights: [
        { icon: '⚙️', title: 'Automação de Dados', desc: 'O sistema consumia os dados do fundo e gerava os gráficos automaticamente.' },
        { icon: '🎨', title: 'Liberdade e Customização', desc: 'O construtor permitia que, mesmo sob uma base sólida (Carbon), cada cliente pudesse personalizar o PDF com sua própria identidade visual.' },
        { icon: '🧠', title: 'Intervenção Estratégica', desc: 'O único esforço humano necessário era a análise subjetiva do gestor.' }
      ]
    },
    results: {
      eyebrow: '05 · Impacto',
      title: 'Resultados Milionários',
      p1: 'A adoção do Carbon permitiu um desenvolvimento técnico muito mais veloz e focado na lógica de dados, com resultados massivos para a nova unidade B2B.',
      metrics: [
        { icon: '⏱️', value: 'Redução no tempo de produção de 2 semanas para 15-20 minutos.' },
        { icon: '💰', value: 'Faturamento médio de R$ 2 milhões/mês já no 1º mês do MVP.' },
        { icon: '🚀', value: 'Desenvolvimento técnico veloz graças ao Carbon Design System.' },
      ]
    },
    cta: {
      title: 'Quer ver mais detalhes?',
      p1: 'Faça o download do case completo em PDF ou entre em contato.',
      btnDown: '⬇ Baixar PDF do case',
      btnTalk: 'Falar comigo'
    }
  },

  'en': {
    hero: {
      tag: 'Case Study · TC (TradersClub)',
      tags: ['Fintech', 'B2B', 'Investments', 'Research'],
      subtitle: 'From the foundation of the B2B business unit to the automation of Investment Factsheets for fund managers',
      downloadBtn: '⬇ Download this case as PDF'
    },
    overview: {
      items: [
        { label: 'Company', value: 'TC (TradersClub)' },
        { label: 'My role', value: 'Product Designer' },
        { label: 'Focus', value: 'B2B, Automation & DS' },
        { label: 'Platform', value: 'Web (SaaS)' },
        { label: 'Deliverable', value: 'Factsheet Generator' },
        { label: 'Impact', value: 'Revenue Generation' },
      ]
    },
    confidentiality: {
      title: 'Confidentiality Note',
      text1: 'Due to non-disclosure agreements (NDA), visual details displayed are restricted to already published interfaces.',
      text2: 'This study focuses on UX strategy, transactional security, and regulatory compliance.'
    },
    context: {
      eyebrow: '01 · Context',
      title: 'Creating a New Business Unit',
      p1: <>TC is widely known for its strength in the B2C market, educating and connecting individual investors. <br/>My mission upon joining the company was a <b>"blank page"</b> challenge: to found the B2B (Business-to-Business) business unit from scratch.</>,
      p2: <>With no prior knowledge of the financial sector, I first spent time learning about investments and then dived into an intensive B2B learning process to understand how TC could monetize and add value for financial institutions and research houses.</>
    },
    discovery: {
      eyebrow: '02 · Discovery',
      title: 'Identifying the "Factsheets" Bottleneck',
      p1: <>Through a <b>deep discovery</b> and <b>research sessions with heads of asset managers and investment funds</b>, I identified a critical operational pain: the creation of <b>Monthly Fund Factsheets.</b></>,
      decisionLabel: 'The Problem and the Cost',
      decisionP: <><b>The Problem:</b> In Brazil, funds are required to issue monthly documents (PDFs) detailing movements, profitability, and strategies.<br/><br/><b>The Cost of Inefficiency:</b> Management firms took, on average, two weeks per month to consolidate data and design these documents, often needing to hire dedicated teams just for this manual task.<br/><br/>After mapping the complete journey of the management firms, we used a <b>prioritization matrix</b> to focus on the Factsheets problem. We identified that this was the largest operational bottleneck, and automation would bring the most immediate <b>ROI (Return on Investment)</b> for the new B2B vertical.</>
    },
    designSystem: {
      eyebrow: '03 · Design System Strategy',
      title: 'Breaking the Mold',
      p1: <>One of the most critical points was the decision <b>not to use TC\'s B2C Design System</b>. While the general public product was migrating towards a rounded, modern aesthetic (inspired by Material Design), my research revealed a completely opposite B2B user profile, which is why we proceeded with the use of <b>IBM\'s Carbon Design System</b>, which caused the users\' learning curve to drop drastically.</>,
      decisionLabel: '45+ Audience Accustomed to IBM/Oracle',
      decisionP: <><b>Persona:</b> Men, 45+ years old, accustomed to dense interfaces like Excel, and IBM and Oracle tools.<br/><br/><b>The Decision:</b> We opted to implement the <b>Carbon Design System (IBM)</b>. A more "square", dark, and technical interface that prioritizes information density and conveys the solidity required for the corporate financial environment. Choosing Carbon was not just aesthetic, but to reduce the cognitive load of users accustomed to robust infrastructure software.</>
    },
    solution: {
      eyebrow: '04 · The Solution',
      title: 'Automation and Flexibility',
      p1: <>Before proceeding to development, we conducted <b>usability testing sessions</b> with high-fidelity prototypes. The choice of the Carbon Design System was validated in practice: 45+ users demonstrated a <b>near-zero learning curve</b>, as the interface reflected the density and seriousness of the financial terminals they already used daily.<br/><br/>I designed an intelligent generator where the system consumed the data and generated charts automatically. The only human effort required was the manager\'s subjective analysis.</>,
      highlights: [
        { icon: '⚙️', title: 'Data Automation', desc: 'The system consumed fund data and generated charts automatically.' },
        { icon: '🎨', title: 'Freedom and Customization', desc: 'The builder allowed each client to personalize the PDF with their own visual identity, even under a solid base (Carbon).' },
        { icon: '🧠', title: 'Strategic Intervention', desc: 'The only human effort needed was the manager\'s subjective analysis.' }
      ]
    },
    results: {
      eyebrow: '05 · Impact',
      title: 'Million-Dollar Results',
      p1: 'The adoption of Carbon allowed for much faster technical development focused on data logic, with massive results for the new B2B unit.',
      metrics: [
        { icon: '⏱️', value: 'Reduction in production time from 2 weeks to 15-20 minutes.' },
        { icon: '💰', value: 'Average revenue of R$ 2 million/month in the 1st month of the MVP.' },
        { icon: '🚀', value: 'Fast technical development thanks to the Carbon Design System.' },
      ]
    },
    cta: {
      title: 'Want to see more details?',
      p1: 'Download the full case study in PDF or get in touch.',
      btnDown: '⬇ Download Case PDF',
      btnTalk: 'Talk to me'
    }
  },

  'es': {
    hero: {
      tag: 'Estudio de Caso · TC (TradersClub)',
      tags: ['Fintech', 'B2B', 'Inversiones', 'Research'],
      subtitle: 'Desde la fundación de la unidad de negocios B2B hasta la automatización de las Fichas de Inversión (Factsheets) para gestoras de fondos',
      downloadBtn: '⬇ Descargar este caso en PDF'
    },
    overview: {
      items: [
        { label: 'Empresa', value: 'TC (TradersClub)' },
        { label: 'Mi rol', value: 'Product Designer' },
        { label: 'Enfoque', value: 'B2B, Automatización y DS' },
        { label: 'Plataforma', value: 'Web (SaaS)' },
        { label: 'Entregable', value: 'Generador de Fichas (Factsheets)' },
        { label: 'Impacto', value: 'Generación de Ingresos' },
      ]
    },
    confidentiality: {
      title: 'Nota de Confidencialidad',
      text1: 'Debido a los acuerdos de no divulgación (NDA), los detalles visuales mostrados están restringidos a interfaces ya publicadas.',
      text2: 'Este estudio se centra en la estrategia de UX, la seguridad transaccional y el cumplimiento regulatorio.'
    },
    context: {
      eyebrow: '01 · Contexto',
      title: 'Creando una Nueva Unidad de Negocio',
      p1: <>TC es ampliamente conocido por su fuerza en el mercado B2C, educando y conectando a inversores individuales. <br/>Mi misión al unirme a la compañía fue un desafío de <b>"página en blanco"</b>: fundar desde cero la unidad de negocios B2B (Business-to-Business).</>,
      p2: <>Sin conocimientos previos en el sector financiero, primero dediqué tiempo a aprender sobre inversiones y luego me sumergí en un proceso intensivo de aprendizaje B2B para entender cómo TC podría rentabilizar y agregar valor para instituciones financieras y casas de análisis.</>
    },
    discovery: {
      eyebrow: '02 · Discovery',
      title: 'Identificando el Cuello de Botella de las "Láminas"',
      p1: <>A través de un <b>discovery profundo</b> y sesiones de <b>investigación con dueños de gestoras y fondos de inversión</b>, identifiqué un dolor operativo crítico: la creación de las <b>Láminas Mensuales de Fondos.</b></>,
      decisionLabel: 'El Problema y el Costo',
      decisionP: <><b>El Problema:</b> En Brasil, los fondos están obligados a emitir mensualmente un documento (PDF) detallando movimientos, rentabilidad y estrategias.<br/><br/><b>El Costo de la Ineficiencia:</b> Las gestoras tardaban, en promedio, dos semanas al mes en consolidar los datos y diagramar estos documentos, a menudo necesitando contratar equipos dedicados solo para esta tarea manual.<br/><br/>Después de mapear el viaje completo de las gestoras, utilizamos una <b>matriz de priorización</b> para enfocarnos en el problema de las Láminas Mensuais. Identificamos que este era el mayor cuello de botella operativo, y la automatización traería el <b>ROI (Retorno sobre la Inversión)</b> más inmediato para la nueva vertical B2B.</>
    },
    designSystem: {
      eyebrow: '03 · Estrategia de Design System',
      title: 'Rompiendo el Molde',
      p1: <>Uno de los puntos más críticos fue la decisión de <b>no utilizar el Design System B2C de TC</b>. Mientras el producto para el público en general migraba hacia una estética redondeada y moderna (inspirada en Material Design), mi investigación reveló un perfil de usuario B2B completamente oposto, por lo que procedimos con el uso del <b>Design system Carbon de IBM</b>, lo que hizo que la curva de aprendizaje de los usuarios cayera drásticamente.</>,
      decisionLabel: 'Público 45+ y Acostumbrado a IBM/Oracle',
      decisionP: <><b>Persona:</b> Hombres, 45+ años, habituados a interfaces densas como Excel, y herramientas de IBM y Oracle.<br/><br/><b>La Decisión:</b> Optamos por implementar el <b>Carbon Design System (IBM)</b>. Una interfaz más "cuadrada", oscura y técnica, que prioriza la densidad de información y transmite la solidez necesaria para el entorno financiero corporativo. La elección de Carbon no fue solo estética, sino para reducir la carga cognitiva de usuarios acostumbrados a software de infraestructura robusta.</>
    },
    solution: {
      eyebrow: '04 · La Solução',
      title: 'Automatización y Flexibilidad',
      p1: <>Antes de proceder al desarrollo, realizamos sesiones de <b>pruebas de usabilidad</b> con prototipos de alta fidelidad. La elección del Carbon Design System fue validada en la práctica: los usuarios de más de 45 años demostraron una <b>curva de aprendizaje casi nula</b>, ya que la interfaz reflejaba la densidad y seriedad de las terminales financieras que ya utilizaban a diario.<br/><br/>Diseñé un generador inteligente donde el sistema consumía los datos y generaba los gráficos automáticamente. El único esfuerzo humano requerido era el análisis subjetivo del gestor.</>,
      highlights: [
        { icon: '⚙️', title: 'Automatización de Datos', desc: 'El sistema consumía los datos del fondo y generaba los gráficos automáticamente.' },
        { icon: '🎨', title: 'Libertad y Personalización', desc: 'El constructor permitía a cada cliente personalizar el PDF con su propia identidad visual, incluso bajo una base sólida (Carbon).' },
        { icon: '🧠', title: 'Intervención Estratégica', desc: 'El único esfuerzo humano necesario era el análisis subjetivo del gestor.' }
      ]
    },
    results: {
      eyebrow: '05 · Impacto',
      title: 'Resultados Millonarios',
      p1: 'La adopción de Carbon permitió un desarrollo técnico mucho más rápido y centrado en la lógica de datos, con resultados masivos para la nueva unidad B2B.',
      metrics: [
        { icon: '⏱️', value: 'Reducción del tiempo de producción de 2 semanas a 15-20 minutos.' },
        { icon: '💰', value: 'Ingresos promedio de R$ 2 millones/mes ya en el 1er mes del MVP.' },
        { icon: '🚀', value: 'Desarrollo técnico rápido gracias al Carbon Design System.' },
      ]
    },
    cta: {
      title: '¿Quieres ver más detalles?',
      p1: 'Descarga el caso de estudio completo en PDF o ponte en contacto.',
      btnDown: '⬇ Descargar PDF del caso',
      btnTalk: 'Hablar conmigo'
    }
  }
};
