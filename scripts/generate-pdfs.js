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
    pt: `Victor Morais | Case VivoPay x ItauCard
Estudo de Caso · Product Design
Fintech · Cartao de Credito · B2C · Mobile · App
Empresa: Vivo (Telefonica Brasil) · Papel: Product Designer Especialista · Parceiro: Banco Itau · Periodo: Fev/2023 - Jul/2024

01. Contexto - O Desafio
A Vivo possuia solucoes financeiras robustas, mas fragmentadas. O usuario precisava sair do app da Vivo e acessar o app do Itau.

02. Papel - Fui contratado para construir uma area que nao existia
Entrei como um dos primeiros Product Designers Especialistas da vertical financeira da Vivo.

03. Discovery - Descobrindo o caminho certo
O processo de discovery revelou que o modelo white-label nao entregaria o SuperApp que a Vivo buscava. Identifiquei isso no benchmark e levei para a mesa uma vitoria estrategica: a decisao pela integracao via API (em vez de White-label). Isso garantiu que a Vivo mantivesse o controle sobre o Data Analytics (GA4) e a retencao do usuario.

04. Conceituacao - Do conceito a realidade
Ao alinhar com o time de DesignOps, identifiquei que alteracoes estruturais no Design System global da Telefonica levariam meses para aprovacao. Optamos por trabalhar com os componentes atuais do Design System global como uma escolha de Time-to-Market.

05. Validacao - Testamos, ouvimos, ajustamos
Cartao Virtual: O Itau nao conseguiria entregar a API a tempo. Implementamos um disclaimer estrategico no fluxo como uma estrategia de gestao de expectativa (UX Writing). Isso neutralizou a frustracao do usuario.

06. Entrega - A jornada final
Fluxo completo: acesso pelo menu Pay -> identificacao do cartao -> KYC -> home do cartao -> fatura -> pagamento.

07. Resultados - Garantindo que o produto nascesse rastreavel
100% dos pontos criticos da V0 sanados na V1.`,

    en: `Victor Morais | Case VivoPay x ItauCard
Case Study · Product Design
Fintech · Credit Card · B2C · Mobile · App

03. Discovery - Discovering the right path
I brought a strategic victory to the table: the decision for API integration (instead of White-label). This ensured that Vivo maintained control over Data Analytics (GA4) and user retention.

04. Concept - From concept to reality
We opted to work with the current components of the global Design System as a Time-to-Market choice. This avoided a bureaucratic bottleneck.

05. Validation - We tested, listened, and adjusted
Virtual Card: We implemented a strategic disclaimer in the flow as an expectation management strategy (UX Writing).`,

    es: `Victor Morais | Case VivoPay x ItauCard
Estudio de Caso · Product Design

03. Discovery - Descubriendo el camino correcto
Lleve a la mesa una victoria estrategica: la decision por la integracion via API. Esto garantizo que Vivo mantuviera el control sobre el Data Analytics (GA4) y la retencion del usuario.

04. Concepto - Del concepto a la realidad
Optamos por trabajar con los componentes actuales del Design System global como una eleccion de Time-to-Market.

05. Validacion - Probamos, escuchamos y ajustamos
Tarjeta Virtual: Implementamos un aviso estrategico en el flujo como una estrategia de gestion de expectativas (UX Writing).`
  },

  'sportingbet': {
    pt: `Victor Morais | Case Sportingbet - Tropicalizacao e Lideranca de Mercado
Estudo de Caso · Product Design

01. Contexto - A Corrida pela Regulamentacao Global
Atuei como o elo estrategico entre os requisitos de negocio da matriz e os times tecnicos na India e Canada. Minha responsabilidade era garantir que a complexidade da regulamentacao brasileira fosse traduzida em especificacoes tecnicas precisas.

03. Meu Papel - KYC e Seguranca Transacional
A adaptacao do PIX nao foi apenas uma troca de metodo de pagamento, mas uma reengenharia de fluxo financeiro. Implementamos validacoes de titularidade em tempo real que serviram como a primeira camada de defesa contra fraudes de identidade.

04. Discovery e Validacao Data-Driven
Utilizamos o Maze para rodar testes de usabilidade paralelos, permitindo que as iteracoes de design acontecessem em ciclos curtos, reduzindo o tempo de desenvolvimento e garantindo metricas de confianca.`,

    en: `Victor Morais | Case Sportingbet - Tropicalization and Market Leadership
Case Study · Product Design

01. Context - The Race for Global Regulation
I acted as the strategic link between HQ business requirements and technical teams in India and Canada.

03. My Role - KYC and Transactional Security
The PIX adaptation was not just a change in payment method, but a financial flow reengineering. We implemented real-time ownership validations that served as the first line of defense against identity fraud.

04. Data-Driven Discovery and Validation
We used Maze to run parallel usability tests, allowing design iterations to happen in short cycles, reducing development time.`,

    es: `Victor Morais | Case Sportingbet - Tropicalizacion y Liderazgo de Mercado
Estudio de Caso · Product Design

01. Contexto - La Carrera por la Regulacion Global
Actue como el enlace estrategico entre los requisitos de negocio de la matriz y los equipos tecnicos en India y Canada.

03. Mi Rol - KYC y Seguridad Transaccional
La adaptacion de PIX no fue solo un cambio de metodo de pago, sino una reingenieria de flujo financiero. Implementamos validaciones de titularidad en tiempo real que sirvieron como la primera capa de defensa contra fraudes de identidad.

04. Discovery y Validacion Basada en Datos
Utilizamos Maze para realizar pruebas de usabilidad paralelas, lo que permitio que las iteraciones de diseno ocurrieran en ciclos cortos.`
  },

  'traders-club': {
    pt: `Victor Morais | Case TC (TradersClub)
Estudo de Caso · Product Design
Fintech · B2B · Service Design · Automacao · Design System

01. Contexto - Criando uma Nova Unidade de Negocio
Desafio de pagina em branco: fundar do zero a unidade de negocios B2B.

02. Discovery - Identificando o Gargalo das Laminas
Utilizamos uma matriz de priorizacao para focar no problema das Laminas Mensais. Identificamos que este era o maior gargalo operacional, e a automacao traria o ROI mais imediato.

03. Estrategia de Design System - Fugindo do Obvio
A Decisao: Optamos por implementar o Carbon Design System (IBM). Uma interface mais quadrada, escura e tecnica, que prioriza a densidade de informacoes.

04. A Solucao - Automacao e Flexibilidade
Realizamos sessoes de testes de usabilidade com prototipos de alta fidelidade. A escolha do Carbon Design System foi validada na pratica: os usuarios 45+ demonstraram uma curva de aprendizado quase nula.

05. Impacto - Resultados Milionarios
Reducao no tempo de producao de 2 semanas para 15-20 minutos. Faturamento medio de R$ 2 milhoes/mes.`,

    en: `Victor Morais | Case TC (TradersClub)
Case Study · Product Design

02. Discovery - Identifying the Factsheets Bottleneck
We used a prioritization matrix to focus on the Factsheets problem. Automation would bring the most immediate ROI for the new B2B vertical.

04. The Solution - Automation and Flexibility
We conducted usability testing sessions with high-fidelity prototypes. 45+ users demonstrated a near-zero learning curve.`,

    es: `Victor Morais | Case TC (TradersClub)
Estudio de Caso · Product Design

02. Discovery - Identificando el Cuello de Botella de las Laminas
Utilizamos una matriz de priorizacion para enfocarnos en el problema de las Laminas Mensuales. La automatizacion traeria el ROI mas inmediato para la nueva vertical B2B.

04. La Solucion - Automatizacion y Flexibilidad
Realizamos sesiones de pruebas de usabilidad con prototipos de alta fidelidad. Los usuarios de mas de 45 anos demostraron una curva de aprendizaje casi nula.`
  },

  'bradesco': {
    pt: `Victor Morais | Case Bradesco
Estudo de Caso · Product Design
Financiamento · B2B · Pesquisa de Campo · Estratégia · UX

01. O Contexto - O Gap de Competitividade
Atuando como consultor terceiro contratado pela empresa Deeploy dentro do Bradesco, recebi um desafio de negócio crítico: entender por que os vendedores de concessionárias e lojas de veículos não estavam utilizando a plataforma do Bradesco para submeter as fichas de crédito dos clientes, preferindo players concorrentes (Safra e Itaú). O banco estava perdendo market share no momento crucial da venda.

02. Discovery - Saindo do Escritório e Indo a Campo
Após uma desk research inconclusiva e entrevistas remotas que não revelaram a real dor do usuário, solicitei autorização para uma etnografia/pesquisa de campo. A barreira não era visual, mas operacional.

03. Estratégia e Negociação - A "Pré-Ficha"
A Solução: Implementamos um fluxo de Pré-Aprovação de Crédito com apenas 4 campos essenciais: Nome, CPF, Endereço e Nome da Mãe. Se o crédito fosse pré-aprovado, o vendedor então era motivado a completar os dados restantes.

04. O Fator Humano - Co-Criação e Engajamento
A melhor decisão que eu poderia tomar nesse projeto foi o maior diferencial: Trazer os vendedores pra perto, pra se sentirem parte da solução, se sentirem ouvidos e atendidos! Isso gerou sensação de pertencimento, sentimento de dono e marketing orgânico.

05. Resultados - Impacto de Negócio
Aumento de Conversão: O volume de fichas submetidas pelo Bradesco cresceu 30% logo após a implementação. Eficiência Operacional: Redução drástica do tempo de resposta no PDV.`,
    
    en: `Victor Morais | Case Bradesco
Case Study · Product Design
Financing · B2B · Field Research · Strategy · UX

01. The Context - The Competitiveness Gap
Acting as a third-party consultant hired by Deeploy within Bradesco, I received a critical business challenge: to understand why dealership and car shop salespeople were not using the Bradesco platform to submit customer credit applications, preferring competing players (Safra and Itaú).

03. Strategy and Negotiation - The "Pre-Form"
The Solution: We implemented a Credit Pre-Approval flow with only 4 essential fields: Name, CPF, Address, and Mother's Name.

04. The Human Factor - Co-Creation and Engagement
Bringing the salespeople closer, to make them feel part of the solution, feel heard and most importantly answered!

05. Results - Business Impact
Conversion Increase: The volume of applications submitted via Bradesco grew 30% right after implementation.`,
    
    es: `Victor Morais | Case Bradesco
Estudio de Caso · Product Design
Financiamiento · B2B · Investigación de Campo · Estrategia · UX

01. El Contexto - La Brecha de Competitividad
Actuando como consultor externo contratado por la empresa Deeploy dentro de Bradesco, recibí un desafío de negocio crítico: entender por qué los vendedores de concesionarios y tiendas de vehículos no estaban utilizando la plataforma de Bradesco para enviar las solicitudes de crédito de los clientes, prefiriendo a competidores.

03. Estrategia y Negociación - La "Pre-Ficha"
La Solución: Implementamos un flujo de Pre-Aprobación de Crédito con solo 4 campos esenciales: Nombre, CPF, Dirección y Nombre de la Madre.

04. El Factor Humano - Co-Creación y Compromiso
Acercar a los vendedores, para que se sintieran parte de la solución, se sintieran escuchados y, lo más importante, atendidos!

05. Resultados - Impacto en el Negocio
Aumento de Conversión: El volumen de solicitudes enviadas por Bradesco creció un 30% justo después de la implementación.`
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
