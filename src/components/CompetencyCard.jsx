import React from 'react';

const CompetencyCard = ({ icon, title, description }) => {
  return (
    <div className="competency-card">
      <div className="competency-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default CompetencyCard;
