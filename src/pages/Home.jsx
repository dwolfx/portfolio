import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import LanguageCard from '../components/LanguageCard';
import brFlag from '../assets/flags/br_flag.jpg';
import ukFlag from '../assets/flags/uk_flag.jpg';
import esFlag from '../assets/flags/es_flag.jpg';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

const headerVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Home = () => {
  useEffect(() => { document.title = 'Victor Morais | Portfolio'; }, []);
  return (
    <div className="content-wrapper">
      <motion.div variants={headerVariants} initial="hidden" animate="visible">
        <Header />
      </motion.div>
      <motion.main
        className="cards-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <LanguageCard
            to="/pt-br"
            flag={brFlag}
            langCode="pt-br"
            langName="Português"
            btnText="Acessar Portfólio →"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <LanguageCard
            to="/en"
            flag={ukFlag}
            langCode="en"
            langName="English"
            btnText="Enter Portfolio →"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <LanguageCard
            to="/es"
            flag={esFlag}
            langCode="es"
            langName="Español"
            btnText="Acceder Portafolio →"
          />
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Home;
