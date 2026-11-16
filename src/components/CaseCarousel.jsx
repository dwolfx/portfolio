import React, { useRef, useState } from 'react';

const CaseCarousel = ({ items = [], onImageClick }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (!containerRef.current) return;
    const targetIdx = Math.max(0, Math.min(items.length - 1, index));
    const container = containerRef.current;
    const child = container.children[targetIdx];
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setActiveIndex(targetIdx);
    }
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.children[0]?.offsetWidth || 1;
    const newIdx = Math.round(scrollLeft / itemWidth);
    if (newIdx !== activeIndex && newIdx >= 0 && newIdx < items.length) {
      setActiveIndex(newIdx);
    }
  };

  return (
    <div className="case-carousel-wrapper">
      {/* Header controls with title / counter / buttons */}
      <div className="case-carousel-controls">
        <span className="case-carousel-counter">
          Tela {activeIndex + 1} de {items.length}
        </span>
        <div className="case-carousel-btn-group">
          <button
            className="case-carousel-nav-btn"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Tela anterior"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className="case-carousel-nav-btn"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === items.length - 1}
            aria-label="Próxima tela"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Horizontal Scroll track */}
      <div
        className="case-carousel-track"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`case-carousel-slide ${activeIndex === idx ? 'is-active' : ''}`}
            onClick={() => onImageClick && onImageClick(idx)}
          >
            <div className="case-carousel-img-card case-zoomable">
              <img src={item.src} alt={item.alt} className="case-carousel-img" />
              <div className="case-carousel-zoom-hint">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                <span>Expandir</span>
              </div>
            </div>
            {item.caption && (
              <p className="case-carousel-caption">{item.caption}</p>
            )}
          </div>
        ))}
      </div>

      {/* Dots navigation */}
      <div className="case-carousel-dots">
        {items.map((_, idx) => (
          <button
            key={idx}
            className={`case-carousel-dot ${activeIndex === idx ? 'is-active' : ''}`}
            onClick={() => scrollToIndex(idx)}
            aria-label={`Ir para tela ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseCarousel;
