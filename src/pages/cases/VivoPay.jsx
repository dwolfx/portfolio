import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../CaseStudy.css';
import { vivoPayTags } from '../../data/vivoPayData';
import { vivoPayLocales } from '../../data/vivoPayLocales';
import brFlag from '../../assets/flags/br_flag.jpg';
import ukFlag from '../../assets/flags/uk_flag.jpg';
import esFlag from '../../assets/flags/es_flag.jpg';
import vivoHero from '../../assets/cases/vivo/hero.png';
import vivoV0 from '../../assets/cases/vivo/v0 idea.png';
import vivoVirtualPdf from '../../assets/cases/vivo/virtual+pdf.png';
import vivoValidation from '../../assets/cases/vivo/validation.png';
import vivoCardHome from '../../assets/cases/vivo/home.png';
import vivoBiometria from '../../assets/cases/vivo/Biometria.png';
import vivoFatura from '../../assets/cases/vivo/fatura.png';
import vivoFaturaTotal from '../../assets/cases/vivo/faturaTotal.png';

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

const Img = ({ label, className = '' }) => (
  <div className={`case-img-placeholder ${className}`}>{label}</div>
);

const langMeta = {
  'pt-br': { flag: brFlag, label: 'Português' },
  'en': { flag: ukFlag, label: 'English' },
  'es': { flag: esFlag, label: 'Español' },
};

const VivoPay = () => {
  const { lang = 'pt-br' } = useParams();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); document.title = 'Victor Morais | Case VivoPay'; }, []);

  useEffect(() => {
    if (!isLangOpen) return;
    const handle = (e) => { if (langRef.current && !langRef.current.contains(e.target)) setIsLangOpen(false); };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [isLangOpen]);

  const otherLangs = Object.entries(langMeta).filter(([l]) => l !== lang);
  const backLabel = lang === 'en' ? '← Projects' : lang === 'es' ? '← Proyectos' : '← Projetos';
  const t = vivoPayLocales[lang] || vivoPayLocales['pt-br'];
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
                  <Link key={l} to={`/${l}/cases/vivo-pay`} className="contact-item" onClick={() => setIsLangOpen(false)}>
                    <img src={meta.flag} alt={meta.label} /> {meta.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <header className="case-hero" style={{ background: 'linear-gradient(135deg, #0a0010 0%, #1a0033 35%, #440066 65%, #660099 100%)' }}>
        <div className="case-hero-inner">
          <motion.span className="case-hero-tag" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            {t.hero.tag}
          </motion.span>

          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0.08}>
            Vivo<span>Pay</span>
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
            <a href={`/vivo-pay-case-${pdfLang}.pdf`} download className="case-hero-btn">{t.hero.downloadBtn}</a>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.28}>
            <img src={vivoHero} alt="A Jornada VivoPay" className="case-hero-img" />
          </motion.div>
        </div>
      </header>

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

        {/* DESAFIO */}
        <InView>
          <div className="case-section">
            <span className="case-eyebrow">{t.context.eyebrow}</span>
            <h2>{t.context.title}</h2>
            <p>{t.context.p1}</p>
            <p style={{ marginTop: 16 }}>{t.context.p2}</p>
          </div>
        </InView>

        {/* MEU PAPEL */}
        <InView>
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
        </InView>

        {/* DISCOVERY */}
        <InView>
          <div className="case-section">
            <span className="case-eyebrow">{t.discovery.eyebrow}</span>
            <h2>{t.discovery.title}</h2>
            <p>{t.discovery.p1}</p>
            <div className="case-decision-alt">
              <span className="case-decision-alt-label">{t.discovery.decisionLabel}</span>
              <p>{t.discovery.decisionP}</p>
            </div>
          </div>
        </InView>

        {/* PRIMEIROS RASCUNHOS */}
        <InView>
          <div className="case-section">
            <span className="case-eyebrow">{t.concept.eyebrow}</span>
            <h2>{t.concept.title}</h2>
            <p>{t.concept.p1}</p>
            <div className="case-two-col" style={{ marginTop: 32 }}>
              <figure className="case-figure">
                <img src={vivoV0} alt={t.concept.captions[0]} className="case-section-img" />
                <figcaption>{t.concept.captions[0]}</figcaption>
              </figure>
              <figure className="case-figure">
                <img src={vivoValidation} alt={t.concept.captions[1]} className="case-section-img" />
                <figcaption>{t.concept.captions[1]}</figcaption>
              </figure>
            </div>
          </div>
        </InView>

        {/* VALIDAÇÕES */}
        <InView>
          <div className="case-section">
            <span className="case-eyebrow">{t.validation.eyebrow}</span>
            <h2>{t.validation.title}</h2>
            <p style={{ fontWeight: 600, color: '#0d1117', marginBottom: 8 }}>{t.validation.round}</p>
            <p>{t.validation.p1}</p>
            <div className="case-feedback-grid">
              {t.validation.cards.map(c => (
                <div key={c.title} className="case-feedback-card">
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32 }}>
              <img src={vivoVirtualPdf} alt={t.validation.imgAlt} className="case-section-img" />
            </div>
          </div>
        </InView>

        {/* JORNADA COMPLETA */}
        <InView>
          <div className="case-section">
            <span className="case-eyebrow">{t.delivery.eyebrow}</span>
            <h2>{t.delivery.title}</h2>
            <p>{t.delivery.p1}</p>

            <div className="case-figma-embed">
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/9rwTUpw3f90660cHvW65ox/Jornada-Carta%CC%83o-Itau%CC%81---App-novo?node-id=7452-105144%26p=f%26t=jNxowsggK4qG99pX-11"
                width="100%"
                height="100%"
                allowFullScreen
              />
            </div>

            <div className="case-screenshots" style={{ marginTop: 32 }}>
              <figure className="case-figure">
                <img src={vivoCardHome} alt={t.delivery.captions[0]} className="case-screen-img" />
                <figcaption>{t.delivery.captions[0]}</figcaption>
              </figure>
              <figure className="case-figure">
                <img src={vivoBiometria} alt={t.delivery.captions[1]} className="case-screen-img" />
                <figcaption>{t.delivery.captions[1]}</figcaption>
              </figure>
              <figure className="case-figure">
                <img src={vivoFaturaTotal} alt={t.delivery.captions[2]} className="case-screen-img" />
                <figcaption>{t.delivery.captions[2]}</figcaption>
              </figure>
              <figure className="case-figure">
                <img src={vivoFatura} alt={t.delivery.captions[3]} className="case-screen-img" />
                <figcaption>{t.delivery.captions[3]}</figcaption>
              </figure>
            </div>
          </div>
        </InView>

        {/* MÉTRICAS */}
        <InView>
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
        </InView>

        {/* PRÓXIMOS PASSOS */}
        <InView>
          <div className="case-section">
            <span className="case-eyebrow">{t.future.eyebrow}</span>
            <h2>{t.future.title}</h2>
            <ul className="case-next-list">
              {t.future.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </InView>

      </div>

      {/* ─── CTA FINAL ─── */}
      <InView>
        <section className="case-cta">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.p1}</p>
          <div className="case-cta-buttons">
            <a href={`/vivo-pay-case-${pdfLang}.pdf`} download className="case-cta-btn-primary">{t.cta.btnDown}</a>
            <a href="mailto:victor9009@gmail.com" className="case-cta-btn-secondary">{t.cta.btnTalk}</a>
          </div>
        </section>
      </InView>

    </div>
  );
};

export default VivoPay;
