import React from 'react';

const ROWS = [
  {
    q: '"Can\'t I just build this with ChatGPT or an AI coding tool?"',
    a: "You can get a demo working in a weekend. Keeping it accurate is the real job: loading new content when your prices or hours change, catching wrong answers, keeping other businesses' data out, staying up when AI providers change their models, and blocking spam that runs up your bill. That's what your monthly plan pays for, so you don't have to become the IT department.",
  },
  {
    q: '"How is this different from the chat bubble in my website builder?"',
    a: "Most built-in chat widgets either wait for a human to reply or follow a script you have to write. Anchor actually reads your content and answers in plain language, then hands off to you when it can't.",
  },
  {
    q: '"What about the big help-desk platforms?"',
    a: 'They are built for support teams with agents and ticket queues, are priced to match, and take weeks to configure. Anchor is one assistant, set up for you, at a flat monthly price.',
  },
];

export const WhyAnchor: React.FC = () => (
  <section id="why" className="py-24 border-t border-anchor-slate/10 bg-anchor-blue-900/30">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Why pay for Anchor?</h2>
      <div className="space-y-6">
        {ROWS.map(row => (
          <div key={row.q} className="p-6 rounded-xl bg-anchor-blue-800/20 border border-anchor-blue-500/10">
            <h3 className="text-lg font-bold text-white mb-2">{row.q}</h3>
            <p className="text-anchor-slate leading-relaxed">{row.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
