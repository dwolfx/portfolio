# Changelog — Portfolio Victor Morais

Ordem: mais recente primeiro.

---

## [dev] VivoPay completo + internacionalização — Abr/2026

- **Imagens reais** em todas as seções do VivoPay: hero, conceituação (v0 idea + validation), validação (virtual+pdf), entrega (home, Biometria, fatura, faturaTotal)
- **Embed Figma** real na seção 06 Entrega (iframe com allowFullScreen)
- **Internacionalização completa** — `src/data/vivoPayLocales.jsx` com PT-BR, EN e ES unificados
- **Lang dropdown no case** funcionando com classes corretas (`contact-wrap`, `lang-btn`, etc.) — bug v2-* classes resolvido
- **Favicon** aplicado (`public/favicon.png` + link no `index.html`)
- **Dados centralizados** — `src/data/projectsData.js` único source of truth para os 3 idiomas
- Tags do grid derivadas só de projetos não-WIP (sem poluição do filtro)
- Tags clicáveis nos cards de projeto (filtram o grid via stopPropagation)
- **Estrutura de Assets:**
  ├── profile/   victor.jpg
  └── projects/  b2b_portal.png, ecosystem.png, globo_tools.png, vivo.png, wip-placeholder.png

Projetos WIP usam a imagem `wip-placeholder.png` para consistência visual.

---

## [2026-05-02] - Agnes
- Criação da estrutura de documentação do projeto (CLAUDE, DESIGN, DEVELOPMENT, CHANGELOG, README).
- Implementação da página Home multilíngue com animações Framer Motion.
- Finalização da página `PortuguesePortfolio.jsx` com seção de experiência e projetos.
- Sincronização e tradução da seção de experiência (currículo) nas páginas `EnglishPortfolio.jsx` e `SpanishPortfolio.jsx`.
- Ajuste das descrições para a 1ª pessoa, refletindo fielmente a versão em português.
- Correção de cargos e detalhes técnicos para maior precisão em EN e ES.
- Adição do botão "Ver case completo →" nos itens de experiência que possuem link (ex: VivoPay).
- Redesign do botão de case para torná-lo mais visível (estilo botão secundário com fundo e hover).
- Implementação de **Smooth Scroll** global para links de âncora via CSS.
- Padronização do nome **VivoPay** (removendo espaço) em todo o projeto e metadados.
- Geração e implementação de **Paleta de Design**:
  Placeholder cinza:    #e5e5ea  /  text #6e6e73
  Case button bg:      rgba(99, 102, 241, 0.06)
  Case button border:  rgba(99, 102, 241, 0.15)

---

## [atual] Setup de branch e documentação — Abr/2026

- Branch `react` excluída (local e remote) — não refletia o projeto atual
- Branch `dev` criada a partir de `main` — branch de trabalho ativa
- Todos os `.md` reescritos com base em leitura completa do código

---

## [atual] Mobile fixes e refinamentos — Abr/2026

- `ec86141` fix: foto do hero corrigida no mobile
- `733f98d` fix: foto centralizada e largura total no mobile
- `ddbd676` refactor: removido prefixo `v2` dos **arquivos** (não dos exports nem das classes CSS)
- `49c8507` fix: link "Projetos" escondido no nav em mobile (`@media 600px`)
- `6e35e41` fix: cards de idioma com largura igual no mobile
- `8d24c8b` fix: cards em construção mostram apenas a tag "Em construção"
- `750c901` fix: `html { scroll-behavior: smooth; }`
- `750c901` fix: `overflow: visible` no nav das portfolio pages para dropdowns não serem cortados
- `e5a2681` feat: Vivo primeiro nos cards; tag "Em construção" nos demais

---

## [v2] Portfolio completo redesenhado — `f0f28ca`

Marco principal: redesign completo.

- Novo design: glassmorphism nav, dark hero gradient, grid de projetos
- Case study Vivo Pay (8 seções, scroll animations, multi-idioma na navegação)
- Roteamento por idioma `/:lang` com `LanguageRouter`
- Framer Motion para animações de entrada e scroll
- 3 idiomas nas portfolio pages e no case study
- `.gitignore` corrigido: `node_modules/` e `dist/` removidos do tracking

---

## [v1] React inicial — `28fc4e4`

- Projeto React + Vite criado do zero
- Home com seleção de idioma
- Versões PT-BR e EN das páginas de portfolio
- Refinamentos mobile e links sociais

---

## [v0] Vanilla / Notion redirect — `b891d58`

- Commit inicial: redirect para portfolio no Notion
- Tentativas em HTML/CSS vanilla antes de migrar para React

---

## Decisões registradas

| Decisão | Razão |
|---|---|
| Branch `dev` como ativa | Isola trabalho de `main` estável |
| Prefixo `v2` removido dos arquivos | Não há mais v1 em paralelo |
| `overflow: visible` no nav | Dropdowns estavam sendo cortados |
| Cards WIP mostram só tag de construção | Tags reais em cards sem case confundiam |
| Vivo primeiro no grid | Único case ativo — destaque natural |
| `dist/` e `node_modules/` no `.gitignore` | Estavam versionados por engano |
| Accent dual: Home #4F46E5 / Portfolio #6366f1 | Diferenciação visual de contexto |
| CSS puro sem Tailwind | Preferência do Victor |
| Framer Motion (não CSS transitions) | Necessário para sequências complexas e stagger |
| `useState` local sem Redux/Context | Escopo pequeno não justifica |
| `projectsData.js` centralizado | Evita drift entre os 3 idiomas |
| `vivoPayLocales.jsx` unificado | Um arquivo para os 3 idiomas — sem duplicação |
| `object-fit: contain` nas screenshots | Sem corte — imagens de tamanhos diferentes |
| Hero gradient Vivo Pay inline no JSX | Override por case — permite personalização |
| Push só sob demanda explícita | Regra de workflow combinada com Victor |
