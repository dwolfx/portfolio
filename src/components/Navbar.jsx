import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../pages/PortfolioV2.css';

// Flags
import brFlag from '../assets/flags/br_flag.jpg';
import ukFlag from '../assets/flags/uk_flag.jpg';
import esFlag from '../assets/flags/es_flag.jpg';

const langMeta = {
  'pt-br': { flag: brFlag, label: 'Português', backText: '← Voltar aos Projetos' },
  'en': { flag: ukFlag, label: 'English', backText: '← Back to Projects' },
  'es': { flag: esFlag, label: 'Español', backText: '← Volver a Proyectos' }
};

const Navbar = ({ isCase = false, caseSlug = '', lang = 'pt-br' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const currentMeta = langMeta[lang] || langMeta['pt-br'];
  const otherLangs = Object.entries(langMeta).filter(([l]) => l !== lang);

  return (
    <div className="v2-nav-wrapper">
      <motion.header
        className="v2-nav"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo Unificado */}
        <Link to="/" className="v2-logo">
          Victor Morais<span>.</span>
        </Link>

        {/* ─── DESKTOP NAVIGATION ─── */}
        {!isCase ? (
          // Modo Home / Portfolio
          <nav className="v2-nav-links">
            <a href="#experiencia" className="v2-nav-link">Experiência</a>
            <a href="#projetos" className="v2-nav-link">Projetos em Destaque</a>
            <a href="#contato" className="v2-nav-link">Contato</a>
          </nav>
        ) : (
          // Modo Case Study
          <div className="v2-case-nav-center">
            <Link to="/#projetos" className="v2-case-back-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span>{currentMeta.backText}</span>
            </Link>
          </div>
        )}

        {/* ─── DESKTOP ACTIONS ─── */}
        <div className="v2-nav-actions">
          {!isCase ? (
            <div className="v2-lang-pill">
              <span className="v2-lang-active">PT</span> · EN · ES
            </div>
          ) : (
            <div className="v2-case-lang-wrap">
              <button
                className="v2-lang-btn"
                onClick={() => setIsLangOpen(prev => !prev)}
                aria-label="Selecionar idioma"
              >
                <img src={currentMeta.flag} alt={currentMeta.label} className="v2-flag-icon" />
                <span>{lang.toUpperCase()}</span>
                <span className="v2-chevron">▾</span>
              </button>

              {isLangOpen && (
                <div className="v2-lang-dropdown">
                  {otherLangs.map(([l, data]) => (
                    <Link
                      key={l}
                      to={`/${l}/cases/${caseSlug}`}
                      className="v2-lang-dropdown-item"
                      onClick={() => setIsLangOpen(false)}
                    >
                      <img src={data.flag} alt={data.label} className="v2-flag-icon" />
                      <span>{data.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          <a
            href="https://wa.me/5511951565851"
            target="_blank"
            rel="noreferrer"
            className="v2-contact-btn"
          >
            Contato →
          </a>
        </div>

        {/* ─── MOBILE TOGGLE BUTTON ─── */}
        <button
          className="v2-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMobileMenuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </motion.header>

      {/* ─── MOBILE DROPDOWN COM FRAMER MOTION ─── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="v2-mobile-menu"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            {!isCase ? (
              <nav className="v2-mobile-nav-links">
                <a
                  href="#experiencia"
                  className="v2-mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Experiência
                </a>
                <a
                  href="#projetos"
                  className="v2-mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projetos em Destaque
                </a>
                <a
                  href="#contato"
                  className="v2-mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contato
                </a>
              </nav>
            ) : (
              <nav className="v2-mobile-nav-links">
                <Link
                  to="/#projetos"
                  className="v2-mobile-nav-link highlight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {currentMeta.backText}
                </Link>
                {otherLangs.map(([l, data]) => (
                  <Link
                    key={l}
                    to={`/${l}/cases/${caseSlug}`}
                    className="v2-mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Mudar para {data.label}
                  </Link>
                ))}
              </nav>
            )}

            <div className="v2-mobile-menu-footer">
              {!isCase ? (
                <div className="v2-lang-pill">
                  <span className="v2-lang-active">PT</span> · EN · ES
                </div>
              ) : (
                <div className="v2-lang-pill">
                  <span className="v2-lang-active">{lang.toUpperCase()}</span>
                </div>
              )}
              <a
                href="https://wa.me/5511951565851"
                target="_blank"
                rel="noreferrer"
                className="v2-contact-btn"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                WhatsApp →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
