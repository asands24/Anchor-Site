import React from 'react';

const BENEFITS = [
  {
    title: 'Answers from your content only',
    description: "It reads your pages and documents, not the whole internet. If the answer isn't there, it says so and points people to your phone or email instead of guessing.",
    icon: '🎯',
  },
  {
    title: 'Open 24/7',
    description: 'Evenings, weekends and holidays. Customers get an answer in seconds instead of waiting for you to call back.',
    icon: '🌙',
  },
  {
    title: 'Looks like your business',
    description: 'Your colors, your name, your greeting and your suggested questions. A floating chat bubble on every page or a panel on just one.',
    icon: '🎨',
  },
  {
    title: 'Gets smarter every month',
    description: 'We review the questions it couldn\'t answer and add what was missing. On Growth, you get a report of what customers ask most.',
    icon: '📈',
  },
  {
    title: 'Your data stays yours',
    description: 'Your content is kept in its own private space that no other business can see. It is never used to train AI models.',
    icon: '🔒',
  },
  {
    title: 'Nothing to maintain',
    description: 'We host it, watch it and keep it running through AI updates. If something looks off, you email a real person.',
    icon: '🛟',
  },
];

export const Features: React.FC = () => (
  <section id="features" className="py-24 relative">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for busy small businesses</h2>
        <p className="text-anchor-slate max-w-2xl mx-auto">
          Dental and medical offices, contractors, salons, law firms, local shops, online stores: anyone whose phone rings with the same ten questions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BENEFITS.map(feature => (
          <div
            key={feature.title}
            className="p-8 rounded-xl bg-anchor-blue-800/20 border border-anchor-blue-500/10 hover:bg-anchor-blue-800/40 hover:border-anchor-blue-500/30 transition-all duration-300"
          >
            <div className="text-4xl mb-6" aria-hidden="true">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-anchor-slate leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
