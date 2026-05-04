import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ExperienceSection = ({
  eyebrow,
  title,
  experiences,
  viewCaseText,
  cvDownloadLink,
  cvDownloadText
}) => {
  const navigate = useNavigate();

  return (
    <section className="experience">
      <div className="experience-inner">
        <div className="experience-header">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
          >
            {eyebrow}
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 }}
          >
            {title}
          </motion.h2>
        </div>

        <div className="experience-timeline">
          {experiences.map((item, i, arr) => (
            <motion.div
              key={item.company}
              className="experience-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <div className="experience-period">
                <span className="experience-period-start">{item.start}</span>
                <span className="experience-period-end">{item.end}</span>
              </div>
              <div className="experience-connector">
                <div className="experience-dot-bullet" />
                {i < arr.length - 1 && <div className="experience-connector-line" />}
              </div>
              <div className="experience-body">
                <div className="experience-company">{item.company}</div>
                <div className="experience-role">{item.role}</div>
                <p className="experience-desc">{item.desc}</p>
                {item.link && (
                  <button onClick={() => navigate(item.link)} className="experience-case-btn">
                    {viewCaseText}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="experience-cta"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <a href={cvDownloadLink} download className="cv-download-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {cvDownloadText}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
