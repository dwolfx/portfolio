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
 * Resultado: PDF bonito para humanos + 100% legível por IAs e ferramentas PDF.
 *
 * Uso: node scripts/generate-pdfs.js vivo-pay
 */

import puppeteer from 'puppeteer';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

const caseSlug = process.argv[2];
if (!caseSlug) {
  console.error('❌ Provide a case slug: node scripts/generate-pdfs.js vivo-pay');
  process.exit(1);
}

// ─── CONTEÚDO TEXTUAL ────────────────────────────────────────────────────────
// Texto puro espelhando vivoPayLocales.jsx — mantido em sync ao editar o case.

const textContent = {
  pt: `Victor Morais | Case VivoPay × ItaúCard

Estudo de Caso · Product Design
Fintech · Cartão de Crédito · B2C · Mobile · App

Como estruturei do zero a vertical financeira da Vivo e conduzi a integração do cartão de crédito em parceria com o Itaú.

VISÃO GERAL
Empresa: Vivo (Telefônica Brasil)
Meu papel: Product Designer Especialista
Parceiro: Banco Itaú
Plataforma: iOS e Android (apps nativos)
Período: Fev/2023 – Jul/2024
Ferramentas: Figma · GA4 · Maze

01 · Contexto — O Desafio
A Vivo possuía soluções financeiras robustas, mas fragmentadas. O usuário que tinha o cartão VivoPay Itaú precisava sair do app da Vivo e acessar o app do Itaú para gerenciar seu cartão. Era uma fricção que custava à Vivo o controle sobre a experiência e a retenção dentro do seu ecossistema.
O desafio não era resolver uma dor explícita do usuário, mas algo mais sofisticado: criar uma experiência tão completa dentro do app Vivo que ele não precisasse mais sair.

02 · Papel — Fui contratado para construir uma área que não existia
Entrei como um dos primeiros Product Designers Especialistas da vertical financeira da Vivo. Coube a mim estruturar os ritos de design, definir o modelo de colaboração com parceiros externos e conduzir três jornadas críticas: Cartão de Crédito (Itaú), Seguros (Porto Seguro) e Conta Digital.
Neste case, apresento a jornada de Cartão de Crédito — a mais complexa, pois exigiu negociação técnica direta com o banco Itaú para viabilizar uma integração que nenhum outro parceiro havia feito.
Ponte Estratégica: Interface direta entre negócio da Vivo, engenharia do Itaú e stakeholders.
Workflow de Design: Estabeleci os ritos do zero: discovery, exploração, handoff.
Guardião da Experiência: Garanti identidade Vivo mesmo usando APIs e jornada de KYC de terceiros.

03 · Discovery — Descobrindo o caminho certo
O processo de discovery revelou que o modelo white-label, padrão adotado por outros parceiros do Itaú, não entregaria o SuperApp que a Vivo buscava. Identifiquei isso no benchmark e levei para a mesa: chegamos à conclusão que a integração via API (third-party app) era o melhor caminho e garantiria controle total da interface, mantendo o usuário dentro do ecossistema.
A decisão estratégica: nesse primeiro momento, as especificações técnicas das APIs eram definidas pelo Itaú, enquanto isso conduzi dinâmicas internas para responder: o que nossa solução precisa ser? O resultado foi o escopo do MVP: Extrato, dados do cartão e pagamento de fatura.

04 · Conceituação — Do conceito à realidade
A ideia inicial era um cartão grande e impactante dentro do app. Ao alinhar com o time de DesignOps, identifiquei que alterações estruturais no Design System global da Telefônica levariam meses para aprovação. Tomamos a decisão de trabalhar dentro dos componentes existentes, priorizando time-to-market sem gerar débito técnico de design.
Imagens: Imaginação inicial da home | Tela final após validação de DesignOps

05 · Validação — Testamos, ouvimos, ajustamos
Rodada 1 de testes: Com a V0 pronta, levamos ao público. Os testes revelaram que os usuários queriam mais do que apenas visualizar dados e dois pontos críticos emergiram: a necessidade de Cartão Virtual e de exportação da fatura em PDF.
Cartão Virtual: O Itaú não conseguiria entregar a API a tempo. Implementamos um disclaimer estratégico no fluxo; na segunda rodada de testes os usuários já não questionavam a funcionalidade, eliminando frustração.
Exportação em PDF: Articulamos com o Itaú a inclusão na API ainda para o MVP. O usuário nem perguntava, simplesmente usava — sinal claro de que era esperado.

06 · Entrega — A jornada final
O produto entregue cobria o fluxo completo: acesso pelo menu Pay, identificação do cartão, KYC, home do cartão, fatura, pagamento.
Telas entregues: Home Cartão · KYC (Biometria) · Fatura Total · Detalhes da Fatura.

07 · Resultados — Garantindo que o produto nascesse rastreável
Sem dados de longo prazo disponíveis no período do projeto, priorizei que o produto não fosse ao ar às cegas. Todos os pontos de clique foram instrumentados com triggers no GA4.
100% dos pontos críticos da V0 sanados na V1.
Tracking completo via GA4 em todos os touchpoints.
Sessões monitoradas via Maze em adoção gradual.

08 · Visão de Futuro — O que vem depois
Cartão Virtual dentro do app.
Pagamento direto via PIX ou conta Vivo.
Contratação de novo cartão ou adicional.
Parcelamento de faturas.

Contato: victor9009@gmail.com | linkedin.com/in/victorhugon | github.com/dwolfx
Confidencial: Este material não pode ser comercializado. Os dados são de propriedade intelectual das respectivas empresas.`,

  en: `Victor Morais | Case VivoPay × ItaúCard

Case Study · Product Design
Fintech · Credit Card · B2C · Mobile · App

How I structured Vivo's financial vertical from scratch and led the credit card integration in partnership with Itaú.

OVERVIEW
Company: Vivo (Telefônica Brasil)
My role: Expert Product Designer
Partner: Banco Itaú
Platform: iOS and Android (native apps)
Period: Feb/2023 – Jul/2024
Tools: Figma · GA4 · Maze

01 · Context — The Challenge
Vivo had robust but fragmented financial solutions. Users with the VivoPay Itaú card had to leave the Vivo app and open the Itaú app to manage their card. This friction cost Vivo control over the experience and user retention within its ecosystem.
The challenge wasn't just solving an explicit user pain point, but something more sophisticated: creating an experience so complete within the Vivo app that users would never need to leave.

02 · Role — I was hired to build an area that didn't exist
I joined as one of the first Expert Product Designers for Vivo's financial vertical. My responsibility was to structure design rituals, define collaboration models with external partners, and lead three critical journeys: Credit Card (Itaú), Insurance (Porto Seguro), and Digital Account.
In this case study, I present the Credit Card journey — the most complex, as it required direct technical negotiation with Banco Itaú to enable an integration no other partner had achieved.
Strategic Bridge: Direct interface between Vivo's business, Itaú's engineering, and stakeholders.
Design Workflow: Established rituals from scratch: discovery, exploration, handoff.
Experience Guardian: Ensured Vivo's identity even when using third-party APIs and KYC journeys.

03 · Discovery — Discovering the right path
The discovery process revealed that the white-label model — the standard adopted by Itaú's other partners — wouldn't deliver the SuperApp Vivo was looking for. I identified this in benchmarking and brought it to the table: we concluded that API integration (third-party app) was the best path, guaranteeing total interface control and keeping the user within the ecosystem.
The strategic decision: initially, API technical specs were defined by Itaú. Meanwhile, I led internal dynamics to answer: what does our solution need to be? The result was the MVP scope: Statement, card details, and invoice payment.

04 · Concept — From concept to reality
The initial idea was a large, impactful card within the app. After aligning with the DesignOps team, I identified that structural changes to Telefónica's global Design System would take months to approve. We decided to work within existing components, prioritizing time-to-market without generating design technical debt.
Images: Initial home concept | Final screen after DesignOps validation

05 · Validation — We tested, listened, and adjusted
Round 1 of testing: With V0 ready, we took it to the public. Testing revealed that users wanted more than just visualizing data, and two critical points emerged: the need for a Virtual Card and PDF invoice export.
Virtual Card: Itaú couldn't deliver the API in time. We implemented a strategic disclaimer in the flow; in the second testing round users no longer questioned the feature, eliminating frustration.
PDF Export: We coordinated with Itaú to include it in the API for the MVP. Users didn't even ask — they simply used it. A clear sign it was expected.

06 · Delivery — The final journey
The delivered product covered the complete flow: access via Pay menu, card identification, KYC, card home, invoice, payment.
Delivered screens: Card Home · KYC (Biometrics) · Total Invoice · Invoice Details.

07 · Results — Ensuring the product was born traceable
Without long-term data available during the project, I prioritized making sure the product wouldn't launch blindly. All click points were instrumented with GA4 triggers.
100% of V0 critical points resolved in V1.
Complete tracking via GA4 across all touchpoints.
Sessions monitored via Maze during gradual adoption.

08 · Future Vision — What's next
In-app Virtual Card.
Direct payment via PIX or Vivo account.
Requesting a new or additional card.
Invoice installments.

Contact: victor9009@gmail.com | linkedin.com/in/victorhugon | github.com/dwolfx
Confidential: This material cannot be commercialized. Data is the intellectual property of the respective companies.`,

  es: `Victor Morais | Case VivoPay × ItaúCard

Estudio de Caso · Product Design
Fintech · Tarjeta de Crédito · B2C · Mobile · App

Cómo estructuré desde cero la vertical financiera de Vivo y lideré la integración de tarjetas de crédito en asociación con Itaú.

VISIÓN GENERAL
Empresa: Vivo (Telefônica Brasil)
Mi rol: Product Designer Experto
Socio: Banco Itaú
Plataforma: iOS y Android (apps nativas)
Período: Feb/2023 – Jul/2024
Herramientas: Figma · GA4 · Maze

01 · Contexto — El Desafío
Vivo tenía soluciones financieras robustas pero fragmentadas. El usuario con tarjeta VivoPay Itaú tenía que salir de la app de Vivo y abrir la app de Itaú para gestionar su tarjeta. Esta fricción le costaba a Vivo el control sobre la experiencia y la retención dentro de su ecosistema.
El desafío no era solo resolver un problema explícito del usuario, sino algo más sofisticado: crear una experiencia tan completa dentro de la app de Vivo que el usuario ya no necesitara salir.

02 · Rol — Fui contratado para construir un área que no existía
Ingresé como uno de los primeros Product Designers Expertos de la vertical financiera de Vivo. Mi responsabilidad fue estructurar los ritos de diseño, definir modelos de colaboración con socios externos y liderar tres viajes críticos: Tarjeta de Crédito (Itaú), Seguros (Porto Seguro) y Cuenta Digital.
En este caso de estudio presento el viaje de Tarjeta de Crédito — el más complejo, ya que requirió negociación técnica directa con Banco Itaú para viabilizar una integración que ningún otro socio había logrado.
Puente Estratégico: Interfaz directa entre el negocio de Vivo, la ingeniería de Itaú y los stakeholders.
Flujo de Trabajo: Establecí los ritos desde cero: discovery, exploración, handoff.
Guardián de la Experiencia: Garanticé la identidad de Vivo incluso usando APIs y viajes de KYC de terceros.

03 · Discovery — Descubriendo el camino correcto
El proceso de discovery reveló que el modelo white-label — el estándar adoptado por otros socios de Itaú — no entregaría la SuperApp que Vivo buscaba. Identifiqué esto en el benchmark y lo llevé a la mesa: concluimos que la integración vía API (third-party app) era el mejor camino, garantizando control total de la interfaz y manteniendo al usuario en el ecosistema.
La decisión estratégica: inicialmente, las especificaciones técnicas de las APIs fueron definidas por Itaú. Mientras tanto, lideré dinámicas internas para responder: qué necesita ser nuestra solución. El resultado fue el alcance del MVP: Extracto, datos de la tarjeta y pago de factura.

04 · Concepto — Del concepto a la realidad
La idea inicial era una tarjeta grande e impactante dentro de la app. Tras alinearme con el equipo de DesignOps, identifiqué que cambios estructurales al Design System global de Telefónica tardarían meses en aprobarse. Decidimos trabajar con los componentes existentes, priorizando el time-to-market sin generar deuda técnica de diseño.
Imágenes: Concepto inicial de la home | Pantalla final tras validación de DesignOps

05 · Validación — Probamos, escuchamos y ajustamos
Ronda 1 de pruebas: Con la V0 lista, la llevamos al público. Las pruebas revelaron que los usuarios querían más que solo visualizar datos, y surgieron dos puntos críticos: la necesidad de una Tarjeta Virtual y exportación de la factura en PDF.
Tarjeta Virtual: Itaú no podría entregar la API a tiempo. Implementamos un aviso estratégico en el flujo; en la segunda ronda los usuarios ya no cuestionaban la funcionalidad, eliminando la frustración.
Exportación en PDF: Coordinamos con Itaú para incluirlo en la API para el MVP. El usuario ni preguntaba, simplemente lo usaba — señal clara de que era esperado.

06 · Entrega — El viaje final
El producto entregado cubría el flujo completo: acceso por el menú Pay, identificación de tarjeta, KYC, home de tarjeta, factura, pago.
Pantallas entregadas: Home Tarjeta · KYC (Biometría) · Factura Total · Detalles de Factura.

07 · Resultados — Garantizando que el producto naciera rastreable
Sin datos a largo plazo disponibles durante el proyecto, prioricé que el producto no se lanzara a ciegas. Todos los puntos de clic fueron instrumentados con triggers en GA4.
100% de puntos críticos de V0 resueltos en V1.
Tracking completo vía GA4 en todos los touchpoints.
Sesiones monitoreadas vía Maze en adopción gradual.

08 · Visión a Futuro — Lo que viene después
Tarjeta Virtual dentro de la app.
Pago directo vía PIX o cuenta Vivo.
Contratación de tarjeta nueva o adicional.
Cuotas de facturas.

Contacto: victor9009@gmail.com | linkedin.com/in/victorhugon | github.com/dwolfx
Confidencial: Este material no puede ser comercializado. Los datos son propiedad intelectual de las respectivas empresas.`,
};

// ─── LANGS ───────────────────────────────────────────────────────────────────
const langs = [
  {
    code: 'pt-br', suffix: 'pt',
    disclaimer: 'Victor Morais - Product Designer | Confidencial: Este material não pode ser comercializado.',
  },
  {
    code: 'en', suffix: 'en',
    disclaimer: 'Victor Morais - Product Designer | Confidential: This material cannot be commercialized.',
  },
  {
    code: 'es', suffix: 'es',
    disclaimer: 'Victor Morais - Product Designer | Confidencial: Este material no puede ser comercializado.',
  },
];

// ─── STEP 1: PUPPETEER → visual PDF ──────────────────────────────────────────
async function renderVisualPDF(page, url, disclaimer) {
  console.log(`  → Carregando ${url} ...`);
  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 20000 });
  } catch (e) {
    console.warn(`  ⚠ Timeout carregando ${url}. Continuando...`);
  }

  // Ocultar nav, CTA e embeds; NÃO alterar fontes (queremos o design original)
  await page.addStyleTag({
    content: `
      .case-nav    { display: none !important; }
      .case-cta    { display: none !important; }
      .case-figma-embed { display: none !important; }
      ::-webkit-scrollbar { display: none; }
    `,
  });

  await page.emulateMediaType('screen');

  // Disclaimer no topo
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

  // Scroll para disparar animações whileInView
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

  await new Promise(r => setTimeout(r, 1800));

  const height = await page.evaluate(() => document.documentElement.scrollHeight);

  const pdfBytes = await page.pdf({
    printBackground: true,
    width: '1200px',
    height: `${height}px`,
    pageRanges: '1',
  });

  return pdfBytes;
}

// ─── STEP 2: pdf-lib → injeta camada de texto invisível ──────────────────────
async function injectTextLayer(visualPdfBytes, textSuffix) {
  const content = textContent[textSuffix] || textContent['pt'];

  const pdfDoc = await PDFDocument.load(visualPdfBytes);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const pages = pdfDoc.getPages();

  // Distribui o texto pelas páginas — cada página recebe uma fatia proporcional
  const lines = content.split('\n').filter(l => l.trim().length > 0);
  const linesPerPage = Math.ceil(lines.length / pages.length);

  pages.forEach((page, pageIdx) => {
    const { height: pageH } = page.getSize();
    const pageLines = lines.slice(pageIdx * linesPerPage, (pageIdx + 1) * linesPerPage);

    let y = pageH - 20;
    for (const line of pageLines) {
      if (y < 10) break;
      page.drawText(line, {
        x: 10,
        y,
        size: 6,
        font: helvetica,
        // Invisível para humanos, extraível por máquinas
        color: rgb(1, 1, 1),
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
    const url = `http://localhost:5173/${lang.code}/cases/${caseSlug}`;
    const outPath = path.join(process.cwd(), 'public', `${caseSlug}-case-${lang.suffix}.pdf`);

    console.log(`⏳ [${lang.suffix.toUpperCase()}] Renderizando visual...`);
    const visualBytes = await renderVisualPDF(browserPage, url, lang.disclaimer);

    console.log(`   Injetando camada de texto...`);
    const finalBytes = await injectTextLayer(visualBytes, lang.suffix);

    fs.writeFileSync(outPath, finalBytes);
    console.log(`✅ Salvo: ${outPath}`);
  }

  await browser.close();
  console.log('\n🎉 PDFs gerados: visual original + texto extraível!\n');
})();
