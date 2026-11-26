import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../CaseStudy.css';
import { vocalisLocales } from '../../data/vocalisLocales';
import Navbar from '../../components/Navbar';
import CaseHero from '../../components/CaseHero';
import CaseOverview from '../../components/CaseOverview';
import CaseCTA from '../../components/CaseCTA';
import ImageLightbox from '../../components/ImageLightbox';
import CaseIcon from '../../components/CaseIcon';

import wizardImg from '../../assets/cases/vocalis/wizard.png';

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

const Vocalis = () => {
  const { lang = 'pt-br' } = useParams();
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Victor Morais | Case Vocalis';
  }, []);

  const t = vocalisLocales[lang] || vocalisLocales['pt-br'];

  return (
    <div className="case">
      <Navbar isCase={true} caseSlug="vocalis" lang={lang} />

      <CaseHero
        gradient="linear-gradient(135deg, #060913 0%, #0d162c 42%, #182b4d 78%, #25406b 100%)"
        tag={t.hero.tag}
        titlePrefix="Voca"
        titleHighlight="lis"
        tags={t.hero.tags}
        subtitle={t.hero.subtitle}
        image={wizardImg}
        altText="Vocalis — Assistente de ditado por voz"
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
            <span className="case-eyebrow">{t.audio.eyebrow}</span>
            <h2>{t.audio.title}</h2>
            <p>{t.audio.p1}</p>
            <div className="case-highlights">
              {t.audio.highlights.map((item) => (
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
            <span className="case-eyebrow">{t.modes.eyebrow}</span>
            <h2>{t.modes.title}</h2>
            <p>{t.modes.p1}</p>
            <div className="case-decision-alt">
              <span className="case-decision-alt-label">{t.modes.decisionLabel}</span>
              <div>{t.modes.decisionP}</div>
            </div>
          </div>
        </InView>

        <InView delay={0.08}>
          <div className="case-section">
            <span className="case-eyebrow">{t.ui.eyebrow}</span>
            <h2>{t.ui.title}</h2>
            <p>{t.ui.p1}</p>
            <figure className="case-figure case-figure--spaced">
              <img
                src={wizardImg}
                alt={t.ui.caption}
                className="case-section-img case-zoomable"
                onClick={() => setLightbox({ src: wizardImg, alt: t.ui.caption, caption: t.ui.caption })}
              />
              <figcaption>{t.ui.caption}</figcaption>
            </figure>
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

export default Vocalis;
