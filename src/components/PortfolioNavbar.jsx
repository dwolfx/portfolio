import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Flag assets
import brFlag from '../assets/flags/br_flag.jpg';
import ukFlag from '../assets/flags/uk_flag.jpg';
import esFlag from '../assets/flags/es_flag.jpg';

const PortfolioNavbar = ({ lang = 'en' }) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  const getLocalizedLinks = () => {
    if (lang === 'pt-br') {
      return [
        { href: '#projects', label: 'Projetos' },
        { href: '#experience', label: 'Experiência' },
        { href: '#about', label: 'Sobre' }
      ];
    }
    return [
      { href: '#projects', label: 'Projects' },
      { href: '#experience', label: 'Experience' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' }
    ];
  };

  const currentFlag = lang === 'pt-br' ? brFlag : (lang === 'es' ? esFlag : ukFlag);

  return (
    <nav className="portfolio-navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Victor Morais</Link>
        <div className="nav-links">
          {getLocalizedLinks().map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
        
        <div className="language-selector-container">
          <button className="lang-toggle-btn" onClick={toggleLangMenu}>
            <img src={currentFlag} alt="Language" />
          </button>
          
          {isLangMenuOpen && (
            <div className="lang-dropdown">
              {lang !== 'pt-br' && (
                <Link to="/pt-br" onClick={() => setIsLangMenuOpen(false)}>
                  <img src={brFlag} alt="Português" />
                </Link>
              )}
              {lang !== 'en' && (
                <Link to="/en" onClick={() => setIsLangMenuOpen(false)}>
                  <img src={ukFlag} alt="English" />
                </Link>
              )}
              {lang !== 'es' && (
                <Link to="/es" onClick={() => setIsLangMenuOpen(false)}>
                  <img src={esFlag} alt="Español" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default PortfolioNavbar;
