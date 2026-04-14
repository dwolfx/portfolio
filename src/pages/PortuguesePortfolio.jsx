import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const PortuguesePortfolio = () => {
  const [activeTag, setActiveTag] = useState(null);

  const projects = [
    {
      title: "Vivo B2B",
      category: "Service Design",
      description: "Soluções de negócios escaláveis e gerenciamento de serviços.",
      tags: ["Fintech", "Crédito", "Cartão"],
      image: "https://images.unsplash.com/photo-1649478443254-b1a21cc9ed96?q=80&w=800"
    },
    {
      title: "TC Ecosystem",
      category: "Fintech",
      description: "Redefinindo o cenário digital para a maior comunidade financeira da América Latina.",
      tags: ["Fintech", "Dados"],
      image: "https://images.unsplash.com/photo-1584472666879-7d92db132958?q=80&w=800"
    }
  ];

  const handleTagClick = (tag) => {
    setActiveTag(prev => prev === tag ? null : tag);
  };

  const filteredProjects = activeTag 
    ? projects.filter(p => p.tags.includes(activeTag))
    : projects;

  const allTags = [...new Set(projects.flatMap(p => p.tags))];

  return (
    <div className="portfolio-page">
      <PortfolioNavbar lang="pt-br" />
      
      {/* Hero Section */}
      <header className="portfolio-hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="hero-meta">Victor Hugo Nogueira de Morais</span>
            <h1>Product Designer</h1>
            
            <div className="hero-quote-container">
              <blockquote className="hero-quote">
                "Design é o meio, mas o produto de sucesso é o equilíbrio entre o que o negócio deseja alcançar e o que o usuário precisa resolver."
              </blockquote>
            </div>

            <div className="hero-subtitle-container">
              <p className="hero-subtitle">Product Designer focado em acelerar a entrega através de IA e dados.</p>
            </div>

            <div className="hero-details">
              <p>Com um background como <strong>Front-End</strong>, transito com agilidade entre o design estratégico e a implementação técnica, utilizo muito da inteligência artificial para otimizar processos e garantir precisão nas decisões de produto.</p>
              <p>Tenho experiência em projetos de alto impacto em setores de alta criticidade, como <strong>Fintechs</strong> (Vivo e Bradesco), <strong>Betting</strong> (Entain) e <strong>Mídia</strong> (Globo).</p>
              <p style={{ marginTop: '12px' }}>👤 <strong>Personalidade</strong>: ENFP-A</p>
            </div>
            
            <div className="hero-socials">
              <p style={{ width: '100%', marginBottom: '4px', fontWeight: '700' }}>😃 Meus contatos:</p>
              <a href="http://wa.me/5511951565851" target="_blank" className="social-link" rel="noreferrer">WhatsApp</a>
              <a href="https://br.linkedin.com/in/victorhugon" target="_blank" className="social-link" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/dwolfx" target="_blank" className="social-link" rel="noreferrer">GitHub</a>
              <a href="mailto:victor9009@gmail.com" className="social-link" rel="noreferrer">Email</a>
            </div>
          </div>
          <div className="hero-image-container">
              <img src={victorProfile} alt="Victor Hugo Nogueira de Morais" />
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="section-container">
          <div className="section-header">
            <h2>Projetos em Destaque</h2>
            <a href="#all-projects" className="view-all">Ver Todos os Projetos →</a>
          </div>

          <div className="project-filters">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`filter-pill ${activeTag === null ? 'active' : ''}`}
              onClick={() => setActiveTag(null)}
            >
              Todos
            </motion.button>
            {allTags.map(tag => (
              <motion.button 
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                layout
                className={`filter-pill ${activeTag === tag ? 'active' : ''}`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </motion.button>
            ))}
          </div>

          <motion.div layout className="projects-grid">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ProjectCard
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="competencies-section">
        <h3>Competências Principais</h3>
        <div className="competencies-grid">
          <CompetencyCard
            icon="📐"
            title="Design de Sistemas"
            description="Criando fundamentos de design modulares que escalam entre plataformas."
          />
          <CompetencyCard
            icon="⚙️"
            title="Engenharia"
            description="Arquiteturas React limpas com foco em acessibilidade e performance."
          />
          <CompetencyCard
            icon="🎨"
            title="Refino Visual"
            description="Estética editorial com sistemas de grid e tipografia rigorosos."
          />
        </div>
      </section>

      {/* Statement Section */}
      <section className="statement-section">
        <h2>Especialista em unir estética e funcionalidade.</h2>
        <div className="statement-text">
          <p>Com mais de uma década de experiência, transito confortavelmente entre o Figma e o VS Code. Minha abordagem foca em reduzir o atrito entre o design e a implementação final, garantindo que a visão do produto seja mantida até o último pixel.</p>
          <p>Colaborei com empresas de diversos setores, desde telecomunicações até mídia de massa, sempre com o objetivo de criar ferramentas que melhorem a vida dos usuários e otimizem processos de negócios.</p>
        </div>
      </section>
    </div>
  );
};

export default PortuguesePortfolio;
