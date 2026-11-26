import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../CaseStudy.css';
import { consagradoLocales } from '../../data/consagradoLocales';
import Navbar from '../../components/Navbar';
import CaseHero from '../../components/CaseHero';
import CaseOverview from '../../components/CaseOverview';
import CaseCTA from '../../components/CaseCTA';
import ImageLightbox from '../../components/ImageLightbox';
import CaseIcon from '../../components/CaseIcon';

import heroImg from '../../assets/cases/consagrado/og-cover.jpg';
import landingHeroImg from '../../assets/cases/consagrado/hero.png';

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

const Consagrado = () => {
  const { lang = 'pt-br' } = useParams();
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Victor Morais | Case CONSAgrado';
  }, []);

  const t = consagradoLocales[lang] || consagradoLocales['pt-br'];

  return (
    <div className="case">
      <Navbar isCase={true} caseSlug="consagrado" lang={lang} />

      <CaseHero
        gradient="linear-gradient(135deg, #0b0704 0%, #241608 42%, #4a2c0a 78%, #6e410d 100%)"
        tag={t.hero.tag}
        titlePrefix="CONSA"
        titleHighlight="grado"
        tags={t.hero.tags}
        subtitle={t.hero.subtitle}
        externalUrl="https://consagrado.app"
        externalBtnText={t.hero.externalBtn}
        image={heroImg}
        altText="CONSAgrado — consagrado.app"
        onImageClick={(src, alt, cap) => setLightbox({ src, alt, caption: cap })}
      />

      <CaseOverview items={t.overview.items} />

      <div className="case-content">
        <InView>
          <div className="case-section">
            <span className="case-eyebrow">{t.context.eyebrow}</span>
            <h2>{t.context.title}</h2>
            <p>{t.context.p1}</p>
            <p className="case-paragraph-gap">{t.context.p2}</p>
          </div>
        </InView>

        <InView delay={0.08}>
          <div className="case-section">
            <span className="case-eyebrow">{t.ecosystem.eyebrow}</span>
            <h2>{t.ecosystem.title}</h2>
            <p>{t.ecosystem.p1}</p>
            <div className="case-highlights">
              {t.ecosystem.apps.map((app) => (
                <div key={app.title} className="case-highlight">
                  <div className="case-highlight-icon">
                    <CaseIcon icon={app.icon} size={22} />
                  </div>
                  <h4>{app.title}</h4>
                  <p>{app.desc}</p>
                </div>
              ))}
            </div>
            <figure className="case-figure case-figure--spaced">
              <img
                src={landingHeroImg}
                alt="CONSAgrado Landing"
                className="case-section-img case-zoomable"
                onClick={() => setLightbox({ src: landingHeroImg, alt: 'CONSAgrado Landing', caption: 'consagrado.app' })}
              />
            </figure>
          </div>
        </InView>

        <InView delay={0.08}>
          <div className="case-section">
            <span className="case-eyebrow">{t.mechanics.eyebrow}</span>
            <h2>{t.mechanics.title}</h2>
            <p>{t.mechanics.p1}</p>
            <div className="case-decision-alt">
              <span className="case-decision-alt-label">{t.mechanics.decisionLabel}</span>
              <div>{t.mechanics.decisionP}</div>
            </div>
          </div>
        </InView>

        <InView delay={0.08}>
          <div className="case-section">
            <span className="case-eyebrow">{t.engineering.eyebrow}</span>
            <h2>{t.engineering.title}</h2>
            <p>{t.engineering.p1}</p>
            <div className="case-highlights">
              {t.engineering.highlights.map((item) => (
                <div key={item.title} className="case-highlight">
                  <div className="case-highlight-icon">
                    <CaseIcon icon={item.icon} size={22} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </InView>
      </div>

      <InView>
        <CaseCTA
          title={t.cta.title}
          p1={t.cta.p1}
          btnDown={t.cta.btnDown}
          btnTalk={t.cta.btnTalk}
          externalUrl="https://consagrado.app"
        />
      </InView>

      <ImageLightbox
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
        images={lightbox ? [lightbox] : []}
        currentIndex={0}
      />
    </div>
  );
};

export default Consagrado;
