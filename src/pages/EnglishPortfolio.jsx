import React from 'react';
import PortfolioNavbar from '../components/PortfolioNavbar';
import ProjectCard from '../components/ProjectCard';
import CompetencyCard from '../components/CompetencyCard';
import '../Portfolio.css';

// Project Images
import ecosystem from '../assets/projects/ecosystem.png';
import b2b from '../assets/projects/b2b_portal.png';
import globo from '../assets/projects/globo_tools.png';
import design from '../assets/projects/design_system.png';

// Profile Image
import victorProfile from '../assets/profile/victor.jpg';

const EnglishPortfolio = () => {
  return (
    <div className="portfolio-page">
      <PortfolioNavbar />

      {/* Hero Section */}
      <header className="portfolio-hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="hero-meta">Victor Morais</span>
            <h1>Product Designer</h1>
            <p className="hero-subtitle">focused on accelerating value delivery through AI and data.</p>
            
            <blockquote className="hero-quote">
              "I believe that without a user experience centered on what truly matters, every technical effort is in vain."
            </blockquote>

            <div className="hero-details">
              <p>With a solid background in <strong>Front-End development</strong>, I move with agility between strategic design and technical implementation. I leverage AI to streamline processes and ensure precision in product decisions.</p>
              <p>I have extensive experience leading high-impact projects in high-stakes sectors, including <strong>Fintechs</strong> (Vivo and Bradesco), <strong>Betting</strong> (Entain), and <strong>Media</strong> (Globo).</p>
              <p style={{ marginTop: '20px' }}>👤 <strong>Personality</strong>: ENFP-A</p>
            </div>
            
            <div className="hero-socials">
              <p style={{ width: '100%', marginBottom: '4px', fontWeight: '700' }}>😃 My contacts:</p>
              <a href="http://wa.me/5511951565851" target="_blank" className="social-link">WhatsApp</a>
              <a href="https://br.linkedin.com/in/victorhugon" target="_blank" className="social-link">LinkedIn</a>
              <a href="https://github.com/dwolfx" target="_blank" className="social-link">GitHub</a>
              <a href="mailto:victor9009@gmail.com" className="social-link">Email</a>
            </div>
          </div>
          <div className="hero-image-container">
              <img src={victorProfile} alt="Victor Morais" />
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="section-container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <a href="#all-projects" className="view-all">View All Projects →</a>
          </div>

          <div className="projects-grid">
            <ProjectCard
              image={ecosystem}
              title="TC Ecosystem"
              description="Redefining the digital landscape for the largest financial community in Latin America."
              tags={["FINTECH", "ECOSYSTEM"]}
            />
            <ProjectCard
              image={b2b}
              title="Vivo B2B"
              description="Scalable business solutions and service management for Brazil's telecommunications leader."
              tags={["ENTERPRISE", "UI/UX"]}
            />
            <ProjectCard
              image={globo}
              title="TV Globo Tools"
              description="Empowering content creators with specialized internal tools and administrative dashboards."
              tags={["INTERNAL TOOLS", "MEDIA"]}
            />
            <ProjectCard
              image={design}
              title="React Design Systems"
              description="Building consistent, type-safe component libraries for high-velocity engineering teams."
              tags={["DEVELOPMENT", "SYSTEMS"]}
            />
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="competencies-section">
        <h3>Core Competencies</h3>
        <div className="competencies-grid">
          <CompetencyCard
            icon="📐"
            title="System Design"
            description="Crafting modular design foundations that scale across platforms."
          />
          <CompetencyCard
            icon="⚙️"
            title="Engineering"
            description="Clean React architectures with a focus on accessibility and performance."
          />
          <CompetencyCard
            icon="🎨"
            title="Visual Craft"
            description="Editorial aesthetics with rigorous grid systems and typography."
          />
        </div>
      </section>

      {/* Statement Section */}
      <section className="statement-section">
        <h2>Expert in uniting aesthetics and functionality.</h2>
        <div className="statement-text">
          <p>With over a decade of experience, I transition comfortably between Figma and VS Code. My approach focuses on reducing friction between design and final implementation, ensuring that the product vision is maintained to the very last pixel.</p>
          <p>I have collaborated with companies from various sectors, from telecommunications to mass media, always with the goal of creating tools that improve users' lives and optimize business processes.</p>
        </div>
      </section>
    </div>
  );
};

export default EnglishPortfolio;
