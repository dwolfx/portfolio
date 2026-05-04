import React from 'react';

export const sportingbetLocales = {
  'pt-br': {
    hero: {
      tag: 'Estudo de Caso · Sportingbet (Entain)',
      tags: ['Betting', 'B2C', 'Research', 'Mobile First', 'Legal'],
      subtitle: 'Tropicalização e Liderança: Como participei do design para garantir a primeira licença oficial de operação no mercado brasileiro.',
      downloadBtn: '⬇ Baixar este case em PDF'
    },
    nda: {
      title: 'Nota de Confidencialidade',
      text1: 'Devido a acordos de não-divulgação (NDA), os detalhes visuais exibidos são restritos a interfaces já publicadas.',
      text2: 'Este estudo foca na estratégia de UX, segurança transacional e conformidade regulatória.'
    },
    overview: {
      items: [
        { label: 'Empresa', value: 'Entain (Sportingbet, BetMGM, Betboo)' },
        { label: 'Meu papel', value: 'Senior Product Designer' },
        { label: 'Frentes', value: 'KYC & Segurança Transacional' },
        { label: 'Estratégia', value: 'Mobile-First / Mobile-Only' },
        { label: 'Compliance', value: 'Aprovação Governamental 2025' },
        { label: 'Pagamentos', value: 'PIX & Validação de CPF' },
      ]
    },
    context: {
      eyebrow: '01 · Contexto',
      title: 'A Corrida pela Regulamentação Global',
      p1: <>Em 2024, com a nova Lei de Apostas no Brasil, fui selecionado para integrar um grupo de elite de 10 especialistas na Entain (Sportingbet, BetMGM e Betboo). Atuei como o <b>elo estratégico</b> entre os requisitos de negócio da matriz e os times técnicos na Índia e Canadá.</>,
      p2: <>Minha responsabilidade era garantir que a complexidade da regulamentação brasileira fosse traduzida em especificações técnicas precisas, eliminando ruídos de comunicação e garantindo a paridade entre o padrão global e a necessidade local.</>
    },
    mobile: {
      eyebrow: '02 · Estratégia Mobile-First',
      title: 'O Comportamento Brasileiro',
      p1: 'Ao contrário de mercados maduros na Europa e EUA, onde o desktop ainda possui uma fatia relevante, o Brasil é um mercado estritamente mobile-first.',
      p2: 'Dados de Mercado: Com aproximadamente 80% a 90% dos apostadores brasileiros utilizando exclusivamente o smartphone para jogar (Fonte: Mobile Time/Opinion Box e Datafolha), meu foco foi garantir uma experiência mobile sem fricções, com performance otimizada para conexões variadas e ausência total de bugs, garantindo a confiança do usuário em uma plataforma de alta rotatividade financeira.'
    },
    role: {
      eyebrow: '03 · Meu Papel',
      title: 'KYC e Segurança Transacional',
      p1: <>A adaptação do PIX não foi apenas uma troca de método de pagamento, mas uma <b>reengenharia de fluxo financeiro</b>. Implementamos validações de titularidade em tempo real que serviram como a primeira camada de defesa contra fraudes de identidade.</>,
      p2: <>Como o PIX é uma exclusividade local, desenhei fluxos com amarras de segurança anti-fraude: depósitos e saques permitidos exclusivamente via contas vinculadas ao CPF do titular, combatendo a lavagem de dinheiro.</>,
      highlights: [
        { icon: '🆔', title: 'KYC Flow', desc: 'Estruturação rigorosa da verificação de identidade para conformidade governamental.' },
        { icon: '💸', title: 'PIX Strategy', desc: 'Adaptação do sistema de pagamentos com validação de titularidade em tempo real.' },
        { icon: '🛡️', title: 'Anti-Fraud', desc: 'Implementação de amarras financeiras blindadas para integridade da plataforma.' },
      ]
    },
    discovery: {
      eyebrow: '04 · Discovery & Validação',
      title: 'Dados que Direcionam o Design',
      p1: <>Utilizamos o <b>Maze</b> para rodar testes de usabilidade paralelos, permitindo que as iterações de design acontecessem em ciclos curtos, reduzindo o tempo de desenvolvimento e garantindo que o produto chegasse ao mercado com métricas de confiança validadas antes do lançamento oficial.</>,
      p2: 'Monitorei o comportamento via GA4, otimizando o funil de cadastro e o time-to-market do primeiro depósito. A integração com a Único para biometria facial tornou o KYC robusto e ágil.'
    },
    milestone: {
      eyebrow: '05 · Marco Histórico',
      title: '1º Lugar na Aprovação',
      p1: 'O rigor técnico no design resultou em um marco sem precedentes: a Sportingbet foi a 1ª casa de apostas a ser oficialmente aprovada para operar no Brasil em 1º de janeiro de 2025. 🥇',
      p2: 'Fomos a 4ª a ser avaliada, mas a primeira a receber o sinal verde, graças à precisão dos fluxos de conformidade apresentados ao governo.'
    },
    casino: {
      eyebrow: '06 · VIP Experience',
      title: 'Retenção e Culturalização',
      p1: 'Estruturei a área VIP de Cassino, plugando provedores globais em uma interface intuitiva e adaptada ao vocabulário brasileiro.',
      p2: 'O lançamento com o slogan "Faz o teu nome" conectou a robustez técnica do produto à paixão cultural do brasileiro pelas apostas e esportes.'
    },
    results: {
      eyebrow: '07 · Resultados',
      title: 'Liderança Consolidada',
      p1: 'Estabelecemos um benchmark de segurança e UX para o mercado regulamentado.',
      metrics: [
        { icon: '🥇', value: 'Primeira licença de operação regulamentada no Brasil' },
        { icon: '🔒', value: 'Ecossistema financeiro blindado com validação de CPF' },
        { icon: '📈', value: 'Experiência mobile otimizada com alta retenção' },
      ]
    },
    cta: {
      title: 'Quer saber mais sobre UX e Fintech?',
      p1: 'Podemos conversar sobre como projetar fluxos seguros e de alta conversão.',
      btnDown: '⬇ Baixar Case em PDF',
      btnTalk: 'Falar comigo'
    }
  },

  'en': {
    hero: {
      tag: 'Case Study · Sportingbet (Entain)',
      tags: ['Betting', 'B2C', 'Research', 'Mobile First', 'Legal'],
      subtitle: 'Tropicalization and Leadership: How I participated in the design to secure the first official operating license in the Brazilian market.',
      downloadBtn: '⬇ Download this case as PDF'
    },
    nda: {
      title: 'Confidentiality Note',
      text1: 'Due to non-disclosure agreements (NDA), the visual details displayed are restricted to already published interfaces.',
      text2: 'This study focuses on UX strategy, transactional security, and regulatory compliance.'
    },
    overview: {
      items: [
        { label: 'Company', value: 'Entain (Sportingbet, BetMGM, Betboo)' },
        { label: 'My role', value: 'Senior Product Designer' },
        { label: 'Fronts', value: 'KYC & Transactional Security' },
        { label: 'Strategy', value: 'Mobile-First / Mobile-Only' },
        { label: 'Compliance', value: 'Government Approval 2025' },
        { label: 'Payments', value: 'PIX & CPF Validation' },
      ]
    },
    context: {
      eyebrow: '01 · Context',
      title: 'The Race for Global Regulation',
      p1: <>In 2024, with the new Betting Law in Brazil, I was selected to join an elite group of 10 specialists at Entain (Sportingbet, BetMGM, and Betboo). I acted as the <b>strategic link</b> between HQ business requirements and technical teams in India and Canada.</>,
      p2: <>My responsibility was to ensure that the complexity of Brazilian regulations was translated into precise technical specifications, eliminating communication noise and ensuring parity between the global standard and local needs.</>
    },
    mobile: {
      eyebrow: '02 · Mobile-First Strategy',
      title: 'The Brazilian Behavior',
      p1: 'Unlike mature markets in Europe and the USA, where desktop still has a relevant share, Brazil is a strictly mobile-first market.',
      p2: 'Market Data: With approximately 80% to 90% of Brazilian bettors using exclusively smartphones to play (Source: Mobile Time/Opinion Box and Datafolha), my focus was on ensuring a frictionless mobile experience, with optimized performance for varied connections and total absence of bugs, ensuring user confidence in a platform with high financial turnover.'
    },
    role: {
      eyebrow: '03 · My Role',
      title: 'KYC and Transactional Security',
      p1: <>The PIX adaptation was not just a change in payment method, but a <b>financial flow reengineering</b>. We implemented real-time ownership validations that served as the first line of defense against identity fraud.</>,
      p2: <>Since PIX is a local exclusivity, I designed flows with anti-fraud safeguards: deposits and withdrawals allowed exclusively via accounts linked to the holders CPF, combating money laundering.</>,
      highlights: [
        { icon: '🆔', title: 'KYC Flow', desc: 'Rigorous identity verification structuring for government compliance.' },
        { icon: '💸', title: 'PIX Strategy', desc: 'Payment system adaptation with real-time ownership validation.' },
        { icon: '🛡️', title: 'Anti-Fraud', desc: 'Implementation of armored financial safeguards for platform integrity.' },
      ]
    },
    discovery: {
      eyebrow: '04 · Discovery & Validation',
      title: 'Data-Driven Design',
      p1: <>We used <b>Maze</b> to run parallel usability tests, allowing design iterations to happen in short cycles, reducing development time and ensuring the product reached the market with validated confidence metrics before the official launch.</>,
      p2: 'I monitored behavior via GA4, optimizing the registration funnel and time-to-market of the first deposit. Integration with Único for facial biometrics made the KYC robust and agile.'
    },
    milestone: {
      eyebrow: '05 · Historical Milestone',
      title: '1st Place in Approval',
      p1: 'The technical rigor in the design resulted in an unprecedented milestone: Sportingbet was the 1st betting house to be officially approved to operate in Brazil on January 1, 2025. 🥇',
      p2: 'We were the 4th to be evaluated by the government but the first to receive the green light, thanks to the precision of the compliance flows presented.'
    },
    casino: {
      eyebrow: '06 · VIP Experience',
      title: 'Retention and Culturalization',
      p1: 'I structured the VIP Casino area, plugging in global providers into an intuitive interface adapted to the Brazilian vocabulary.',
      p2: 'The launch with the slogan "Faz o teu nome" (Make your name) connected the products technical robustness to the Brazilian cultural passion.'
    },
    results: {
      eyebrow: '07 · Results',
      title: 'Consolidated Leadership',
      p1: 'We established a security and UX benchmark for the regulated market.',
      metrics: [
        { icon: '🥇', value: 'First regulated operating license granted in Brazil' },
        { icon: '🔒', value: 'Armored financial ecosystem with CPF validation' },
        { icon: '📈', value: 'Optimized mobile experience with high retention' },
      ]
    },
    cta: {
      title: 'Want to know more about UX and Fintech?',
      p1: 'We can talk about designing secure, high-conversion flows.',
      btnDown: '⬇ Download Case PDF',
      btnTalk: 'Talk with me'
    }
  },

  'es': {
    hero: {
      tag: 'Estudio de Caso · Sportingbet (Entain)',
      tags: ['Betting', 'B2C', 'Research', 'Mobile First', 'Legal'],
      subtitle: 'Tropicalización y Liderazgo: Cómo participé en el diseño para asegurar la primera licencia oficial de operación en el mercado brasileño.',
      downloadBtn: '⬇ Descargar este caso en PDF'
    },
    nda: {
      title: 'Nota de Confidencialidad',
      text1: 'Debido a los acuerdos de no divulgación (NDA), los detalles visuales mostrados están restringidos a interfaces ya publicadas.',
      text2: 'Este estudio se centra en la estrategia de UX, la seguridad transaccional y el cumplimiento regulatorio.'
    },
    overview: {
      items: [
        { label: 'Empresa', value: 'Entain (Sportingbet, BetMGM, Betboo)' },
        { label: 'Mi rol', value: 'Senior Product Designer' },
        { label: 'Frentes', value: 'KYC & Seguridad Transaccional' },
        { label: 'Estrategia', value: 'Mobile-First / Mobile-Only' },
        { label: 'Compliance', value: 'Aprobación Gubernamental 2025' },
        { label: 'Pagos', value: 'PIX & Validación de CPF' },
      ]
    },
    context: {
      eyebrow: '01 · Contexto',
      title: 'La Carrera por la Regulación Global',
      p1: <>En 2024, con la nueva Ley de Apuestas en Brasil, fui seleccionado para integrar un grupo de élite de 10 especialistas en Entain (Sportingbet, BetMGM y Betboo). Actué como el <b>enlace estratégico</b> entre los requisitos de negocio de la matriz y los equipos técnicos en India y Canadá.</>,
      p2: <>Mi responsabilidad era garantizar que la complejidad de la regulación brasileña se tradujera en especificaciones técnicas precisas, eliminando ruidos de comunicación y asegurando la paridad entre el estándar global y la necesidad local.</>
    },
    mobile: {
      eyebrow: '02 · Estrategia Mobile-First',
      title: 'El Comportamiento Brasileño',
      p1: 'A diferencia de los mercados maduros en Europa y EE. UU., donde el escritorio todavía tiene una participación relevante, Brasil es un mercado estrictamente mobile-first.',
      p2: 'Datos de Mercado: Con aproximadamente el 80% a 90% de los apostadores brasileños utilizando exclusivamente el teléfono inteligente para jugar (Fuente: Mobile Time/Opinion Box y Datafolha), mi enfoque total fue garantizar una experiencia móvil impecable, con un rendimiento optimizado para conexiones variadas y una ausencia total de errores, asegurando la confianza del usuario en una plataforma de alta rotación financiera.'
    },
    role: {
      eyebrow: '03 · Mi Rol',
      title: 'KYC y Seguridad Transaccional',
      p1: <>La adaptación de PIX no fue solo un cambio de método de pago, sino una <b>reingeniería de flujo financiero</b>. Implementamos validaciones de titularidad en tiempo real que sirvieron como la primera capa de defensa contra fraudes de identidad.</>,
      p2: <>Como el PIX es uma exclusividad local, diseñé flujos con salvaguardas antifraude: depósitos y retiros permitidos exclusivamente a través de cuentas vinculadas al CPF del titular, combatiendo el lavado de dinero.</>,
      highlights: [
        { icon: '🆔', title: 'KYC Flow', desc: 'Estructuración rigurosa de la verificación de identidad para el cumplimiento gubernamental.' },
        { icon: '💸', title: 'PIX Strategy', desc: 'Adaptación del sistema de pagos con validación de titularidad en tempo real.' },
        { icon: '🛡️', title: 'Anti-Fraud', desc: 'Implementación de salvaguardas financieras blindadas para la integridad de la plataforma.' },
      ]
    },
    discovery: {
      eyebrow: '04 · Discovery & Validación',
      title: 'Diseño Basado en Datos',
      p1: <>Utilizamos <b>Maze</b> para realizar pruebas de usabilidad paralelas, lo que permitió que las iteraciones de diseño ocurrieran en ciclos cortos, reduciendo el tiempo de desarrollo y garantizando que el producto llegara al mercado con métricas de confianza validadas antes del lanzamiento oficial.</>,
      p2: 'Monitoreé el comportamiento a través de GA4, optimizando el embudo de registro y el time-to-market del primer depósito. La integración con Único para biometría facial hizo que el KYC fuera robusto y ágil.'
    },
    milestone: {
      eyebrow: '05 · Hito Histórico',
      title: '1º Lugar en la Aprobación',
      p1: 'El rigor técnico en el diseño resultó en un hito sin precedentes: Sportingbet fue la 1ª casa de apuestas aprobada oficialmente para operar en Brasil el 1 de enero de 2025. 🥇',
      p2: 'Fuimos los cuartos en ser evaluados por el gobierno, mas los primeros en recibir luz verde, gracias a la precisión de los flujos de cumplimiento presentados.'
    },
    casino: {
      eyebrow: '06 · VIP Experience',
      title: 'Retenção e Culturalização',
      p1: 'Estructuré el área VIP de Casino, conectando proveedores globales en una interfaz intuitiva y adaptada ao vocabulario brasileño.',
      p2: 'El lanzamiento con el eslogan "Faz o teu nome" conectó la robustez técnica del producto con la pasión cultural del brasileño.'
    },
    results: {
      eyebrow: '07 · Resultados',
      title: 'Liderazgo Consolidada',
      p1: 'Establecimos um benchmark de seguridad y UX para el mercado regulado.',
      metrics: [
        { icon: '🥇', value: 'Primera licencia de operación regulada en Brasil' },
        { icon: '🔒', value: 'Ecosistema financiero blindado con validación de CPF' },
        { icon: '📈', value: 'Experiencia móvil optimizada con alta retención' },
      ]
    },
    cta: {
      title: '¿Quieres saber más sobre UX e Fintech?',
      p1: 'Podemos hablar sobre cómo diseñar flujos seguros y de alta conversión.',
      btnDown: '⬇ Descargar Caso en PDF',
      btnTalk: 'Hablar conmigo'
    }
  }
};
