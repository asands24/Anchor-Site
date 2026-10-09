import React, { useState } from 'react';
import { StripeBuyButton } from './billing/StripeBuyButton';
import { BOOKING_URL, FOUNDING_OFFER, MANAGED_PLANS, SETUP_FEE } from '../lib/offer';

const LICENSES = [
  {
    id: 'starter',
    name: 'Source license',
    price: '$3,000',
    features: ['Full source code (backend, widget, admin)', 'Multi-business support built in', 'Content loading tools', 'Private GitHub repo access'],
    buyButtonId: import.meta.env.VITE_STRIPE_BUY_BTN_STARTER,
    publishableKey: import.meta.env.VITE_STRIPE_KEY_STARTER,
  },
  {
    id: 'pro',
    name: 'Source license + setup',
    price: '$6,000',
    features: ['Everything in Source license', 'Guided deployment session', 'Deployment checklist'],
    buyButtonId: import.meta.env.VITE_STRIPE_BUY_BTN_PRO,
    publishableKey: import.meta.env.VITE_STRIPE_KEY_PRO,
  },
];

export const Pricing: React.FC = () => {
  const [showDev, setShowDev] = useState(false);
  const [checkout, setCheckout] = useState<string | null>(null);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple monthly pricing</h2>
          <p className="text-lg text-anchor-slate">
            We host it, run it and keep it accurate. AI usage included. Cancel any time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {MANAGED_PLANS.map(plan => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 text-left flex flex-col ${plan.highlighted
                ? 'bg-anchor-blue-700/30 border-2 border-anchor-blue-500 shadow-[0_0_30px_rgba(100,255,218,0.15)] relative'
                : 'bg-anchor-blue-800/20 border border-anchor-blue-500/20'}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-anchor-blue-500 text-anchor-blue-900 text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-anchor-slate text-sm mb-5">{plan.blurb}</p>
              <div className="text-4xl font-bold text-white mb-6">
                {plan.price}<span className="text-base text-anchor-slate font-normal">{plan.cadence}</span>
              </div>
              <ul className="space-y-2 text-anchor-slate text-sm mb-8 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start"><span className="text-anchor-blue-500 mr-2">✓</span>{f}</li>
                ))}
              </ul>
              <a
                href={BOOKING_URL}
                className={`block text-center w-full py-3 rounded-md font-bold transition-all ${plan.highlighted
                  ? 'bg-anchor-blue-500 text-anchor-blue-900 hover:bg-anchor-blue-500/90'
                  : 'border border-anchor-blue-500/50 text-anchor-blue-500 hover:bg-anchor-blue-500/10'}`}
              >
                Book a setup call
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-anchor-slate mt-8">
          One-time setup: {SETUP_FEE} (content loading, branding and installation).
          {FOUNDING_OFFER.enabled && <><br /><span className="text-anchor-blue-500/90">{FOUNDING_OFFER.text}</span></>}
        </p>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <button
            onClick={() => setShowDev(v => !v)}
            aria-expanded={showDev}
            className="text-sm text-anchor-slate hover:text-anchor-blue-500 underline underline-offset-4"
          >
            Developer or agency? Buy the source code and host it yourself {showDev ? '▴' : '▾'}
          </button>

          {showDev && (
            <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
              {LICENSES.map(license => (
                <div key={license.id} className="rounded-lg p-6 bg-anchor-blue-800/20 border border-anchor-blue-500/20">
                  <h3 className="text-xl font-bold text-white">{license.name}</h3>
                  <div className="text-2xl font-bold text-anchor-blue-400 my-3">
                    {license.price} <span className="text-sm text-anchor-slate font-normal">one-time</span>
                  </div>
                  <ul className="space-y-1 text-anchor-slate text-sm mb-5">
                    {license.features.map(f => (
                      <li key={f} className="flex items-start"><span className="text-anchor-blue-500 mr-2">✓</span>{f}</li>
                    ))}
                  </ul>
                  {checkout === license.id ? (
                    <StripeBuyButton buyButtonId={license.buyButtonId} publishableKey={license.publishableKey} />
                  ) : (
                    <button
                      onClick={() => setCheckout(license.id)}
                      className="w-full py-2.5 rounded-md border border-anchor-blue-500/50 text-anchor-blue-500 font-bold hover:bg-anchor-blue-500/10"
                    >
                      Buy {license.name.toLowerCase()}
                    </button>
                  )}
                </div>
              ))}
              <p className="md:col-span-2 text-xs text-anchor-slate/70">
                You host and run the code on your own accounts (Netlify, Supabase, OpenAI). <a href="/knowledge" className="underline">Developer docs</a> · <a href="/terms" className="underline">License terms</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
