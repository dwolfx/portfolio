import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../CaseStudy.css';
import { tradersClubLocales } from '../../data/tradersClubLocales';
import CaseHeader from '../../components/CaseHeader';
import CaseHero from '../../components/CaseHero';
import CaseOverview from '../../components/CaseOverview';
import CaseCTA from '../../components/CaseCTA';

import heroImg from '../../assets/projects/traders.png';

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

const TradersClub = () => {
  const { lang = 'pt-br' } = useParams();

  useEffect(() => { window.scrollTo(0, 0); document.title = 'Victor Morais | Case TradersClub'; }, []);
  const t = tradersClubLocales[lang] || tradersClubLocales['pt-br'];
  const pdfLang = lang === 'pt-br' ? 'pt' : lang;

  return (
    <div className="case">

      {/* ─── NAV ─── */}
      <CaseHeader lang={lang} caseSlug="traders-club" />

      {/* ─── HERO ─── */}
      <CaseHero
        gradient="linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
        tag={t.hero.tag}
        titlePrefix="Traders"
        titleHighlight="Club"
        tags={t.hero.tags}
        subtitle={t.hero.subtitle}
        downloadBtnText={t.hero.downloadBtn}
        downloadLink={`/traders-club-case-${pdfLang}.pdf`}
        image={heroImg}
        altText="TradersClub"
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

        {/* DISCOVERY */}
        <InView>
          <div className="case-section">
            <span className="case-eyebrow">{t.discovery.eyebrow}</span>
            <h2>{t.discovery.title}</h2>
            <p>{t.discovery.p1}</p>
            <div className="case-decision-alt" style={{ marginTop: 32 }}>
              <span className="case-decision-alt-label">{t.discovery.decisionLabel}</span>
              <p>{t.discovery.decisionP}</p>
            </div>
          </div>
        </InView>

        {/* DESIGN SYSTEM */}
        <InView>
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

        {/* SOLUÇÃO */}
        <InView>
          <div className="case-section">
            <span className="case-eyebrow">{t.solution.eyebrow}</span>
            <h2>{t.solution.title}</h2>
            <p>{t.solution.p1}</p>
            <div className="case-highlights" style={{ marginTop: 32 }}>
              {t.solution.highlights.map(b => (
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
        <InView>
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
        <CaseCTA
          title={t.cta.title}
          p1={t.cta.p1}
          btnDown={t.cta.btnDown}
          btnTalk={t.cta.btnTalk}
          downloadLink={`/traders-club-case-${pdfLang}.pdf`}
        />
      </InView>

    </div>
  );
};

export default TradersClub;
