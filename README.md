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
/:lang/cases/vivo-pay      → Case Study Vivo Pay (pt-br, en, es)
/:lang/cases/sportingbet   → Case Study Sportingbet (pt-br, en, es)
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
- **Projects** — filtros por tag, grid 3 colunas, AnimatePresence, "Ver mais" (limite 9). Tags derivadas apenas de projetos não-WIP. Clique na tag do card filtra o grid.

### Case Study Vivo Pay (`/:lang/cases/vivo-pay`)
- **Nav** — logo + botão voltar + seletor de idioma (dropdown com classes `contact-wrap`, `lang-btn`, `contact-dropdown`, `contact-item`)
- **Hero** — gradient roxo/magenta inline, tag monospace, título, subtitle, CTA download PDF, imagem hero real
- **Overview** — grid 6 células: Empresa, Meu papel, Parceiro, Plataforma, Período, Ferramentas
- **Seções:**
  - 01 Contexto · 02 Papel (com highlights) · 03 Discovery (com decision block)
  - 04 Conceituação — 2 imagens reais: `v0 idea.png` + `validation.png`
  - 05 Validação — 2 feedback cards + imagem `virtual+pdf.png`
  - 06 Entrega — embed Figma (iframe) + 4 screenshots reais: `home.png`, `Biometria.png`, `fatura.png`, `faturaTotal.png`
  - 07 Resultados (métricas) · 08 Visão de Futuro
- **CTA Final** — download PDF + contato
- **Conteúdo:** Totalmente internacionalizado via `src/data/vivoPayLocales.jsx` (PT-BR, EN, ES)

---

## Projetos no grid

| Projeto | Tags PT-BR | Tags EN | Tags ES | Status |
|---|---|---|---|---|
| VivoPay | Fintech, Cartão de crédito, B2C, Mobile, App | B2C, API, Credit Card, Fintech | B2C, API, Tarjeta de crédito, Fintech | ✅ Case completo |
| SportingBet (Entain) | Betting, Regulamentação, KYC, UI/UX, Mobile | Betting, Regulation, KYC, UI/UX, Mobile | Betting, Regulación, KYC, UI/UX, Mobile | ✅ Case completo |
| Rede Globo | Mídia, Ferramentas | Media, Tools | Medios, Herramientas | 🚧 WIP (Placeholder) |
| TradersClub | Fintech, Dados | Fintech, Data | Fintech, Datos | 🚧 WIP (Placeholder) |
| Gen (General Shopping) | Varejo, UX | Retail, UX | Retail, UX | 🚧 WIP (Placeholder) |
| Porto Seguro (Sciensa) | Seguros, B2B | Insurance, B2B | Seguros, B2B | 🚧 WIP (Placeholder) |
| CV-Fácil | SaaS, RH | SaaS, HR | SaaS, RRHH | 🚧 WIP (Placeholder) |

Dados centralizados em `src/data/projectsData.js` (exporta `projectsPtBr`, `projectsEn`, `projectsEs`).

---

## Contatos no site

- WhatsApp: wa.me/5511951565851
- LinkedIn: br.linkedin.com/in/victorhugon
- GitHub: github.com/dwolfx
- Email: victor9009@gmail.com

---

## O que falta

- Case studies dos 5 projetos WIP (próximo: TradersClub)
- Deploy / hospedagem
- Manutenção dos padrões definidos em `CASES-PATTERN.md`

---

## Scripts Adicionais

### Geração Estática de PDFs dos Cases
Para gerar versões PDF contínuas e selecionáveis de todos os idiomas para um case:
1. Certifique-se de que o servidor dev está rodando (`npm run dev`)
2. Execute o script passando o slug do case:
   ```bash
   node scripts/generate-pdfs.js vivo-pay
   node scripts/generate-pdfs.js sportingbet
   ```
O script usará o Puppeteer para navegar pela página e exportar os arquivos para `public/`. Consulte `CASES-PATTERN.md` para o guia completo de exportação.
