import React from 'react';

const FEATURE_LIST = [
  {
    title: 'Secure Multi-Customer Architecture',
    description: 'Complete data isolation for each customer at every layer—database, application, and UI. Built with PostgreSQL vector search to keep customer data completely separate.',
    icon: '🏢'
  },
  {
    title: 'Embeddable Chat Widget',
    description: 'Drop-in chat widget that works on any website. Install with a single script tag and configure with one line of code.',
    icon: '💬'
  },
  {
    title: 'Complete Admin Dashboard',
    description: 'Monitor AI interactions, search performance, costs, response times, and track every request with detailed logs and metrics.',
    icon: '📊'
  },
  {
    title: 'Document Ingestion Tools',
    description: 'Command-line tools to import your documentation from websites or files. Automatically processes and optimizes content for AI search.',
    icon: '📥'
  },
  {
    title: 'Real-Time Streaming',
    description: 'Instant, word-by-word AI responses as they are generated. Users see answers appear immediately, not after long waits.',
    icon: '⚡'
  },
  {
    title: 'Conversation History',
    description: 'Automatically saves chat history in the user browser, so conversations continue seamlessly across sessions.',
    icon: '💾'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise-grade Capabilities</h2>
          <p className="text-anchor-slate max-w-2xl mx-auto">
            Anchor isn't a toy. It's a complete, opinionated system designed for real-world deployment requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURE_LIST.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-anchor-blue-800/20 border border-anchor-blue-500/10 hover:bg-anchor-blue-800/40 hover:border-anchor-blue-500/30 transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_10px_rgba(100,255,218,0.2)]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-anchor-blue-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-anchor-slate leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
