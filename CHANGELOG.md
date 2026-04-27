# Changelog — Portfolio Victor Morais

Ordem: mais recente primeiro.

---

## [dev] Setup de branch e documentação — Abr/2026

- Branch `react` excluída (local e remote) — não refletia o projeto atual
- Branch `dev` criada a partir de `main` — branch de trabalho ativa
- Todos os `.md` reescritos com base em leitura completa do código:
  - Documentados problemas conhecidos (v2-* classes, VivoPay PT-BR only)
  - Corrigidas imprecisões (delays de animação, export names V2, tags por idioma)
  - Adicionadas observações de build e estrutura que faltavam

---

## [atual] Mobile fixes e refinamentos — Abr/2026

- `ec86141` fix: foto do hero corrigida no mobile
- `733f98d` fix: foto centralizada e largura total no mobile
- `ddbd676` refactor: removido prefixo `v2` dos **arquivos** (não dos exports nem das classes CSS)
- `49c8507` fix: link "Projetos" escondido no nav em mobile (`@media 600px`)
- `6e35e41` fix: cards de idioma com largura igual no mobile
- `8d24c8b` fix: cards em construção mostram apenas a tag "Em construção"
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
| Prefixo `v2` removido dos arquivos | Não há mais v1 em paralelo — mas export names mantêm V2 (artefato) |
| `overflow: visible` no nav das portfolio pages | Dropdowns estavam sendo cortados |
| `overflow: hidden` no case-nav | Sem dropdown próprio (mas cria bug no lang button — v2-* classes) |
| Cards WIP mostram só tag de construção | Tags reais em cards sem case confundiam |
| Vivo primeiro no grid | Único case ativo — destaque natural |
| `dist/` e `node_modules/` no `.gitignore` | Estavam versionados por engano |
| Accent dual: Home #4F46E5 / Portfolio #6366f1 | Diferenciação visual de contexto |
| CSS puro sem Tailwind | Preferência do Victor — arquivos separados por contexto |
| Framer Motion (não CSS transitions) | Necessário para sequências complexas e stagger |
| `useState` local sem Redux/Context | Escopo pequeno não justifica |
| VivoPay conteúdo só em PT-BR | Case ainda em construção — tradução pendente |
| Tags inline por idioma (EN/ES) vs `vivoPayData.js` (PT-BR) | Inconsistência a unificar futuramente |
| Hero gradient Vivo Pay inline no JSX | Override do default do `.case-hero` — permite personalização por case |
