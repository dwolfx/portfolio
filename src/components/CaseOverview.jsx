import React from 'react';

const CaseOverview = ({ nda, items }) => {
  return (
    <>
      {/* ─── NDA ─── */}
      {nda && (
        <div className="case-overview case-nda-wrapper">
          <div className="case-overview-inner case-nda-inner">
            <p className="case-nda-text">
              <strong className="case-nda-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 6 }}>
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                {nda.title}
              </strong><br />
              {nda.text1}<br />
              {nda.text2 && <span className="case-nda-sub">{nda.text2}</span>}
            </p>
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
