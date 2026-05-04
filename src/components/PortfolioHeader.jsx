import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Icons/Flags (Adjust paths if needed)
import brFlag from '../assets/flags/br_flag.jpg';
import ukFlag from '../assets/flags/uk_flag.jpg';
import esFlag from '../assets/flags/es_flag.jpg';

const langMeta = {
  'pt-br': { flag: brFlag, label: 'Português', cvFile: 'Victor-Morais-ptbr.pdf', cvLabel: 'Currículo', projectsLabel: 'Projetos', contactLabel: 'Contato' },
  'en': { flag: ukFlag, label: 'English', cvFile: 'Victor-Morais-en.pdf', cvLabel: 'Resume', projectsLabel: 'Projects', contactLabel: 'Contact' },
  'es': { flag: esFlag, label: 'Español', cvFile: 'Victor-Morais-es.pdf', cvLabel: 'Currículum', projectsLabel: 'Proyectos', contactLabel: 'Contacto' }
};

const PortfolioHeader = ({ lang = 'pt-br' }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const contactRef = useRef(null);
  const langRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (contactRef.current && !contactRef.current.contains(e.target)) setIsContactOpen(false);
      if (langRef.current && !langRef.current.contains(e.target)) setIsLangOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const meta = langMeta[lang] || langMeta['pt-br'];

  return (
    <nav className="nav">
      <a href={`/${lang}`} className="nav-logo">Victor Morais</a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <a href={`/${lang}#projects`} className="nav-link">{meta.projectsLabel}</a>
        <a href={`/${meta.cvFile}`} download className="nav-cv-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          {meta.cvLabel}
        </a>
        
        <div className="contact-wrap" ref={contactRef}>
          <button className="nav-cta" onClick={() => setIsContactOpen(o => !o)}>{meta.contactLabel} ▾</button>
          {isContactOpen && (
            <div className="contact-dropdown">
              <a href="http://wa.me/5511951565851" target="_blank" rel="noreferrer" className="contact-item" onClick={() => setIsContactOpen(false)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M20.5031 3.48759C18.267 1.24757 15.223-0.0083771 12.0504 4.20563e-05C5.46339 4.20563e-05 0.102563 5.33457 0.100272 11.8917C0.0974582 13.9786 0.647687 16.0292 1.69545 17.837L0 24L6.3349 22.3463C8.08683 23.2964 10.0502 23.7941 12.0453 23.7941H12.0504C18.6363 23.7941 23.9976 18.459 23.9999 11.902C24.0102 8.74496 22.751 5.71509 20.5031 3.48759ZM17.4983 14.3796C17.1998 14.2307 15.7318 13.5123 15.4579 13.4102C15.184 13.3082 14.9852 13.2614 14.7864 13.559C14.5876 13.8567 14.0152 14.5256 13.841 14.7241C13.6668 14.9224 13.4926 14.9469 13.194 14.7982C12.8955 14.6493 11.844 14.364 10.678 13.324C9.773 12.518 9.158 11.524 8.981 11.22C8.803 10.916 8.955 10.751 9.106 10.6C9.243 10.465 9.41 10.246 9.562 10.068C9.715 9.891 9.765 9.764 9.866 9.561C9.967 9.358 9.916 9.18 9.841 9.028C9.765 8.718 9.156 7.224 8.9 6.617C8.653 6.025 8.403 6.105 8.215 6.096C8.04 6.088 7.838 6.087 7.635 6.087C7.432 6.087 7.103 6.163 6.824 6.467C6.545 6.771 5.757 7.505 5.757 8.998C5.757 10.491 6.84 11.933 6.992 12.135C7.144 12.338 9.143 15.4 12.199 16.714C12.926 17.026 13.483 17.211 13.924 17.351C14.651 17.581 15.316 17.547 15.842 17.468C16.426 17.381 17.643 16.735 17.896 16.027C18.149 15.319 18.149 14.711 18.073 14.585" /></svg>
                WhatsApp
              </a>
              <a href="https://br.linkedin.com/in/victorhugon" target="_blank" rel="noreferrer" className="contact-item" onClick={() => setIsContactOpen(false)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.223 0H1.771C.792 0 0 .774 0 1.729V22.271C0 23.227.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0H22.223ZM7.119 20.452H3.555V9H7.119V20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447Z" /></svg>
                LinkedIn
              </a>
              <a href="mailto:victor9009@gmail.com" className="contact-item" onClick={() => setIsContactOpen(false)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4H2C.9 4 0 4.9 0 6V18C0 19.1.9 20 2 20H22C23.1 20 24 19.1 24 18V6C24 4.9 23.1 4.01 22 4.01V4ZM22 8L12 14.5L2 8V6L12 12.5L22 6V8Z" /></svg>
                Email
              </a>
            </div>
          )}
        </div>

        <div className="contact-wrap" ref={langRef}>
          <button className="lang-btn" onClick={() => setIsLangOpen(o => !o)}>
            <img src={meta.flag} alt={meta.label} /> ▾
          </button>
          {isLangOpen && (
            <div className="contact-dropdown">
              {Object.entries(langMeta)
                .filter(([l]) => l !== lang)
                .map(([l, data]) => (
                  <Link key={l} to={`/${l}`} className="contact-item" onClick={() => setIsLangOpen(false)}>
                    <img src={data.flag} alt={data.label} /> {data.label}
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default PortfolioHeader;
