import React from 'react';

const CaseOverview = ({ nda, items }) => {
  return (
    <>
      {/* ─── NDA ─── */}
      {nda && (
        <div className="case-overview" style={{ background: '#fff9e6', borderBottom: '1px solid #ffeeba' }}>
          <div className="case-overview-inner" style={{ maxWidth: 800, display: 'block', padding: '24px 20px' }}>
            <p style={{ fontSize: 14, color: '#856404', textAlign: 'center', lineHeight: 1.6 }}>
              <strong>⚠️ {nda.title}</strong><br />
              {nda.text1}<br />
              {nda.text2 && <span style={{ display: 'block', marginTop: 8 }}>{nda.text2}</span>}
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
