import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PortfolioPage = () => {
  const { lang } = useParams();
  
  const content = {
    'pt-br': {
        title: 'Portfólio em Português',
        description: 'Bem-vindo ao meu portfólio. Em breve aqui você verá meus estudos de caso detalhados.'
    },
    'en': {
        title: 'English Portfolio',
        description: 'Welcome to my portfolio. Soon you will see my detailed case studies here.'
    },
    'es': {
        title: 'Portafolio en Español',
        description: 'Bienvenido a mi portafolio. Pronto verás aqui mis estudios de caso detallados.'
    }
  };

  const pageContent = content[lang] || content['pt-br'];

  return (
    <div className="content-wrapper" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <h2>{pageContent.title}</h2>
      <p style={{ margin: '20px 0', opacity: 0.8 }}>{pageContent.description}</p>
      <Link to="/" style={{ color: '#465C9B', fontWeight: '500' }}>← Voltar para Home</Link>
    </div>
  );
};

export default PortfolioPage;
