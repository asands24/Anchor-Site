import React from 'react';

export const Hero: React.FC = () => {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToArch = () => {
    document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-anchor-blue-800/50 border border-anchor-blue-500/30 text-anchor-blue-500 text-sm font-medium animate-float-slow">
          Looking for a framework? This isn't one.
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
          Production-ready, multi-tenant <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-anchor-blue-500 to-blue-400">
            RAG-powered support copilot
          </span>
        </h1>

        <p className="text-anchor-slate text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          A definitive reference implementation for enterprise AI.
          Featuring strict tenant isolation, embeddable widgets, and full admin observability.
          <br className="hidden md:block" />
          <span className="text-anchor-blue-500/80">Opinionated. Secure. Ready to deploy.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToDemo}
            className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-anchor-blue-500 text-anchor-blue-900 font-bold hover:bg-anchor-blue-500/90 transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(100,255,218,0.3)]"
          >
            Try the Live Demo
          </button>

          <button
            onClick={scrollToArch}
            className="w-full sm:w-auto px-8 py-3.5 rounded-md border border-anchor-slate/30 text-white font-medium hover:border-anchor-blue-500/50 hover:bg-anchor-blue-800/30 transition-all"
          >
            View Architecture
          </button>
        </div>
      </div>
    </section>
  );
};
