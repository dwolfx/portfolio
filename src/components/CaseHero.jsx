import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: d } })
};

const CaseHero = ({
  gradient,
  tag,
  titlePrefix,
  titleHighlight,
  tags,
  subtitle,
  downloadBtnText,
  downloadLink,
  image,
  altText
}) => {
  return (
    <header className="case-hero" style={{ background: gradient }}>
      <div className="case-hero-inner">
        <motion.span className="case-hero-tag" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          {tag}
        </motion.span>

        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0.08}>
          {titlePrefix}<span>{titleHighlight}</span>
        </motion.h1>

        <motion.div className="case-tags" style={{ justifyContent: 'center' }} initial="hidden" animate="visible" variants={fadeUp} custom={0.14}>
          {tags.map(t => (
            <span key={t} className="case-tag">{t}</span>
          ))}
        </motion.div>

        <motion.p className="case-hero-subtitle" initial="hidden" animate="visible" variants={fadeUp} custom={0.18}>
          {subtitle}
        </motion.p>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.24} style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
          <a href={downloadLink} download className="case-hero-btn">{downloadBtnText}</a>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.28}>
          <img src={image} alt={altText} className="case-hero-img" />
        </motion.div>
      </div>
    </header>
  );
};

export default CaseHero;
