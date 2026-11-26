<div align="center">
  <img src="public/favicon.svg" alt="Victor Morais Logo" width="72" />
  <h1>Victor Morais — Portfolio</h1>
  <p>
    <strong>Senior Product Designer & Front-end Engineer</strong><br/>
    Portfólio em SPA (React + Vite) com direção de arte Cinematográfica Dark Editorial, smooth scroll (Lenis), motion com Framer Motion, ícones Lucide e suporte nativo a PT-BR, EN e ES.
  </p>

  <p>
    <a href="https://victormorais.art"><img src="https://img.shields.io/badge/Live-victormorais.art-08080A?style=flat" alt="Live" /></a>
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-18.3.1-blue.svg?style=flat&logo=react" alt="React" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-5.4-646CFF.svg?style=flat&logo=vite&logoColor=white" alt="Vite" /></a>
    <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-12.38-black.svg?style=flat&logo=framer" alt="Framer Motion" /></a>
  </p>
</div>

---

## Rotas & Versões
- **`/` (Principal — `victormorais.art`)**: Nova edição Cinematográfica Dark Editorial (`PortfolioV2.jsx`), com seletor de idioma nativo (`PT · EN · ES`), atmosfera viva (`CinematicBackground.jsx`), linha do tempo e galeria editorial.
- **`/v1` (Legado — `v1.victormorais.art`)**: Versão anterior preservada para consulta histórica.
- **`/:lang/cases/:slug`**: Estudos de caso completos com header unificado (`Navbar.jsx`), carrossel interativo (`CaseCarousel.jsx`) e lightbox com galeria e atalhos de teclado (`ImageLightbox.jsx`).

---

## Como Executar

```bash
# Instale as dependências
npm install

# Servidor local com hot reload
npm run dev

# Build de produção
npm run build

# Testes automatizados (Vitest)
npm test
```

---

## Arquitetura de Componentes (`src/components/`)
- **`Navbar.jsx`**: Navegação unificada entre Home e Case Studies, seletor de idioma e menu fullscreen mobile.
- **`CinematicBackground.jsx`**: Aurora atmosférica em movimento lento, grade arquitetônica e spotlight interativo no mouse.
- **`CaseHero.jsx` / `CaseOverview.jsx` / `CaseCTA.jsx`**: Blocos padronizados para estudos de caso (incluindo banner NDA full-width).
- **`CaseCarousel.jsx` & `ImageLightbox.jsx`**: Carrossel horizontal com scroll snap e modal de ampliação com galeria e teclado (`Esc`, `←`, `→`).
- **`CaseIcon.jsx`**: Mapeamento centralizado de ícones `lucide-react` com peso visual unificado (`strokeWidth={1.75}`).

---

## Case Studies Disponíveis

| Projeto | Setor / Foco | Status |
|---|---|---|
| **VivoPay × Itaú** | Fintech, Cartão de Crédito, B2C, App | Completo (PT/EN/ES) |
| **SportingBet (Entain)** | Betting, B2C, KYC, Compliance, Mobile First | Completo (PT/EN/ES) |
| **Bradesco** | Fintech, B2B, Research | Completo (PT/EN/ES) |
| **TradersClub (TC)** | Fintech, B2B, Design System, Automação | Completo (PT/EN/ES) |

---

## Contato

<p>
  <a href="https://wa.me/5511951565851"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" /></a>
  <a href="https://br.linkedin.com/in/victorhugon"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:victorhnmorais@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>
