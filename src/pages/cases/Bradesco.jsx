import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../CaseStudy.css';
import { bradescoLocales } from '../../data/bradescoLocales';
import CaseHeader from '../../components/CaseHeader';

import heroImg from '../../assets/projects/bradesco.png';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: d } })
};

const InView = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, ease: 'easeOut', delay }}
  >
    {children}
  </motion.div>
);

const Bradesco = () => {
  const { lang = 'pt-br' } = useParams();

  useEffect(() => { window.scrollTo(0, 0); document.title = 'Victor Morais | Case Bradesco'; }, []);
  const t = bradescoLocales[lang] || bradescoLocales['pt-br'];
  const pdfLang = lang === 'pt-br' ? 'pt' : lang;

  return (
    <div className="case">

      {/* ─── NAV ─── */}
      <CaseHeader lang={lang} caseSlug="bradesco" />

      {/* ─── HERO ─── */}
      <header className="case-hero" style={{ background: 'linear-gradient(135deg, #1a0005 0%, #4a000a 35%, #990011 65%, #cc092f 100%)' }}>
        <div className="case-hero-inner">
          <motion.span className="case-hero-tag" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            {t.hero.tag}
          </motion.span>

          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0.08}>
            Bradesco
          </motion.h1>

          <motion.div className="case-tags" style={{ justifyContent: 'center' }} initial="hidden" animate="visible" variants={fadeUp} custom={0.14}>
            {t.hero.tags.map(tag => (
              <span key={tag} className="case-tag">{tag}</span>
            ))}
          </motion.div>

          <motion.p className="case-hero-subtitle" initial="hidden" animate="visible" variants={fadeUp} custom={0.18}>
            {t.hero.subtitle}
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.24} style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
            <a href={`/bradesco-case-${pdfLang}.pdf`} download className="case-hero-btn">{t.hero.downloadBtn}</a>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.28}>
            <img src={heroImg} alt="Bradesco" className="case-hero-img" />
          </motion.div>
        </div>
      </header>

      {/* ─── NDA ─── */}
      <div className="case-overview" style={{ background: '#fff9e6', borderBottom: '1px solid #ffeeba' }}>
        <div className="case-overview-inner" style={{ maxWidth: 800, display: 'block', padding: '24px 20px' }}>
           <p style={{ fontSize: 14, color: '#856404', textAlign: 'center', lineHeight: 1.6 }}>
             <strong>⚠️ {t.confidentiality.title}</strong><br />
             {t.confidentiality.text1}<br />
             <span style={{ display: 'block', marginTop: 8 }}>{t.confidentiality.text2}</span>
           </p>
        </div>
      </div>

      {/* ─── VISÃO GERAL ─── */}
      <div className="case-overview">
        <div className="case-overview-inner">
          {t.overview.items.map(item => (
            <div key={item.label} className="case-overview-item">
              <div className="case-overview-label">{item.label}</div>
              <div className="case-overview-value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CONTENT ─── */}
      <div className="case-content">

        {/* CONTEXTO */}
        <InView>
          <div className="case-section">
            <span className="case-eyebrow">{t.context.eyebrow}</span>
            <h2>{t.context.title}</h2>
            <p>{t.context.p1}</p>
            <p style={{ marginTop: 16 }}>{t.context.p2}</p>
          </div>
        </InView>

        {/* PAPEL */}
        <InView delay={0.1}>
          <div className="case-section">
            <span className="case-eyebrow">{t.role.eyebrow}</span>
            <h2>{t.role.title}</h2>
            <p>{t.role.p1}</p>
            <p style={{ marginTop: 16 }}>{t.role.p2}</p>
          </div>
        </InView>

        {/* DESIGN SYSTEM */}
        <InView delay={0.1}>
          <div className="case-section">
            <span className="case-eyebrow">{t.designSystem.eyebrow}</span>
            <h2>{t.designSystem.title}</h2>
            <p>{t.designSystem.p1}</p>
            <div className="case-decision-alt" style={{ marginTop: 32 }}>
              <span className="case-decision-alt-label">{t.designSystem.decisionLabel}</span>
              <p>{t.designSystem.decisionP}</p>
            </div>
          </div>
        </InView>

        {/* DISCOVERY */}
        <InView delay={0.1}>
          <div className="case-section">
            <span className="case-eyebrow">{t.discovery.eyebrow}</span>
            <h2>{t.discovery.title}</h2>
            <p>{t.discovery.p1}</p>
            <div className="case-highlights" style={{ marginTop: 32 }}>
              {t.discovery.highlights.map(b => (
                <div key={b.title} className="case-highlight">
                  <div className="case-highlight-icon">{b.icon}</div>
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </InView>

        {/* MÉTRICAS / IMPACTO */}
        <InView delay={0.1}>
          <div className="case-section">
            <span className="case-eyebrow">{t.results.eyebrow}</span>
            <h2>{t.results.title}</h2>
            <p>{t.results.p1}</p>
            <div className="case-metrics-grid" style={{ marginTop: 32 }}>
              {t.results.metrics.map(m => (
                <div key={m.value} className="case-metric">
                  <span className="case-metric-icon">{m.icon}</span>
                  <div className="case-metric-value">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </InView>

      </div>

      {/* ─── CTA FINAL ─── */}
      <InView>
        <section className="case-cta">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.p1}</p>
          <div className="case-cta-buttons">
            <a href={`/bradesco-case-${pdfLang}.pdf`} download className="case-cta-btn-primary">{t.cta.btnDown}</a>
            <a href="mailto:victor9009@gmail.com" className="case-cta-btn-secondary">{t.cta.btnTalk}</a>
          </div>
        </section>
      </InView>

    </div>
  );
};

export default Bradesco;
