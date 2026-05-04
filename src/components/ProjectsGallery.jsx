import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const VISIBLE_LIMIT = 9;

const ProjectsGallery = ({ 
  projects, 
  eyebrow, 
  title, 
  allFilterText, 
  wipText, 
  viewCaseText, 
  showAllTextFn, 
  showLessText 
}) => {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const allTags = [...new Set(projects.filter(p => !p.wip).flatMap(p => p.tags))];
  const filtered = activeTag ? projects.filter(p => p.tags.includes(activeTag)) : projects;
  const visible = (!showAll && filtered.length > VISIBLE_LIMIT) ? filtered.slice(0, VISIBLE_LIMIT) : filtered;
  const hasMore = !showAll && filtered.length > VISIBLE_LIMIT;

  return (
    <section className="projects" id="projects">
      <div className="section-inner">
        <div className="projects-header">
          <div>
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
        </div>

        <div className="filters">
          <motion.button
            className={`pill ${activeTag === null ? 'active' : ''}`}
            onClick={() => setActiveTag(null)}
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            {allFilterText}
          </motion.button>
          {allTags.map(tag => (
            <motion.button
              key={tag}
              className={`pill ${activeTag === tag ? 'active' : ''}`}
              onClick={() => setActiveTag(p => p === tag ? null : tag)}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        <div className="grid">
          <AnimatePresence mode="sync">
            {visible.map(project => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
                className={`project-card ${project.link ? 'project-card--linked' : ''}`}
                onClick={project.link ? () => navigate(project.link) : undefined}
              >
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-body">
                  <div className="project-tags">
                    {project.wip
                      ? <span className="project-tag project-tag--wip">{wipText}</span>
                      : project.tags.map(t => (
                          <span key={t} className="project-tag project-tag--clickable" onClick={(e) => { e.stopPropagation(); setActiveTag(t); }}>{t}</span>
                        ))
                    }
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  {project.link && <span className="project-cta">{viewCaseText}</span>}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <button className="show-more" onClick={() => setShowAll(true)}>
              {showAllTextFn(filtered.length)}
            </button>
          </div>
        )}
        {showAll && filtered.length > VISIBLE_LIMIT && (
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <button className="show-more" onClick={() => setShowAll(false)}>
              {showLessText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGallery;
