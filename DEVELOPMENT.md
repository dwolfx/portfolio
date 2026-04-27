# Desenvolvimento — Portfolio Victor Morais

---

## Stack

| Item | Versão | Função |
|---|---|---|
| React | 18.3.1 | UI |
| Vite | 5.4.1 | Build + dev server |
| React Router DOM | 6.26.2 | Roteamento SPA |
| Framer Motion | 12.38.0 | Animações |
| ESLint | 9.9.0 | Linting |

```bash
npm run dev      # dev server
npm run build    # gera dist/
npm run preview  # preview do build
npm run lint     # ESLint
```

---

## Estrutura de pastas

```
src/
├── assets/
│   ├── flags/          br_flag.jpg, es_flag.jpg, uk_flag.jpg
│   ├── logo/           logo.png
│   ├── profile/        victor.jpg
│   └── projects/       b2b_portal.png, design_system.png, ecosystem.png, globo_tools.png, vivo.png
├── components/
│   ├── Footer.jsx      global — montado no App.jsx fora das routes
│   ├── Header.jsx      só na Home
│   └── LanguageCard.jsx
├── data/
│   └── vivoPayData.js  exporta: vivoPayTags[], vivoPayDescription
├── pages/
│   ├── cases/
│   │   └── VivoPay.jsx
│   ├── Home.jsx
│   ├── PortfolioPage.jsx       fallback para langs desconhecidas
│   ├── PortuguesePortfolio.jsx
│   ├── EnglishPortfolio.jsx
│   └── SpanishPortfolio.jsx
├── App.jsx
├── main.jsx
├── index.css
├── Portfolio.css
└── CaseStudy.css
```

---

## Roteamento (`App.jsx`)

```jsx
<Router>
  <div className="app-container">
    <div className="main-content">
      <Routes>
        <Route path="/"                     element={<Home />} />
        <Route path="/:lang/cases/vivo-pay" element={<VivoPay />} />
        <Route path="/:lang"                element={<LanguageRouter />} />
      </Routes>
    </div>
    <Footer />
  </div>
</Router>
```

`LanguageRouter`: usa `useParams()` → `pt-br` → PortuguesePortfolio / `en` → EnglishPortfolio / `es` → SpanishPortfolio / demais → PortfolioPage.

**Ordem importa:** `/:lang/cases/vivo-pay` deve vir antes de `/:lang` no array.

---

## Componentes em detalhe

### `PortuguesePortfolio.jsx` (e versões EN/ES — mesma estrutura)

State:
```jsx
const [activeTag, setActiveTag] = useState(null);
const [isContactOpen, setIsContactOpen] = useState(false);
const [isLangOpen, setIsLangOpen] = useState(false);
const [showAll, setShowAll] = useState(false);
```

Lógica de projetos:
```jsx
const VISIBLE_LIMIT = 9;
const allTags = [...new Set(projects.flatMap(p => p.tags))];
const filtered = activeTag ? projects.filter(p => p.tags.includes(activeTag)) : projects;
const visible = (!showAll && filtered.length > VISIBLE_LIMIT) ? filtered.slice(0, VISIBLE_LIMIT) : filtered;
const hasMore = !showAll && filtered.length > VISIBLE_LIMIT;
```

Array `projects`: `{ title, description, tags[], image, link?, wip? }`
- Cards com `wip: true` mostram só tag "Em construção"
- Só Vivo tem `link` ativo (`/pt-br/cases/vivo-pay`)

### `VivoPay.jsx`

- `useEffect(() => { window.scrollTo(0, 0); }, [])` — scroll to top ao montar
- `useParams()` → `lang` (pt-br, en, es)
- `langMeta`: `{ 'pt-br': { flag, label }, 'en': {...}, 'es': {...} }`
- `backLabel` por idioma: "← Projetos" / "← Projects" / "← Proyectos"
- `Img` component local: placeholder com classe CSS para dimensionamento
- `InView` component local: wrapper Framer Motion para scroll animations

---

## Padrão dropdown click-outside

```jsx
const ref = useRef(null);
useEffect(() => {
  if (!isOpen) return;
  const handle = (e) => {
    if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
  };
  document.addEventListener('mousedown', handle);
  return () => document.removeEventListener('mousedown', handle);
}, [isOpen]);
```

Usado em: `contactRef` e `langRef` nas portfolio pages, `langRef` no VivoPay.

---

## Convenções

| Tipo | Convenção |
|---|---|
| Componentes | PascalCase (`LanguageCard.jsx`) |
| Classes CSS | kebab-case (`.project-card`, `.hero-inner`) |
| Constantes | CAPS (`VISIBLE_LIMIT`, `LOREM`) |
| Dados/utils | camelCase (`vivoPayData.js`) |

---

## State management

Sem Redux, sem Context. Tudo `useState` local — escopo pequeno não justifica.

---

## Observações de build

- `dist/` e `node_modules/` no `.gitignore`
- Vite resolve imports de imagens automaticamente
- Sem TypeScript no código — só `@types/react` como devDependency para DX
