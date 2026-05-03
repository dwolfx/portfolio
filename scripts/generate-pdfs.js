/**
 * generate-pdfs.js
 *
 * Gera PDFs visuais + text-extractable dos cases.
 *
 * Estratégia em 2 passos:
 *   1. Puppeteer renderiza o site real → PDF visual com imagens e design
 *   2. pdf-lib injeta camada de texto invisível (Helvetica padrão, opacity 0)
 *      com todo o conteúdo textual do case por cima
 *
 * Uso: node scripts/generate-pdfs.js <case-slug>
 *   Ex: node scripts/generate-pdfs.js vivo-pay
 *   Ex: node scripts/generate-pdfs.js sportingbet
 */

import puppeteer from 'puppeteer';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

const caseSlug = process.argv[2];
if (!caseSlug) {
  console.error('❌ Informe o slug do case: node scripts/generate-pdfs.js vivo-pay');
  process.exit(1);
}

// ─── CONTEÚDO TEXTUAL (camada invisível para busca/copy) ─────────────────────

const allTextContent = {
  'vivo-pay': {
    pt: `Victor Morais | Case VivoPay × ItaúCard
Estudo de Caso · Product Design
Fintech · Cartão de Crédito · B2C · Mobile · App
Empresa: Vivo (Telefônica Brasil) · Papel: Product Designer Especialista · Parceiro: Banco Itaú · Período: Fev/2023 – Jul/2024

01. Contexto — O Desafio
A Vivo possuía soluções financeiras robustas, mas fragmentadas. O usuário que tinha o cartão VivoPay Itaú precisava sair do app da Vivo e acessar o app do Itaú para gerenciar seu cartão. Era uma fricção que custava à Vivo o controle sobre a experiência e a retenção dentro do seu ecossistema.
O desafio não era resolver uma dor explícita do usuário, mas algo mais sofisticado: criar uma experiência tão completa dentro do app Vivo que ele não precisasse mais sair.

02. Papel — Fui contratado para construir uma área que não existia
Entrei como um dos primeiros Product Designers Especialistas da vertical financeira da Vivo. Coube a mim estruturar os ritos de design, definir o modelo de colaboração com parceiros externos e conduzir três jornadas críticas: Cartão de Crédito (Itaú), Seguros (Porto Seguro) e Conta Digital.
Neste case, apresento a jornada de Cartão de Crédito que foi a mais complexa, pois exigiu negociação técnica direta com o banco Itaú para viabilizar uma integração que nenhum outro parceiro havia feito.

03. Discovery — Descobrindo o caminho certo
O processo de discovery revelou que o modelo white-label, padrão adotado por outros parceiros do Itaú, não entregaria o SuperApp que a Vivo buscava. Identifiquei isso no benchmark e levei para a mesa: chegamos à conclusão que a integração via API era o melhor caminho, garantindo controle total da interface e mantendo o usuário dentro do ecossistema.
A decisão estratégica: as especificações técnicas das APIs eram definidas pelo Itaú, enquanto conduzi dinâmicas internas para responder: o que nossa solução precisa ser? O resultado foi o escopo do MVP: Extrato, dados do cartão e pagamento de fatura.

04. Conceituação — Do conceito à realidade
A ideia inicial era um cartão grande e impactante dentro do app. Ao alinhar com o time de DesignOps, identifiquei que alterações estruturais no Design System global da Telefônica levariam meses para aprovação. Tomamos a decisão de trabalhar dentro dos componentes existentes, priorizando time-to-market sem gerar débito técnico de design.

05. Validação — Testamos, ouvimos, ajustamos
Rodada 1 de testes: Com a V0 pronta, levamos ao público. Os testes revelaram que os usuários queriam mais do que apenas visualizar dados e dois pontos críticos emergiram: a necessidade de Cartão Virtual e de exportação da fatura em PDF.
Cartão Virtual: O Itaú não conseguiria entregar a API a tempo. Implementamos um disclaimer estratégico no fluxo, com isso, na segunda rodada de testes, os usuários já não questionavam sobre a funcionalidade.
Exportação em PDF: Articulamos com o Itaú a inclusão na API ainda para o MVP. O usuário nem perguntava, simplesmente usava.

06. Entrega — A jornada final
O produto entregue cobria o fluxo completo: acesso pelo menu Pay → identificação do cartão → KYC → home do cartão → fatura → pagamento.

07. Resultados — Garantindo que o produto nascesse rastreável
100% dos pontos críticos da V0 sanados na V1.
Tracking completo via GA4 em todos os touchpoints.
Sessões monitoradas via Maze em adoção gradual.

08. Visão de Futuro
Cartão Virtual dentro do app.
Pagamento direto via PIX ou conta Vivo.
Contratação de novo cartão ou adicional.
Parcelamento de faturas.`,

    en: `Victor Morais | Case VivoPay × ItaúCard
Case Study · Product Design
Fintech · Credit Card · B2C · Mobile · App
Company: Vivo (Telefônica Brasil) · Role: Expert Product Designer · Partner: Banco Itaú · Period: Feb/2023 – Jul/2024

01. Context — The Challenge
Vivo had robust but fragmented financial solutions. Users with the VivoPay Itaú card had to leave the Vivo app and open the Itaú app to manage their card. This was a friction that cost Vivo control over the experience and retention within its ecosystem.
The challenge was not just solving an explicit user pain point, but something more sophisticated: creating an experience so complete within the Vivo app that users would never need to leave.

02. Role — I was hired to build an area that did not exist
I joined as one of the first Expert Product Designers for Vivos financial vertical. My responsibility was to structure design rituals, define collaboration models with external partners, and lead three critical journeys: Credit Card (Itau), Insurance (Porto Seguro), and Digital Account.
In this case study, I present the Credit Card journey, which was the most complex as it required direct technical negotiation with Banco Itau to enable an integration that no other partner had done before.

03. Discovery — Discovering the right path
The discovery process revealed that the white-label model, the standard adopted by Itaus other partners, would not deliver the SuperApp Vivo was looking for. I identified this in the benchmark and brought it to the table: we concluded that API integration was the best path, guaranteeing total interface control and keeping users within the ecosystem.
The strategic decision: the technical API specifications were defined by Itau, while I led internal dynamics to answer: what does our solution need to be? The result was the MVP scope: Statement, card details, and invoice payment.

04. Concept — From concept to reality
The initial idea was a large, impactful card within the app. After aligning with the DesignOps team, I identified that structural changes to Telefonicas global Design System would take months to approve. We decided to work within existing components, prioritizing time-to-market without generating design technical debt.

05. Validation — We tested, listened, and adjusted
Round 1 of testing: With V0 ready, we took it to the public. Testing revealed that users wanted more than just visualizing data, and two critical points emerged: the need for a Virtual Card and PDF invoice export.
Virtual Card: Itau would not be able to deliver the API in time. We implemented a strategic disclaimer in the flow, so in the second testing round, users no longer questioned the feature.
PDF Export: We coordinated with Itau to include it in the API for the MVP. Users did not even ask, they simply used it.

06. Delivery — The final journey
The delivered product covered the complete flow: access via the Pay menu, card identification, KYC, card home, invoice, payment.

07. Results — Ensuring the product was born traceable
100% of V0 critical points resolved in V1.
Complete tracking via GA4 across all touchpoints.
Sessions monitored via Maze during gradual adoption.

08. Future Vision
In-app Virtual Card.
Direct payment via PIX or Vivo account.
New or additional card requests.
Invoice installments.`,

    es: `Victor Morais | Case VivoPay × ItaúCard
Estudio de Caso · Product Design
Fintech · Tarjeta de Credito · B2C · Mobile · App
Empresa: Vivo (Telefonica Brasil) · Rol: Product Designer Experto · Socio: Banco Itau · Periodo: Feb/2023 – Jul/2024

01. Contexto — El Desafio
Vivo tenia soluciones financieras robustas pero fragmentadas. El usuario con tarjeta VivoPay Itau tenia que salir de la app de Vivo y abrir la app de Itau para gestionar su tarjeta. Esto era una friccion que le costaba a Vivo el control sobre la experiencia y la retencion dentro de su ecosistema.
El desafio no era solo resolver un problema explicito del usuario, sino algo mas sofisticado: crear una experiencia tan completa dentro de la app de Vivo que el usuario ya no necesitara salir.

02. Rol — Fui contratado para construir un area que no existia
Ingrese como uno de los primeros Product Designers Expertos de la vertical financiera de Vivo. Mi responsabilidad fue estructurar los ritos de diseno, definir modelos de colaboracion con socios externos y liderar tres viajes criticos: Tarjeta de Credito (Itau), Seguros (Porto Seguro) y Cuenta Digital.
En este caso de estudio, presento el viaje de la Tarjeta de Credito, que fue el mas complejo ya que requirio negociacion tecnica directa con Banco Itau para viabilizar una integracion que ningun otro socio habia logrado.

03. Discovery — Descubriendo el camino correcto
El proceso de discovery revelo que el modelo white-label, el estandar adoptado por otros socios de Itau, no entregaria la SuperApp que Vivo buscaba. Identifique esto en el benchmark y lo lleve a la mesa: llegamos a la conclusion de que la integracion via API era el mejor camino, garantizando control total de la interfaz y manteniendo al usuario en el ecosistema.
La decision estrategica: las especificaciones tecnicas de las APIs fueron definidas por Itau, mientras lidere dinamicas internas para responder: que necesita ser nuestra solucion? El resultado fue el alcance del MVP: Extracto, datos de la tarjeta y pago de factura.

04. Concepto — Del concepto a la realidad
La idea inicial era una tarjeta grande e impactante dentro de la app. Tras alinearme con el equipo de DesignOps, identifique que cambios estructurales al Design System global de Telefonica tardarian meses en aprobarse. Decidimos trabajar con los componentes existentes, priorizando el time-to-market sin generar deuda tecnica de diseno.

05. Validacion — Probamos, escuchamos y ajustamos
Ronda 1 de pruebas: Con la V0 lista, la llevamos al publico. Las pruebas revelaron que los usuarios querian mas que solo visualizar datos, y surgieron dos puntos criticos: la necesidad de una Tarjeta Virtual y exportacion de la factura en PDF.
Tarjeta Virtual: Itau no podria entregar la API a tiempo. Implementamos un aviso estrategico en el flujo, asi en la segunda ronda de pruebas, los usuarios ya no cuestionaban la funcionalidad.
Exportacion en PDF: Coordinamos con Itau para incluirlo en la API para el MVP. El usuario ni preguntaba, simplemente lo usaba.

06. Entrega — El viaje final
El producto entregado cubria el flujo completo: acceso por el menu Pay, identificacion de tarjeta, KYC, home de tarjeta, factura, pago.

07. Resultados — Garantizando que el producto naciera rastreable
100% de puntos criticos de V0 resueltos en V1.
Tracking completo via GA4 en todos los touchpoints.
Sesiones monitoreadas via Maze en adopcion gradual.

08. Vision a Futuro
Tarjeta Virtual dentro de la app.
Pago directo via PIX o cuenta Vivo.
Contratacion de tarjeta nueva o adicional.
Cuotas de facturas.`
  },

  'sportingbet': {
    pt: `Victor Morais | Case Sportingbet — Tropicalizacao e Lideranca de Mercado
Estudo de Caso · Product Design
Betting · Regulamentacao · KYC · UI/UX · Mobile
Empresa: Entain (Sportingbet, BetMGM, Betboo) · Papel: Senior Product Designer · Estrategia: Mobile-First

01. Contexto — A Corrida pela Regulamentacao Global
Em 2024, com a nova Lei de Apostas no Brasil, fui selecionado para integrar um grupo de elite de 10 especialistas na Entain (Sportingbet, BetMGM e Betboo). Minha missao foi participar da tropicalizacao dessas marcas, atuando como ponte entre nos e os times tecnicos que ficavam na India e Canada.
A dinamica exigiu comunicacao fluida em ingles e gestao intercultural para manter o padrao global do grupo enquanto adaptavamos o produto para a realidade brasileira.

02. Estrategia Mobile-First — O Comportamento Brasileiro
Ao contrario de mercados maduros na Europa e EUA, onde o desktop ainda possui uma fatia relevante, o Brasil e um mercado estritamente mobile-first.
Com aproximadamente 80% a 90% dos apostadores brasileiros utilizando exclusivamente o smartphone para jogar (Fonte: Mobile Time/Opinion Box e Datafolha), meu foco foi garantir uma experiencia mobile sem friccoes, com performance otimizada para conexoes variadas e ausencia total de bugs.

03. Meu Papel — KYC e Seguranca Transacional
Estive em frentes criticas para a viabilidade do negocio, com foco especial na Localizacao de Pagamentos (PIX).
Como o PIX e uma exclusividade local, desenhei fluxos com amarras de seguranca anti-fraude: depositos e saques permitidos exclusivamente via contas vinculadas ao CPF do titular, combatendo a lavagem de dinheiro.
KYC Flow: Estruturacao rigorosa da verificacao de identidade para conformidade governamental.
PIX Strategy: Adaptacao do sistema de pagamentos com validacao de titularidade em tempo real.
Anti-Fraud: Implementacao de amarras financeiras blindadas para integridade da plataforma.

04. Discovery e Validacao Data-Driven
Validei os fluxos e pude revisa-los usando o Maze, garantindo que as travas de seguranca nao fossem um problema e que fossem compreendidas como um beneficio de seguranca e nao uma barreira.
Monitorei o comportamento via GA4, otimizando o funil de cadastro e o time-to-market do primeiro deposito. A integracao com a Unico para biometria facial tornou o KYC robusto e agil.

05. Marco Historico — 1o Lugar na Aprovacao
O rigor tecnico no design resultou em um marco sem precedentes: a Sportingbet foi a 1a casa de apostas a ser oficialmente aprovada para operar no Brasil em 1o de janeiro de 2025.
Fomos a 4a a ser avaliada, mas a primeira a receber o sinal verde, gracas a precisao dos fluxos de conformidade apresentados ao governo.

06. VIP Experience e Culturalizacao
Estruturei a area VIP de Cassino, plugando provedores globais em uma interface intuitiva e adaptada ao vocabulario brasileiro.
O lancamento com o slogan "Faz o teu nome" conectou a robustez tecnica do produto a paixao cultural do brasileiro pelas apostas e esportes.

07. Resultados — Lideranca Consolidada
Pioneirismo: Primeira licenca de operacao regulamentada no Brasil.
Seguranca: Ecossistema financeiro blindado com validacao de CPF.
Engajamento: Experiencia mobile otimizada com alta retencao.`,

    en: `Victor Morais | Case Sportingbet — Tropicalization and Market Leadership
Case Study · Product Design
Betting · Regulation · KYC · UI/UX · Mobile
Company: Entain (Sportingbet, BetMGM, Betboo) · Role: Senior Product Designer · Strategy: Mobile-First

01. Context — The Race for Global Regulation
In 2024, with the new Betting Law in Brazil, I was selected to join an elite group of 10 specialists at Entain (Sportingbet, BetMGM, and Betboo). My mission was to participate in the tropicalization of these brands, acting as a bridge between us and the technical teams based in India and Canada.
The dynamic required fluent English communication and intercultural management to maintain the groups global standards while adapting the product to the Brazilian reality.

02. Mobile-First Strategy — The Brazilian Behavior
Unlike mature markets in Europe and the USA, where desktop still has a relevant share, Brazil is a strictly mobile-first market.
With approximately 80% to 90% of Brazilian bettors using exclusively smartphones (Source: Mobile Time/Opinion Box and Datafolha), my focus was on ensuring a frictionless mobile experience, with optimized performance for varied connections and zero bugs.

03. My Role — KYC and Transactional Security
I was in critical fronts for business viability, with a special focus on Payment Localization (PIX).
Since PIX is a local exclusivity, I designed flows with anti-fraud safeguards: deposits and withdrawals allowed exclusively via accounts linked to the holders CPF, combating money laundering.
KYC Flow: Rigorous identity verification structuring for government compliance.
PIX Strategy: Payment system adaptation with real-time ownership validation.
Anti-Fraud: Implementation of armored financial safeguards for platform integrity.

04. Data-Driven Discovery and Validation
I validated the flows and reviewed them using Maze, ensuring security locks were not an issue and were understood as a security benefit rather than a barrier.
I monitored behavior via GA4, optimizing the registration funnel and time-to-market of the first deposit. Integration with Unico for facial biometrics made the KYC robust and agile.

05. Historical Milestone — 1st Place in Approval
The technical rigor in the design resulted in an unprecedented milestone: Sportingbet was the 1st betting house to be officially approved to operate in Brazil on January 1, 2025.
We were the 4th to be evaluated by the government but the first to receive the green light, thanks to the precision of the compliance flows presented.

06. VIP Experience and Culturalization
I structured the VIP Casino area, plugging global providers into an intuitive interface adapted to the Brazilian vocabulary.
The launch with the slogan "Faz o teu nome" (Make your name) connected the products technical robustness to the Brazilian cultural passion for sports and betting.

07. Results — Consolidated Leadership
Pioneering: First regulated operating license in Brazil.
Security: Armored financial ecosystem with CPF validation.
Engagement: Optimized mobile experience with high retention.`,

    es: `Victor Morais | Case Sportingbet — Tropicalizacion y Liderazgo de Mercado
Estudio de Caso · Product Design
Betting · Regulacion · KYC · UI/UX · Mobile
Empresa: Entain (Sportingbet, BetMGM, Betboo) · Rol: Senior Product Designer · Estrategia: Mobile-First

01. Contexto — La Carrera por la Regulacion Global
En 2024, con la nueva Ley de Apuestas en Brasil, fui seleccionado para integrar un grupo de elite de 10 especialistas en Entain (Sportingbet, BetMGM y Betboo). Mi mision fue participar en la tropicalizacion de estas marcas, actuando como puente entre nosotros y los equipos tecnicos con sede en India y Canada.
La dinamica exigio una comunicacion fluida en ingles y una gestion intercultural para mantener el estandar global del grupo mientras adaptabamos el producto a la realidad brasilena.

02. Estrategia Mobile-First — El Comportamiento Brasileno
A diferencia de los mercados maduros en Europa y EE. UU., donde el escritorio todavia tiene una participacion relevante, Brasil es un mercado estrictamente mobile-first.
Con aproximadamente el 80% al 90% de los apostadores brasilenhos utilizando exclusivamente el telefono inteligente para jugar (Fuente: Mobile Time/Opinion Box y Datafolha), mi enfoque fue garantizar una experiencia movil impecable, con rendimiento optimizado y ausencia total de errores.

03. Mi Rol — KYC y Seguridad Transaccional
Estuve en frentes criticos para la viabilidad del negocio, con un enfoque especial en la Localizacion de Pagos (PIX).
Como el PIX es una exclusividad local, disene flujos con salvaguardas antifraude: depositos y retiros permitidos exclusivamente a traves de cuentas vinculadas al CPF del titular, combatiendo el lavado de dinero.
KYC Flow: Estructuracion rigurosa de la verificacion de identidad para el cumplimiento gubernamental.
PIX Strategy: Adaptacion del sistema de pagos con validacion de titularidad en tiempo real.
Anti-Fraud: Implementacion de salvaguardas financieras blindadas para la integridad de la plataforma.

04. Discovery y Validacion Basada en Datos
Valide los flujos y pude revisarlos usando Maze, asegurando que los bloqueos de seguridad no fueran un problema y se entendieran como un beneficio de seguridad y no como una barrera.
Monitoree el comportamiento a traves de GA4, optimizando el embudo de registro y el time-to-market del primer deposito. La integracion con Unico para biometria facial hizo que el KYC fuera robusto y agil.

05. Hito Historico — 1o Lugar en la Aprobacion
El rigor tecnico en el diseno resulto en un hito sin precedentes: Sportingbet fue la 1a casa de apuestas aprobada oficialmente para operar en Brasil el 1 de enero de 2025.
Fuimos los cuartos en ser evaluados por el gobierno, pero los primeros en recibir luz verde, gracias a la precision de los flujos de cumplimiento presentados.

06. VIP Experience y Culturalizacion
Estructure el area VIP de Casino, conectando proveedores globales en una interfaz intuitiva y adaptada al vocabulario brasileno.
El lanzamiento con el eslogan "Faz o teu nome" conecto la robustez tecnica del producto con la pasion cultural brasilena.

07. Resultados — Liderazgo Consolidado
Pionerismo: Primera licencia de operacion regulada en Brasil.
Seguridad: Ecosistema financiero blindado con validacion de CPF.
Engagement: Experiencia movil optimizada con alta retencion.`
  }
};

const textContent = allTextContent[caseSlug] || allTextContent['vivo-pay'];

const langs = [
  { code: 'pt-br', suffix: 'pt', disclaimer: 'Victor Morais - Product Designer | Confidencial: Este material não pode ser comercializado.' },
  { code: 'en',   suffix: 'en', disclaimer: 'Victor Morais - Product Designer | Confidential: This material cannot be commercialized.' },
  { code: 'es',   suffix: 'es', disclaimer: 'Victor Morais - Product Designer | Confidencial: Este material no puede ser comercializado.' }
];

// ─── RENDER VISUAL PDF ────────────────────────────────────────────────────────

async function renderVisualPDF(page, url, disclaimer) {
  console.log(`  → Carregando ${url} ...`);
  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  } catch (e) {
    console.warn(`  ⚠ Timeout carregando ${url}. Continuando...`);
  }

  // ── Oculta elementos de UI e corrige layout para PDF ──────────────────────
  // IMPORTANTE: .case-hero tem margin-top: -104px para sobrepor o nav sticky.
  // Quando o nav é ocultado (display:none), o hero sobe além do topo do documento,
  // causando desalinhamento no layout. Resetamos a margem para PDF.
  await page.addStyleTag({
    content: `
      .case-nav            { display: none !important; }
      .case-cta            { display: none !important; }
      .case-figma-embed    { display: none !important; }
      ::-webkit-scrollbar  { display: none; }
      .case-hero           { margin-top: 0 !important; padding-top: 80px !important; }
    `,
  });

  await page.emulateMediaType('screen');

  // ── Insere faixa de disclaimer no topo ────────────────────────────────────
  await page.evaluate((disc) => {
    document.querySelectorAll('.pdf-disclaimer').forEach(e => e.remove());
    const el = document.createElement('div');
    el.className = 'pdf-disclaimer';
    Object.assign(el.style, {
      padding: '12px 48px',
      background: '#0a0010',
      color: 'rgba(255,255,255,0.55)',
      fontSize: '10px',
      fontFamily: 'monospace',
      textAlign: 'center',
    });
    el.innerText = disc;
    document.body.insertBefore(el, document.body.firstChild);
  }, disclaimer);

  // ── Scroll para disparar lazy-load e animações whileInView ────────────────
  await page.evaluate(async () => {
    await new Promise(resolve => {
      let total = 0;
      const dist = 300;
      const t = setInterval(() => {
        window.scrollBy(0, dist);
        total += dist;
        if (total >= document.documentElement.scrollHeight - window.innerHeight) {
          clearInterval(t);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 40);
    });
  });

  // ── Aguarda animações completarem (Framer Motion: ~450ms + margem) ─────────
  await new Promise(r => setTimeout(r, 3000));

  // ── Força visibilidade de todos os elementos animados ─────────────────────
  // Framer Motion define opacity: 0 via inline style nos elementos com
  // initial={{ opacity: 0 }} que ainda não tiveram o whileInView disparado.
  // Este passo garante que nenhum conteúdo fique invisível no PDF.
  await page.evaluate(() => {
    document.querySelectorAll('[style]').forEach(el => {
      const s = el.style;
      if (s.opacity === '0' || parseFloat(s.opacity) < 0.1) {
        s.opacity = '1';
      }
      if (s.transform && s.transform !== 'none' && s.transform !== '') {
        s.transform = 'none';
      }
    });
    // Fallback: verifica computed style para elementos que possam ter
    // opacidade zero via CSS (não apenas inline style)
    document.querySelectorAll('.case-content *').forEach(el => {
      if (window.getComputedStyle(el).opacity === '0') {
        el.style.opacity = '1';
      }
    });
  });

  // ── Pequena pausa para o browser re-renderizar após as correções ──────────
  await new Promise(r => setTimeout(r, 500));

  const height = await page.evaluate(() => document.documentElement.scrollHeight);

  const pdfBytes = await page.pdf({
    printBackground: true,
    width:       '1200px',
    height:      `${height}px`,
    pageRanges:  '1',
  });

  return pdfBytes;
}

// ─── INJETA CAMADA DE TEXTO INVISÍVEL ────────────────────────────────────────

async function injectTextLayer(visualPdfBytes, textSuffix) {
  const content = textContent[textSuffix] || textContent['pt'];
  const pdfDoc  = await PDFDocument.load(visualPdfBytes);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const pages   = pdfDoc.getPages();
  const lines   = content.split('\n').filter(l => l.trim().length > 0);
  const linesPerPage = Math.ceil(lines.length / pages.length);

  pages.forEach((page, pageIdx) => {
    const { height: pageH } = page.getSize();
    const pageLines = lines.slice(pageIdx * linesPerPage, (pageIdx + 1) * linesPerPage);
    let y = pageH - 20;
    for (const line of pageLines) {
      if (y < 10) break;
      page.drawText(line, {
        x:       10,
        y,
        size:    6,
        font:    helvetica,
        color:   rgb(1, 1, 1),
        opacity: 0.0,
      });
      y -= 7;
    }
  });

  return await pdfDoc.save();
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

(async () => {
  console.log(`\n🚀 Gerando PDFs para: ${caseSlug}\n`);
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const browserPage = await browser.newPage();
  await browserPage.setViewport({ width: 1200, height: 900, deviceScaleFactor: 1.5 });

  for (const lang of langs) {
    const url     = `http://localhost:5173/${lang.code}/cases/${caseSlug}`;
    const outPath = path.join(process.cwd(), 'public', `${caseSlug}-case-${lang.suffix}.pdf`);
    console.log(`⏳ [${lang.suffix.toUpperCase()}] Renderizando visual...`);
    const visualBytes = await renderVisualPDF(browserPage, url, lang.disclaimer);
    console.log(`   Injetando camada de texto...`);
    const finalBytes = await injectTextLayer(visualBytes, lang.suffix);
    fs.writeFileSync(outPath, finalBytes);
    console.log(`✅ Salvo: ${outPath}`);
  }

  await browser.close();
  console.log('\n🎉 PDFs gerados com sucesso!\n');
})();
