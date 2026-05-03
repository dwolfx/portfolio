# Design System — Portfolio Victor Morais

CSS puro, sem Tailwind. Tokens via custom properties no `:root`. Sem design tokens em JS.

---

## Arquivos CSS

| Arquivo | Escopo |
|---|---|
| `src/index.css` | Reset global, variáveis (`:root`), Home page, Footer |
| `src/Portfolio.css` | Páginas de portfolio (`/:lang`) |
| `src/CaseStudy.css` | Case study VivoPay (`/:lang/cases/vivo-pay`) |

---

## Tokens CSS — `src/index.css`

```css
/* Cores */
--text-primary: #2B3437
--text-secondary: #586064
--accent-color: #4F46E5        /* Home */
--bg-base: #F8F9FA
--bg-gradient-start: #F8F9FA
--bg-gradient-end: #DDDBFF
--card-bg: #FFFFFF
--footer-bg: #F3F3F3
--footer-border: rgba(226, 232, 240, 0.5)
--social-btn-text: #465C9B
--social-btn-shadow: rgba(0, 0, 0, 0.04)
--btn-primary-bg: #4F46E5
--btn-primary-text: #FFFFFF

/* Espaçamento */
--card-width: 220px
--card-height: 240px
--card-radius: 12px
--container-gap: 32px

/* Transição */
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

> Portfolio pages usam accent `#6366f1` (mais saturado). Home usa `#4F46E5`. Intencional — diferenciação de contexto.

---

## Paleta expandida (Portfolio.css / CaseStudy.css)

```
Texto escuro:         #0d1117
Texto médio:          #64748b
Texto suave:          #475569
Accent portfolio:     #6366f1
Accent hover:         #4f46e5
Nav logo:              #777aff
Nav hover text:       #cbd5e1
Background cards:     #f8f9fb
Border cards:         #eef0f4
Background highlight: #f5f5f7
Border sutil:         #f1f5f9
Tag accent bg:        #eef2ff  /  text #6366f1
Tag WIP bg:           #fef3c7  /  text #b45309
Decision text:        #3730a3
Placeholder cinza:    #e5e5ea  /  text #6e6e73
Case button bg:      rgba(99, 102, 241, 0.06)
Case button border:  rgba(99, 102, 241, 0.15)
Case back button:    Indigo glass style (translucent bg + blur)
```

---

## Tipografia

| Uso | Font | Tamanho | Weight | Obs |
|---|---|---|---|---|
| Body / UI | Inter, system-ui | — | — | padrão |
| Labels, eyebrows | SF Mono, Fira Code | 11px | 700 | letter-spacing 3px, uppercase |
| Metadados | SF Mono | 10px | 700 | letter-spacing 2px |
| Home h1 | Inter | 60px → 48px → 38px | 700 | breakpoints 768 / 600 |
| Hero title (portfolio) | Inter | clamp(56px, 7.5vw, 96px) | 700 | letter-spacing -3px |
| Hero title (case) | Inter | clamp(52px, 8vw, 88px) | 700 | letter-spacing -2px |
| Section title | Inter | clamp(32px, 4vw, 48px) | 700 | letter-spacing -2px |
| Statement quote | Inter | clamp(28px, 3.5vw, 42px) | 700 | letter-spacing -1px, borda esq |
| Case h2 | Inter | clamp(24px, 3vw, 34px) | 700 | letter-spacing -1px |
| Project title | Inter | 22px | 800 | letter-spacing -0.5px |

---

## Gradientes

| Contexto | Valor |
|---|---|
| Home background (body) | `135deg, #F8F9FA 18.8%, #DDDBFF 100%` |
| Portfolio hero | `135deg, #0d0e1a 0%, #111827 40%, #1a1040 70%, #0f0a1e 100%` |
| Projects section | `135deg, #ffffff 0%, #eef2ff 50%, #ddd6fe 100%` |
| Hero divider line | `90deg, #6366f1, #8b5cf6` |
| Vivo Pay hero | `135deg, #0a0010 0%, #1a0033 35%, #440066 65%, #660099 100%` (inline no JSX) |
| Case CTA final | `135deg, #0d0e1a 0%, #1a1040 100%` |
| Case viz bg | `135deg, #ffffff 0%, #eef2ff 50%, #ddd6fe 100%` |

---

## Componentes Reutilizáveis

### `Footer.jsx` — global (montado no App.jsx fora das routes)
- Esquerda: nome completo "Victor Hugo Nogueira de Morais", localização + flag BR (img 23px)
- Direita: 4 social buttons (WhatsApp, LinkedIn, Email, GitHub) — SVG inline 24x24, `fill: currentColor`
- Hover: translateY(-3px) + bg accent + shadow `rgba(79, 70, 229, 0.2)` + cor branca
- Copyright linha 1: "© 2026 Victor Morais — Product Designer — All rights reserved."
- Copyright linha 2: "Project data and metrics have been obfuscated respecting NDA terms."

### `Header.jsx` — só na Home
Estático: `<h1>Victor Morais</h1>` + `<p className="subtitle">Product Designer</p>`

### `LanguageCard.jsx`
Props: `to, flag, langCode, langName, btnText, disabled`
- Se `disabled`: usa `<div>` (não Link), mostra "Em breve..." no place do btnText
- Desktop: card vertical, flag 120px height, card-content com flexbox coluna
- Mobile ≤600px: card vira row, flag lateral 120px width fixo, card-content justifica center

---

## Padrões Visuais

### Nav sticky (Portfolio pages)
```css
position: sticky; top: 20px; height: 64px; margin: 20px auto 0;
width: calc(100% - 40px); max-width: 1200px;
background: rgba(255,255,255,0.35); backdrop-filter: blur(10px);
border: 1px solid rgba(255,255,255,0.3); border-radius: 18px;
padding: 0 28px;
box-shadow: 0 4px 16px rgba(0,0,0,0.08), inset 0 -1px 0 rgba(255,255,255,0.2);
overflow: visible;  /* necessário para dropdowns */
```

### Smooth Scroll (Global)
```css
html { scroll-behavior: smooth; }
```

### Nav sticky (Case Study)
Idêntico ao Portfolio, exceto `overflow: hidden` — ATENÇÃO: isso clipa dropdowns.

### Hero overlay técnica
```css
/* Hero fica atrás do nav sem gap */
.hero { margin-top: -104px; padding: 180px 20px 120px; }
/* 104px = nav height 64px + top 20px + margin-top nav 20px */
```

### Dropdown
```css
border-radius: 14px; padding: 8px; min-width: 160px;
box-shadow: 0 12px 40px rgba(0,0,0,0.12);
animation: fadeInScale 0.15s ease-out;
/* fadeInScale: opacity 0→1 + scale 0.97→1 + translateY -6px→0 */
/* position: absolute; left: 50%; transform: translateX(-50%); */
```

### Project cards
```css
border-radius: 20px; background: #f8f9fb; border: 1px solid #eef0f4;
hover: translateY(-6px) + box-shadow 0 24px 48px rgba(0,0,0,0.09)
imagem: aspect-ratio 16/9
clique: useNavigate(project.link) — não usa <Link>, toda a área é clicável
```

### Chips (hero portfolio)
```css
font-size 12px; padding 5px 14px; border-radius 100px;
background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
hover: translateY(-2px) + accent bg
```

### Social links (hero portfolio)
```css
padding 10px 18px; border-radius 10px;
background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
hover: translateY(-2px) + accent border/bg
```

### Decision callout (`.case-decision`)
```css
background: #eef2ff; border-left: 4px solid #6366f1;
border-radius: 0 12px 12px 0; padding: 24px 28px;
label: SF Mono, #6366f1 / p: #3730a3, weight 500
```

### Decision alt (`.case-decision-alt`)
```css
background: #f0f0ff; border: 1px solid #c7d2fe;
border-radius: 16px; padding: 28px 32px;
```

### Image placeholders
```css
background: #e5e5ea; border-radius: 16px; color: #6e6e73; font-size 13px; font-weight 600
--hero:   aspect-ratio 16/9; margin-top 48px
--wide:   aspect-ratio 16/7
--square: aspect-ratio 4/3
--screen: aspect-ratio 9/16; max-width 260px
```

### Dot pulsante (`.label-dot` — hero label)
```css
width: 6px; height: 6px; border-radius: 50%; background: #6366f1;
animation: pulse 2s infinite; /* opacity 1 → 0.3 → 1 */
```

### Max-widths
- Seções gerais / nav: 1200px
- Case content / case hero inner: 1100px / 900px
- Statement: 1000px
- Hero bio: max-width 650px

---

## Animações (Framer Motion)

### fadeUp — entrada hero (Portfolio pages)
```jsx
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay }
  })
};
// Delays PT-BR: nome 0, tagline 0.22, chips 0.27, bio 0.32, links 0.34
// Delays EN/ES: nome 0, tagline 0.08, chips 0.14, bio 0.20, links 0.26
```

### fadeUp — entrada hero (VivoPay)
```jsx
// Mesma variante mas delays menores: tag 0, h1 0.08, tags 0.14, subtitle 0.18, btn 0.24
hidden: { opacity: 0, y: 24 }  // y diferente do portfolio
```

### InView — seções do case study (componente local)
```jsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.45, ease: 'easeOut', delay }}
```

### Statement (whileInView inline nas portfolio pages)
```jsx
// quote: duration 0.5
// text: duration 0.4, delay 0.15
initial={{ opacity: 0, y: 20 }}  // quote
initial={{ opacity: 0, y: 16 }}  // text
```

### AnimatePresence — grid de projetos
```jsx
initial={{ opacity: 0, y: 16 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: 8 }}
transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
```

### Hero foto (portfolio)
```jsx
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
```

### Stagger (Home cards): containerVariants staggerChildren 0.12s, itemVariants y: 24 duration 0.4

---

## Grids

| Componente | Desktop | ≤768px / ≤480px |
|---|---|---|
| Project grid | 3 colunas | 2 cols (≤900px) → 1 col (≤600px) |
| Overview | 3 colunas | 2 cols (≤768px) → 1 col (≤480px) |
| Highlights | 3 colunas | 1 col (≤768px) |
| Two-col | 2 colunas | 1 col (≤768px) |
| Feedback | 2 colunas | 1 col (≤768px) |
| Metrics | 3 colunas | 1 col (≤768px) |
| Screenshots | 4 colunas | 2 cols (≤768px, mantém em ≤480px) |
| Viz grid | 2 colunas | 1 col (≤768px) |

---

## Responsividade

| Breakpoint | Mudanças |
|---|---|
| 900px | Hero: column-reverse, foto 240px; Grid projetos: 3→2 cols |
| 768px | Footer: 2→1 col + centraliza; Case: nav menor, grids colapsam |
| 600px | Nav: esconde `.nav-link`; Grid: 1 col; foto 100% width; Home: cards viram row |
| 480px | Case: hero menor, padding menor, seções menor; Home cards: flag lateral |

---

## Assets

```
src/assets/
├── flags/     br_flag.jpg, es_flag.jpg, uk_flag.jpg
├── logo/      logo.png (importado mas não aparece no código atual)
├── profile/   victor.jpg
└── projects/  b2b_portal.png, ecosystem.png, globo_tools.png, vivo.png, wip-placeholder.png
```

Projetos WIP usam a imagem `wip-placeholder.png` (render 3D minimalista claro de um laptop) para consistência visual e discrição em fundos claros.
