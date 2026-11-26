import React from 'react';

export const consagradoLocales = {
  'pt-br': {
    hero: {
      tag: 'Projeto Autoral · Ecossistema SaaS',
      tags: ['Product Design', 'React 19', 'Supabase', 'Fintech / FoodTech'],
      subtitle: 'O seu parceiro de rolê: comanda digital no celular, divisão justa na mesa e operação em tempo real para bares e restaurantes.',
      externalBtn: 'Acessar consagrado.app'
    },
    overview: {
      items: [
        { label: 'Produto', value: 'CONSAgrado (consagrado.app)' },
        { label: 'Meu papel', value: 'Founder · Product Designer & Front-end' },
        { label: 'Arquitetura', value: '4 Apps (Landing, B2C, Garçom, Admin)' },
        { label: 'Stack', value: 'React 19, Vite, Tailwind v4, Supabase' },
        { label: 'Domínios', value: 'consagrado.app · b2c.consagrado.app' },
        { label: 'Status', value: 'Em produção (Landing & B2C ativos)' },
      ]
    },
    context: {
      eyebrow: '01 · O Problema',
      title: 'A Fricção da Comanda Tradicional',
      p1: <>Pedir mais uma rodada em um bar lotado ou fechar a conta em grupo ainda depende de bloquinhos de papel, espera pelo garçom e cálculos confusos na hora de dividir.</>,
      p2: <>O <b>CONSAgrado</b> nasceu para eliminar essa fricção sem desumanizar o rolê: o cliente escaneia o QR Code da mesa, pede direto pelo celular e acompanha tudo em tempo real — enquanto o salão e a cozinha operam em sincronia.</>
    },
    ecosystem: {
      eyebrow: '02 · Ecossistema Multi-App',
      title: 'Quatro Interfaces, Uma Única Fonte da Verdade',
      p1: <>Em vez de tentar enfiar cliente, garçom e dono de bar na mesma interface, desenhei uma arquitetura desacoplada sobre <b>Supabase (PostgreSQL + Realtime + RLS)</b> com quatro aplicações dedicadas:</>,
      apps: [
        { icon: 'rocket', title: 'Landing & Comercial B2B', desc: 'Apresentação do produto em consagrado.app e funil comercial para donos de bares em /para-bares.' },
        { icon: 'smartphone', title: 'App do Cliente (B2C)', desc: 'Em b2c.consagrado.app: cardápio instantâneo na mesa, acompanhamento de preparo e checkout individual ou compartilhado.' },
        { icon: 'users', title: 'App do Garçom (Staff)', desc: 'Lançamento rápido no salão, abertura de comanda por CPF (para quem está sem celular/bateria) e gestão de cancelamentos.' },
        { icon: 'layers', title: 'Painel do Bar (B2B Chefia)', desc: 'Configuração de políticas da casa (Pague ao Pedir vs. Comanda Aberta), cardápio, mesas e acompanhamento operacional.' }
      ]
    },
    mechanics: {
      eyebrow: '03 · Regras de Negócio & UX',
      title: 'Jornadas Desenhadas para a Vida Real de Bar',
      p1: <>A experiência foi modelada em cima de cenários reais de salão — desde o casal que quer juntar a conta até a mesa que gira rápido na sexta à noite:</>,
      decisionLabel: 'Mecânicas-Chave do Produto',
      decisionP: <>
        <ul style={{ margin: '8px 0 8px 20px', paddingLeft: '16px', display: 'grid', gap: '10px' }}>
          <li><b>Puxar Comanda de Terceiros:</b> Na tela de fechamento, um usuário pode pagar pelos itens de outra pessoa da mesa — transferindo a responsabilidade e encerrando a comanda dela com recibo individual.</li>
          <li><b>Contribuição Avulsa na Mesa:</b> Permite abater um valor livre (ex: R$ 500 de happy hour) recalculando proporcionalmente o saldo restante dos demais ocupantes.</li>
          <li><b>Identificação Universal por CPF:</b> Clientes sem celular ou sem bateria são atendidos pelo App do Garçom e resgatam o histórico automaticamente ao logar depois.</li>
          <li><b>Regra de Ouro de Cancelamento:</b> Autonomia total no B2C enquanto o item está <code>pending</code>; após entrar em <code>preparing</code> na cozinha, apenas o Staff pode estornar.</li>
          <li><b>Ciclo de Vida da Mesa:</b> Cada sessão possui <code>session_id</code> único. Ao finalizar a mesa, tokens antigos são invalidados para o próximo grupo entrar com sessão zerada.</li>
        </ul>
      </>
    },
    engineering: {
      eyebrow: '04 · Engenharia & Qualidade',
      title: 'Arquitetura Escalável & Testes Automatizados',
      p1: <>Toda a base foi construída com foco em confiabilidade financeira e tempo real: políticas de pagamento e emissão fiscal (NFC-e) projetadas como serviços isolados, Realtime via Supabase e suíte de testes automatizados com Vitest + Testing Library.</>,
      highlights: [
        { icon: 'database', title: 'Supabase Realtime & RLS', desc: 'Sincronização instantânea entre B2C, Garçom e KDS com isolamento estrito por sessão e estabelecimento.' },
        { icon: 'credit', title: 'Modos Pague ao Pedir ou Comanda Aberta', desc: 'O app B2C se adapta dinamicamente à flag configurada pelo dono do bar no painel B2B.' },
        { icon: 'check', title: 'Testes Automatizados em PT-BR', desc: 'Fluxos críticos de comanda, divisão e regras de negócio cobertos por Vitest e Testing Library.' }
      ]
    },
    cta: {
      title: 'Quer conhecer o CONSAgrado de perto?',
      p1: 'Acesse a página oficial no ar ou me chame para conversar sobre produto, UX e arquitetura.',
      btnDown: 'Acessar consagrado.app',
      btnTalk: 'Falar comigo'
    }
  },
  'en': {
    hero: {
      tag: 'Side Project · SaaS Ecosystem',
      tags: ['Product Design', 'React 19', 'Supabase', 'Fintech / FoodTech'],
      subtitle: 'Digital bar tabs on your phone, fair bill splitting at the table, and real-time floor operations for bars and restaurants.',
      externalBtn: 'Visit consagrado.app'
    },
    overview: {
      items: [
        { label: 'Product', value: 'CONSAgrado (consagrado.app)' },
        { label: 'Role', value: 'Founder · Product Designer & Front-end' },
        { label: 'Architecture', value: '4 Apps (Landing, B2C, Waiter, Admin)' },
        { label: 'Stack', value: 'React 19, Vite, Tailwind v4, Supabase' },
        { label: 'Domains', value: 'consagrado.app · b2c.consagrado.app' },
        { label: 'Status', value: 'Live in production (Landing & B2C)' },
      ]
    },
    context: {
      eyebrow: '01 · The Problem',
      title: 'Friction in Traditional Bar Tabs',
      p1: <>Ordering another round in a crowded bar or closing a group tab still relies on paper slips, waiting for staff, and messy manual math.</>,
      p2: <><b>CONSAgrado</b> removes that friction without losing the social vibe: guests scan the table QR code, order from their phones, and track everything live while floor staff and kitchen stay synced.</>
    },
    ecosystem: {
      eyebrow: '02 · Multi-App Ecosystem',
      title: 'Four Interfaces, One Source of Truth',
      p1: <>Instead of cramming guests, waiters, and bar owners into a single screen, I designed a decoupled architecture on <b>Supabase (PostgreSQL + Realtime + RLS)</b> with four dedicated apps:</>,
      apps: [
        { icon: 'rocket', title: 'Landing & B2B Funnel', desc: 'Product showcase at consagrado.app and commercial onboarding for bar owners at /para-bares.' },
        { icon: 'smartphone', title: 'Guest App (B2C)', desc: 'At b2c.consagrado.app: instant table menu, prep tracking, and solo or shared checkout.' },
        { icon: 'users', title: 'Waiter App (Staff)', desc: 'Fast floor ordering, CPF-linked tabs for guests without battery/phones, and item cancellation control.' },
        { icon: 'layers', title: 'Bar Admin (B2B)', desc: 'House policy toggles (Pay-as-you-order vs. Open Tab), menu management, tables, and live operations.' }
      ]
    },
    mechanics: {
      eyebrow: '03 · Business Rules & UX',
      title: 'Journeys Built for Real Bar Operations',
      p1: <>The product models real-world hospitality edge cases — from couples merging tabs to high-turnover Friday night tables:</>,
      decisionLabel: 'Core Product Mechanics',
      decisionP: <>
        <ul style={{ margin: '8px 0 8px 20px', paddingLeft: '16px', display: 'grid', gap: '10px' }}>
          <li><b>Cover Someone Else’s Tab:</b> At checkout, a guest can pull and pay for another person’s items at the table, settling their tab with an individual receipt.</li>
          <li><b>Custom Table Contribution:</b> Allows anyone to drop a flat amount into the table total, proportionally recalculating the remaining split.</li>
          <li><b>Universal CPF Identification:</b> Guests without a phone can still have tabs opened by staff and automatically claim their history later.</li>
          <li><b>Kitchen Cancellation Lock:</b> Full self-service cancellation while <code>pending</code>; once <code>preparing</code> starts, only staff can void items.</li>
          <li><b>Clean Table Lifecycle:</b> Each table opening uses a unique <code>session_id</code>, invalidating old tokens on close so the next group starts fresh.</li>
        </ul>
      </>
    },
    engineering: {
      eyebrow: '04 · Engineering & Quality',
      title: 'Scalable Architecture & Automated Tests',
      p1: <>Built for financial reliability and real-time sync: payment gateways and fiscal receipts (NFC-e) designed as isolated services, Supabase Realtime, and automated Vitest + Testing Library suites.</>,
      highlights: [
        { icon: 'database', title: 'Supabase Realtime & RLS', desc: 'Instant sync across B2C, Waiter, and KDS with strict tenant and session isolation.' },
        { icon: 'credit', title: 'Pay-First or Open Tab Modes', desc: 'The B2C client adapts dynamically to the bar’s operational policy flag.' },
        { icon: 'check', title: 'Automated Test Coverage', desc: 'Critical tab, splitting, and business rule flows covered by Vitest and Testing Library.' }
      ]
    },
    cta: {
      title: 'Want to see CONSAgrado live?',
      p1: 'Visit the live website or reach out to discuss product strategy, UX, and engineering.',
      btnDown: 'Visit consagrado.app',
      btnTalk: 'Get in touch'
    }
  },
  'es': {
    hero: {
      tag: 'Proyecto Propio · Ecosistema SaaS',
      tags: ['Product Design', 'React 19', 'Supabase', 'Fintech / FoodTech'],
      subtitle: 'Comanda digital en el celular, división justa en la mesa y operación en tiempo real para bares y restaurantes.',
      externalBtn: 'Visitar consagrado.app'
    },
    overview: {
      items: [
        { label: 'Producto', value: 'CONSAgrado (consagrado.app)' },
        { label: 'Rol', value: 'Founder · Product Designer & Front-end' },
        { label: 'Arquitectura', value: '4 Apps (Landing, B2C, Mesero, Admin)' },
        { label: 'Stack', value: 'React 19, Vite, Tailwind v4, Supabase' },
        { label: 'Dominios', value: 'consagrado.app · b2c.consagrado.app' },
        { label: 'Estado', value: 'En producción (Landing y B2C activos)' },
      ]
    },
    context: {
      eyebrow: '01 · El Problema',
      title: 'Fricción en la Comanda Tradicional',
      p1: <>Pedir otra ronda en un bar lleno o cerrar la cuenta en grupo sigue dependiendo de papelitos, esperas al mesero y cuentas confusas.</>,
      p2: <><b>CONSAgrado</b> elimina esa fricción sin perder la esencia social: el cliente escanea el QR de la mesa, pide desde su celular y sigue todo en tiempo real.</>
    },
    ecosystem: {
      eyebrow: '02 · Ecosistema Multi-App',
      title: 'Cuatro Interfaces, Una Única Fuente de Verdad',
      p1: <>En lugar de mezclar clientes, meseros y dueños en una sola pantalla, diseñé una arquitectura desacoplada sobre <b>Supabase (PostgreSQL + Realtime + RLS)</b> con cuatro apps dedicadas:</>,
      apps: [
        { icon: 'rocket', title: 'Landing & Comercial B2B', desc: 'Presentación en consagrado.app y embudo comercial para dueños de bares en /para-bares.' },
        { icon: 'smartphone', title: 'App del Cliente (B2C)', desc: 'En b2c.consagrado.app: menú instantáneo en la mesa, seguimiento de cocina y checkout individual o grupal.' },
        { icon: 'users', title: 'App del Mesero (Staff)', desc: 'Toma rápida en salón, comandas por documento para clientes sin batería y control de cancelaciones.' },
        { icon: 'layers', title: 'Panel del Bar (B2B)', desc: 'Políticas del local (Paga al Pedir vs. Comanda Abierta), menú, mesas y operación en vivo.' }
      ]
    },
    mechanics: {
      eyebrow: '03 · Reglas de Negocio & UX',
      title: 'Jornadas Diseñadas para Bares Reales',
      p1: <>El producto resuelve escenarios reales de salón — desde parejas que unifican cuenta hasta rotación rápida de mesas:</>,
      decisionLabel: 'Mecánicas Clave del Producto',
      decisionP: <>
        <ul style={{ margin: '8px 0 8px 20px', paddingLeft: '16px', display: 'grid', gap: '10px' }}>
          <li><b>Cubrir Comanda de Terceros:</b> En el cierre, un usuario puede pagar los ítems de otra persona de la mesa, cerrando su cuenta con recibo individual.</li>
          <li><b>Contribución Libre en Mesa:</b> Permite abonar un monto fijo al total de la mesa, recalculando proporcionalmente el saldo restante.</li>
          <li><b>Identificación Universal por Documento:</b> Clientes sin celular pueden ser atendidos por el staff y recuperar su historial luego.</li>
          <li><b>Bloqueo de Cancelación en Cocina:</b> Autonomía en <code>pending</code>; una vez en <code>preparing</code>, solo el staff puede anular.</li>
          <li><b>Ciclo de Vida de la Mesa:</b> Cada apertura genera un <code>session_id</code> único, invalidando tokens anteriores al cerrar.</li>
        </ul>
      </>
    },
    engineering: {
      eyebrow: '04 · Ingeniería & Calidad',
      title: 'Arquitectura Escalable & Pruebas Automatizadas',
      p1: <>Construido para confiabilidad financiera y tiempo real: pagos y facturación fiscal como servicios aislados, Supabase Realtime y pruebas con Vitest.</>,
      highlights: [
        { icon: 'database', title: 'Supabase Realtime & RLS', desc: 'Sincronización instantánea entre B2C, Mesero y KDS con aislamiento por sesión.' },
        { icon: 'credit', title: 'Modos Paga al Pedir o Comanda Abierta', desc: 'La app B2C se adapta dinámicamente a la configuración del bar.' },
        { icon: 'check', title: 'Pruebas Automatizadas', desc: 'Flujos críticos de comanda y división cubiertos por Vitest y Testing Library.' }
      ]
    },
    cta: {
      title: '¿Quieres conocer CONSAgrado en vivo?',
      p1: 'Visita la página oficial o conversemos sobre producto, UX y arquitectura.',
      btnDown: 'Visitar consagrado.app',
      btnTalk: 'Hablar conmigo'
    }
  }
};
