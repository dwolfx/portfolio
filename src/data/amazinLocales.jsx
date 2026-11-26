import React from 'react';

export const amazinLocales = {
  'pt-br': {
    hero: {
      tag: 'Projeto Sob Medida · Sistema Web & Gestão Jurídica',
      tags: ['Product Design', 'Next.js 15', 'TypeScript', 'Design de Balcão'],
      subtitle: 'Sistema web autônomo desenvolvido sob medida para substituir um legado em Microsoft Access — unindo vitrine, locação por CPF, 12 medidas de alfaiataria e impressão dupla oficial.'
    },
    overview: {
      items: [
        { label: 'Cliente', value: 'Amazin Trages a Rigor' },
        { label: 'Meu papel', value: 'Product Designer & Full-stack Engineer' },
        { label: 'Desafio', value: 'Migrar sistema legado desktop / MS Access' },
        { label: 'Stack', value: 'Next.js 15, React 19, TypeScript, Tailwind v4' },
        { label: 'Dados', value: 'Supabase + Motor de Contratos Tipado' },
        { label: 'Qualidade', value: 'Testes unitários Vitest no motor jurídico' },
      ]
    },
    context: {
      eyebrow: '01 · O Problema',
      title: 'Saindo do Microsoft Access para a Operação Web de Balcão',
      p1: <>A operação da loja dependia de um sistema desktop antigo em <b>Microsoft Access</b> para cadastrar clientes, controlar prazos de prova/devolução e imprimir contratos e canhotos de alfaiataria.</>,
      p2: <>O objetivo foi criar um sistema web moderno, rápido e pensado para o <b>balcão iluminado da loja</b> (Light Mode padrão, contraste alto e zero fricção no atendimento presencial), mantendo 100% da segurança jurídica exigida pela operação.</>
    },
    ux: {
      eyebrow: '02 · UX de Atendimento & Alfaiataria',
      title: 'Locação Inteligente por CPF em Segundos',
      p1: <>Em vez de obrigar a vendedora a redigitar tudo a cada nova locação de terno ou vestido, o fluxo foi desenhado em torno da agilidade no balcão:</>,
      highlights: [
        { icon: 'users', title: 'Busca Instantânea por CPF', desc: 'Ao digitar os 11 dígitos, o sistema carrega Nome, RG, contato de referência e todas as 12 medidas de alfaiataria salvas.' },
        { icon: 'zap', title: 'Auto-CEP & Cálculo de Saldo', desc: 'Integração automática com ViaCEP e cálculo em tempo real de Sinal vs. Saldo restante sem erros manuais.' },
        { icon: 'shirt', title: 'Importação do Legado Access', desc: 'Modal dedicado para migrar clientes e histórico do banco antigo sem perda de registros.' }
      ]
    },
    printing: {
      eyebrow: '03 · Impressão Dupla & Blindagem Jurídica',
      title: 'Contrato A4 Oficial + Canhoto de Alfaiataria',
      p1: <>Cada locação gera dois documentos prontos para impressão térmica/A4 com layout fiel à operação física da loja:</>,
      decisionLabel: 'Arquitetura Documental & Automação',
      decisionP: <>
        <ul style={{ margin: '8px 0 8px 20px', paddingLeft: '16px', display: 'grid', gap: '10px' }}>
          <li><b>Contrato Jurídico A4 (Cláusulas 01 a 08):</b> Reproduz integralmente as cláusulas legais (Art. 647 CC, Art. 630/631 CC, Art. 168 CPB, multa diária e valor de reposição), preparado inclusive para eventual instrução no Juizado Especial Cível.</li>
          <li><b>Canhoto da Roupa (12 Medidas):</b> Etiqueta operacional que acompanha o cabide com Manga, Cintura, Colarinho, Quadril, Perna, Paletó, Calça, Camisa, Sapato, Colete, Gravata, Ajustes e Vendedor.</li>
          <li><b>Motor de E-mails & Avisos:</b> Central de configurações para disparo de contrato no fechamento, lembrete de prova, aviso pré-devolução e notificação de atraso.</li>
        </ul>
      </>
    },
    cta: {
      title: 'Quer ver como transformo sistemas legados em produtos modernos?',
      p1: 'Me chame para conversar sobre arquitetura front-end, UX para operações físicas e design systems sob medida.',
      btnTalk: 'Falar comigo'
    }
  },
  'en': {
    hero: {
      tag: 'Custom Product · Web System & Legal Engine',
      tags: ['Product Design', 'Next.js 15', 'TypeScript', 'Counter UX'],
      subtitle: 'Custom-built web platform replacing a legacy Microsoft Access desktop app — combining catalog, CPF-based rentals, 12 tailoring measurements, and dual official printing.'
    },
    overview: {
      items: [
        { label: 'Client', value: 'Amazin Trages a Rigor' },
        { label: 'Role', value: 'Product Designer & Full-stack Engineer' },
        { label: 'Challenge', value: 'Replace legacy MS Access desktop software' },
        { label: 'Stack', value: 'Next.js 15, React 19, TypeScript, Tailwind v4' },
        { label: 'Data', value: 'Supabase + Typed Contract Engine' },
        { label: 'Quality', value: 'Vitest unit tests on legal contract engine' },
      ]
    },
    context: {
      eyebrow: '01 · The Problem',
      title: 'Moving from Microsoft Access to Modern Counter Operations',
      p1: <>Daily store operations relied on an aging <b>Microsoft Access</b> desktop database to register customers, track fitting/return dates, and print rental contracts and tailoring slips.</>,
      p2: <>The goal was to build a fast web platform tailored for a <b>bright retail counter</b> (default Light Mode, high legibility, zero friction during in-person fittings) while preserving full legal compliance.</>
    },
    ux: {
      eyebrow: '02 · Counter UX & Tailoring',
      title: 'Instant CPF-Driven Rental Checkout',
      p1: <>Instead of forcing staff to re-enter customer details on every suit or gown rental, the flow centers on counter speed:</>,
      highlights: [
        { icon: 'users', title: 'Instant CPF Lookup', desc: 'Entering an 11-digit CPF loads customer IDs, reference contacts, and all 12 saved tailoring measurements.' },
        { icon: 'zap', title: 'Auto-ZIP & Balance Engine', desc: 'Automatic address lookup via ViaCEP and real-time deposit vs. remaining balance calculation.' },
        { icon: 'shirt', title: 'Legacy Access Importer', desc: 'Built-in importer modal to migrate historical records from the old desktop database cleanly.' }
      ]
    },
    printing: {
      eyebrow: '03 · Dual Printing & Legal Protection',
      title: 'Official A4 Contract + Tailoring Garment Slip',
      p1: <>Every completed rental generates two print-ready documents matching the store’s physical workflow:</>,
      decisionLabel: 'Document Engine & Notifications',
      decisionP: <>
        <ul style={{ margin: '8px 0 8px 20px', paddingLeft: '16px', display: 'grid', gap: '10px' }}>
          <li><b>A4 Legal Contract (Clauses 01–08):</b> Reproduces all legal clauses, daily late fees, and replacement values for small-claims enforceability.</li>
          <li><b>Tailoring Garment Slip (12 Measurements):</b> Hanger tag covering sleeve, waist, collar, hip, leg, jacket, trousers, shirt, shoes, vest, tie, alterations, and salesperson.</li>
          <li><b>Automated Email Rules:</b> Configurable triggers for contract delivery, fitting reminders, return alerts, and overdue notices.</li>
        </ul>
      </>
    },
    cta: {
      title: 'Want to modernize a legacy operation?',
      p1: 'Reach out to talk about front-end architecture, operational UX, and custom product design.',
      btnTalk: 'Get in touch'
    }
  },
  'es': {
    hero: {
      tag: 'Proyecto a Medida · Sistema Web & Motor Jurídico',
      tags: ['Product Design', 'Next.js 15', 'TypeScript', 'UX de Mostrador'],
      subtitle: 'Sistema web autónomo creado a medida para reemplazar un legado en Microsoft Access — uniendo catálogo, alquiler por documento, 12 medidas de sastrería e impresión doble oficial.'
    },
    overview: {
      items: [
        { label: 'Cliente', value: 'Amazin Trages a Rigor' },
        { label: 'Rol', value: 'Product Designer & Full-stack Engineer' },
        { label: 'Desafío', value: 'Migrar sistema legado desktop / MS Access' },
        { label: 'Stack', value: 'Next.js 15, React 19, TypeScript, Tailwind v4' },
        { label: 'Datos', value: 'Supabase + Motor de Contratos Tipado' },
        { label: 'Calidad', value: 'Pruebas unitarias Vitest en motor jurídico' },
      ]
    },
    context: {
      eyebrow: '01 · El Problema',
      title: 'De Microsoft Access a una Operación Web de Mostrador',
      p1: <>La tienda dependía de una base antigua en <b>Microsoft Access</b> para registrar clientes, controlar pruebas/devoluciones e imprimir contratos y etiquetas de sastrería.</>,
      p2: <>Diseñamos una plataforma web rápida pensada para el <b>mostrador físico</b> (Light Mode por defecto, alto contraste y cero fricción), manteniendo total respaldo jurídico.</>
    },
    ux: {
      eyebrow: '02 · UX de Atención & Sastrería',
      title: 'Alquiler Inteligente en Segundos',
      p1: <>El flujo elimina la recaptura manual de datos en cada nuevo alquiler:</>,
      highlights: [
        { icon: 'users', title: 'Búsqueda Instantánea por Documento', desc: 'Carga automáticamente datos personales, contacto de referencia y las 12 medidas de sastrería guardadas.' },
        { icon: 'zap', title: 'Auto-Dirección & Cálculo de Saldo', desc: 'Autocompletado postal y cálculo en tiempo real de seña vs. saldo restante.' },
        { icon: 'shirt', title: 'Importación del Legado Access', desc: 'Herramienta integrada para migrar el historial antiguo sin pérdida de datos.' }
      ]
    },
    printing: {
      eyebrow: '03 · Impresión Doble & Respaldo Jurídico',
      title: 'Contrato A4 Oficial + Etiqueta de Sastrería',
      p1: <>Cada alquiler genera dos documentos listos para imprimir:</>,
      decisionLabel: 'Motor Documental & Automatización',
      decisionP: <>
        <ul style={{ margin: '8px 0 8px 20px', paddingLeft: '16px', display: 'grid', gap: '10px' }}>
          <li><b>Contrato Jurídico A4 (Cláusulas 01 a 08):</b> Reproduce todas las cláusulas legales, multas diarias y valores de reposición.</li>
          <li><b>Etiqueta de Prenda (12 Medidas):</b> Ficha operativa para percha con manga, cintura, cuello, cadera, pantalón, saco, camisa, zapatos, chaleco, corbata, ajustes y vendedor.</li>
          <li><b>Reglas de Correo Automático:</b> Envío de contrato, recordatorio de prueba, aviso previo y notificación de atraso.</li>
        </ul>
      </>
    },
    cta: {
      title: '¿Quieres transformar un sistema legado en producto moderno?',
      p1: 'Conversemos sobre arquitectura front-end, UX operativo y diseño de producto a medida.',
      btnTalk: 'Hablar conmigo'
    }
  }
};
