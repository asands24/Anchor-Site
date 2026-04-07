import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const goHome = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-anchor-blue-900/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => { goHome(); setMobileMenuOpen(false); }}>
          <img src="/logo.png" alt="Anchor Logo" className="w-8 h-8 object-contain" />
          <span className="text-xl font-bold tracking-tight text-white">Anchor</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => handleNavigation('features')} className="text-anchor-slate hover:text-anchor-blue-500 transition-colors text-sm font-medium">Features</button>
          <button onClick={() => handleNavigation('architecture')} className="text-anchor-slate hover:text-anchor-blue-500 transition-colors text-sm font-medium">Architecture</button>
          <button onClick={() => handleNavigation('pricing')} className="text-anchor-slate hover:text-anchor-blue-500 transition-colors text-sm font-medium">Pricing</button>
          <button onClick={() => navigate('/knowledge')} className="text-anchor-slate hover:text-anchor-blue-500 transition-colors text-sm font-medium">Docs</button>
          <button onClick={() => handleNavigation('developers')} className="text-anchor-slate hover:text-anchor-blue-500 transition-colors text-sm font-medium">Developers</button>
          <button
            onClick={() => handleNavigation('demo')}
            className="px-4 py-2 rounded border border-anchor-blue-500 text-anchor-blue-500 hover:bg-anchor-blue-500/10 transition-colors text-sm font-medium"
          >
            Live Demo
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-anchor-slate hover:text-white transition-colors p-2">
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-anchor-blue-900 border-t border-anchor-slate/10 shadow-xl overflow-hidden py-4">
          <div className="flex flex-col px-6 space-y-4">
            <button onClick={() => { handleNavigation('features'); setMobileMenuOpen(false); }} className="text-left text-anchor-slate hover:text-anchor-blue-500 transition-colors text-base font-medium py-2">Features</button>
            <button onClick={() => { handleNavigation('architecture'); setMobileMenuOpen(false); }} className="text-left text-anchor-slate hover:text-anchor-blue-500 transition-colors text-base font-medium py-2">Architecture</button>
            <button onClick={() => { handleNavigation('pricing'); setMobileMenuOpen(false); }} className="text-left text-anchor-slate hover:text-anchor-blue-500 transition-colors text-base font-medium py-2">Pricing</button>
            <button onClick={() => { navigate('/knowledge'); setMobileMenuOpen(false); }} className="text-left text-anchor-slate hover:text-anchor-blue-500 transition-colors text-base font-medium py-2">Docs</button>
            <button onClick={() => { handleNavigation('developers'); setMobileMenuOpen(false); }} className="text-left text-anchor-slate hover:text-anchor-blue-500 transition-colors text-base font-medium py-2">Developers</button>
            <button
              onClick={() => { handleNavigation('demo'); setMobileMenuOpen(false); }}
              className="px-4 py-2 mt-2 w-full text-center rounded border border-anchor-blue-500 text-anchor-blue-500 hover:bg-anchor-blue-500/10 transition-colors text-base font-medium"
            >
              Live Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
