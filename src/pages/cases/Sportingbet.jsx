import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../CaseStudy.css';
import { sportingbetLocales } from '../../data/sportingbetLocales';
import brFlag from '../../assets/flags/br_flag.jpg';
import ukFlag from '../../assets/flags/uk_flag.jpg';
import esFlag from '../../assets/flags/es_flag.jpg';
import sportingbetHero from '../../assets/cases/sportingbet-hero.png';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: d } })
};

const langMeta = {
  'pt-br': { flag: brFlag, label: 'Português' },
  'en': { flag: ukFlag, label: 'English' },
  'es': { flag: esFlag, label: 'Español' },
};

const Sportingbet = () => {
  const { lang = 'pt-br' } = useParams();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    document.title = 'Victor Morais | Case Sportingbet'; 
  }, []);

  useEffect(() => {
    if (!isLangOpen) return;
    const handle = (e) => { if (langRef.current && !langRef.current.contains(e.target)) setIsLangOpen(false); };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [isLangOpen]);

  const otherLangs = Object.entries(langMeta).filter(([l]) => l !== lang);
  const backLabel = lang === 'en' ? '← Projects' : lang === 'es' ? '← Proyectos' : '← Projetos';
  const t = sportingbetLocales[lang] || sportingbetLocales['pt-br'];
  const pdfLang = lang === 'pt-br' ? 'pt' : lang;

  return (
    <div className="case">

      {/* ─── NAV ─── */}
      <nav className="case-nav">
        <Link to="/" className="case-nav-logo">Victor Morais</Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to={`/${lang}`} className="case-back">{backLabel}</Link>
          <div className="contact-wrap" ref={langRef}>
            <button className="lang-btn" onClick={() => setIsLangOpen(o => !o)}>
              <img src={langMeta[lang]?.flag} alt={lang} /> ▾
            </button>
            {isLangOpen && (
              <div className="contact-dropdown">
                {otherLangs.map(([l, meta]) => (
                  <Link key={l} to={`/${l}/cases/sportingbet`} className="contact-item" onClick={() => setIsLangOpen(false)}>
                    <img src={meta.flag} alt={meta.label} /> {meta.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <header className="case-hero" style={{ background: 'linear-gradient(135deg, #001f3f 0%, #003366 35%, #004080 65%, #0056b3 100%)' }}>
        <div className="case-hero-inner">
          <motion.span className="case-hero-tag" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            {t.hero.tag}
          </motion.span>

          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0.08}>
            Sporting<span>bet</span>
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
            <a href={`/sportingbet-case-${pdfLang}.pdf`} download className="case-hero-btn">{t.hero.downloadBtn}</a>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.28}>
            <img src={sportingbetHero} alt="Tropicalização Sportingbet" className="case-hero-img" />
          </motion.div>
        </div>
      </header>

      {/* ─── NDA ─── */}
      <div className="case-overview" style={{ background: '#fff9e6', borderBottom: '1px solid #ffeeba' }}>
        <div className="case-overview-inner" style={{ maxWidth: 800, display: 'block', padding: '24px 20px' }}>
           <p style={{ fontSize: 14, color: '#856404', textAlign: 'center', lineHeight: 1.6 }}>
             <strong>⚠️ {t.nda.title}</strong><br />
             {t.nda.text1}<br />
             <span style={{ display: 'block', marginTop: 8 }}>{t.nda.text2}</span>
           </p>
        </div>
      </div>

      {/* ─── OVERVIEW ─── */}
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

        {/* 01 CONTEXTO */}
        <div className="case-section">
          <span className="case-eyebrow">{t.context.eyebrow}</span>
          <h2>{t.context.title}</h2>
          <p>{t.context.p1}</p>
          <p style={{ marginTop: 16 }}>{t.context.p2}</p>
        </div>

        {/* 02 MOBILE-FIRST */}
        <div className="case-section">
          <span className="case-eyebrow">{t.mobile.eyebrow}</span>
          <h2>{t.mobile.title}</h2>
          <div className="case-decision">
            <p>{t.mobile.p1}</p>
          </div>
          <p style={{ marginTop: 24 }}>{t.mobile.p2}</p>
        </div>

        {/* 03 MEU PAPEL */}
        <div className="case-section">
          <span className="case-eyebrow">{t.role.eyebrow}</span>
          <h2>{t.role.title}</h2>
          <p>{t.role.p1}</p>
          <p style={{ marginTop: 16 }}>{t.role.p2}</p>
          <div className="case-highlights">
            {t.role.highlights.map(b => (
              <div key={b.title} className="case-highlight">
                <div className="case-highlight-icon">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 04 DISCOVERY */}
        <div className="case-section">
          <span className="case-eyebrow">{t.discovery.eyebrow}</span>
          <h2>{t.discovery.title}</h2>
          <p>{t.discovery.p1}</p>
          <p style={{ marginTop: 16 }}>{t.discovery.p2}</p>
        </div>

        {/* 05 MARCO */}
        <div className="case-section">
          <span className="case-eyebrow">{t.milestone.eyebrow}</span>
          <h2>{t.milestone.title}</h2>
          <div className="case-decision" style={{ borderLeftColor: '#10b981', background: '#ecfdf5' }}>
            <p style={{ color: '#065f46' }}>{t.milestone.p1}</p>
          </div>
          <p style={{ marginTop: 24 }}>{t.milestone.p2}</p>
        </div>

        {/* 06 VIP EXPERIENCE */}
        <div className="case-section">
          <span className="case-eyebrow">{t.casino.eyebrow}</span>
          <h2>{t.casino.title}</h2>
          <p>{t.casino.p1}</p>
          <p style={{ marginTop: 16 }}>{t.casino.p2}</p>
        </div>

        {/* 07 RESULTADOS */}
        <div className="case-section">
          <span className="case-eyebrow">{t.results.eyebrow}</span>
          <h2>{t.results.title}</h2>
          <p>{t.results.p1}</p>
          <div className="case-metrics-grid">
            {t.results.metrics.map(m => (
              <div key={m.value} className="case-metric">
                <span className="case-metric-icon">{m.icon}</span>
                <div className="case-metric-value">{m.value}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ─── CTA FINAL ─── */}
      <section className="case-cta">
        <h2>{t.cta.title}</h2>
        <p>{t.cta.p1}</p>
        <div className="case-cta-buttons">
          <a href={`/sportingbet-case-${pdfLang}.pdf`} download className="case-cta-btn-primary">{t.cta.btnDown}</a>
          <a href="mailto:victor9009@gmail.com" className="case-cta-btn-secondary">{t.cta.btnTalk}</a>
        </div>
      </section>

    </div>
  );
};

export default Sportingbet;
