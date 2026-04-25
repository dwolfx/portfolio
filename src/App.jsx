import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import PortuguesePortfolioV2 from './pages/PortuguesePortfolioV2';
import EnglishPortfolioV2 from './pages/EnglishPortfolioV2';
import SpanishPortfolioV2 from './pages/SpanishPortfolioV2';
import VivoPay from './pages/cases/VivoPay';
import Footer from './components/Footer';

const LanguageRouter = () => {
    const { lang } = useParams();
    if (lang === 'pt-br') return <PortuguesePortfolioV2 />;
    if (lang === 'en') return <EnglishPortfolioV2 />;
    if (lang === 'es') return <SpanishPortfolioV2 />;
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
            <Route path="/:lang" element={<LanguageRouter />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
