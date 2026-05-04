import React from 'react';

export const vivoPayLocales = {
  'pt-br': {
    hero: {
      tag: 'Estudo de Caso · VivoPay × ItaúCard',
      tags: ['Fintech', 'B2C', 'Cartão de Crédito', 'Research', 'App'],
      subtitle: 'Como estruturei do zero a vertical financeira da Vivo e conduzi a integração do cartão de crédito em parceria com o Itaú',
      downloadBtn: '⬇ Baixar este case em PDF'
    },
    overview: {
      items: [
        { label: 'Empresa', value: 'Vivo (Telefônica Brasil)' },
        { label: 'Meu papel', value: 'Product Designer Especialista' },
        { label: 'Parceiro', value: 'Banco Itaú' },
        { label: 'Plataforma', value: 'iOS e Android (apps nativos)' },
        { label: 'Período', value: 'Fev/2023 – Jul/2024' },
        { label: 'Ferramentas', value: 'Figma · GA4 · Maze' },
      ]
    },
    context: {
      eyebrow: '01 · Contexto',
      title: 'O Desafio',
      p1: <>A Vivo possuía soluções financeiras robustas, mas fragmentadas. O usuário que tinha o cartão VivoPay Itaú precisava sair do app da Vivo e acessar o app do Itaú para gerenciar seu cartão. Era uma <b>fricção</b> que custava à Vivo o controle sobre a experiência e a retenção dentro do seu ecossistema.</>,
      p2: <>O desafio não era resolver uma dor explícita do usuário, mas algo mais sofisticado: criar uma <b>experiência tão completa</b> dentro do app Vivo que ele não precisasse mais sair.</>
    },
    role: {
      eyebrow: '02 · Papel',
      title: 'Fui contratado para construir uma área que não existia',
      p1: <>Entrei como um dos primeiros Product Designers Especialistas da vertical financeira da Vivo. Coube a mim estruturar os ritos de design, definir o modelo de colaboração com parceiros externos e conduzir três jornadas críticas: <b>Cartão de Crédito (Itaú), Seguros (Porto Seguro) e Conta Digital.</b></>,
      p2: <>Neste case, apresento a jornada de <b>Cartão de Crédito</b> que foi a mais complexa, pois exigiu negociação técnica direta com o banco Itaú para viabilizar uma integração que nenhum outro parceiro havia feito.</>,
      highlights: [
        { icon: '🔗', title: 'Ponte Estratégica', desc: 'Interface direta entre negócio da Vivo, engenharia do Itaú e stakeholders' },
        { icon: '⚙️', title: 'Workflow de Design', desc: 'Estabeleci os ritos do zero: discovery, exploração, handoff' },
        { icon: '🛡️', title: 'Guardião da Experiência', desc: 'Garanti identidade Vivo mesmo usando APIs e jornada de KYC de terceiros' },
      ]
    },
    discovery: {
      eyebrow: '03 · Discovery',
      title: 'Descobrindo o caminho certo',
      p1: <>O <b>processo de discovery</b> revelou que o modelo white-label, padrão adotado por outros parceiros do Itaú, não entregaria o <b>SuperApp que a Vivo buscava.</b> Identifiquei isso no benchmark e levei para a mesa uma vitória estratégica: a decisão pela <b>integração via API</b> (em vez de White-label). Isso garantiu que a Vivo mantivesse o controle sobre o <b>Data Analytics (GA4)</b> e a retenção do usuário, evitando a evasão para o ecossistema do parceiro.</>,
      decisionLabel: 'A decisão estratégica',
      decisionP: <>Nesse primeiro momento, as especificações técnicas das APIs eram definidas pelo Itaú, enquanto isso conduzi dinâmicas internas para responder: o que nossa solução precisa ser?<br />O resultado foi o <b>escopo do MVP</b>: Extrato, dados do cartão e pagamento de fatura.</>
    },
    concept: {
      eyebrow: '04 · Conceituação',
      title: 'Do conceito à realidade',
      p1: <>A ideia inicial era um cartão grande e impactante dentro do app. Ao alinhar com o time de <b>DesignOps</b>, identifiquei que alterações estruturais no Design System global da Telefônica levariam meses para aprovação. Optamos por trabalhar com os <b>componentes atuais do Design System global</b> como uma escolha de <b>Time-to-Market</b>. Isso evitou um bloqueio burocrático de meses com o time de DesignOps internacional, permitindo que o MVP fosse lançado no prazo sem gerar débito técnico de design.</>,
      captions: ['Imaginação inicial da home', 'Tela final após validação de DesignOps']
    },
    validation: {
      eyebrow: '05 · Validação',
      title: 'Testamos, ouvimos, ajustamos',
      round: 'Rodada 1 de testes',
      p1: <>Com a V0 pronta, levamos ao público. Os testes <b>revelaram</b> que os usuários queriam mais do que apenas visualizar dados e <b>dois pontos críticos</b> emergiram: a necessidade de <b>Cartão Virtual</b> e de <b>exportação da fatura em PDF</b>.</>,
      cards: [
        { title: '💳 Cartão Virtual', desc: 'O Itaú não conseguiria entregar a API a tempo. Implementamos um disclaimer estratégico no fluxo como uma estratégia de gestão de expectativa (UX Writing). Isso neutralizou a frustração do usuário enquanto a engenharia do Itaú trabalhava na API, permitindo o lançamento do produto sem gaps de usabilidade percebida.' },
        { title: '📄 Exportação em PDF', desc: 'Articulamos com o Itaú a inclusão na API ainda para o MVP. O usuário nem perguntava, simplesmente usava. Sinal claro de que era esperado.' }
      ],
      imgAlt: 'Telas da v1 — Cartão Virtual e PDF'
    },
    delivery: {
      eyebrow: '06 · Entrega',
      title: 'A jornada final',
      p1: 'O produto entregue cobria o fluxo completo: acesso pelo menu Pay → identificação do cartão → KYC → home do cartão → fatura → pagamento.',
      captions: ['Home cartão', 'KYC', 'Fatura', 'Pagamento']
    },
    results: {
      eyebrow: '07 · Resultados',
      title: 'Garantindo que o produto nascesse rastreável',
      p1: 'Sem dados de longo prazo disponíveis no período do projeto, priorizei que o produto não fosse ao ar às cegas. Todos os pontos de clique foram instrumentados com triggers no GA4. Nos testes com Maze, a segunda rodada validou que todos os pontos críticos da V0 foram sanados. A adoção foi gradual e controlada pela Vivo, permitindo monitoramento de comportamento real sem ruído.',
      metrics: [
        { icon: '✅', value: '100% dos pontos críticos da V0 sanados na V1' },
        { icon: '📊', value: 'Tracking completo via GA4 em todos os touchpoints' },
        { icon: '🔍', value: 'Sessões monitoradas via Maze em adoção gradual' },
      ]
    },
    future: {
      eyebrow: '08 · Visão de Futuro',
      title: 'O que vem depois',
      items: [
        'Cartão Virtual dentro do app',
        'Pagamento direto via PIX ou conta Vivo',
        'Contratação de novo cartão ou adicional',
        'Parcelamento de faturas',
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
      tag: 'Case Study · VivoPay × ItaúCard',
      tags: ['Fintech', 'B2C', 'Credit Card', 'Research', 'App'],
      subtitle: 'How I structured Vivo\'s financial vertical from scratch and led the credit card integration in partnership with Itaú',
      downloadBtn: '⬇ Download this case as PDF'
    },
    overview: {
      items: [
        { label: 'Company', value: 'Vivo (Telefônica Brasil)' },
        { label: 'My role', value: 'Expert Product Designer' },
        { label: 'Partner', value: 'Banco Itaú' },
        { label: 'Platform', value: 'iOS and Android (native apps)' },
        { label: 'Period', value: 'Feb/2023 – Jul/2024' },
        { label: 'Tools', value: 'Figma · GA4 · Maze' },
      ]
    },
    context: {
      eyebrow: '01 · Context',
      title: 'The Challenge',
      p1: <>Vivo had robust but fragmented financial solutions. Users with the VivoPay Itaú card had to leave the Vivo app and open the Itaú app to manage their card. This was a <b>friction</b> that cost Vivo control over the experience and retention within its ecosystem.</>,
      p2: <>The challenge wasn't just solving an explicit user pain point, but something more sophisticated: creating an <b>experience so complete</b> within the Vivo app that they would never need to leave.</>
    },
    role: {
      eyebrow: '02 · Role',
      title: 'I was hired to build an area that didn\'t exist',
      p1: <>I joined as one of the first Expert Product Designers for Vivo's financial vertical. My responsibility was to structure design rituals, define collaboration models with external partners, and lead three critical journeys: <b>Credit Card (Itaú), Insurance (Porto Seguro), and Digital Account.</b></>,
      p2: <>In this case study, I present the <b>Credit Card</b> journey, which was the most complex as it required direct technical negotiation with Banco Itaú to enable an integration that no other partner had done before.</>,
      highlights: [
        { icon: '🔗', title: 'Strategic Bridge', desc: 'Direct interface between Vivo\'s business, Itaú\'s engineering, and stakeholders' },
        { icon: '⚙️', title: 'Design Workflow', desc: 'Established rituals from scratch: discovery, exploration, handoff' },
        { icon: '🛡️', title: 'Experience Guardian', desc: 'Ensured Vivo\'s identity even when using third-party APIs and KYC journeys' },
      ]
    },
    discovery: {
      eyebrow: '03 · Discovery',
      title: 'Discovering the right path',
      p1: <>The <b>discovery process</b> revealed that the white-label model, the standard adopted by Itaú's other partners, wouldn't deliver the <b>SuperApp Vivo was looking for.</b> I identified this in the benchmark and brought a strategic victory to the table: the decision for <b>API integration</b> (instead of White-label). This ensured that Vivo maintained control over <b>Data Analytics (GA4)</b> and user retention, avoiding evasion to the partner's ecosystem.</>,
      decisionLabel: 'The strategic decision',
      decisionP: <>Initially, the technical specifications of the APIs were defined by Itaú, while I led internal dynamics to answer: what does our solution need to be?<br />The result was the <b>MVP scope</b>: Statement, card details, and invoice payment.</>
    },
    concept: {
      eyebrow: '04 · Concept',
      title: 'From concept to reality',
      p1: <>The initial idea was a large, impactful card within the app. After aligning with the <b>DesignOps</b> team, I identified that structural changes to Telefónica's global Design System would take months to approve. We opted to work with the <b>current components of the global Design System</b> as a <b>Time-to-Market</b> choice. This avoided a bureaucratic bottleneck of months with the international DesignOps team, allowing the MVP to launch on time without generating design technical debt.</>,
      captions: ['Initial home concept', 'Final screen after DesignOps validation']
    },
    validation: {
      eyebrow: '05 · Validation',
      title: 'We tested, listened, and adjusted',
      round: 'Round 1 of testing',
      p1: <>With V0 ready, we took it to the public. Testing <b>revealed</b> that users wanted more than just visualizing data, and <b>two critical points</b> emerged: the need for a <b>Virtual Card</b> and <b>PDF invoice export</b>.</>,
      cards: [
        { title: '💳 Virtual Card', desc: 'Itaú wouldn\'t be able to deliver the API in time. We implemented a strategic disclaimer in the flow as an expectation management strategy (UX Writing). This neutralized user frustration while Itaú\'s engineering worked on the API, allowing the product to launch without gaps in perceived usability.' },
        { title: '📄 PDF Export', desc: 'We coordinated with Itaú to include it in the API for the MVP. Users didn\'t even ask, they simply used it. A clear sign it was expected.' }
      ],
      imgAlt: 'V1 Screens — Virtual Card and PDF'
    },
    delivery: {
      eyebrow: '06 · Delivery',
      title: 'The final journey',
      p1: 'The delivered product covered the complete flow: access via the Pay menu → card identification → KYC → card home → invoice → payment.',
      captions: ['Card Home', 'KYC', 'Invoice', 'Payment']
    },
    results: {
      eyebrow: '07 · Results',
      title: 'Ensuring the product was born traceable',
      p1: 'Without long-term data available during the project period, I prioritized making sure the product wouldn\'t launch blindly. All click points were instrumented with GA4 triggers. In Maze testing, the second round validated that all V0 critical points were resolved. Adoption was gradual and controlled by Vivo, allowing real behavioral monitoring without noise.',
      metrics: [
        { icon: '✅', value: '100% of V0 critical points resolved in V1' },
        { icon: '📊', value: 'Complete tracking via GA4 across all touchpoints' },
        { icon: '🔍', value: 'Sessions monitored via Maze during gradual adoption' },
      ]
    },
    future: {
      eyebrow: '08 · Future Vision',
      title: 'What\'s next',
      items: [
        'In-app Virtual Card',
        'Direct payment via PIX or Vivo account',
        'Requesting a new or additional card',
        'Invoice installments',
      ]
    },
    cta: {
      title: 'Want to see more details?',
      p1: 'Download the full case as a PDF or get in touch.',
      btnDown: '⬇ Download case PDF',
      btnTalk: 'Get in touch'
    }
  },

  'es': {
    hero: {
      tag: 'Estudio de Caso · VivoPay × ItaúCard',
      tags: ['Fintech', 'B2C', 'Tarjeta de Crédito', 'Research', 'App'],
      subtitle: 'Cómo estructuré desde cero la vertical financiera de Vivo y lideré la integración de tarjetas de crédito en asociación con Itaú',
      downloadBtn: '⬇ Descargar este caso en PDF'
    },
    overview: {
      items: [
        { label: 'Empresa', value: 'Vivo (Telefônica Brasil)' },
        { label: 'Mi rol', value: 'Product Designer Experto' },
        { label: 'Socio', value: 'Banco Itaú' },
        { label: 'Plataforma', value: 'iOS y Android (apps nativas)' },
        { label: 'Período', value: 'Feb/2023 – Jul/2024' },
        { label: 'Herramientas', value: 'Figma · GA4 · Maze' },
      ]
    },
    context: {
      eyebrow: '01 · Contexto',
      title: 'El Desafío',
      p1: <>Vivo tenía soluciones financieras robustas pero fragmentadas. El usuario con tarjeta VivoPay Itaú tenía que salir de la app de Vivo y abrir la app de Itaú para gestionar su tarjeta. Esto era una <b>fricción</b> que le costaba a Vivo el control sobre la experiencia y la retención dentro de su ecosistema.</>,
      p2: <>El desafío no era solo resolver un problema explícito del usuario, sino algo más sofisticado: crear una <b>experiencia tan completa</b> dentro de la app de Vivo que el usuario ya no necesitara salir.</>
    },
    role: {
      eyebrow: '02 · Rol',
      title: 'Fui contratado para construir un área que no existía',
      p1: <>Ingresé como uno de los primeros Product Designers Expertos de la vertical financiera de Vivo. Mi responsabilidad fue estructurar los ritos de diseño, definir modelos de colaboración con socios externos y liderar tres viajes críticos: <b>Tarjeta de Crédito (Itaú), Seguros (Porto Seguro) y Cuenta Digital.</b></>,
      p2: <>En este caso de estudio, presento el viaje de la <b>Tarjeta de Crédito</b>, que fue el más complejo ya que requirió negociación técnica directa con Banco Itaú para viabilizar una integración que ningún otro socio había logrado.</>,
      highlights: [
        { icon: '🔗', title: 'Puente Estratégico', desc: 'Interfaz directa entre el negocio de Vivo, la ingeniería de Itaú y los stakeholders' },
        { icon: '⚙️', title: 'Flujo de Trabajo', desc: 'Establecí los ritos desde cero: discovery, exploración, handoff' },
        { icon: '🛡️', title: 'Guardián de la Experiencia', desc: 'Garanticé la identidad de Vivo incluso usando APIs y viajes de KYC de terceros' },
      ]
    },
    discovery: {
      eyebrow: '03 · Discovery',
      title: 'Descubriendo el camino correcto',
      p1: <>El <b>proceso de discovery</b> reveló que el modelo white-label, el estándar adoptado por otros socios de Itaú, no entregaría la <b>SuperApp que Vivo buscaba.</b> Identifiqué esto en el benchmark y llevé a la mesa una victoria estratégica: la decisión por la <b>integración vía API</b> (en lugar de White-label). Esto garantizó que Vivo mantuviera el control sobre el <b>Data Analytics (GA4)</b> y la retención del usuario, evitando la evasión al ecosistema del socio.</>,
      decisionLabel: 'La decisión estratégica',
      decisionP: <>Inicialmente, las especificaciones técnicas de las APIs fueron definidas por Itaú, mientras lideraba dinámicas internas para responder: ¿qué necesita ser nuestra solución?<br />El resultado fue el <b>alcance del MVP</b>: Extracto, datos de la tarjeta y pago de factura.</>
    },
    concept: {
      eyebrow: '04 · Concepto',
      title: 'Del concepto a la realidad',
      p1: <>La idea inicial era una tarjeta grande e impactante dentro de la app. Tras alinearme con el equipo de <b>DesignOps</b>, identifiqué que cambios estructurales al Design System global de Telefónica tardarían meses en aprobarse. Optamos por trabajar con los <b>componentes actuales del Design System global</b> como una elección de <b>Time-to-Market</b>. Esto evitó un bloqueo burocrático de meses con el equipo de DesignOps internacional, permitiendo que el MVP se lanzara a tiempo sin generar deuda técnica de diseño.</>,
      captions: ['Concepto inicial de la home', 'Pantalla final tras validación de DesignOps']
    },
    validation: {
      eyebrow: '05 · Validación',
      title: 'Probamos, escuchamos y ajustamos',
      round: 'Ronda 1 de pruebas',
      p1: <>Con la V0 lista, la llevamos al público. Las pruebas <b>revelaron</b> que los usuarios querían más que solo visualizar datos, y surgieron <b>dos puntos críticos</b>: la necesidad de una <b>Tarjeta Virtual</b> y <b>exportación de la factura en PDF</b>.</>,
      cards: [
        { title: '💳 Tarjeta Virtual', desc: 'Itaú no podría entregar la API a tiempo. Implementamos un aviso estratégico en el flujo como una estrategia de gestión de expectativas (UX Writing). Esto neutralizó la frustración del usuario mientras la ingeniería de Itaú trabajaba en la API, permitiendo el lanzamiento del producto sin brechas de usabilidad percibida.' },
        { title: '📄 Exportación en PDF', desc: 'Coordinamos con Itaú para incluirlo en la API para el MVP. El usuario ni preguntaba, simplemente lo usaba. Señal clara de que era esperado.' }
      ],
      imgAlt: 'Pantallas v1 — Tarjeta Virtual y PDF'
    },
    delivery: {
      eyebrow: '06 · Entrega',
      title: 'El viaje final',
      p1: 'El producto entregado cubría el flujo completo: acceso por el menú Pay → identificación de tarjeta → KYC → home de tarjeta → factura → pago.',
      captions: ['Home Tarjeta', 'KYC', 'Factura', 'Pago']
    },
    results: {
      eyebrow: '07 · Resultados',
      title: 'Garantizando que el producto naciera rastreable',
      p1: 'Sin datos a largo plazo disponibles durante el proyecto, prioricé que el producto no se lanzara a ciegas. Todos los puntos de clic fueron instrumentados con triggers en GA4. En pruebas con Maze, la segunda ronda validó que todos los puntos críticos de V0 se resolvieron. La adopción fue gradual y controlada por Vivo, permitiendo monitoreo de comportamiento real sin ruido.',
      metrics: [
        { icon: '✅', value: '100% de puntos críticos de V0 resueltos en V1' },
        { icon: '📊', value: 'Tracking completo vía GA4 en todos los touchpoints' },
        { icon: '🔍', value: 'Sesiones monitoreadas vía Maze en adopción gradual' },
      ]
    },
    future: {
      eyebrow: '08 · Visión a Futuro',
      title: 'Lo que viene después',
      items: [
        'Tarjeta Virtual dentro de la app',
        'Pago directo vía PIX o cuenta Vivo',
        'Contratación de tarjeta nueva o adicional',
        'Cuotas de facturas',
      ]
    },
    cta: {
      title: '¿Quieres ver más detalles?',
      p1: 'Descarga el caso completo en PDF o ponte en contacto.',
      btnDown: '⬇ Descargar PDF del caso',
      btnTalk: 'Hablar conmigo'
    }
  }
};
