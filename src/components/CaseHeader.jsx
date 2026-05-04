import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Icons/Flags (Adjust paths if needed)
import brFlag from '../assets/flags/br_flag.jpg';
import ukFlag from '../assets/flags/uk_flag.jpg';
import esFlag from '../assets/flags/es_flag.jpg';

const langMeta = {
  'pt-br': { flag: brFlag, label: 'Português', backLabel: '← Projetos' },
  'en': { flag: ukFlag, label: 'English', backLabel: '← Projects' },
  'es': { flag: esFlag, label: 'Español', backLabel: '← Proyectos' }
};

const CaseHeader = ({ lang = 'pt-br', caseSlug }) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isLangOpen) return;
    const handle = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setIsLangOpen(false);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [isLangOpen]);

  const meta = langMeta[lang] || langMeta['pt-br'];
  const otherLangs = Object.entries(langMeta).filter(([l]) => l !== lang);

  return (
    <nav className="case-nav">
      <a href={`/${lang}`} className="case-nav-logo">Victor Morais</a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <a href={`/${lang}#projects`} className="case-back">{meta.backLabel}</a>
        <div className="contact-wrap" ref={langRef}>
          <button className="lang-btn" onClick={() => setIsLangOpen(o => !o)}>
            <img src={meta.flag} alt={meta.label} /> ▾
          </button>
          {isLangOpen && (
            <div className="contact-dropdown">
              {otherLangs.map(([l, data]) => (
                <Link key={l} to={`/${l}/cases/${caseSlug}`} className="contact-item" onClick={() => setIsLangOpen(false)}>
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

export default CaseHeader;
