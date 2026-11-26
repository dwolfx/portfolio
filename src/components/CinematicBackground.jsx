import React, { useEffect, useRef } from 'react';

const CinematicBackground = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;

    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReduced) return;

    let rafId = null;
    let targetX = window.innerWidth * 0.65;
    let targetY = window.innerHeight * 0.35;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          el.style.setProperty('--mx', `${targetX}px`);
          el.style.setProperty('--my', `${targetY}px`);
          rafId = null;
        });
      }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={bgRef} className="v2-cinema-bg" aria-hidden="true">
      <div className="v2-aurora v2-aurora--midnight" />
      <div className="v2-aurora v2-aurora--champagne" />
      <div className="v2-aurora v2-aurora--indigo" />
      <div className="v2-arch-grid" />
      <div className="v2-mouse-spotlight" />
    </div>
  );
};

export default CinematicBackground;
