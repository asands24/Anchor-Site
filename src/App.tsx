import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Security } from './pages/Security';
import { Contact } from './pages/Contact';
import { KnowledgeBase } from './pages/KnowledgeBase';
import { EasterEgg } from './components/EasterEgg';
import { useCommandKEasterEgg } from './lib/useCommandKEasterEgg';

function App() {
  const easterEggActivated = useCommandKEasterEgg();

  useEffect(() => {
    // Disable automatic scroll restoration to prevent browser-induced scroll jumps
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <Router>
      <EasterEgg isActive={easterEggActivated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/security" element={<Security />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/knowledge" element={<KnowledgeBase />} />
        <Route path="/knowledge/:slug" element={<KnowledgeBase />} />
      </Routes>
    </Router>
  );
}

export default App;
