import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../pages/PortfolioV2.css';

import brFlag from '../assets/flags/br_flag.jpg';
import ukFlag from '../assets/flags/uk_flag.jpg';
import esFlag from '../assets/flags/es_flag.jpg';

const langMeta = {
  'pt-br': {
    flag: brFlag,
    label: 'Português',
    short: 'PT',
    projects: 'Projetos',
    experience: 'Experiência',
    contact: 'Contato',
    cta: 'Vamos conversar',
    backText: 'Voltar aos Projetos',
    menu: 'Menu',
    close: 'Fechar',
    navLabel: 'Navegação',
    mobileCta: 'Falar no WhatsApp ↗'
  },
  'en': {
    flag: ukFlag,
    label: 'English',
    short: 'EN',
    projects: 'Work',
    experience: 'Experience',
    contact: 'Contact',
    cta: "Let's talk",
    backText: 'Back to Work',
    menu: 'Menu',
    close: 'Close',
    navLabel: 'Navigation',
    mobileCta: 'Chat on WhatsApp ↗'
  },
  'es': {
    flag: esFlag,
    label: 'Español',
    short: 'ES',
    projects: 'Proyectos',
    experience: 'Experiencia',
    contact: 'Contacto',
    cta: 'Hablemos',
    backText: 'Volver a Proyectos',
    menu: 'Menú',
    close: 'Cerrar',
    navLabel: 'Navegación',
    mobileCta: 'Hablar por WhatsApp ↗'
  }
};

const Navbar = ({ isCase = false, caseSlug = '', lang = 'pt-br', onLangChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef(null);

  const currentMeta = langMeta[lang] || langMeta['pt-br'];
  const otherLangs = Object.entries(langMeta).filter(([l]) => l !== lang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleSelectHomeLang = (newLang) => {
    if (onLangChange) onLangChange(newLang);
    setIsLangOpen(false);
  };

  return (
    <>
      <header className={`v2-nav-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="v2-nav">
          {/* Left Group: Brand + (em Cases) Back Link */}
          <div className="v2-nav-left">
            <Link to="/" className="v2-logo" onClick={() => setIsMobileMenuOpen(false)}>
              VM<span className="v2-logo-mark">®</span>
            </Link>

            {isCase && (
              <>
                <span className="v2-nav-divider" aria-hidden="true" />
                <Link to="/#projetos" className="v2-case-back-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                  <span>{currentMeta.backText}</span>
                </Link>
              </>
            )}
          </div>

          {/* Desktop Center Navigation (apenas na Home) */}
          {!isCase && (
            <nav className="v2-nav-links" aria-label={currentMeta.navLabel}>
              <a href="#projetos" className="v2-nav-link">
                {currentMeta.projects} <span className="v2-nav-count">(04)</span>
              </a>
              <a href="#experiencia" className="v2-nav-link">{currentMeta.experience}</a>
              <a href="#contato" className="v2-nav-link">{currentMeta.contact}</a>
            </nav>
          )}

          {/* Desktop Right Actions */}
          <div className="v2-nav-actions">
            <div className="v2-case-lang-wrap" ref={langRef}>
              <button
                type="button"
                className="v2-lang-btn"
                onClick={() => setIsLangOpen(prev => !prev)}
                aria-label="Selecionar idioma"
                aria-expanded={isLangOpen}
              >
                <img src={currentMeta.flag} alt={currentMeta.label} className="v2-flag-icon" />
                <span>{currentMeta.short}</span>
                <span className="v2-chevron">▾</span>
              </button>

              {isLangOpen && (
                <div className="v2-lang-dropdown">
                  {otherLangs.map(([l, data]) =>
                    isCase ? (
                      <Link
                        key={l}
                        to={`/${l}/cases/${caseSlug}`}
                        className="v2-lang-dropdown-item"
                        onClick={() => setIsLangOpen(false)}
                      >
                        <img src={data.flag} alt={data.label} className="v2-flag-icon" />
                        <span>{data.label}</span>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        key={l}
                        className="v2-lang-dropdown-item"
                        onClick={() => handleSelectHomeLang(l)}
                      >
                        <img src={data.flag} alt={data.label} className="v2-flag-icon" />
                        <span>{data.label}</span>
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            <a
              href="https://wa.me/5511951565851"
              target="_blank"
              rel="noreferrer"
              className="v2-contact-btn"
            >
              <span>{currentMeta.cta}</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="v2-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            aria-label={isMobileMenuOpen ? currentMeta.close : currentMeta.menu}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="v2-mobile-toggle-label">
              {isMobileMenuOpen ? currentMeta.close : currentMeta.menu}
            </span>
            <span className={`v2-hamburger ${isMobileMenuOpen ? 'is-open' : ''}`}>
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/* Fullscreen Editorial Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="v2-mobile-overlay"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="v2-mobile-overlay-inner">
              <div>
                <div className="v2-mobile-eyebrow">{currentMeta.navLabel}</div>

                {!isCase ? (
                  <nav className="v2-mobile-nav-links">
                    {[
                      { href: '#projetos', num: '01', label: currentMeta.projects },
                      { href: '#experiencia', num: '02', label: currentMeta.experience },
                      { href: '#contato', num: '03', label: currentMeta.contact },
                    ].map((item, idx) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        className="v2-mobile-nav-link"
                        onClick={() => setIsMobileMenuOpen(false)}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.08 + idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <span className="v2-mobile-link-num">{item.num}</span>
                        <span>{item.label}</span>
                      </motion.a>
                    ))}
                  </nav>
                ) : (
                  <nav className="v2-mobile-nav-links">
                    <Link
                      to="/#projetos"
                      className="v2-mobile-nav-link"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="v2-mobile-link-num">←</span>
                      <span>{currentMeta.backText}</span>
                    </Link>
                  </nav>
                )}

                {/* Seletor de idioma no Mobile */}
                <div className="v2-mobile-langs">
                  {Object.entries(langMeta).map(([l, data]) =>
                    isCase ? (
                      <Link
                        key={l}
                        to={`/${l}/cases/${caseSlug}`}
                        className={`v2-mobile-lang-pill ${l === lang ? 'is-active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <img src={data.flag} alt={data.label} className="v2-flag-icon" />
                        <span>{data.short}</span>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        key={l}
                        className={`v2-mobile-lang-pill ${l === lang ? 'is-active' : ''}`}
                        onClick={() => {
                          handleSelectHomeLang(l);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <img src={data.flag} alt={data.label} className="v2-flag-icon" />
                        <span>{data.short}</span>
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="v2-mobile-menu-footer">
                <div className="v2-mobile-meta">
                  <span>São Paulo · Belo Horizonte</span>
                  <span>BR — GMT-3</span>
                </div>
                <a
                  href="https://wa.me/5511951565851"
                  target="_blank"
                  rel="noreferrer"
                  className="v2-mobile-cta"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {currentMeta.mobileCta}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
