import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import '../Portfolio.css';

import victorProfile from '../assets/profile/victor.jpg';
import { projectsEn } from '../data/projectsData';
import PortfolioHeader from '../components/PortfolioHeader';
import HeroProfile from '../components/HeroProfile';
import Statement from '../components/Statement';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsGallery from '../components/ProjectsGallery';

const EnglishPortfolio = () => {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    document.title = 'Victor Morais | Product Designer';
    if (window.location.hash === '#projects') {
      setTimeout(() => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const projects = projectsEn;

  return (
    <div className="portfolio">

      {/* ─── NAV ─── */}
      <PortfolioHeader lang="en" />

      <HeroProfile
        tagline="Transforming complex problems into products ready for people."
        chips={['Product Designer', 'Data Driven', 'AI Driven', 'São Paulo, SP', 'Belo Horizonte, MG']}
        bio={
          <>
            <p>Product Designer with <strong>strategic vision</strong> and <strong>technical background</strong>, focused on creating solutions that balance user needs with business objectives.</p>
            <p>With experience at <strong>Entain, Rede Globo, Vivo and Bradesco</strong>, I use <strong>data, AI and research</strong> to accelerate value delivery and transform complex problems into real, scalable products.</p>
          </>
        }
        socialLinks={{
          whatsapp: "WhatsApp",
          linkedin: "LinkedIn",
          github: "GitHub",
          email: "Email"
        }}
        cvLink={{ url: "/Victor-Morais-en.pdf", text: "Download CV" }}
        profileImage={victorProfile}
      />

      <Statement
        quote='"Design that doesn&apos;t serve those who truly matter is effort without purpose."'
        text={
          <>
            I believe the designer&apos;s role is to be the <strong>bridge</strong> between what the user needs and what the business desires.<br />Instead of just drawing interfaces, I design paths that deliver <strong>real value</strong> at every step of the journey.
          </>
        }
      />

      <ExperienceSection
        eyebrow="Experience"
        title="Professional Background"
        experiences={[
          {
            company: 'Entain (SportingBet)',
            role: 'Specialist Product Designer',
            start: 'Aug 2024',
            end: 'Jan 2026',
            desc: 'Localized the global SportingBet platform for the Brazilian market. I was one of the designers responsible for the KYC and Onboarding flow that secured the first government homologation for a betting company in Brazil, balancing regulatory compliance with high-conversion UX.',
            link: '/en/cases/sportingbet'
          },
          {
            company: 'Vivo (Telefônica)',
            role: 'Specialist Product Designer',
            start: 'Mar 2023',
            end: 'Jun 2024',
            desc: 'I was one of the design founders of Vivo Fintech, responsible for credit card, insurance, and digital account products. We built VivoPay from scratch! I acted as the UX bridge in the Vivo + Itaú integration and designed trustworthy journeys complying with data protection laws.',
            link: '/en/cases/vivo-pay'
          },
          {
            company: 'Bradesco',
            role: 'Senior Product Designer',
            start: 'Dec 2022',
            end: 'Feb 2023',
            desc: 'Short-term project via a third-party agency. I led the redesign of Autoline, a B2B vehicle financing tool for dealerships, simplifying complex registration forms without compromising bank compliance.',
            link: '/en/cases/bradesco'
          },
          {
            company: 'Gen (General Shopping)',
            role: 'Senior Product Designer',
            start: 'Jul 2022',
            end: 'Dec 2022',
            desc: 'Led the rebranding of the B2B management platform for shopkeepers. I introduced and standardized the Ant Design System, conducted research with merchants to eliminate operational bottlenecks, and collaborated with engineering for scalable adoption.'
          },
          {
            company: 'TradersClub',
            role: 'Mid-level Product Designer',
            start: 'Mar 2021',
            end: 'Jun 2022',
            desc: 'Hybrid role (design + React code): built the Design System for B2B and B2C and developed an automation system that reduced the time to create reports from weeks to just 15 minutes.',
            link: '/en/cases/traders-club'
          },
          {
            company: 'Rede Globo',
            role: 'Jr Product Designer, Specialist Front-end',
            start: 'Mar 2017',
            end: 'Sep 2020',
            desc: 'Where I transitioned into the design field. I worked at the intersection of design and front-end for major news portals. I created the Parallax and FlyCarpet ad formats, which were later adopted by Google as a market standard, achieving a 20% increase in CTR via data-driven design.'
          },
        ]}
        viewCaseText="View full case study →"
        cvDownloadLink="/Victor-Morais-en.pdf"
        cvDownloadText="Download Full Resume"
      />

      <ProjectsGallery
        projects={projects}
        eyebrow="Projects"
        title="Featured Work"
        allFilterText="All"
        wipText="Work in progress"
        viewCaseText="View case study →"
        showAllTextFn={(count) => `View all projects (${count})`}
        showLessText="Show less"
      />

    </div>
  );
};

export default EnglishPortfolio;
