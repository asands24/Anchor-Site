import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Ready to drop anchor?
        </h2>
        <p className="text-xl text-anchor-slate mb-12 max-w-2xl mx-auto">
          Stop building chatbots from scratch. Start with a solid, enterprise-grade foundation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://github.com/asands24/Anchor"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-md bg-anchor-blue-500 text-anchor-blue-900 font-bold hover:bg-anchor-blue-500/90 transition-all text-lg shadow-[0_0_20px_rgba(100,255,218,0.3)]"
          >
            View Source on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
