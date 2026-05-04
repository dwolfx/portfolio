import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import '../Portfolio.css';

import victorProfile from '../assets/profile/victor.jpg';
import { projectsEs } from '../data/projectsData';
import PortfolioHeader from '../components/PortfolioHeader';
import HeroProfile from '../components/HeroProfile';
import Statement from '../components/Statement';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsGallery from '../components/ProjectsGallery';

const SpanishPortfolio = () => {
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

  const projects = projectsEs;

  return (
    <div className="portfolio">

      <PortfolioHeader lang="es" />

      <HeroProfile
        tagline="Transformando problemas complejos en productos listos para las personas."
        chips={['Product Designer', 'Data Driven', 'AI Driven', 'São Paulo, SP', 'Belo Horizonte, MG']}
        bio={
          <>
            <p>Product Designer con <strong>visión estratégica</strong> y <strong>formación técnica</strong>, enfocado en crear soluciones que equilibran las necesidades del usuario con los objetivos de negocio.</p>
            <p>Con experiencia en <strong>Entain, Rede Globo, Vivo y Bradesco</strong>, utilizo <strong>datos, IA e investigación</strong> para acelerar la entrega de valor y transformar problemas complejos en productos reales y escalables.</p>
          </>
        }
        socialLinks={{
          whatsapp: "WhatsApp",
          linkedin: "LinkedIn",
          github: "GitHub",
          email: "Email"
        }}
        cvLink={{ url: "/Victor-Morais-es.pdf", text: "Descargar CV" }}
        profileImage={victorProfile}
      />

      <Statement
        quote='"El diseño que no sirve a quienes realmente importan es esfuerzo sin destino."'
        text={
          <>
            Creo que el papel del diseñador es ser el <strong>puente</strong> entre lo que el usuario necesita y lo que el negocio busca.<br />En lugar de solo dibujar interfaces, diseño caminos que entregan <strong>valor real</strong> en cada etapa del viaje.
          </>
        }
      />

      <ExperienceSection
        eyebrow="Experiencia"
        title="Historial Profesional"
        experiences={[
          {
            company: 'Entain (SportingBet)',
            role: 'Product Designer Especialista',
            start: 'Ago 2024',
            end: 'Ene 2026',
            desc: 'Tropicalicé la plataforma global de SportingBet para el mercado brasileño. Fui uno de los responsables del diseño de KYC y Onboarding que aseguró la primera homologación gubernamental de una casa de apuestas en Brasil, equilibrando el cumplimiento normativo con una UX de alta conversión.',
            link: '/es/cases/sportingbet'
          },
          {
            company: 'Vivo (Telefônica)',
            role: 'Product Designer Especialista',
            start: 'Mar 2023',
            end: 'Jun 2024',
            desc: 'Fui uno de los diseñadores fundadores de Vivo Fintech y responsable de los productos de tarjeta de crédito, seguros y cuenta digital. ¡Construimos VivoPay desde cero! Actué como puente de UX en la integración Vivo + Itaú y diseñé journeys de confianza siguiendo las leyes de protección de datos.',
            link: '/es/cases/vivo-pay'
          },
          {
            company: 'Bradesco',
            role: 'Senior Product Designer',
            start: 'Dic 2022',
            end: 'Feb 2023',
            desc: 'Proyecto puntual a través de una agencia externa. Lideré el rediseño de Autoline, una herramienta B2B de financiamiento de vehículos para concesionarios, simplificando formularios de registro complejos sin comprometer el cumplimiento bancario.',
            link: '/es/cases/bradesco'
          },
          {
            company: 'Gen (General Shopping)',
            role: 'Senior Product Designer',
            start: 'Jul 2022',
            end: 'Dic 2022',
            desc: 'Lideré el rebranding de la plataforma de gestión B2B para comerciantes. Introduje y estandaricé el Ant Design System, realicé investigaciones con comerciantes para eliminar cuellos de botella operativos y colaboré con ingeniería para una adopción escalable.'
          },
          {
            company: 'TradersClub',
            role: 'Mid-level Product Designer',
            start: 'Mar 2021',
            end: 'Jun 2022',
            desc: 'Rol híbrido (diseño + código React): construí el Design System para B2B y B2C y desarrollé un sistema de automatización que redujo el tiempo de creación de informes de semanas a solo 15 minutos.',
            link: '/es/cases/traders-club'
          },
          {
            company: 'Rede Globo',
            role: 'Jr Product Designer, Especialista Front-end',
            start: 'Mar 2017',
            end: 'Sep 2020',
            desc: 'Donde hice la transición al campo del diseño. Trabajé en la intersección del diseño y el front-end para los principales portales de noticias. Creé los formatos Parallax y FlyCarpet, adoptados por Google como estándar del mercado, logrando un aumento del 20% en CTR mediante un diseño basado en datos.'
          },
        ]}
        viewCaseText="Ver caso completo →"
        cvDownloadLink="/Victor-Morais-es.pdf"
        cvDownloadText="Descargar Currículum Completo"
      />

      <ProjectsGallery
        projects={projects}
        eyebrow="Proyectos"
        title="Proyectos Destacados"
        allFilterText="Todos"
        wipText="En construcción"
        viewCaseText="Ver caso completo →"
        showAllTextFn={(count) => `Ver todos los proyectos (${count})`}
        showLessText="Mostrar menos"
      />

    </div>
  );
};

export default SpanishPortfolio;
