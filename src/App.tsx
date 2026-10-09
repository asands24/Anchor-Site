import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Security } from './pages/Security';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { EasterEgg } from './components/EasterEgg';
import { useCommandKEasterEgg } from './lib/useCommandKEasterEgg';

const KnowledgeBase = lazy(() => import('./pages/KnowledgeBase').then(module => ({ default: module.KnowledgeBase })));

function ScrollHandler() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [hash]);
  return null;
}

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
      <ScrollHandler />
      <EasterEgg isActive={easterEggActivated} />
      <Suspense fallback={<div role="status" className="min-h-screen bg-anchor-blue-900 text-anchor-slate flex items-center justify-center">Loading documentation…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/security" element={<Security />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/knowledge" element={<KnowledgeBase />} />
          <Route path="/knowledge/:slug" element={<KnowledgeBase />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
