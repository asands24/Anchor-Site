import React from 'react';

const STEPS = [
  {
    title: 'Send us your content',
    body: 'On a 20-minute call, share your website and anything customers ask about: FAQ, services, hours, policies, price lists, PDFs.',
  },
  {
    title: 'We build and test it',
    body: 'We load your content, match the chat to your brand, and test it against the questions your customers actually ask.',
  },
  {
    title: 'Paste one line, go live',
    body: 'Add one snippet to your site (or we do it for you). From then on we monitor it, update it and handle the tech.',
  },
];

export const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="py-20 border-y border-anchor-slate/10 bg-anchor-blue-900/30">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">How it works</h2>
      <p className="text-anchor-slate text-center max-w-xl mx-auto mb-12">About an hour of your time, total. No technical skills needed.</p>
      <ol className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {STEPS.map((step, i) => (
          <li key={step.title} className="p-6 rounded-xl bg-anchor-blue-800/20 border border-anchor-blue-500/10">
            <div className="w-9 h-9 rounded-full bg-anchor-blue-500 text-anchor-blue-900 font-bold flex items-center justify-center mb-4">{i + 1}</div>
            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
            <p className="text-anchor-slate leading-relaxed">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
