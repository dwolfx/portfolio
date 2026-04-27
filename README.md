# Visão Geral — Portfolio Victor Morais

SPA multi-idioma (PT-BR, EN, ES) com seletor de idioma na home e case studies detalhados.

**Branch:** main | **Dev:** `npm run dev` | **Build:** `npm run build` → `dist/`  
**Deploy:** não configurado ainda

---

## Rotas

```
/                          → Home (seletor de idioma)
/pt-br                     → Portfolio em Português
/en                        → Portfolio em Inglês
/es                        → Portfolio em Espanhol
/:lang/cases/vivo-pay      → Case Study Vivo Pay (suporta pt-br, en, es)
```

---

## Páginas e conteúdo

### Home (`/`)
- Hero animado com nome + "Product Designer"
- 3 cards de idioma (PT-BR, EN, ES) com animação stagger (Framer Motion)
- Footer global com links sociais

### Portfolio Pages (`/:lang`)
Mesma estrutura nas 3 versões, conteúdo traduzido:
- **Nav sticky** glassmorphism — logo, link Projetos (oculto no mobile), dropdown Contato, seletor de idioma
- **Hero** dark gradient — nome, tagline, chips, bio, social links, foto
- **Statement** — quote + texto sobre filosofia de design
- **Projects** — grid com filtros por tag, "Ver mais" (limite 9), AnimatePresence nas transições

### Case Study Vivo Pay (`/:lang/cases/vivo-pay`)
- **Nav** — logo, botão voltar, seletor de idioma
- **Hero** — gradient roxo/magenta, tags, título, CTA download PDF
- **Overview** — grid 6 itens: Empresa, Papel, Parceiro, Plataforma, Período, Ferramentas
- **Seções:** 01 Contexto · 02 Papel · 03 Discovery · 04 Conceituação · 05 Validação · 06 Entrega · 07 Resultados · 08 Visão de Futuro
- **CTA Final** — download PDF + contato

---

## Projetos no grid

| Projeto | Tags | Status |
|---|---|---|
| Vivo Pay | Fintech, Cartão de crédito, B2C, Mobile, App | ✅ Case completo |
| Rede Globo | Mídia, Ferramentas | 🚧 WIP |
| SportingBet (Entain) | Betting, UI/UX | 🚧 WIP |
| TradersClub | Fintech, Dados | 🚧 WIP |
| Gen (General Shopping) | Varejo, UX | 🚧 WIP |
| Porto Seguro (Sciensa) | Seguros, B2B | 🚧 WIP |
| CV-Fácil | SaaS, RH | 🚧 WIP |

---

## Contatos no site

- WhatsApp: wa.me/5511951565851
- LinkedIn: br.linkedin.com/in/victorhugon
- GitHub: github.com/dwolfx
- Email: victor9009@gmail.com

---

## O que falta

- Imagens reais no Vivo Pay — placeholders dashed atuais
- PDF linkado (`/vivo-pay-case.pdf` não existe ainda)
- Páginas de case study dos 6 projetos restantes (só existem no grid)
- Deploy / hospedagem
