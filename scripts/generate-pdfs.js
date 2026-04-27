import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const caseSlug = process.argv[2];
if (!caseSlug) {
  console.error("❌ Provide a case slug: node scripts/generate-pdfs.js vivo-pay");
  process.exit(1);
}

const langs = [
  { code: 'pt-br', suffix: 'pt', disclaimers: 'Victor Morais - Product Designer | Confidencial: Este material não pode ser comercializado. Os dados são de propriedade intelectual das respectivas empresas.' },
  { code: 'en', suffix: 'en', disclaimers: 'Victor Morais - Product Designer | Confidential: This material cannot be commercialized. Data is the intellectual property of the respective companies.' },
  { code: 'es', suffix: 'es', disclaimers: 'Victor Morais - Product Designer | Confidencial: Este material no puede ser comercializado. Los datos son propiedad intelectual de las respectivas empresas.' }
];

(async () => {
  console.log(`🚀 Starting PDF generation for case: ${caseSlug}`);
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  // Set viewport width, high resolution
  await page.setViewport({ width: 1200, height: 1000, deviceScaleFactor: 2 });

  for (const lang of langs) {
    const url = `http://localhost:5173/${lang.code}/cases/${caseSlug}`;
    console.log(`\n⏳ Loading ${url} ...`);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
    } catch (e) {
      console.warn(`⚠️ Timeout or error loading ${url}. Make sure dev server is running!`);
    }
    
    // Inject custom CSS to hide UI elements that shouldn't be printed
    await page.addStyleTag({
      content: `
        .case-nav { display: none !important; }
        .case-cta { display: none !important; }
        .case-figma-embed { display: none !important; }
        ::-webkit-scrollbar { display: none; }
      `
    });

    // Emulate screen to avoid print stylesheet differences
    await page.emulateMediaType('screen');

    // Add header and footer directly to the DOM for continuous page flow
    await page.evaluate((disclaimer) => {
      // Remove any existing disclaimers just in case
      document.querySelectorAll('.pdf-disclaimer').forEach(e => e.remove());

      const header = document.createElement('div');
      header.className = 'pdf-disclaimer';
      header.style.padding = '24px 48px';
      header.style.backgroundColor = '#0a0010'; // Dark to match typical hero
      header.style.color = 'rgba(255,255,255,0.7)';
      header.style.fontSize = '12px';
      header.style.fontFamily = 'monospace';
      header.style.textAlign = 'center';
      header.innerText = disclaimer;
      document.body.insertBefore(header, document.body.firstChild);

      const footer = document.createElement('div');
      footer.className = 'pdf-disclaimer';
      footer.style.padding = '48px';
      footer.style.backgroundColor = '#f4f4f5'; // Light gray
      footer.style.color = '#666';
      footer.style.fontSize = '12px';
      footer.style.fontFamily = 'monospace';
      footer.style.textAlign = 'center';
      footer.innerText = disclaimer + "\n\nContato: victor9009@gmail.com | LinkedIn: br.linkedin.com/in/victorhugon";
      document.body.appendChild(footer);
    }, lang.disclaimers);

    // Auto-scroll to bottom to trigger all framer-motion whileInView animations
    console.log(`  Scrolling page to trigger animations...`);
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 200;
        const timer = setInterval(() => {
          const scrollHeight = document.documentElement.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight - window.innerHeight) {
            clearInterval(timer);
            window.scrollTo(0, 0); // scroll back to top just in case
            resolve();
          }
        }, 50);
      });
    });

    // Wait for final Framer Motion animations to settle
    await new Promise(r => setTimeout(r, 2000));

    // Calculate full document height
    const height = await page.evaluate(() => document.documentElement.scrollHeight);

    const outPath = path.join(process.cwd(), 'public', `${caseSlug}-case-${lang.suffix}.pdf`);
    
    console.log(`📄 Generating PDF: ${height}px height...`);
    await page.pdf({
      path: outPath,
      printBackground: true,
      width: '1200px',
      height: `${height}px`,
      pageRanges: '1' // Force single page
    });
    console.log(`✅ Saved ${outPath}`);
  }

  await browser.close();
  console.log(`\n🎉 All PDFs generated successfully!`);
})();
