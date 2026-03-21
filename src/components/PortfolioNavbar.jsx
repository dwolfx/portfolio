import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioNavbar = () => {
  return (
    <nav className="portfolio-navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Victor Morais</Link>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="resume-btn" onClick={() => window.open('#', '_blank')}>Resume</button>
      </div>
    </nav>
  );
};

export default PortfolioNavbar;
