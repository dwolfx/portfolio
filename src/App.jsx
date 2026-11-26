import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import PortfolioV2 from './pages/PortfolioV2';
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

const AppContent = () => {
  const location = useLocation();
  const isV1Host = typeof window !== 'undefined' && (
    window.location.hostname.startsWith('v1.') ||
    window.location.hostname.includes('v1-')
  );
  const isV1Route = location.pathname.startsWith('/v1');
  const showLegacyV1 = isV1Host || isV1Route;
  const isCaseRoute = location.pathname.includes('/cases/');

  return (
    <div className="app-container">
      <div className="main-content">
        <Routes>
          <Route path="/v1" element={<Home />} />
          <Route path="/v2" element={<PortfolioV2 />} />
          <Route path="/" element={showLegacyV1 ? <Home /> : <PortfolioV2 />} />
          <Route path="/:lang/cases/vivo-pay" element={<VivoPay />} />
          <Route path="/:lang/cases/sportingbet" element={<Sportingbet />} />
          <Route path="/:lang/cases/traders-club" element={<TradersClub />} />
          <Route path="/:lang/cases/bradesco" element={<Bradesco />} />
          <Route path="/:lang" element={<LanguageRouter />} />
        </Routes>
      </div>
      {showLegacyV1 && !isCaseRoute && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
