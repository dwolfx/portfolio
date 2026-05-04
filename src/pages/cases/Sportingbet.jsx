import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../CaseStudy.css';
import { sportingbetLocales } from '../../data/sportingbetLocales';
import CaseHeader from '../../components/CaseHeader';
import CaseHero from '../../components/CaseHero';
import CaseOverview from '../../components/CaseOverview';
import CaseCTA from '../../components/CaseCTA';
import sportingbetHero from '../../assets/cases/sportingbet-hero.png';

const Sportingbet = () => {
  const { lang = 'pt-br' } = useParams();

  useEffect(() => { 
    window.scrollTo(0, 0); 
    document.title = 'Victor Morais | Case Sportingbet'; 
  }, []);
  const t = sportingbetLocales[lang] || sportingbetLocales['pt-br'];
  const pdfLang = lang === 'pt-br' ? 'pt' : lang;

  return (
    <div className="case">

      {/* ─── NAV ─── */}
      <CaseHeader lang={lang} caseSlug="sportingbet" />

      {/* ─── HERO ─── */}
      <CaseHero
        gradient="linear-gradient(135deg, #001f3f 0%, #003366 35%, #004080 65%, #0056b3 100%)"
        tag={t.hero.tag}
        titlePrefix="Sporting"
        titleHighlight="bet"
        tags={t.hero.tags}
        subtitle={t.hero.subtitle}
        downloadBtnText={t.hero.downloadBtn}
        downloadLink={`/sportingbet-case-${pdfLang}.pdf`}
        image={sportingbetHero}
        altText="Tropicalização Sportingbet"
      />

      {/* ─── OVERVIEW & NDA ─── */}
      <CaseOverview nda={t.nda} items={t.overview.items} />

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
      <CaseCTA
        title={t.cta.title}
        p1={t.cta.p1}
        btnDown={t.cta.btnDown}
        btnTalk={t.cta.btnTalk}
        downloadLink={`/sportingbet-case-${pdfLang}.pdf`}
      />

    </div>
  );
};

export default Sportingbet;
