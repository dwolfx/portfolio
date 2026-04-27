# Design System — Portfolio Victor Morais

CSS puro, sem Tailwind. Tokens via custom properties no `:root`. Sem design tokens em JS.

---

## Arquivos CSS

| Arquivo | Escopo |
|---|---|
| `src/index.css` | Reset global, variáveis (`:root`), Home page, Footer |
| `src/Portfolio.css` | Páginas de portfolio (`/:lang`) |
| `src/CaseStudy.css` | Case studies (`/:lang/cases/...`) |

---

## Tokens CSS — `src/index.css`

```css
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
--card-width: 220px
--card-height: 240px
--card-radius: 12px
--container-gap: 32px
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
Nav logo / back:      #9faaba
Background cards:     #f8f9fb
Border cards:         #eef0f4
Background highlight: #f5f5f7
Border sutil:         #f1f5f9
Tag accent bg:        #eef2ff  /  text #6366f1
Tag WIP bg:           #fef3c7  /  text #b45309
Decision text:        #3730a3
```

---

## Tipografia

| Uso | Font | Tamanho | Weight | Obs |
|---|---|---|---|---|
| Body / UI | Inter, system-ui | — | — | padrão |
| Labels, eyebrows | SF Mono, Fira Code | 11px | 700 | letter-spacing 3px, uppercase |
| Metadados | SF Mono | 10px | 700 | letter-spacing 2px |
| Hero title (portfolio) | Inter | clamp(56px, 7.5vw, 96px) | 700 | letter-spacing -3px |
| Hero title (case) | Inter | clamp(52px, 8vw, 88px) | 700 | letter-spacing -2px |
| Section title | Inter | clamp(32px, 4vw, 48px) | 700 | letter-spacing -2px |
| Statement quote | Inter | clamp(28px, 3.5vw, 42px) | 700 | letter-spacing -1px |
| Case h2 | Inter | clamp(24px, 3vw, 34px) | 700 | letter-spacing -1px |
| Project title | Inter | 22px | 800 | letter-spacing -0.5px |

---

## Gradientes

| Contexto | Valor |
|---|---|
| Home background | `135deg, #F8F9FA 18.8%, #DDDBFF 100%` |
| Portfolio hero | `135deg, #0d0e1a 0%, #111827 40%, #1a1040 70%, #0f0a1e 100%` |
| Projects section | `135deg, #ffffff 0%, #eef2ff 50%, #ddd6fe 100%` |
| Hero divider line | `90deg, #6366f1, #8b5cf6` |
| Vivo Pay hero | `135deg, #0a0010 0%, #1a0033 35%, #440066 65%, #660099 100%` |
| Case CTA final | `135deg, #0d0e1a 0%, #1a1040 100%` |

---

## Componentes Reutilizáveis

### `Footer.jsx` — global (montado no App.jsx fora das routes)
- Esquerda: nome "Victor Hugo Nogueira de Morais", localização + flag BR
- Direita: 4 social buttons (WhatsApp, LinkedIn, Email, GitHub) — SVG inline 24x24, `currentColor`
- Hover: translateY(-3px) + bg accent + shadow `rgba(79, 70, 229, 0.2)`
- Copyright: "© 2026 Victor Morais — Product Designer — All rights reserved."

### `Header.jsx` — só na Home
Estático: nome + subtitle.

### `LanguageCard.jsx`
Props: `to, flag, langCode, langName, btnText, disabled`
- Flag image 120px height no topo
- Mobile: card vira row, flag lateral 120px width
- Hover: translateY(-6px) + shadow
- `disabled`: visual muted, sem link

---

## Padrões Visuais

### Nav sticky (Portfolio pages e Case study)
```css
position: sticky; top: 20px; height: 64px;
background: rgba(255,255,255,0.35); backdrop-filter: blur(10px);
border: 1px solid rgba(255,255,255,0.3); border-radius: 18px;
box-shadow: 0 4px 16px rgba(0,0,0,0.08), inset 0 -1px 0 rgba(255,255,255,0.2);
/* Portfolio: overflow visible (tem dropdowns) / Case: overflow hidden */
```

### Dropdown
```css
border-radius: 14px; padding: 8px; min-width: 160px;
box-shadow: 0 12px 40px rgba(0,0,0,0.12);
animation: fadeInScale 0.15s ease-out;
/* fadeInScale: opacity 0→1 + scale 0.97→1 + translateY -6px→0 */
```

### Project cards
```css
border-radius: 20px; background: #f8f9fb; border: 1px solid #eef0f4;
hover: translateY(-6px) + box-shadow 0 24px 48px rgba(0,0,0,0.09)
imagem: aspect-ratio 16/9
```

### Decision callout (`.case-decision`)
```css
background: #eef2ff; border-left: 4px solid #6366f1;
border-radius: 0 12px 12px 0; padding: 24px 28px;
label: monospace, #6366f1 / p: #3730a3, weight 500
```

### Decision alt (`.case-decision-alt`)
```css
background: #f0f0ff; border: 1px solid #c7d2fe;
border-radius: 16px; padding: 28px 32px;
```

### Image placeholders
```css
background: #e5e5ea; border-radius: 16px; color: #6e6e73;
--hero:   aspect-ratio 16/9
--wide:   aspect-ratio 16/7
--square: aspect-ratio 4/3
--screen: aspect-ratio 9/16; max-width 260px
```

### Dot pulsante (hero label)
```css
width: 6px; height: 6px; border-radius: 50%; background: #6366f1;
animation: pulse 2s infinite; /* opacity 1 → 0.3 → 1 */
```

### Max-widths
- Seções gerais: 1200px | Case content: 900px | Statement: 1000px | Case hero: 1100px

---

## Animações (Framer Motion)

### fadeUp — entrada de elementos
```jsx
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay }
  })
};
```

### InView — seções do case study
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

### AnimatePresence — grid de projetos
```jsx
initial={{ opacity: 0, y: 16 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: 8 }}
transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
```

### Stagger (Home cards): delay 0.12s entre itens

---

## Grids do Case Study

| Componente | Desktop | Mobile (768px) | Mobile (480px) |
|---|---|---|---|
| Overview | 3 colunas | 2 colunas | 1 coluna |
| Highlights | 3 colunas | 1 coluna | — |
| Two-col | 2 colunas | 1 coluna | — |
| Feedback | 2 colunas | 1 coluna | — |
| Metrics | 3 colunas | 1 coluna | — |
| Screenshots | 4 colunas | 2 colunas | 2 colunas |
| Viz grid | 2 colunas | 1 coluna | — |

---

## Responsividade geral

| Breakpoint | Mudanças |
|---|---|
| 900px | Hero: column-reverse, foto 240px; Grid projetos: 3→2 cols |
| 768px | Footer: 2→1 col; case: nav menor, grids colapsam |
| 600px | Nav: esconde `.nav-link`; Grid: 1 col; foto 100% width |
| 480px | Home cards: row (flag lateral); case: hero menor, seções padding menor |

---

## Assets

```
src/assets/
├── flags/     br_flag.jpg, es_flag.jpg, uk_flag.jpg
├── logo/      logo.png
├── profile/   victor.jpg
└── projects/  b2b_portal.png, design_system.png, ecosystem.png, globo_tools.png, vivo.png
```
