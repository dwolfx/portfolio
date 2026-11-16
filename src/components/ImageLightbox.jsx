import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageLightbox = ({
  isOpen,
  onClose,
  src,
  alt,
  caption,
  images = [],
  currentIndex = 0,
  onChangeIndex
}) => {
  const hasGallery = images && images.length > 1;
  const currentImage = hasGallery ? images[currentIndex] : { src, alt, caption };

  const handlePrev = useCallback(() => {
    if (!hasGallery || !onChangeIndex) return;
    const nextIdx = (currentIndex - 1 + images.length) % images.length;
    onChangeIndex(nextIdx);
  }, [hasGallery, images.length, currentIndex, onChangeIndex]);

  const handleNext = useCallback(() => {
    if (!hasGallery || !onChangeIndex) return;
    const nextIdx = (currentIndex + 1) % images.length;
    onChangeIndex(nextIdx);
  }, [hasGallery, images.length, currentIndex, onChangeIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="case-lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          {/* Top Bar with Counter & Close */}
          <div className="case-lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
            {hasGallery && (
              <span className="case-lightbox-counter">
                {currentIndex + 1} / {images.length}
              </span>
            )}
            <button
              className="case-lightbox-close"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Fechar visualização"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Nav Arrow: Left */}
          {hasGallery && (
            <button
              className="case-lightbox-arrow case-lightbox-arrow-left"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Imagem anterior"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Nav Arrow: Right */}
          {hasGallery && (
            <button
              className="case-lightbox-arrow case-lightbox-arrow-right"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Próxima imagem"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          {/* Expanded Image Content */}
          <motion.div
            key={currentImage?.src || currentIndex}
            className="case-lightbox-content"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage?.src}
              alt={currentImage?.alt || 'Visualização ampliada'}
              className="case-lightbox-img"
            />
            {currentImage?.caption && (
              <p className="case-lightbox-caption">{currentImage.caption}</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
