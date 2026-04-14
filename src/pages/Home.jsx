import React from 'react';
import Header from '../components/Header';
import LanguageCard from '../components/LanguageCard';
import brFlag from '../assets/flags/br_flag.jpg';
import ukFlag from '../assets/flags/uk_flag.jpg';
import esFlag from '../assets/flags/es_flag.jpg';

const Home = () => {
  return (
    <div className="content-wrapper">
      <Header />
      <main className="cards-container">
        <LanguageCard
          to="/pt-br"
          flag={brFlag}
          langCode="pt-br"
          langName="Português"
          btnText="Acessar Portfólio →"
        />
        <LanguageCard
          to="/en"
          flag={ukFlag}
          langCode="en"
          langName="English"
          btnText="Enter Portfolio →"
          disabled={true}
        />
        <LanguageCard
          to="/es"
          flag={esFlag}
          langCode="es"
          langName="Español"
          btnText="Acceder Portafolio →"
          disabled={true}
        />
      </main>
    </div>
  );
};

export default Home;
