# Visão Geral — Portfolio Victor Morais

SPA multi-idioma (PT-BR, EN, ES) com seletor de idioma na home e case studies detalhados.

**Branch ativa:** `dev` | **Dev:** `npm run dev` (porta padrão 5173) | **Build:** `npm run build` → `dist/`
**Deploy:** não configurado ainda

---

## Branches

| Branch | Uso |
|---|---|
| `main` | produção / base estável |
| `dev` | branch de trabalho ativa |
| `main-backup` | snapshot de segurança |
| `start` | só no remote — ponto de partida inicial |

---

## Rotas

```
/                          → Home (seletor de idioma)
/pt-br                     → Portfolio em Português
/en                        → Portfolio em Inglês
/es                        → Portfolio em Espanhol
/:lang/cases/vivo-pay      → Case Study Vivo Pay (pt-br, en, es — conteúdo só em PT-BR)
/:lang (desconhecido)      → PortfolioPage.jsx — fallback, efetivamente dead code
```

**Atenção:** `/:lang/cases/vivo-pay` deve estar **antes** de `/:lang` no array de rotas.

---

## Páginas e conteúdo

### Home (`/`)
- Header estático: "Victor Morais" + subtitle "Product Designer"
- 3 cards de idioma animados com stagger Framer Motion (delay 0.12s)
- Footer global montado fora das routes

### Portfolio Pages (`/:lang`)
Mesma estrutura em PT-BR, EN e ES — conteúdo traduzido:
- **Nav sticky** glassmorphism — logo, link Projetos (oculto ≤600px), dropdown Contato, seletor de idioma
- **Hero** dark gradient — nome com `.` accent, tagline, chips, bio 2 parágrafos, social links, foto (420px)
- **Statement** — blockquote com borda esquerda + parágrafo filosofia
- **Projects** — filtros por tag, grid 3 colunas, AnimatePresence, "Ver mais" (limite 9)

### Case Study Vivo Pay (`/:lang/cases/vivo-pay`)
- **Nav** — logo + botão voltar + seletor de idioma (dropdown com v2-* classes — ver Problemas Conhecidos)
- **Hero** — gradient roxo/magenta inline, tag monospace, título, subtitle, CTA download PDF, placeholder hero image
- **Overview** — grid 6 células: Empresa, Meu papel, Parceiro, Plataforma, Período, Ferramentas
- **Seções:** 01 Contexto · 02 Papel · 03 Discovery · 04 Conceituação · 05 Validação · 06 Entrega · 07 Resultados · 08 Visão de Futuro
- **CTA Final** — download PDF + contato
- **Conteúdo:** todo em PT-BR independente do `lang` param. Só navegação muda de idioma.

---

## Projetos no grid

| Projeto | Tags PT-BR | Tags EN | Tags ES | Status |
|---|---|---|---|---|
| Vivo | Fintech, Cartão de crédito, B2C, Mobile, App | B2C, API, Credit Card, Fintech | B2C, API, Tarjeta de crédito, Fintech | ✅ Case completo |
| Rede Globo | Mídia, Ferramentas | Media, Tools | Medios, Herramientas | 🚧 WIP |
| SportingBet (Entain) | Betting, UI/UX | Betting, UI/UX | Apuestas, UI/UX | 🚧 WIP |
| TradersClub | Fintech, Dados | Fintech, Data | Fintech, Datos | 🚧 WIP |
| Gen (General Shopping) | Varejo, UX | Retail, UX | Retail, UX | 🚧 WIP |
| Porto Seguro (Sciensa) | Seguros, B2B | Insurance, B2B | Seguros, B2B | 🚧 WIP |
| CV-Fácil | SaaS, RH | SaaS, HR | SaaS, RRHH | 🚧 WIP |

Nota: PT-BR usa `vivoPayTags` de `vivoPayData.js`. EN e ES têm tags inline próprias.

---

## Contatos no site

- WhatsApp: wa.me/5511951565851
- LinkedIn: br.linkedin.com/in/victorhugon
- GitHub: github.com/dwolfx
- Email: victor9009@gmail.com

---

## Problemas Conhecidos

- **Bug — lang button no VivoPay sem estilo:** nav usa classes `v2-contact-wrap`, `v2-lang-btn`, `v2-contact-dropdown`, `v2-contact-item` que não existem em CaseStudy.css. Dropdown está sem CSS.
- **case-nav com overflow: hidden:** clipa dropdowns (razão provável do bug acima).
- **VivoPay em PT-BR apenas:** o `lang` param muda só os labels de navegação, o conteúdo do case é sempre português.

---

## O que falta

- Imagens reais no Vivo Pay (todos os `<Img>` são placeholders cinza)
- PDF linkado (`/vivo-pay-case.pdf` não existe ainda)
- Embed Figma na seção 06 (placeholder comentado no JSX)
- Case studies dos 6 projetos WIP
- Deploy / hospedagem
- Tradução do conteúdo do VivoPay para EN e ES
