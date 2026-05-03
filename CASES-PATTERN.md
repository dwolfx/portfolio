# Cases — Padrão e Guia de Implementação

> Documento de referência para criar, manter e exportar novos cases do portfólio.
> Baseado no case VivoPay (PT-BR) como template de ouro.

---

## 1. Estrutura de Arquivos para um Novo Case

```
src/
├── data/
│   └── <slug>Locales.jsx          ← conteúdo textual (PT-BR, EN, ES)
│
├── assets/cases/
│   └── <slug>/
│       ├── hero.png               ← imagem principal do hero (1200×630 aprox.)
│       └── ...                    ← demais screenshots (mobile: 390×844 aprox.)
│
└── pages/cases/
    └── <NomeCase>.jsx             ← componente React da página

public/
├── <slug>-case-pt.pdf             ← gerado via scripts/generate-pdfs.js
├── <slug>-case-en.pdf
└── <slug>-case-es.pdf

scripts/
└── generate-pdfs.js               ← gerador de PDFs (atualizado com o slug)
```

**E em `src/App.jsx`, adicionar as rotas:**
```jsx
<Route path="/:lang/cases/<slug>" element={<NomeCase />} />
```

**E nos portfolios de cada língua, adicionar o card do case.**

---

## 2. Template do Componente JSX

Copiar `src/pages/cases/VivoPay.jsx` e adaptar:

### Imports obrigatórios
```jsx
import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../CaseStudy.css';
import { <slug>Locales } from '../../data/<slug>Locales';
import brFlag from '../../assets/flags/br_flag.jpg';
import ukFlag from '../../assets/flags/uk_flag.jpg';
import esFlag from '../../assets/flags/es_flag.jpg';
import <slug>Hero from '../../assets/cases/<slug>/hero.png';
// ... demais imagens
```

### Componente InView (para animações scroll-triggered)
```jsx
const InView = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, ease: 'easeOut', delay }}
  >
    {children}
  </motion.div>
);
```

> ⚠️ **ATENÇÃO PDF**: O InView usa `initial={{ opacity: 0 }}`. O script `generate-pdfs.js`
> já tem o passo de force-visibility para corrigir isso. Não remover esse passo do script.

### Estrutura de seções no JSX
```jsx
<div className="case-content">
  {/* 01 · SEÇÃO */}
  <InView>
    <div className="case-section">
      <span className="case-eyebrow">{t.seção.eyebrow}</span>
      <h2>{t.seção.title}</h2>
      <p>{t.seção.p1}</p>
      <p style={{ marginTop: 16 }}>{t.seção.p2}</p>
    </div>
  </InView>

  {/* com highlights */}
  <InView>
    <div className="case-section">
      <span className="case-eyebrow">{t.role.eyebrow}</span>
      <h2>{t.role.title}</h2>
      <p>{t.role.p1}</p>
      <div className="case-highlights">
        {t.role.highlights.map(b => (
          <div key={b.title} className="case-highlight">
            <div className="case-highlight-icon">{b.icon}</div>
            <h4>{b.title}</h4>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </InView>

  {/* com decision callout */}
  <InView>
    <div className="case-section">
      <div className="case-decision-alt">
        <span className="case-decision-alt-label">{t.discovery.decisionLabel}</span>
        <p>{t.discovery.decisionP}</p>
      </div>
    </div>
  </InView>

  {/* com métricas */}
  <InView>
    <div className="case-section">
      <div className="case-metrics-grid">
        {t.results.metrics.map(m => (
          <div key={m.value} className="case-metric">
            <span className="case-metric-icon">{m.icon}</span>
            <div className="case-metric-value">{m.value}</div>
          </div>
        ))}
      </div>
    </div>
  </InView>
</div>
```

### PDF download links
- No **hero**: `<a href={`/<slug>-case-${pdfLang}.pdf`} download className="case-hero-btn">`
- No **CTA final**: `<a href={`/<slug>-case-${pdfLang}.pdf`} download className="case-cta-btn-primary">`
- `pdfLang` = `lang === 'pt-br' ? 'pt' : lang` (mapeia pt-br → pt no nome do arquivo)

---

## 3. Template de Locales

Arquivo: `src/data/<slug>Locales.jsx`

```jsx
import React from 'react';

export const <slug>Locales = {
  'pt-br': {
    hero: {
      tag: 'Estudo de Caso · Nome do Case',
      tags: ['Tag1', 'Tag2', 'Tag3'],
      subtitle: 'Subtítulo do case em português.',
      downloadBtn: '⬇ Baixar este case em PDF'
    },
    overview: {
      items: [
        { label: 'Empresa',    value: 'Nome da Empresa' },
        { label: 'Meu papel', value: 'Título do Cargo' },
        { label: 'Período',   value: 'Mês/Ano – Mês/Ano' },
        { label: 'Plataforma', value: 'iOS e Android / Web' },
        { label: 'Ferramentas', value: 'Figma · GA4 · Maze' },
        // ... até 6 items (grid 3×2)
      ]
    },
    context: {
      eyebrow: '01 · Contexto',
      title: 'Título da seção',
      p1: <>Parágrafo com <b>destaque</b> em negrito.</>,
      p2: <>Segundo parágrafo.</>
    },
    role: {
      eyebrow: '02 · Papel',
      title: 'Título',
      p1: <>Texto.</>,
      p2: <>Texto.</>,
      highlights: [
        { icon: '🎯', title: 'Destaque 1', desc: 'Descrição breve.' },
        { icon: '⚙️', title: 'Destaque 2', desc: 'Descrição breve.' },
        { icon: '🛡️', title: 'Destaque 3', desc: 'Descrição breve.' },
      ]
    },
    // ... demais seções
    cta: {
      title: 'Quer saber mais?',
      p1: 'Subtítulo do CTA.',
      btnDown: '⬇ Baixar PDF do case',
      btnTalk: 'Falar comigo'
    }
  },

  'en': {
    // mesma estrutura, em inglês
  },

  'es': {
    // mesma estrutura, em espanhol
  }
};
```

> ⚠️ Textos com JSX (`<>...<b>...</b></>`) renderizam corretamente no browser.
> Para a camada de busca do PDF (em `generate-pdfs.js`), use **strings puras** sem JSX.

---

## 4. Gerando os PDFs

### Pré-requisito
Vite dev server rodando: `npm run dev` (ou `yarn dev` / `bun dev`)

### Comando
```bash
node scripts/generate-pdfs.js <slug>
```

Exemplos:
```bash
node scripts/generate-pdfs.js vivo-pay
node scripts/generate-pdfs.js sportingbet
```

Isso gera 3 arquivos em `public/`:
- `<slug>-case-pt.pdf`
- `<slug>-case-en.pdf`
- `<slug>-case-es.pdf`

### O que o script faz (em ordem)
1. Abre o Chromium headless via Puppeteer
2. Navega para `http://localhost:5173/<lang>/cases/<slug>` (3 vezes, uma por idioma)
3. Oculta: `.case-nav`, `.case-cta`, `.case-figma-embed`
4. **Corrige**: `.case-hero { margin-top: 0 }` (o hero tem -104px para sobrepor o nav no browser)
5. Adiciona banner de disclaimer no topo
6. Faz scroll completo pela página (para disparar imagens lazy e animações `whileInView`)
7. Aguarda 3s para animações completarem
8. **Force-visibility**: percorre todos os elementos com `opacity: 0` (Framer Motion) e força para `opacity: 1`
9. Aguarda mais 0.5s
10. Gera o PDF como página única com `height = scrollHeight`
11. Injeta camada de texto invisível (para busca e cópia de texto)

### Erros comuns e soluções

| Erro | Causa | Solução |
|------|-------|---------|
| PDF com seções em branco | `whileInView` não disparou | Passo 8 (force-visibility) resolve isso |
| Hero cortado no topo | `margin-top: -104px` + nav oculto | Passo 4 (margin-top: 0) resolve isso |
| PDF com página em branco | Dev server não está rodando | `npm run dev` antes de executar |
| Timeout na página | Imagem ou recurso lento | O script continua mesmo com timeout |
| Figma embed aparece | `.case-figma-embed` não ocultado | Já tratado no script |

---

## 5. Adicionando o case à camada de busca do PDF

Em `scripts/generate-pdfs.js`, dentro de `allTextContent`, adicionar:

```js
'<slug>': {
  pt: `Victor Morais | Case NomeCase
Estudo de Caso · Product Design
Tag1 · Tag2 · Tag3

01. Seção — Título
Texto completo da seção...

02. ...`,
  en: `...`,
  es: `...`
}
```

> ⚠️ **Restrição de encoding**: pdf-lib usa Helvetica (WinAnsi/Latin-1).
> - ✅ Permitido: letras com acento (ã, ç, ê, ó, ú), `.`, `,`, `:`, `-`, `(`, `)`
> - ❌ Proibido: `—` (em dash U+2014), `–` (en dash U+2013), `→` (U+2192), emojis, caracteres Unicode > U+00FF
> - Substitua `—` por ` - `, `–` por `-`, `→` por `->`.
> Essa camada é invisível no PDF mas permite busca e seleção de texto.

---

## 6. Checklist para novo case

- [ ] Criar `src/data/<slug>Locales.jsx` (PT-BR, EN, ES)
- [ ] Criar `src/pages/cases/<NomeCase>.jsx` (baseado no template VivoPay)
- [ ] Adicionar assets em `src/assets/cases/<slug>/`
- [ ] Adicionar rota em `src/App.jsx`
- [ ] Adicionar card do case nos 3 portfolios (PT, EN, ES)
- [ ] Adicionar texto da camada de busca em `scripts/generate-pdfs.js`
- [ ] Rodar `npm run dev`
- [ ] Rodar `node scripts/generate-pdfs.js <slug>`
- [ ] Verificar os 3 PDFs gerados em `public/`
- [ ] Testar o download nos 3 idiomas no browser

---

## 7. Referência de classes CSS (CaseStudy.css)

| Classe | Uso |
|--------|-----|
| `.case-section` | Container de cada seção (padding 72px vertical) |
| `.case-eyebrow` | Número/label da seção (monospace, indigo) |
| `.case-decision` | Callout com borda esquerda azul |
| `.case-decision-alt` | Callout com borda azul, fundo off-white |
| `.case-highlights` | Grid 3 colunas de destaques |
| `.case-highlight` | Card de destaque (ícone + título + descrição) |
| `.case-two-col` | Grid 2 colunas (ex: screenshots lado a lado) |
| `.case-feedback-grid` | Grid 2 colunas (ex: cards de validação) |
| `.case-metrics-grid` | Grid 3 colunas (resultados com ícone) |
| `.case-screenshots` | Grid 4 colunas (telas mobile) |
| `.case-figma-embed` | Wrapper do Figma (oculto no PDF) |
| `.case-overview` | Seção cinza com grid de metadados |
| `.case-overview-inner` | Grid 3×2 dos itens de overview |
| `.case-cta` | Seção final escura com botões (oculta no PDF) |

---

## 8. Cases existentes

| Case | Slug | Rotas | PDFs |
|------|------|-------|------|
| VivoPay × ItaúCard | `vivo-pay` | `/:lang/cases/vivo-pay` | `vivo-pay-case-pt/en/es.pdf` |
| Sportingbet (Entain) | `sportingbet` | `/:lang/cases/sportingbet` | `sportingbet-case-pt/en/es.pdf` |
