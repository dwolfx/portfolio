import React from 'react';

const CaseCTA = ({ title, p1, btnDown, btnTalk, downloadLink }) => {
  return (
    <section className="case-cta">
      <h2>{title}</h2>
      <p>{p1}</p>
      <div className="case-cta-buttons">
        <a href={downloadLink} download className="case-cta-btn-primary">
          {btnDown}
        </a>
        <a href="mailto:victor9009@gmail.com" className="case-cta-btn-secondary">
          {btnTalk}
        </a>
      </div>
    </section>
  );
};

export default CaseCTA;
