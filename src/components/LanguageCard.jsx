import React from 'react';
import { Link } from 'react-router-dom';

const LanguageCard = ({ to, flag, langCode, langName, btnText }) => {
  return (
    <Link to={to} className="card">
      <div className="flag-wrapper">
        <img src={flag} alt={langName} />
      </div>
      <div className="card-content">
        <h3>{langName}</h3>
        <span className="lang-code">{langCode}</span>
        <div className="access-btn">
          {btnText}
        </div>
      </div>
    </Link>
  );
};

export default LanguageCard;
