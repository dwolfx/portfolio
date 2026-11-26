import React from 'react';
import { Download, ExternalLink, Mail } from 'lucide-react';
import { stripDownloadArrow } from './CaseIcon';

const CaseCTA = ({ title, p1, btnDown, btnTalk, downloadLink, externalUrl }) => {
  return (
    <section className="case-cta">
      <h2>{title}</h2>
      <p>{p1}</p>
      <div className="case-cta-buttons">
        {externalUrl ? (
          <a href={externalUrl} target="_blank" rel="noreferrer" className="case-cta-btn-primary">
            <ExternalLink size={16} strokeWidth={2} aria-hidden="true" />
            <span>{btnDown}</span>
          </a>
        ) : downloadLink ? (
          <a href={downloadLink} download className="case-cta-btn-primary">
            <Download size={16} strokeWidth={2} aria-hidden="true" />
            <span>{stripDownloadArrow(btnDown)}</span>
          </a>
        ) : null}
        <a href="mailto:victorhnmorais@gmail.com" className="case-cta-btn-secondary">
          <Mail size={16} strokeWidth={1.9} aria-hidden="true" />
          <span>{btnTalk}</span>
        </a>
      </div>
    </section>
  );
};

export default CaseCTA;
