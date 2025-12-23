import React from 'react';

const FEATURE_LIST = [
  {
    title: 'Multi-tenant RAG Support',
    description: 'Strict tenant isolation at DB, app, and UI layers. Powered by pgvector and advanced embedding strategies for secure data retrieval.',
    icon: '🏢'
  },
  {
    title: 'Embeddable Chat Widget',
    description: 'Single-file IIFE (widget.js) that can be dropped into any site. Initialized via a simple global `SupportCopilot.init(...)` call.',
    icon: '💬'
  },
  {
    title: 'Admin Observability',
    description: 'Comprehensive insights into LLM logs, retrieval performance, cost tracking, latency metrics, and request correlation IDs.',
    icon: '📊'
  },
  {
    title: 'Ingestion CLI',
    description: 'Robust CLI tool for URL crawling and text file ingestion, featuring smart chunking and automatic embedding generation.',
    icon: '📥'
  },
  {
    title: 'Streaming Responses',
    description: 'Real-time token streaming for a responsive user experience, handling complex queries with immediate feedback.',
    icon: '⚡'
  },
  {
    title: 'Conversation Persistence',
    description: 'Seamless history management backed by localStorage within the widget, allowing users to pick up right where they left off.',
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
