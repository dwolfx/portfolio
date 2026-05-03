/**
 * generate-pdfs.js
 *
 * Gera PDFs visuais + text-extractable dos cases.
 *
 * Estratégia em 2 passos:
 *   1. Puppeteer renderiza o site real → PDF visual com imagens e design
 *   2. pdf-lib injeta camada de texto invisível (Helvetica padrão, opacity 0)
 *      com todo o conteúdo textual do case por cima
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

const allTextContent = {
  'vivo-pay': {
    pt: `Victor Morais | Case VivoPay × ItaúCard\nEstudo de Caso · Product Design\nFintech · Cartão de Crédito · B2C · Mobile · App`,
    en: `Victor Morais | Case VivoPay × ItaúCard\nCase Study · Product Design\nFintech · Credit Card · B2C · Mobile · App`,
    es: `Victor Morais | Case VivoPay × ItaúCard\nEstudio de Caso · Product Design\nFintech · Tarjeta de Crédito · B2C · Mobile · App`
  },
  'sportingbet': {
    pt: `Victor Morais | Case Study: Sportingbet — Tropicalização e Liderança de Mercado
01. O Contexto: A Corrida pela Regulamentação Global
Em 2024, com a nova Lei de Apostas no Brasil, fui selecionado para integrar um grupo de elite de 10 especialistas na Entain (Sportingbet, BetMGM e Betboo). Minha missão foi participar da tropicalização dessas marcas, atuando como ponte entre nós e os times técnicos que ficavam na Índia e Canadá.

02. Estratégia Mobile-First: O Comportamento Brasileiro
Ao contrário de mercados maduros na Europa e EUA, onde o desktop ainda possui uma fatia relevante, o Brasil é um mercado estritamente mobile-first. Com aproximadamente 80% a 90% dos apostadores brasileiros utilizando exclusivamente o smartphone para jogar (Fonte: Mobile Time/Opinion Box e Datafolha), meu foco foi garantir uma experiência mobile sem fricções.

03. Meu Papel: KYC e Segurança Transacional
Estive em frentes críticas para a viabilidade do negócio: KYC (Know Your Customer) e Localização de Pagamentos (PIX). Desenhei fluxos com amarras de segurança anti-fraude: depósitos e saques permitidos exclusivamente via contas vinculadas ao CPF do titular.

04. Discovery & Validação Data-Driven
Validei os fluxos e pude revisá-los usando o Maze, garantindo que as "travas" de segurança fossem compreendidas como um benefício de segurança. Monitorei o comportamento via GA4, otimizando o funil de cadastro e o time-to-market do primeiro depósito. Integração com a Único para biometria facial.

05. O Marco Histórico: 1º Lugar na Aprovação
A Sportingbet foi a 1ª casa de apostas a ser oficialmente aprovada para operar no Brasil em 1º de janeiro de 2025.

06. VIP Experience e Culturalização
Estruturei a área VIP de Cassino, adaptada ao vocabulário brasileiro. O lançamento com o slogan "Faz o teu nome" conectou a robustez técnica à paixão cultural brasileira.

07. Resultados
Pioneirismo: Obtenção da primeira licença regulamentada no Brasil. Segurança: Ecossistema financeiro blindado com validação de CPF. Engajamento: Experiência mobile otimizada.`,
    en: `Victor Morais | Case Study: Sportingbet — Tropicalization and Market Leadership
01. The Context: The Race for Global Regulation
In 2024, with the new Betting Law in Brazil, I was selected to join an elite group of 10 specialists at Entain (Sportingbet, BetMGM, and Betboo). My mission was to participate in the tropicalization of these brands, acting as a bridge between us and the technical teams based in India and Canada.

02. Mobile-First Strategy: The Brazilian Behavior
Unlike mature markets in Europe and the USA, Brazil is a strictly mobile-first market. With approximately 80% to 90% of Brazilian bettors using exclusively smartphones (Source: Mobile Time/Opinion Box and Datafolha), my total focus was on ensuring a flawless mobile experience.

03. My Role: KYC and Transactional Security
I was in critical fronts for business viability: KYC and Payment Localization (PIX). I designed flows with anti-fraud safeguards: deposits and withdrawals allowed exclusively via accounts linked to the holder's CPF.

04. Data-Driven Discovery & Validation
I validated the flows and reviewed them using Maze, ensuring security "locks" were understood as a benefit. Monitored behavior via GA4, optimizing the registration funnel and time-to-market. Integration with Único for facial biometrics.

05. Historical Milestone: 1st Place in Approval
Sportingbet was the 1st betting house to be officially approved to operate in Brazil on January 1, 2025.

06. VIP Experience and Culturalization
Structured the VIP Casino area, adapted to the Brazilian vocabulary. The launch slogan "Faz o teu nome" (Make your name) connected technical robustness to cultural passion.

07. Results
Pioneering: First regulated license in Brazil. Security: Armored financial ecosystem with CPF validation. Engagement: Optimized mobile experience.`,
    es: `Victor Morais | Caso de Estudio: Sportingbet — Tropicalización y Liderazgo de Mercado
01. Contexto: La Carrera por la Regulación Global
En 2024, con la nueva Ley de Apuestas en Brasil, fui seleccionado para integrar un grupo de élite de 10 especialistas en Entain (Sportingbet, BetMGM y Betboo). Mi misión fue participar en la tropicalización de estas marcas, actuando como puente entre nosotros y los equipos técnicos en India y Canadá.

02. Estrategia Mobile-First: El Comportamiento Brasileño
A diferencia de los mercados en Europa y EE. UU., Brasil es un mercado estrictamente mobile-first. Con aproximadamente el 80% al 90% de los apostadores brasileños usando exclusivamente smartphones (Fuente: Mobile Time/Opinion Box y Datafolha), mi enfoque fue garantizar una experiencia móvil impecable.

03. Mi Rol: KYC y Seguridad Transaccional
Estuve en frentes críticos: KYC y Localización de Pagos (PIX). Diseñé flujos con salvaguardas antifraude: depósitos y retiros permitidos exclusivamente a través de cuentas vinculadas al CPF del titular.

04. Discovery y Validación Basada en Datos
Validé los flujos y los revisé usando Maze, asegurando que los bloqueos de seguridad se entendieran como un beneficio. Monitoreé el comportamiento vía GA4, optimizando el embudo de registro y el time-to-market. Integración con Único para biometría facial.

05. Hito Histórico: 1º Lugar en la Aprobación
Sportingbet fue la 1ª casa de apuestas aprobada oficialmente para operar en Brasil el 1 de enero de 2025.

06. VIP Experience y Culturalização
Estructuré el área VIP de Casino, adaptada al vocabulario brasileño. El eslogan de lanzamiento "Faz o teu nome" conectó la robustez técnica con la pasión cultural.

07. Resultados
Pionerismo: Obtención de la primera licencia regulada en Brasil. Seguridad: Ecosistema financiero blindado con validación de CPF. Engagement: Experiencia móvil optimizada.`
  }
};

const textContent = allTextContent[caseSlug] || allTextContent['vivo-pay'];

const langs = [
  { code: 'pt-br', suffix: 'pt', disclaimer: 'Victor Morais - Product Designer | Confidencial: Este material não pode ser comercializado.' },
  { code: 'en', suffix: 'en', disclaimer: 'Victor Morais - Product Designer | Confidential: This material cannot be commercialized.' },
  { code: 'es', suffix: 'es', disclaimer: 'Victor Morais - Product Designer | Confidencial: Este material no puede ser comercializado.' }
];

async function renderVisualPDF(page, url, disclaimer) {
  console.log(`  → Carregando ${url} ...`);
  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  } catch (e) {
    console.warn(`  ⚠ Timeout carregando ${url}. Continuando...`);
  }

  await page.addStyleTag({
    content: `
      .case-nav { display: none !important; }
      .case-cta { display: none !important; }
      .case-figma-embed { display: none !important; }
      ::-webkit-scrollbar { display: none; }
    `,
  });

  await page.emulateMediaType('screen');

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

  await new Promise(r => setTimeout(r, 2000));

  const height = await page.evaluate(() => document.documentElement.scrollHeight);

  const pdfBytes = await page.pdf({
    printBackground: true,
    width: '1200px',
    height: `${height}px`,
    pageRanges: '1',
  });

  return pdfBytes;
}

async function injectTextLayer(visualPdfBytes, textSuffix) {
  const content = textContent[textSuffix] || textContent['pt'];
  const pdfDoc = await PDFDocument.load(visualPdfBytes);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const pages = pdfDoc.getPages();
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
        color: rgb(1, 1, 1),
        opacity: 0.0,
      });
      y -= 7;
    }
  });

  return await pdfDoc.save();
}

(async () => {
  console.log(`\n🚀 Gerando PDFs para: ${caseSlug}\n`);
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
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
  console.log('\n🎉 PDFs gerados com sucesso!\n');
})();
