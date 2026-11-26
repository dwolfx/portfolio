import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../CaseStudy.css';
import { bradescoLocales } from '../../data/bradescoLocales';
import Navbar from '../../components/Navbar';
import CaseHero from '../../components/CaseHero';
import CaseOverview from '../../components/CaseOverview';
import CaseCTA from '../../components/CaseCTA';
import ImageLightbox from '../../components/ImageLightbox';
import CaseIcon from '../../components/CaseIcon';

import heroImg from '../../assets/projects/bradesco.png';

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
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); document.title = 'Victor Morais | Case Bradesco'; }, []);
  const t = bradescoLocales[lang] || bradescoLocales['pt-br'];
  const pdfLang = lang === 'pt-br' ? 'pt' : lang;

  return (
    <div className="case">

      {/* ─── NAV UNIFICADA ─── */}
      <Navbar isCase={true} caseSlug="bradesco" lang={lang} />

      {/* ─── HERO ─── */}
      <CaseHero
        gradient="linear-gradient(135deg, #1a0005 0%, #4a000a 35%, #990011 65%, #cc092f 100%)"
        tag={t.hero.tag}
        titlePrefix="Bradesco"
        titleHighlight=""
        tags={t.hero.tags}
        subtitle={t.hero.subtitle}
        downloadBtnText={t.hero.downloadBtn}
        downloadLink={`/bradesco-case-${pdfLang}.pdf`}
        image={heroImg}
        altText="Bradesco"
        onImageClick={(src, alt, cap) => setLightbox({ src, alt, caption: cap })}
      />

      {/* ─── OVERVIEW & NDA ─── */}
      <CaseOverview nda={t.confidentiality} items={t.overview.items} />

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
                  <div className="case-highlight-icon">
                    <CaseIcon icon={b.icon} size={22} />
                  </div>
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
                  <span className="case-metric-icon">
                    <CaseIcon icon={m.icon} size={24} />
                  </span>
                  <div className="case-metric-value">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </InView>

      </div>

      {/* ─── CTA FINAL ─── */}
      <InView>
        <CaseCTA
          title={t.cta.title}
          p1={t.cta.p1}
          btnDown={t.cta.btnDown}
          btnTalk={t.cta.btnTalk}
          downloadLink={`/bradesco-case-${pdfLang}.pdf`}
        />
      </InView>

      {/* ─── LIGHTBOX MODAL ─── */}
      <ImageLightbox
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
        images={lightbox ? [lightbox] : []}
        currentIndex={0}
      />

    </div>
  );
};

export default Bradesco;
