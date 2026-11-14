import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PortfolioV2.css';

import victorProfile from '../assets/profile/victor.jpg';
import { projectsPtBr } from '../data/projectsData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: custom }
  })
};

const PortfolioV2 = () => {
  const [activeTag, setActiveTag] = useState(null);

  useEffect(() => {
    document.title = 'Victor Morais · Product Designer Especialista (V2)';
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
      
      {/* ─── FLOATING NAVBAR ─── */}
      <div className="v2-nav-wrapper">
        <motion.header
          className="v2-nav"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="v2-logo">
            Victor Morais<span>.</span>
          </Link>

          <nav className="v2-nav-links">
            <a href="#experiencia" className="v2-nav-link">Experiência</a>
            <a href="#projetos" className="v2-nav-link">Projetos em Destaque</a>
            <a href="#contato" className="v2-nav-link">Contato</a>
          </nav>

          <div className="v2-nav-actions">
            <div className="v2-lang-pill">
              <span className="v2-lang-active">PT</span> · EN · ES
            </div>
            <a
              href="https://wa.me/5511951565851"
              target="_blank"
              rel="noreferrer"
              className="v2-contact-btn"
            >
              Contato →
            </a>
          </div>
        </motion.header>
      </div>

      {/* ─── HERO PROFILE ─── */}
      <section className="v2-hero">
        <div className="v2-hero-content">
          <motion.div
            className="v2-role-pill"
            initial="hidden" animate="visible" variants={fadeUp} custom={0.05}
          >
            <span className="v2-ping"></span>
            Product Designer Especialista · Front-end Developer
          </motion.div>

          <motion.h1
            className="v2-headline"
            initial="hidden" animate="visible" variants={fadeUp} custom={0.12}
          >
            Transformando problemas complexos em produtos prontos para as pessoas<span>.</span>
          </motion.h1>

          <motion.div
            className="v2-chips"
            initial="hidden" animate="visible" variants={fadeUp} custom={0.18}
          >
            <span className="v2-chip primary">Product Designer</span>
            <span className="v2-chip">Data Driven</span>
            <span className="v2-chip">IA Driven</span>
            <span className="v2-chip mono">São Paulo, SP</span>
            <span className="v2-chip mono">Belo Horizonte, MG</span>
          </motion.div>

          <motion.div
            className="v2-bio"
            initial="hidden" animate="visible" variants={fadeUp} custom={0.24}
          >
            <p>
              Product Designer com <strong>visão estratégica</strong> e <strong>background técnico</strong>, focado em criar soluções que equilibram as necessidades do usuário com os objetivos de negócio.
            </p>
            <p>
              Com passagens por <strong className="highlight">Entain, Rede Globo, Vivo e Bradesco</strong>, utilizo <strong>dados, IA e pesquisas</strong> para acelerar a entrega de valor e transformar problemas complexos em produtos reais e escaláveis.
            </p>
          </motion.div>

          <motion.div
            className="v2-hero-ctas"
            initial="hidden" animate="visible" variants={fadeUp} custom={0.3}
          >
            <a href="/Victor-Morais-ptbr.pdf" download className="v2-btn-primary">
              Baixar Currículo ↓
            </a>
            <a href="http://wa.me/5511951565851" target="_blank" rel="noreferrer" className="v2-btn-secondary">
              WhatsApp ↗
            </a>
            <a href="https://br.linkedin.com/in/victorhugon" target="_blank" rel="noreferrer" className="v2-btn-secondary">
              LinkedIn ↗
            </a>
            <a href="https://github.com/dwolfx" target="_blank" rel="noreferrer" className="v2-btn-secondary">
              GitHub ↗
            </a>
            <a href="mailto:victor9009@gmail.com" className="v2-btn-secondary">
              Email ↗
            </a>
          </motion.div>
        </div>

        {/* Foto do Victor com moldura Cobalto */}
        <motion.div
          className="v2-photo-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <div className="v2-photo-glow"></div>
          <div className="v2-photo-card">
            <img src={victorProfile} alt="Victor Morais" className="v2-photo-img" />
            <div className="v2-photo-badge">
              <span className="v2-photo-badge-dot"></span>
              <span className="v2-photo-badge-text">Victor Hugo · Disponível</span>
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

      {/* ─── EXPERIÊNCIA ─── */}
      <section id="experiencia" className="v2-section">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        >
          <p className="v2-eyebrow">Experiência</p>
          <h2 className="v2-section-title">Histórico Profissional</h2>
        </motion.div>

        <div className="v2-exp-stack">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="v2-exp-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index * 0.08}
            >
              <div className="v2-exp-header">
                <h3 className="v2-exp-company">
                  <span className="v2-exp-dot"></span>
                  {exp.company}
                </h3>
                <span className="v2-exp-period">{exp.start} — {exp.end}</span>
              </div>
              <div className="v2-exp-role">{exp.role}</div>
              <p className="v2-exp-desc">{exp.desc}</p>
              {exp.link && (
                <Link to={exp.link} className="v2-exp-link">
                  Ver case completo →
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── PROJETOS ─── */}
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

        {/* Grid de Projetos */}
        <div className="v2-projects-grid">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              className="v2-project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={idx * 0.06}
            >
              <div>
                <div className="v2-project-tags">
                  {proj.tags.map(t => (
                    <span key={t} className="v2-project-tag">#{t}</span>
                  ))}
                </div>
                <h3 className="v2-project-title">{proj.title}</h3>
                <p className="v2-project-desc">{proj.description}</p>
              </div>
              {proj.link ? (
                <Link to={proj.link} className="v2-project-cta">
                  Ver case completo →
                </Link>
              ) : (
                <span className="v2-project-tag" style={{ color: '#64748B' }}>Em breve</span>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer id="contato" className="v2-footer">
        <div className="v2-footer-links">
          <a href="http://wa.me/5511951565851" target="_blank" rel="noreferrer" className="v2-footer-link">WhatsApp ↗</a>
          <a href="https://br.linkedin.com/in/victorhugon" target="_blank" rel="noreferrer" className="v2-footer-link">LinkedIn ↗</a>
          <a href="https://github.com/dwolfx" target="_blank" rel="noreferrer" className="v2-footer-link">GitHub ↗</a>
          <a href="mailto:victor9009@gmail.com" className="v2-footer-link">Email ↗</a>
        </div>
        <p className="v2-footer-copy">
          © 2026 Victor Hugo Nogueira de Morais · Product Designer Especialista & Front-end Developer.
        </p>
      </footer>

    </div>
  );
};

export default PortfolioV2;
