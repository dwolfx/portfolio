<div align="center">
  <img src="public/favicon.png" alt="Victor Morais Logo" width="100" />
  <h1>Victor Morais | Portfolio</h1>
  <p>
    <strong>Product Designer | UX/UI | UX Research</strong><br/>
    Um portfólio completo em SPA (Single Page Application) com suporte nativo a múltiplos idiomas e arquitetura moderna orientada a componentes.
  </p>

  <p>
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-18.3.1-blue.svg?style=flat&logo=react" alt="React" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-5.4.1-646CFF.svg?style=flat&logo=vite&logoColor=white" alt="Vite" /></a>
    <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-12.38-black.svg?style=flat&logo=framer" alt="Framer Motion" /></a>
    <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-success.svg" alt="Status" />
  </p>
</div>

---

## 🌍 Internacionalização
O portfólio suporta 3 idiomas nativos, selecionáveis diretamente pela interface:
- 🇧🇷 **Português (PT-BR)**
- 🇺🇸 **Inglês (EN)**
- 🇪🇸 **Espanhol (ES)**

A infraestrutura garante que **o mesmo componente sirva diferentes idiomas**, com traduções estáticas centralizadas nos arquivos `Locales` (Ex: `src/data/vivoPayLocales.jsx`).

---

## 🚀 Como Executar

O projeto utiliza **Node.js** e **Vite** para um ambiente de desenvolvimento ultrarrápido.

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento (geralmente em localhost:5173)
npm run dev

# Para criar o build de produção
npm run build
```

---

## 📂 Arquitetura do Projeto

O projeto foi refatorado para uma **arquitetura limpa e orientada a componentes**. O fluxo principal da aplicação atua apenas como uma camada de orquestração de componentes reutilizáveis.

### 🧩 Principais Componentes de UI (`src/components/`)
* **`ProjectsGallery.jsx`**: Componente de galeria com suporte a filtro por tags e lógica de "Ver Mais".
* **`ExperienceSection.jsx`**: Linha do tempo profissional e CTA de download do currículo.
* **`CaseHero.jsx` / `CaseOverview.jsx` / `CaseCTA.jsx`**: Blocos modulares padronizados que constroem visualmente as páginas de *Case Study*.

---

## 💼 Case Studies Disponíveis

Atualmente, o portfólio conta com 4 estudos de caso aprofundados implementados em código (além dos projetos listados no currículo):

| Projeto | Setor / Tags Principais | Status |
|---|---|---|
| **VivoPay** | Fintech, Cartão de crédito, B2C, Mobile, APP | ✅ Completo (PT/EN/ES) |
| **SportingBet** | Betting, B2C, Research, Mobile First, Legal | ✅ Completo (PT/EN/ES) |
| **Bradesco** | Fintech, B2B, Research | ✅ Completo (PT/EN/ES) |
| **TradersClub (TC)** | Fintech, B2B, Investimentos | ✅ Completo (PT/EN/ES) |

---

## 📚 Documentação Adicional

O projeto conta com uma suíte de documentação robusta para manter a manutenibilidade:
- [**DEVELOPMENT.md**](./DEVELOPMENT.md) — Stack, arquitetura detalhada e gerenciamento de estado.
- [**DESIGN.md**](./DESIGN.md) — Design Tokens, variáveis CSS e padrões visuais.
- [**CASES-PATTERN.md**](./CASES-PATTERN.md) — Guia de implementação e padronização para novos Case Studies.
- [**CHANGELOG.md**](./CHANGELOG.md) — Histórico de mudanças do projeto.

---

## 🖨️ Geração Dinâmica de PDFs

Para enviar o material de forma offline, o projeto possui um script em **Puppeteer** que navega pelos Case Studies em React e gera PDFs estáticos com alta fidelidade de design, e os salva em `/public`.

**Como usar:**
1. Certifique-se de que o servidor local está rodando (`npm run dev`)
2. Em outra aba do terminal, rode:
```bash
node scripts/generate-pdfs.js <slug-do-case>
# Exemplo: node scripts/generate-pdfs.js vivo-pay
```

---

## 📞 Contato

<p>
  <a href="https://wa.me/5511951565851"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" /></a>
  <a href="https://br.linkedin.com/in/victorhugon"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:victor9009@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>
