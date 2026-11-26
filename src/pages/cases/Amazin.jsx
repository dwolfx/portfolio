import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../CaseStudy.css';
import { amazinLocales } from '../../data/amazinLocales';
import Navbar from '../../components/Navbar';
import CaseHero from '../../components/CaseHero';
import CaseOverview from '../../components/CaseOverview';
import CaseCTA from '../../components/CaseCTA';
import ImageLightbox from '../../components/ImageLightbox';
import CaseIcon from '../../components/CaseIcon';

import heroImg from '../../assets/cases/amazin/logo-dark.svg';

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

const Amazin = () => {
  const { lang = 'pt-br' } = useParams();
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Victor Morais | Case Amazin Trages a Rigor';
  }, []);

  const t = amazinLocales[lang] || amazinLocales['pt-br'];

  return (
    <div className="case">
      <Navbar isCase={true} caseSlug="amazin-trajes" lang={lang} />

      <CaseHero
        gradient="linear-gradient(135deg, #09080c 0%, #171428 45%, #2b1f4a 80%, #3d2864 100%)"
        tag={t.hero.tag}
        titlePrefix="Amazin "
        titleHighlight="Trages a Rigor"
        tags={t.hero.tags}
        subtitle={t.hero.subtitle}
        image={heroImg}
        altText="Amazin Trages a Rigor"
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
            <span className="case-eyebrow">{t.ux.eyebrow}</span>
            <h2>{t.ux.title}</h2>
            <p>{t.ux.p1}</p>
            <div className="case-highlights">
              {t.ux.highlights.map((item) => (
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

        <InView delay={0.08}>
          <div className="case-section">
            <span className="case-eyebrow">{t.printing.eyebrow}</span>
            <h2>{t.printing.title}</h2>
            <p>{t.printing.p1}</p>
            <div className="case-decision-alt">
              <span className="case-decision-alt-label">{t.printing.decisionLabel}</span>
              <div>{t.printing.decisionP}</div>
            </div>
          </div>
        </InView>
      </div>

      <InView>
        <CaseCTA
          title={t.cta.title}
          p1={t.cta.p1}
          btnTalk={t.cta.btnTalk}
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

export default Amazin;
