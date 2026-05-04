# Desenvolvimento — Portfolio Victor Morais

## Arquivos de Contexto
- `README.md` — Visão geral e roadmap
- `DESIGN.md` — Tokens, paleta e componentes
- `DEVELOPMENT.md` — Stack e estrutura de arquivos
- `CASES-PATTERN.md` — Guia de implementação de novos cases
- `CHANGELOG.md` — Histórico de mudanças

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
│   ├── CaseCTA.jsx
│   ├── CaseHeader.jsx
│   ├── CaseHero.jsx
│   ├── CaseOverview.jsx
│   ├── ExperienceSection.jsx
│   ├── Footer.jsx      global — montado no App.jsx fora das routes
│   ├── Header.jsx      só na Home (estático)
│   ├── HeroProfile.jsx
│   ├── InView.jsx
│   ├── LanguageCard.jsx
│   ├── ProjectsGallery.jsx
│   └── Statement.jsx
├── data/
│   └── vivoPayData.js  exporta: vivoPayTags[], vivoPayDescription (só usado pelo PT-BR)
├── pages/
│   ├── cases/
│   │   ├── VivoPay.jsx
│   │   └── Sportingbet.jsx
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

Mesma estrutura, operando como camadas de orquestração. Não possuem mais marcação complexa.

State (gerenciado e repassado para `ProjectsGallery.jsx`):
```jsx
const [activeTag, setActiveTag] = useState(null);
const [showAll, setShowAll] = useState(false);
```

As páginas importam os dados de `projectsData.js` e `Locales` (para traduções estáticas) e os distribuem via *props* para `HeroProfile`, `ProjectsGallery`, `ExperienceSection` e `Statement`.

### Páginas de Cases (`VivoPay.jsx`, etc.)

Refatoradas para serem orientadas a componentes, consumindo seções reutilizáveis para garantir consistência visual em todas as páginas:

- `CaseHero`: Imagem de capa, tags, gradiente de fundo customizável.
- `CaseOverview`: Bloco de confidencialidade (NDA) e lista de informações técnicas do case.
- `CaseCTA`: Bloco de rodapé para baixar o PDF ou mandar e-mail.

```jsx
useEffect(() => { window.scrollTo(0, 0); }, []);  // scroll to top ao montar
```

- `useParams()` → `lang` (default: 'pt-br')
- **Conteúdo multi-idioma.** `t` mapeia do respectivo Locales (`vivoPayLocales.jsx`, etc.) usando o parâmetro `lang`.
- Os gradientes de cada case são repassados via prop `gradient` ao `CaseHero`.



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
