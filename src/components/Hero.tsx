import React from 'react';
import { BOOKING_URL, FOUNDING_OFFER } from '../lib/offer';

export const Hero: React.FC = () => {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-anchor-blue-800/50 border border-anchor-blue-500/30 text-anchor-blue-500 text-sm font-medium">
          Live on your website in 3 business days
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
          Answer every customer question,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-anchor-blue-500 to-blue-400">
            even at 2 a.m.
          </span>
        </h1>

        <p className="text-anchor-slate text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Anchor adds an AI assistant to your website that answers from <em>your</em> FAQ, services, policies and prices.
          We set it up, keep it accurate and run it for you. You just get fewer phone calls and more booked customers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BOOKING_URL}
            className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-anchor-blue-500 text-anchor-blue-900 font-bold hover:bg-anchor-blue-500/90 transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(100,255,218,0.3)]"
          >
            Book a 20-minute setup call
          </a>
          <button
            onClick={scrollToDemo}
            className="w-full sm:w-auto px-8 py-3.5 rounded-md border border-anchor-slate/30 text-white font-medium hover:border-anchor-blue-500/50 hover:bg-anchor-blue-800/30 transition-all"
          >
            Try it right now
          </button>
        </div>

        <p className="mt-6 text-sm text-anchor-slate/80">
          From $199/month · No contract · Works with WordPress, Wix, Squarespace, Shopify and custom sites
        </p>
        {FOUNDING_OFFER.enabled && (
          <p className="mt-2 text-sm text-anchor-blue-500/90">{FOUNDING_OFFER.text}</p>
        )}
      </div>
    </section>
  );
};
