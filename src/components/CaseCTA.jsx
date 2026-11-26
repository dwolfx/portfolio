import React from 'react';
import { Download, Mail } from 'lucide-react';
import { stripDownloadArrow } from './CaseIcon';

const CaseCTA = ({ title, p1, btnDown, btnTalk, downloadLink }) => {
  return (
    <section className="case-cta">
      <h2>{title}</h2>
      <p>{p1}</p>
      <div className="case-cta-buttons">
        <a href={downloadLink} download className="case-cta-btn-primary">
          <Download size={16} strokeWidth={2} aria-hidden="true" />
          <span>{stripDownloadArrow(btnDown)}</span>
        </a>
        <a href="mailto:victor9009@gmail.com" className="case-cta-btn-secondary">
          <Mail size={16} strokeWidth={1.9} aria-hidden="true" />
          <span>{btnTalk}</span>
        </a>
      </div>
    </section>
  );
};

export default CaseCTA;
