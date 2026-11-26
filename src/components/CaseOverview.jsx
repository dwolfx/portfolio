import React from 'react';
import { ShieldAlert } from 'lucide-react';

const CaseOverview = ({ nda, items }) => {
  return (
    <>
      {/* ─── NDA ─── */}
      {nda && (
        <div className="case-nda-wrapper">
          <div className="case-nda-inner">
            <div className="case-nda-icon">
              <ShieldAlert size={20} strokeWidth={1.75} aria-hidden="true" />
            </div>
            <div className="case-nda-content">
              <strong className="case-nda-title">{nda.title}</strong>
              <p className="case-nda-text">{nda.text1}</p>
              {nda.text2 && <p className="case-nda-sub">{nda.text2}</p>}
            </div>
          </div>
        </div>
      )}

      {/* ─── OVERVIEW ─── */}
      <div className="case-overview">
        <div className="case-overview-inner">
          {items.map(item => (
            <div key={item.label} className="case-overview-item">
              <div className="case-overview-label">{item.label}</div>
              <div className="case-overview-value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CaseOverview;
