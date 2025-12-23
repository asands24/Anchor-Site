import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-anchor-blue-900/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 rounded-full border-2 border-anchor-blue-500 flex items-center justify-center text-anchor-blue-500 font-bold text-lg">
            A
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Anchor</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('features')} className="text-anchor-slate hover:text-anchor-blue-500 transition-colors text-sm font-medium">Features</button>
          <button onClick={() => scrollToSection('architecture')} className="text-anchor-slate hover:text-anchor-blue-500 transition-colors text-sm font-medium">Architecture</button>
          <button onClick={() => scrollToSection('developers')} className="text-anchor-slate hover:text-anchor-blue-500 transition-colors text-sm font-medium">Developers</button>
          <button
            onClick={() => scrollToSection('demo')}
            className="px-4 py-2 rounded border border-anchor-blue-500 text-anchor-blue-500 hover:bg-anchor-blue-500/10 transition-colors text-sm font-medium"
          >
            Live Demo
          </button>
        </div>
      </div>
    </nav>
  );
};
