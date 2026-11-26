import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../CaseStudy.css';
import { vivoPayTags } from '../../data/vivoPayData';
import { vivoPayLocales } from '../../data/vivoPayLocales';
import CaseHero from '../../components/CaseHero';
import CaseOverview from '../../components/CaseOverview';
import CaseCTA from '../../components/CaseCTA';
import Navbar from '../../components/Navbar';
import ImageLightbox from '../../components/ImageLightbox';
import CaseCarousel from '../../components/CaseCarousel';
import CaseIcon, { parseEmojiTitle } from '../../components/CaseIcon';
import vivoHero from '../../assets/cases/vivo/hero.png';
import vivoV0 from '../../assets/cases/vivo/v0 idea.png';
import vivoVirtualPdf from '../../assets/cases/vivo/virtual+pdf.png';
import vivoValidation from '../../assets/cases/vivo/validation.png';
import vivoCardHome from '../../assets/cases/vivo/home.png';
import vivoBiometria from '../../assets/cases/vivo/Biometria.png';
import vivoFatura from '../../assets/cases/vivo/fatura.png';
import vivoFaturaTotal from '../../assets/cases/vivo/faturaTotal.png';


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

const VivoPay = () => {
  const { lang = 'pt-br' } = useParams();
  const [lightbox, setLightbox] = useState(null); // { isOpen, images, currentIndex }

  useEffect(() => { window.scrollTo(0, 0); document.title = 'Victor Morais | Case VivoPay'; }, []);
  const t = vivoPayLocales[lang] || vivoPayLocales['pt-br'];
  const pdfLang = lang === 'pt-br' ? 'pt' : lang;

  const conceptScreens = [
    { src: vivoV0, alt: t.concept.captions[0], caption: t.concept.captions[0] },
    { src: vivoValidation, alt: t.concept.captions[1], caption: t.concept.captions[1] }
  ];

  const deliveryScreens = [
    { src: vivoCardHome, alt: t.delivery.captions[0], caption: t.delivery.captions[0] },
    { src: vivoBiometria, alt: t.delivery.captions[1], caption: t.delivery.captions[1] },
    { src: vivoFaturaTotal, alt: t.delivery.captions[2], caption: t.delivery.captions[2] },
    { src: vivoFatura, alt: t.delivery.captions[3], caption: t.delivery.captions[3] }
  ];

  const openGallery = (images, startIndex = 0) => {
    setLightbox({ isOpen: true, images, currentIndex: startIndex });
  };

  const openSingleImage = (src, alt, caption) => {
    setLightbox({ isOpen: true, images: [{ src, alt, caption }], currentIndex: 0 });
  };

  return (
    <div className="case">

      {/* ─── NAV UNIFICADA ─── */}
      <Navbar isCase={true} caseSlug="vivo-pay" lang={lang} />

      {/* ─── HERO ─── */}
      <CaseHero
        gradient="linear-gradient(135deg, #0a0010 0%, #1a0033 35%, #440066 65%, #660099 100%)"
        tag={t.hero.tag}
        titlePrefix="Vivo"
        titleHighlight="Pay"
        tags={t.hero.tags}
        subtitle={t.hero.subtitle}
        downloadBtnText={t.hero.downloadBtn}
        downloadLink={`/vivo-pay-case-${pdfLang}.pdf`}
        image={vivoHero}
        altText="A Jornada VivoPay"
        onImageClick={(src, alt, cap) => openSingleImage(src, alt, cap)}
      />

      {/* ─── VISÃO GERAL ─── */}
      <CaseOverview items={t.overview.items} />

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
                <img
                  src={vivoV0}
                  alt={t.concept.captions[0]}
                  className="case-section-img case-zoomable"
                  onClick={() => openGallery(conceptScreens, 0)}
                  title="Clique para ampliar"
                />
                <figcaption>{t.concept.captions[0]}</figcaption>
              </figure>
              <figure className="case-figure">
                <img
                  src={vivoValidation}
                  alt={t.concept.captions[1]}
                  className="case-section-img case-zoomable"
                  onClick={() => openGallery(conceptScreens, 1)}
                  title="Clique para ampliar"
                />
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
            <p style={{ fontWeight: 600, color: '#FFFFFF', marginBottom: 8 }}>{t.validation.round}</p>
            <p>{t.validation.p1}</p>
            <div className="case-feedback-grid">
              {t.validation.cards.map(c => {
                const { emoji, label } = parseEmojiTitle(c.title);
                return (
                  <div key={c.title} className="case-feedback-card">
                    <h4>
                      {emoji && <CaseIcon icon={emoji} size={18} className="case-inline-icon" />}
                      <span>{label}</span>
                    </h4>
                    <p>{c.desc}</p>
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: 32 }}>
              <img
                src={vivoVirtualPdf}
                alt={t.validation.imgAlt}
                className="case-section-img case-zoomable"
                onClick={() => openSingleImage(vivoVirtualPdf, t.validation.imgAlt, t.validation.imgAlt)}
                title="Clique para ampliar"
              />
            </div>
          </div>
        </InView>

        {/* JORNADA COMPLETA COM CARROSSEL INTERATIVO */}
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

            <div style={{ marginTop: 36 }}>
              <CaseCarousel
                items={deliveryScreens}
                onImageClick={(idx) => openGallery(deliveryScreens, idx)}
              />
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
                  <span className="case-metric-icon">
                    <CaseIcon icon={m.icon} size={24} />
                  </span>
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
        <CaseCTA
          title={t.cta.title}
          p1={t.cta.p1}
          btnDown={t.cta.btnDown}
          btnTalk={t.cta.btnTalk}
          downloadLink={`/vivo-pay-case-${pdfLang}.pdf`}
        />
      </InView>

      {/* ─── LIGHTBOX MODAL COM GALERIA E TECLADO ─── */}
      <ImageLightbox
        isOpen={!!lightbox?.isOpen}
        onClose={() => setLightbox(null)}
        images={lightbox?.images || []}
        currentIndex={lightbox?.currentIndex || 0}
        onChangeIndex={(newIdx) => setLightbox(prev => ({ ...prev, currentIndex: newIdx }))}
      />

    </div>
  );
};

export default VivoPay;
