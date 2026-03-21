import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import EnglishPortfolio from './pages/EnglishPortfolio';
import Footer from './components/Footer';

const LanguageRouter = () => {
    const { lang } = useParams();
    if (lang === 'en') return <EnglishPortfolio />;
    return <PortfolioPage />;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:lang" element={<LanguageRouter />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
