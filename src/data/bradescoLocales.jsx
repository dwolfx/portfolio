import React from 'react';

export const bradescoLocales = {
  'pt-br': {
    hero: {
      tag: 'Estudo de Caso · Bradesco',
      tags: ['Fintech', 'B2B', 'Research'],
      subtitle: 'Otimização do fluxo de financiamento automotivo através de pesquisa de campo e redução de fricção.',
      downloadBtn: '⬇ Baixar este case em PDF'
    },
    overview: {
      items: [
        { label: 'Empresa', value: 'Bradesco (via Deeploy)' },
        { label: 'Meu papel', value: 'Consultor de UX / Product Designer' },
        { label: 'Foco', value: 'Pesquisa, Estratégia e UX' },
        { label: 'Plataforma', value: 'Web (B2B)' },
        { label: 'Entregável', value: 'Redesign do fluxo de crédito' },
        { label: 'Impacto', value: '+30% de Conversão' },
      ]
    },
    confidentiality: {
      title: 'Nota de Confidencialidade',
      text1: 'Devido a acordos de NDA, os detalhes visuais exibidos são restritos.',
      text2: 'O foco deste estudo é a pesquisa de campo, estratégia de redução de fricção e impacto no negócio.'
    },
    context: {
      eyebrow: '01 · O Contexto',
      title: 'O Gap de Competitividade',
      p1: <>Atuando como consultor terceiro contratado pela empresa Deeploy dentro do <b>Bradesco</b>, recebi um desafio de negócio crítico: entender por que os vendedores de concessionárias e lojas de veículos <b>não estavam utilizando</b> a plataforma do Bradesco para submeter as fichas de crédito dos clientes, preferindo <b>players concorrentes</b> (Safra e Itaú).</>,
      p2: <>O banco estava perdendo market share no momento crucial da venda.</>
    },
    role: {
      eyebrow: '02 · Discovery',
      title: 'Saindo do Escritório e Indo a Campo',
      p1: <>Após uma desk research inconclusiva e entrevistas remotas que não revelaram a real dor do usuário, solicitei autorização para uma <b>etnografia/pesquisa de campo</b>.</>,
      p2: <><b>A Realidade das Lojas:</b> Indo diretamente às concessionárias, observei a dinâmica frenética da venda.<br/><br/><b>O "Aha!" Moment:</b> Identifiquei que a barreira não era visual, mas operacional. Enquanto concorrentes exigiam apenas 4 ou 5 campos para uma pré-análise, o Bradesco exigia uma ficha completa com quase 20 campos. No "calor" da venda, o vendedor priorizava o caminho mais rápido e de menor resistência.</>
    },
    designSystem: {
      eyebrow: '03 · Estratégia e Negociação',
      title: 'A "Pré-Ficha"',
      p1: <>Voltei para o banco com o diagnóstico claro e atuei como ponte entre o time de <b>Produto, Tech</b> e <b>Legal</b> para viabilizar uma solução para: reduzir drasticamente a fase inicial da venda e melhorar a entrada de dados sem ferir as normas de conformidade.</>,
      decisionLabel: 'A Solução e o Fluxo',
      decisionP: <><b>A Solução:</b> Implementamos um fluxo de Pré-Aprovação de Crédito com apenas 4 campos essenciais:
      <ul style={{ margin: '8px 0 16px 20px', paddingLeft: '20px' }}>
        <li>Nome</li>
        <li>CPF</li>
        <li>Endereço</li>
        <li>Nome da Mãe</li>
      </ul>
      <b>O Fluxo:</b> Se o crédito fosse pré-aprovado e o valor atendesse ao cliente, o vendedor então era motivado a completar os dados restantes, pois a venda já estava "garantida".</>
    },
    discovery: {
      eyebrow: '04 · O Fator Humano',
      title: 'Co-Criação e Engajamento',
      p1: <>A melhor decisão que eu poderia tomar nesse projeto foi o maior diferencial: Trazer os vendedores pra perto, pra se sentirem parte da solução, se sentirem <b>ouvidos</b> e o principal <b>atendidos!</b></>,
      highlights: [
        { icon: '🤝', title: 'Sensação de Pertencimento', desc: 'Trazer os vendedores para perto do craft da solução e mostrar para eles o processo/andamento fez com que eles se sentissem acolhidos.' },
        { icon: '👥', title: 'Sentimento de Dono', desc: 'Ao pedir opiniões e mostrar protótipos durante as visitas, transformei os usuários em "donos" da solução.' },
        { icon: '🗣️', title: 'Marketing Orgânico', desc: 'O sentimento de pertencimento gerou um marketing "boca a boca" tão forte entre os vendedores que a adoção da ferramenta explodiu antes mesmo de qualquer campanha oficial do banco.' }
      ]
    },
    results: {
      eyebrow: '05 · Resultados',
      title: 'Impacto de Negócio',
      p1: 'O crescimento orgânico validou a solução antes mesmo de investimentos em mídia, provando que um design focado na dor real do usuário é a melhor estratégia de marketing.',
      metrics: [
        { icon: '📈', value: 'Aumento de Conversão: O volume de fichas submetidas pelo Bradesco cresceu 30% logo após a implementação.' },
        { icon: '⚡', value: 'Eficiência Operacional: Redução drástica do tempo de resposta no Ponto de Venda (PDV).' },
        { icon: '🎯', value: 'Sucesso do MVP validado organicamente.' },
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
      tag: 'Case Study · Bradesco',
      tags: ['Fintech', 'B2B', 'Research'],
      subtitle: 'Optimizing the automotive financing flow through field research and friction reduction.',
      downloadBtn: '⬇ Download this case as PDF'
    },
    overview: {
      items: [
        { label: 'Company', value: 'Bradesco (via Deeploy)' },
        { label: 'My role', value: 'UX Consultant / Product Designer' },
        { label: 'Focus', value: 'Research, Strategy, and UX' },
        { label: 'Platform', value: 'Web (B2B)' },
        { label: 'Deliverable', value: 'Credit flow redesign' },
        { label: 'Impact', value: '+30% Conversion' },
      ]
    },
    confidentiality: {
      title: 'Confidentiality Note',
      text1: 'Due to NDA agreements, visual details shown are restricted.',
      text2: 'The focus of this study is field research, friction reduction strategy, and business impact.'
    },
    context: {
      eyebrow: '01 · The Context',
      title: 'The Competitiveness Gap',
      p1: <>Acting as a third-party consultant hired by Deeploy within <b>Bradesco</b>, I received a critical business challenge: to understand why dealership and car shop salespeople <b>were not using</b> the Bradesco platform to submit customer credit applications, preferring <b>competing players</b> (Safra and Itaú).</>,
      p2: <>The bank was losing market share at the crucial moment of the sale.</>
    },
    role: {
      eyebrow: '02 · Discovery',
      title: 'Leaving the Office and Going into the Field',
      p1: <>After inconclusive desk research and remote interviews that did not reveal the real user pain point, I requested authorization for an <b>ethnography/field research</b>.</>,
      p2: <><b>The Reality of the Shops:</b> Going directly to the dealerships, I observed the frantic dynamics of the sale.<br/><br/><b>The "Aha!" Moment:</b> I identified that the barrier was not visual, but operational. While competitors required only 4 or 5 fields for a pre-analysis, Bradesco required a full form with almost 20 fields. In the "heat" of the sale, the salesperson prioritized the fastest path of least resistance.</>
    },
    designSystem: {
      eyebrow: '03 · Strategy and Negotiation',
      title: 'The "Pre-Form"',
      p1: <>I returned to the bank with a clear diagnosis and acted as a bridge between the <b>Product, Tech</b> and <b>Legal</b> teams to make a solution possible: drastically reducing the initial phase of the sale and improving data entry without violating compliance standards.</>,
      decisionLabel: 'The Solution and the Flow',
      decisionP: <><b>The Solution:</b> We implemented a Credit Pre-Approval flow with only 4 essential fields:
      <ul style={{ margin: '8px 0 16px 20px', paddingLeft: '20px' }}>
        <li>Name</li>
        <li>CPF (Tax ID)</li>
        <li>Address</li>
        <li>Mother's Name</li>
      </ul>
      <b>The Flow:</b> If the credit was pre-approved and the value met the customer's needs, the salesperson was then motivated to complete the remaining data, as the sale was already "guaranteed".</>
    },
    discovery: {
      eyebrow: '04 · The Human Factor',
      title: 'Co-Creation and Engagement',
      p1: <>The best decision I could make on this project was the biggest differentiator: Bringing the salespeople closer, to make them feel part of the solution, feel <b>heard</b> and most importantly <b>answered!</b></>,
      highlights: [
        { icon: '🤝', title: 'Sense of Belonging', desc: 'Bringing salespeople closer to the craft of the solution and showing them the process/progress made them feel welcomed.' },
        { icon: '👥', title: 'Ownership Feeling', desc: 'By asking for opinions and showing prototypes during visits, I turned users into "owners" of the solution.' },
        { icon: '🗣️', title: 'Organic Marketing', desc: 'The feeling of belonging generated such strong "word-of-mouth" marketing among salespeople that tool adoption exploded even before any official bank advertising campaign.' }
      ]
    },
    results: {
      eyebrow: '05 · Results',
      title: 'Business Impact',
      p1: 'Organic growth validated the solution even before media investment, proving that design focused on the real user pain point is the best marketing strategy.',
      metrics: [
        { icon: '📈', value: 'Conversion Increase: The volume of applications submitted via Bradesco grew 30% right after implementation.' },
        { icon: '⚡', value: 'Operational Efficiency: Drastic reduction in response time at the Point of Sale (POS).' },
        { icon: '🎯', value: 'MVP Success: Validated organically.' },
      ]
    },
    cta: {
      title: 'Want to see more details?',
      p1: 'Download the full case as PDF or get in touch.',
      btnDown: '⬇ Download case PDF',
      btnTalk: 'Talk to me'
    }
  },

  'es': {
    hero: {
      tag: 'Estudio de Caso · Bradesco',
      tags: ['Fintech', 'B2B', 'Research'],
      subtitle: 'Optimización del flujo de financiamiento automotriz a través de investigación de campo y reducción de fricción.',
      downloadBtn: '⬇ Descargar este caso en PDF'
    },
    overview: {
      items: [
        { label: 'Empresa', value: 'Bradesco (via Deeploy)' },
        { label: 'Mi rol', value: 'Consultor de UX / Product Designer' },
        { label: 'Focus', value: 'Investigación, Estrategia y UX' },
        { label: 'Plataforma', value: 'Web (B2B)' },
        { label: 'Entregable', value: 'Rediseño del flujo de crédito' },
        { label: 'Impacto', value: '+30% de Conversión' },
      ]
    },
    confidentiality: {
      title: 'Nota de Confidencialidad',
      text1: 'Debido a acuerdos de NDA, los detalles visuales mostrados están restringidos.',
      text2: 'El enfoque de este estudio es la investigación de campo, la estrategia de reducción de fricción y el impacto en el negocio.'
    },
    context: {
      eyebrow: '01 · El Contexto',
      title: 'La Brecha de Competitividade',
      p1: <>Actuando como consultor externo contratado por la empresa Deeploy dentro de <b>Bradesco</b>, recibí un desafío de negocio crítico: entender por qué los vendedores de concesionarios y tiendas de vehículos <b>no estaban utilizando</b> la plataforma de Bradesco para enviar las solicitudes de crédito de los clientes, prefiriendo a <b>competidores</b> (Safra e Itaú).</>,
      p2: <>El banco estaba perdiendo cuota de mercado en el momento crucial de la venta.</>
    },
    role: {
      eyebrow: '02 · Discovery',
      title: 'Saliendo de la Oficina e Yendo al Campo',
      p1: <>Después de una investigación de escritorio inconclusa y entrevistas remotas que no revelaron el verdadero dolor del usuario, solicité autorización para una <b>etnografía/investigación de campo</b>.</>,
      p2: <><b>La Realidad de las Tiendas:</b> Yendo directamente a los concesionarios, observé la dinámica frenética de la venta.<br/><br/><b>El "Aha!" Moment:</b> Identifiqué que la barrera no era visual, sino operativa. Mientras que los competidores requerían solo 4 o 5 campos para un pre-análisis, Bradesco requería un formulario completo con casi 20 campos. En el "calor" de la venta, el vendedor priorizaba el camino más rápido y de menor resistencia.</>
    },
    designSystem: {
      eyebrow: '03 · Estrategia y Negociación',
      title: 'La "Pre-Ficha"',
      p1: <>Regresé al banco con el diagnóstico claro y actué como puente entre los equipos de <b>Producto, Tecnología</b> y <b>Legal</b> para viabilizar una solución: reducir drásticamente la fase inicial de la venta y mejorar la entrada de datos sin violar las normas de cumplimiento.</>,
      decisionLabel: 'La Solución y el Flujo',
      decisionP: <><b>La Solución:</b> Implementamos un flujo de Pre-Aprobación de Crédito con solo 4 campos esenciales:
      <ul style={{ margin: '8px 0 16px 20px', paddingLeft: '20px' }}>
        <li>Nombre</li>
        <li>CPF</li>
        <li>Dirección</li>
        <li>Nombre de la Madre</li>
      </ul>
      <b>El Fluxo:</b> Si el crédito era pre-aprovado y el valor satisfacía al cliente, el vendedor se sentía motivado a completar los datos restantes, ya que la venta estaba "garantizada".</>
    },
    discovery: {
      eyebrow: '04 · El Factor Humano',
      title: 'Co-Creación y Compromiso',
      p1: <>La mejor decisión que pude tomar en este proyecto fue el mayor diferenciador: Acercar a los vendedores, para que se sintieran parte de la solución, se sintieran <b>escuchados</b> y, lo más importante, <b>atendidos!</b></>,
      highlights: [
        { icon: '🤝', title: 'Sensación de Pertenencia', desc: 'Acercar a los vendedores al proceso de creación de la solución y mostrarles el progreso hizo que se sintieran acogidos.' },
        { icon: '👥', title: 'Sentimiento de Dueño', desc: 'Al pedir opiniones y mostrar protótipos durante las visitas, convertí a los usuarios en "dueños" de la solución.' },
        { icon: '🗣️', title: 'Marketing Orgánico', desc: 'El sentimiento de pertenencia generó un marketing de "boca a boca" tan fuerte entre los vendedores que la adopción de la herramienta explotó incluso antes de cualquier campaña oficial de publicidad del banco.' }
      ]
    },
    results: {
      eyebrow: '05 · Resultados',
      title: 'Impacto en el Negocio',
      p1: 'El crecimiento orgánico validó la solución incluso antes de la inversión en medios, demostrando que un diseño centrado en el dolor real del usuario es la mejor estrategia de marketing.',
      metrics: [
        { icon: '📈', value: 'Aumento de Conversión: El volumen de solicitudes enviadas por Bradesco creció un 30% justo después de la implementación.' },
        { icon: '⚡', value: 'Eficiencia Operativa: Reducción drástica del tiempo de respuesta en el Punto de Venta (PDV).' },
        { icon: '🎯', value: 'Éxito del MVP: Validado orgánicamente.' },
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
