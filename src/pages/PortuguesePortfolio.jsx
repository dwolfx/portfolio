import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import '../Portfolio.css';

import victorProfile from '../assets/profile/victor.jpg';
import { projectsPtBr } from '../data/projectsData';
import PortfolioHeader from '../components/PortfolioHeader';
import HeroProfile from '../components/HeroProfile';
import Statement from '../components/Statement';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsGallery from '../components/ProjectsGallery';

const PortuguesePortfolio = () => {
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

  const projects = projectsPtBr;

  return (
    <div className="portfolio">

      {/* ─── NAV ─── */}
      <PortfolioHeader lang="pt-br" />

      {/* ─── HERO ─── */}
      <HeroProfile
        tagline="Transformando problemas complexos em produtos prontos para as pessoas."
        chips={['Product Designer', 'Data Driven', 'IA Driven', 'São Paulo, SP', 'Belo Horizonte, MG']}
        bio={
          <>
            <p>Product Designer com <strong>visão estratégica</strong> e <strong>background técnico</strong>, focado em criar soluções que equilibram as necessidades do usuário com os objetivos de negócio.</p>
            <p>Com passagens por <strong>Entain, Rede Globo, Vivo e Bradesco</strong>, utilizo <strong>dados, IA e pesquisas</strong> para acelerar a entrega de valor e transformar problemas complexos em produtos reais e escaláveis.</p>
          </>
        }
        socialLinks={{
          whatsapp: "WhatsApp",
          linkedin: "LinkedIn",
          github: "GitHub",
          email: "Email"
        }}
        cvLink={{ url: "/Victor-Morais-ptbr.pdf", text: "Baixar Currículo" }}
        profileImage={victorProfile}
      />

      {/* ─── STATEMENT ─── */}
      <Statement
        quote='"Design que não serve a quem realmente importa é esforço sem destino."'
        text={
          <>
            Acredito que o papel do designer é ser a <strong>ponte</strong> entre o que o usuário precisa e o que o negócio almeja.<br />Em vez de apenas desenhar interfaces, projeto caminhos que entregam <strong>valor real</strong> em cada etapa da jornada.
          </>
        }
      />

      {/* ─── EXPERIENCE ─── */}
      <ExperienceSection
        eyebrow="Experiência"
        title="Histórico Profissional"
        experiences={[
          {
            company: 'Entain (SportingBet)',
            role: 'Product Designer Especialista',
            start: 'Ago 2024',
            end: 'Jan 2026',
            desc: 'Tropicalizei a plataforma global da SportingBet para o mercado brasileiro. Fui um dos responsáveis pelo design do KYC e Onboarding que garantiu a primeira homologação governamental de uma casa de apostas no Brasil, equilibrando compliance regulatório com UX de alta conversão.',
            link: '/pt-br/cases/sportingbet'
          },
          {
            company: 'Vivo (Telefônica)',
            role: 'Product Designer Especialista',
            start: 'Mar 2023',
            end: 'Jun 2024',
            desc: 'Fui um dos fundadores do design da Vivo Fintech e responsável pelos produtos de cartão de crédito, seguros e conta digital. Construímos o VivoPay do zero! Atuei como ponte de UX na integração Vivo + Itaú e desenhei jornadas de confiança seguindo a LGPD.',
            link: '/pt-br/cases/vivo-pay'
          },
          {
            company: 'Bradesco',
            role: 'Product Designer Sênior',
            start: 'Dez 2022',
            end: 'Fev 2023',
            desc: 'Projeto pontual via terceirizada. Liderei o redesign do Autoline, ferramenta B2B de financiamento de veículos para revendedoras, simplificando fichas cadastrais complexas sem comprometer o compliance bancário.',
            link: '/pt-br/cases/bradesco'
          },
          {
            company: 'Gen (General Shopping)',
            role: 'Product Designer Sênior',
            start: 'Jul 2022',
            end: 'Dez 2022',
            desc: 'Liderei o rebranding da plataforma B2B de gestão para lojistas. Introduzi e padronizei o Ant Design System, conduzi pesquisa com lojistas para eliminar gargalos operacionais e colaborei com engenharia para adoção escalável.'
          },
          {
            company: 'TradersClub',
            role: 'Product Designer Pleno',
            start: 'Mar 2021',
            end: 'Jun 2022',
            desc: 'Atuação híbrida (design + código React): construí o Design System para B2B e B2C e desenvolvi um sistema de automação que reduziu o tempo de criação de relatórios de semanas para apenas 15 minutos.',
            link: '/pt-br/cases/traders-club'
          },
          {
            company: 'Rede Globo',
            role: 'Product Designer Jr, Front-end Especialista',
            start: 'Mar 2017',
            end: 'Set 2020',
            desc: 'Onde migrei para a área. Trabalhei na intersecção entre design e front-end para G1, GE, GShow e Globo.com. Criei os formatos Parallax e FlyCarpet, adotados pelo Google como padrão de mercado, com aumento de 20% no CTR via design orientado por dados.'
          },
        ]}
        viewCaseText="Ver case completo →"
        cvDownloadLink="/Victor-Morais-ptbr.pdf"
        cvDownloadText="Baixar Currículo Completo"
      />

      {/* ─── PROJECTS ─── */}
      <ProjectsGallery
        projects={projects}
        eyebrow="Projetos"
        title="Projetos em Destaque"
        allFilterText="Todos"
        wipText="Em construção"
        viewCaseText="Ver case completo →"
        showAllTextFn={(count) => `Ver todos os projetos (${count})`}
        showLessText="Mostrar menos"
      />

    </div>
  );
};

export default PortuguesePortfolio;
