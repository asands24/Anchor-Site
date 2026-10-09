import React from 'react';
import { BOOKING_URL } from '../lib/offer';

export const FinalCTA: React.FC = () => (
  <section className="py-24">
    <div className="container mx-auto px-6 max-w-3xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stop answering the same questions by hand</h2>
      <p className="text-anchor-slate text-lg mb-8">
        Tell us about your business in a 20-minute call. If Anchor isn't a fit, we'll say so.
      </p>
      <a
        href={BOOKING_URL}
        className="inline-block px-8 py-3.5 rounded-md bg-anchor-blue-500 text-anchor-blue-900 font-bold hover:bg-anchor-blue-500/90 transition-all hover:-translate-y-1"
      >
        Book a setup call
      </a>
    </div>
  </section>
);
