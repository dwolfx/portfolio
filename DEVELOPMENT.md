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
npm run dev      # dev server (porta 5173)
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
│   ├── Header.jsx      só na Home (estático)
│   └── LanguageCard.jsx
├── data/
│   └── vivoPayData.js  exporta: vivoPayTags[], vivoPayDescription (só usado pelo PT-BR)
├── pages/
│   ├── cases/
│   │   └── VivoPay.jsx
│   ├── Home.jsx
│   ├── PortfolioPage.jsx       fallback para langs desconhecidas (dead code em produção)
│   ├── PortuguesePortfolio.jsx  (export: PortuguesePortfolioV2)
│   ├── EnglishPortfolio.jsx     (export: EnglishPortfolioV2)
│   └── SpanishPortfolio.jsx     (export: SpanishPortfolioV2)
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

`LanguageRouter` (inline em App.jsx): `useParams()` → `pt-br` → PortuguesePortfolio / `en` → EnglishPortfolio / `es` → SpanishPortfolio / demais → PortfolioPage (fallback).

**Ordem importa:** `/:lang/cases/vivo-pay` deve vir antes de `/:lang`.

---

## Componentes em detalhe

### `PortuguesePortfolio.jsx` / `EnglishPortfolio.jsx` / `SpanishPortfolio.jsx`

Mesma estrutura. Export name tem sufixo V2 (ex: `PortuguesePortfolioV2`) — artefato de refactor, não afeta funcionamento.

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
- Cards com `wip: true` mostram apenas 1 tag "Em construção" / "Coming soon" / "Próximamente"
- Só Vivo tem `link` ativo
- Clique no card usa `useNavigate(project.link)` — toda a div é clicável
- PT-BR usa `vivoPayTags` e `vivoPayDescription` de `vivoPayData.js`. EN e ES têm descrições e tags inline próprias.

Diferença de delays nas animações do hero:
- PT-BR: tagline 0.22, chips 0.27, bio 0.32, links 0.34 (mais espaçado)
- EN/ES: tagline 0.08, chips 0.14, bio 0.20, links 0.26 (mais rápido)

### `VivoPay.jsx`

```jsx
useEffect(() => { window.scrollTo(0, 0); }, []);  // scroll to top ao montar
```

- `useParams()` → `lang` (default: 'pt-br')
- `langMeta`: `{ 'pt-br': { flag, label }, 'en': {...}, 'es': {...} }`
- `backLabel` por idioma: "← Projetos" / "← Projects" / "← Proyectos"
- `otherLangs`: filtra `langMeta` excluindo o lang atual para o dropdown
- `Img` component local: `<div className="case-img-placeholder {className}">{label}</div>`
- `InView` component local: wrapper Framer Motion para scroll animations
- **Conteúdo em PT-BR apenas.** O `lang` param só muda labels de nav e links de volta/idioma.
- Hero gradient Vivo Pay definido via `style={}` inline, sobrescreve o default do `.case-hero`.

---

## Problema conhecido — v2-* classes no VivoPay

O nav do VivoPay usa classes com prefixo `v2-`:
```jsx
<div className="v2-contact-wrap" ref={langRef}>
  <button className="v2-lang-btn">
    <img src={...} /> ▾
  </button>
  <div className="v2-contact-dropdown">
    <Link className="v2-contact-item">
```

Essas classes **não existem em CaseStudy.css**. O Portfolio.css define `.contact-wrap`, `.lang-btn`, etc. (sem prefixo), mas só é importado pelas portfolio pages, não pelo VivoPay. O `case-nav` também tem `overflow: hidden`, o que cliparia qualquer dropdown.

**Resultado:** o botão seletor de idioma no VivoPay aparece sem estilo algum.

**Fix necessário:** adicionar as classes `v2-*` em CaseStudy.css (ou mudar o markup para usar `.lang-btn` etc. e mudar `case-nav` para `overflow: visible`).

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
- Sem TypeScript — só `@types/react` como devDependency para DX
- `type: "module"` no package.json
