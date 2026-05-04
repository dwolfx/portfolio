import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import PortuguesePortfolio from './pages/PortuguesePortfolio';
import EnglishPortfolio from './pages/EnglishPortfolio';
import SpanishPortfolio from './pages/SpanishPortfolio';
import VivoPay from './pages/cases/VivoPay';
import Sportingbet from './pages/cases/Sportingbet';
import TradersClub from './pages/cases/TradersClub';
import Bradesco from './pages/cases/Bradesco';
import Footer from './components/Footer';

const LanguageRouter = () => {
    const { lang } = useParams();
    if (lang === 'pt-br') return <PortuguesePortfolio />;
    if (lang === 'en') return <EnglishPortfolio />;
    if (lang === 'es') return <SpanishPortfolio />;
    return <PortfolioPage />;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:lang/cases/vivo-pay" element={<VivoPay />} />
            <Route path="/:lang/cases/sportingbet" element={<Sportingbet />} />
            <Route path="/:lang/cases/traders-club" element={<TradersClub />} />
            <Route path="/:lang/cases/bradesco" element={<Bradesco />} />
            <Route path="/:lang" element={<LanguageRouter />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
