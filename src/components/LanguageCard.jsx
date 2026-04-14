import React from 'react';
import { Link } from 'react-router-dom';

const LanguageCard = ({ to, flag, langCode, langName, btnText, disabled }) => {
  const CardWrapper = disabled ? 'div' : Link;
  
  return (
    <CardWrapper to={disabled ? undefined : to} className={`card ${disabled ? 'disabled' : ''}`}>
      <div className="flag-wrapper">
        <img src={flag} alt={langName} />
      </div>
      <div className="card-content">
        <h3>{langName}</h3>
        <span className="lang-code">{langCode}</span>
        <div className="access-btn">
          {disabled ? 'Em breve...' : btnText}
        </div>
      </div>
    </CardWrapper>
  );
};

export default LanguageCard;
