import React from 'react';

const ProjectCard = ({ image, title, description, tags }) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />
        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
