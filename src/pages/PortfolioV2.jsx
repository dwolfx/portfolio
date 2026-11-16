import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './PortfolioV2.css';

import victorProfile from '../assets/profile/victor.jpg';
import brFlag from '../assets/flags/br_flag.jpg';
import { projectsPtBr } from '../data/projectsData';
import Navbar from '../components/Navbar';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: custom }
  })
};

// Ícones SVGs Oficiais
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.5031 3.48759C18.267 1.24757 15.223 -0.0083771 12.0504 4.20563e-05C5.46339 4.20563e-05 0.102563 5.33457 0.100272 11.8917C0.0974582 13.9786 0.647687 16.0292 1.69545 17.837L0 24L6.3349 22.3463C8.08683 23.2964 10.0502 23.7941 12.0453 23.7941H12.0504C18.6363 23.7941 23.9976 18.459 23.9999 11.902C24.0102 8.74496 22.751 5.71509 20.5031 3.48759ZM17.4983 14.3796C17.1998 14.2307 15.7318 13.5123 15.4579 13.4102C15.184 13.3082 14.9852 13.2614 14.7864 13.559C14.5876 13.8567 14.0152 14.5256 13.841 14.7241C13.6668 14.9224 13.4926 14.9469 13.194 14.7982C12.8955 14.6493 11.844 14.364 10.678 13.324C9.773 12.518 9.158 11.524 8.981 11.22C8.803 10.916 8.955 10.751 9.106 10.6C9.243 10.465 9.41 10.246 9.562 10.068C9.715 9.891 9.765 9.764 9.866 9.561C9.967 9.358 9.916 9.18 9.841 9.028C9.765 8.718 9.156 7.224 8.9 6.617C8.653 6.025 8.403 6.105 8.215 6.096C8.04 6.088 7.838 6.087 7.635 6.087C7.432 6.087 7.103 6.163 6.824 6.467C6.545 6.771 5.757 7.505 5.757 8.998C5.757 10.491 6.84 11.933 6.992 12.135C7.144 12.338 9.143 15.4 12.199 16.714C12.926 17.026 13.483 17.211 13.924 17.351C14.651 17.581 15.316 17.547 15.842 17.468C16.426 17.381 17.643 16.735 17.896 16.027C18.149 15.319 18.149 14.711 18.073 14.585" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.223 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.223ZM7.119 20.452H3.555V9H7.119V20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447Z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C18.6276 0 24 5.50791 24 12.3035C24 17.7383 20.5656 22.3487 15.8004 23.9771C15.192 24.0983 14.976 23.7141 14.976 23.3865C14.976 22.9809 14.9904 21.6561 14.9904 20.0097C14.9904 18.8625 14.6064 18.1138 14.1756 17.7322C16.848 17.4274 19.656 16.3869 19.656 11.6613C19.656 10.3173 19.1904 9.22057 18.42 8.35897C18.5448 8.04817 18.9564 6.79674 18.3024 5.10234C18.3024 5.10234 17.2968 4.77266 15.006 6.36386C14.0472 6.09146 13.02 5.9544 12 5.9496C10.98 5.9544 9.954 6.09146 8.9964 6.36386C6.7032 4.77266 5.6952 5.10234 5.6952 5.10234C5.0436 6.79674 5.4552 8.04817 5.5788 8.35897C4.812 9.22057 4.3428 10.3173 4.3428 11.6613C4.3428 16.3749 7.1448 17.4314 9.81 17.7422C9.4668 18.0494 9.156 18.5913 9.048 19.3869C8.364 19.7013 6.6264 20.2454 5.556 18.365C5.556 18.365 4.9212 17.1829 3.7164 17.0965C3.7164 17.0965 2.5464 17.0809 3.6348 17.8441C3.6348 17.8441 4.4208 18.2221 4.9668 19.6441C4.9668 19.6441 5.6712 21.8401 9.0096 21.0961C9.0156 22.1245 9.0264 23.0937 9.0264 23.3865C9.0264 23.7117 8.8056 24.0923 8.2068 23.9783C3.438 22.3523 0 17.7395 0 12.3035C0 5.50791 5.3736 0 12 0Z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H22C23.1 20 24 19.1 24 18V6C24 4.9 23.1 4.01 22 4.01V4ZM22 8L12 14.5L2 8V6L12 12.5L22 6V8Z" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const PortfolioV2 = () => {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState(null);

  useEffect(() => {
    document.title = 'Victor Morais · Product Designer Especialista';
    window.scrollTo(0, 0);
  }, []);

  const experiences = [
    {
      company: 'Entain (SportingBet)',
      role: 'Product Designer Especialista',
      start: 'Ago 2024',
      end: 'Jan 2026',
      desc: 'Tropicalizei a plataforma global da SportingBet para o mercado brasileiro. Fui um dos responsáveis pelo design do KYC e Onboarding que garantiu a primeira homologação governamental de uma casa de apostas no Brasil, equilibrando compliance regulatório com UX de alta conversão.',
      link: '/pt-br/cases/sportingbet'
    },
    {
      company: 'Vivo (Telefônica)',
      role: 'Product Designer Especialista',
      start: 'Mar 2023',
      end: 'Jun 2024',
      desc: 'Fui um dos fundadores do design da Vivo Fintech e responsável pelos produtos de cartão de crédito, seguros e conta digital. Construímos o VivoPay do zero! Atuei como ponte de UX na integração Vivo + Itaú e desenhei jornadas de confiança seguindo a LGPD.',
      link: '/pt-br/cases/vivo-pay'
    },
    {
      company: 'Bradesco',
      role: 'Product Designer Sênior',
      start: 'Dez 2022',
      end: 'Fev 2023',
      desc: 'Projeto pontual via terceirizada. Liderei o redesign do Autoline, ferramenta B2B de financiamento de veículos para revendedoras, simplificando fichas cadastrais complexas sem comprometer o compliance bancário.',
      link: '/pt-br/cases/bradesco'
    },
    {
      company: 'Gen (General Shopping)',
      role: 'Product Designer Sênior',
      start: 'Jul 2022',
      end: 'Dez 2022',
      desc: 'Liderei o rebranding da plataforma B2B de gestão para lojistas. Introduzi e padronizei o Ant Design System, conduzi pesquisa com lojistas para eliminar gargalos operacionais e colaborei com engenharia para adoção escalável.'
    },
    {
      company: 'TradersClub (TC)',
      role: 'Product Designer Pleno',
      start: 'Mar 2021',
      end: 'Jun 2022',
      desc: 'Atuação híbrida (design + código React): construí o Design System para B2B e B2C e desenvolvi um sistema de automação que reduziu o tempo de criação de relatórios de semanas para apenas 15 minutos.',
      link: '/pt-br/cases/traders-club'
    },
    {
      company: 'Rede Globo',
      role: 'Product Designer Jr, Front-end Especialista',
      start: 'Mar 2017',
      end: 'Set 2020',
      desc: 'Onde migrei para a área. Trabalhei na intersecção entre design e front-end para G1, GE, GShow e Globo.com. Criei os formatos Parallax e FlyCarpet, adotados pelo Google como padrão de mercado, com aumento de 20% no CTR via design orientado por dados.'
    }
  ];

  const allTags = [...new Set(projectsPtBr.filter(p => !p.wip).flatMap(p => p.tags))];
  const filteredProjects = activeTag
    ? projectsPtBr.filter(p => p.tags.includes(activeTag))
    : projectsPtBr;

  return (
    <div className="portfolio-v2">
      
      {/* ─── FLOATING NAVBAR COMPONENTIZADA ─── */}
      <Navbar />

      {/* ─── HERO PROFILE ─── */}
      <section className="v2-hero">
        <div className="v2-hero-content">
          <motion.div
            className="v2-role-pill"
            initial="hidden" animate="visible" variants={fadeUp} custom={0.05}
          >
            <span className="v2-ping"></span>
            Senior Product Designer · Front-end Developer
          </motion.div>

          <motion.h1
            className="v2-name"
            initial="hidden" animate="visible" variants={fadeUp} custom={0.1}
          >
            Victor Morais<span>.</span>
          </motion.h1>

          <motion.p
            className="v2-tagline"
            initial="hidden" animate="visible" variants={fadeUp} custom={0.15}
          >
            Transformando problemas complexos em produtos reais, escaláveis e focados em pessoas.
          </motion.p>

          <motion.div
            className="v2-chips"
            initial="hidden" animate="visible" variants={fadeUp} custom={0.2}
          >
            <span className="v2-chip mono">São Paulo, SP</span>
            <span className="v2-chip mono">Belo Horizonte, MG</span>
          </motion.div>

          <motion.div
            className="v2-bio"
            initial="hidden" animate="visible" variants={fadeUp} custom={0.25}
          >
            <p>
              Product Designer com <strong>visão estratégica</strong> e <strong>background técnico</strong>, focado em criar soluções que equilibram as necessidades do usuário com os objetivos de negócio.
            </p>
            <p>
              Com passagens por <strong className="highlight">Entain, Rede Globo, Vivo e Bradesco</strong>, utilizo <strong>pesquisas e engenharia de design</strong> para acelerar a entrega de valor e transformar problemas complexos em produtos reais e escaláveis.
            </p>
          </motion.div>

          {/* Social Buttons com Ícones Oficiais */}
          <motion.div
            className="v2-social-buttons"
            initial="hidden" animate="visible" variants={fadeUp} custom={0.3}
          >
            <a href="http://wa.me/5511951565851" target="_blank" rel="noreferrer" className="v2-social-btn">
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a href="https://br.linkedin.com/in/victorhugon" target="_blank" rel="noreferrer" className="v2-social-btn">
              <LinkedInIcon />
              LinkedIn
            </a>
            <a href="https://github.com/dwolfx" target="_blank" rel="noreferrer" className="v2-social-btn">
              <GitHubIcon />
              GitHub
            </a>
            <a href="mailto:victor9009@gmail.com" className="v2-social-btn">
              <EmailIcon />
              Email
            </a>
            <a href="/Victor-Morais-ptbr.pdf" download className="v2-social-btn v2-social-btn--cv">
              <DownloadIcon />
              Baixar Currículo
            </a>
          </motion.div>
        </div>

        {/* Foto do Victor com Presença Monumental e Efeito Fusão Editorial */}
        <motion.div
          className="v2-photo-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <div className="v2-photo-glow"></div>
          <div className="v2-photo-card">
            <div className="v2-photo-img-wrapper">
              <img src={victorProfile} alt="Victor Morais" className="v2-photo-img" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── STATEMENT ─── */}
      <section className="v2-statement">
        <motion.div
          className="v2-statement-inner"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <blockquote className="v2-quote">
            “Design que não serve a quem realmente importa é esforço sem destino.”
          </blockquote>
          <p className="v2-statement-desc">
            Acredito que o papel do designer é ser a <strong>ponte</strong> entre o que o usuário precisa e o que o negócio almeja.<br />
            Em vez de apenas desenhar interfaces, projeto caminhos que entregam <strong>valor real</strong> em cada etapa da jornada.
          </p>
        </motion.div>
      </section>

      {/* ─── EXPERIÊNCIA: LINHA DO TEMPO AUTORAL ─── */}
      <section id="experiencia" className="v2-section">
        <div className="v2-timeline-container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <p className="v2-eyebrow">Experiência</p>
            <h2 className="v2-section-title">Histórico Profissional</h2>
          </motion.div>

          <div className="v2-timeline">
            {experiences.map((item, i, arr) => (
              <motion.div
                key={item.company}
                className="v2-timeline-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                {/* Coluna 1: Período */}
                <div className="v2-timeline-period">
                  <span className="v2-timeline-period-start">{item.start}</span>
                  <span className="v2-timeline-period-end">{item.end}</span>
                </div>

                {/* Coluna 2: Conector com Bullet e Linha Cobalto */}
                <div className="v2-timeline-connector">
                  <div className="v2-timeline-bullet" />
                  {i < arr.length - 1 && <div className="v2-timeline-line" />}
                </div>

                {/* Coluna 3: Conteúdo */}
                <div className="v2-timeline-body">
                  <div className="v2-timeline-company">{item.company}</div>
                  <div className="v2-timeline-role">{item.role}</div>
                  <p className="v2-timeline-desc">{item.desc}</p>
                  {item.link && (
                    <button onClick={() => navigate(item.link)} className="v2-timeline-case-btn">
                      Ver case completo →
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJETOS EM DESTAQUE (COM IMAGENS REAIS E MOCKUPS) ─── */}
      <section id="projetos" className="v2-section">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <p className="v2-eyebrow">Projetos</p>
          <h2 className="v2-section-title">Projetos em Destaque</h2>
        </motion.div>

        {/* Filtros */}
        <div className="v2-filters">
          <button
            className={`v2-filter-btn ${activeTag === null ? 'active' : ''}`}
            onClick={() => setActiveTag(null)}
          >
            Todos
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`v2-filter-btn ${activeTag === tag ? 'active' : ''}`}
              onClick={() => setActiveTag(curr => curr === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid de Projetos com Imagens */}
        <div className="v2-projects-grid">
          <AnimatePresence mode="sync">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={proj.title}
                className="v2-project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                onClick={proj.link ? () => navigate(proj.link) : undefined}
              >
                {/* Imagem do Projeto */}
                <div className="v2-project-thumb">
                  <img src={proj.image} alt={proj.title} className="v2-project-thumb-img" />
                </div>

                <div className="v2-project-body">
                  <div className="v2-project-tags">
                    {proj.wip ? (
                      <span className="v2-project-tag v2-project-tag--wip">Em breve</span>
                    ) : (
                      proj.tags.map(t => (
                        <span
                          key={t}
                          className="v2-project-tag"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTag(t);
                          }}
                        >
                          {t}
                        </span>
                      ))
                    )}
                  </div>
                  <h3 className="v2-project-title">{proj.title}</h3>
                  <p className="v2-project-desc">{proj.description}</p>
                  {proj.link && (
                    <span className="v2-project-cta">
                      Ver case completo →
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ─── FOOTER AUTORAL COMPLETO ─── */}
      <footer id="contato" className="v2-footer">
        <div className="v2-footer-inner">
          <div className="v2-footer-main">
            <div className="v2-footer-brand">
              <span className="v2-footer-name">Victor Hugo Nogueira de Morais</span>
              <div className="v2-footer-location">
                <img src={brFlag} alt="Brasil" className="v2-footer-flag" />
                <span>São Paulo, SP | Belo Horizonte, MG</span>
              </div>
            </div>

            <div className="v2-footer-socials">
              <a href="http://wa.me/5511951565851" target="_blank" rel="noreferrer" className="v2-social-btn">
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a href="https://br.linkedin.com/in/victorhugon" target="_blank" rel="noreferrer" className="v2-social-btn">
                <LinkedInIcon />
                LinkedIn
              </a>
              <a href="https://github.com/dwolfx" target="_blank" rel="noreferrer" className="v2-social-btn">
                <GitHubIcon />
                GitHub
              </a>
              <a href="mailto:victor9009@gmail.com" className="v2-social-btn">
                <EmailIcon />
                Email
              </a>
            </div>
          </div>

          <div className="v2-footer-copyright">
            <p>© 2026 Victor Morais — Product Designer — Todos os direitos reservados.</p>
            <p>Os dados e métricas dos projetos foram protegidos respeitando termos de confidencialidade (NDA).</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default PortfolioV2;
