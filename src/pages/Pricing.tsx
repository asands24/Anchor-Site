import React, { useEffect } from 'react';
import { OceanShell } from '../components/OceanShell';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { StripeBuyButton } from '../components/billing/StripeBuyButton';

export const Pricing: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <OceanShell>
      <SEO
        title="Anchor Pricing"
        description="Anchor pricing for enterprise AI support copilots. Purchase a commercial license, request setup assistance, or add ongoing support."
        url="https://anchor-site.netlify.app/pricing"
      />
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pricing</h1>
            <p className="text-lg text-anchor-slate">
              Choose the Anchor license that fits your rollout, with optional support once you are live.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-anchor-blue-800/20 border border-anchor-blue-500/20 rounded-lg p-6 text-left hover:border-anchor-blue-500/40 transition-all">
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <p className="text-anchor-blue-300 text-sm mb-4">Commercial license · You own the code</p>
              <div className="text-3xl font-bold text-anchor-blue-400 mb-4">
                $3,000
                <span className="text-sm text-anchor-slate font-normal block">one-time</span>
              </div>
              <ul className="space-y-2 text-anchor-slate text-sm mb-6">
                <li className="flex items-start">
                  <span className="text-anchor-blue-500 mr-2">✓</span>
                  Full Anchor source code
                </li>
                <li className="flex items-start">
                  <span className="text-anchor-blue-500 mr-2">✓</span>
                  Multi-tenant RAG backend
                </li>
                <li className="flex items-start">
                  <span className="text-anchor-blue-500 mr-2">✓</span>
                  Embeddable widget
                </li>
                <li className="flex items-start">
                  <span className="text-anchor-blue-500 mr-2">✓</span>
                  Ingestion CLI
                </li>
                <li className="flex items-start">
                  <span className="text-anchor-blue-500 mr-2">✓</span>
                  Admin + logs
                </li>
              </ul>
              <div className="text-xs uppercase tracking-wider text-anchor-slate/70 font-semibold mb-4">
                Secure Stripe checkout · One-time payment
              </div>
              <div className="flex justify-center mt-6">
                <StripeBuyButton
                  buyButtonId="buy_btn_1SiF8ILhXfCYKUjG05KM0PGv"
                  publishableKey="pk_live_51SEMaSLhXfCYKUjGviRI3uGsT77f9hId1YosRqLFn6Fd3FP9oXWpw1EtJQWvreozA5D9GwvIsinhZJwLEVWO1F1J00gUW1whL2"
                />
              </div>
            </div>

            <div className="bg-anchor-blue-700/30 border-2 border-anchor-blue-500 rounded-lg p-6 text-left relative shadow-[0_0_30px_rgba(100,255,218,0.2)]">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-anchor-blue-500 text-anchor-blue-900 text-xs font-bold px-3 py-1 rounded-full">
                PRO
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <p className="text-anchor-blue-300 text-sm mb-4">License + Setup</p>
              <div className="text-3xl font-bold text-anchor-blue-400 mb-4">
                $6,000
                <span className="text-sm text-anchor-slate font-normal block">one-time</span>
              </div>
              <ul className="space-y-2 text-anchor-slate text-sm mb-6">
                <li className="flex items-start">
                  <span className="text-anchor-blue-500 mr-2">✓</span>
                  Everything in Starter
                </li>
                <li className="flex items-start">
                  <span className="text-anchor-blue-500 mr-2">✓</span>
                  Guided setup session
                </li>
                <li className="flex items-start">
                  <span className="text-anchor-blue-500 mr-2">✓</span>
                  Deployment checklist
                </li>
              </ul>
              <a
                href="mailto:support@anchor.ai?subject=Anchor%20Pro%20Invoice"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-md border border-anchor-blue-500 text-anchor-blue-200 hover:bg-anchor-blue-500/10 transition-colors text-sm font-semibold"
              >
                Contact sales
              </a>
              {/* To add Pro checkout later, render <StripeBuyButton buyButtonId="" publishableKey="" /> here. */}
            </div>

            <div className="bg-anchor-blue-800/20 border border-anchor-blue-500/20 rounded-lg p-6 text-left hover:border-anchor-blue-500/40 transition-all">
              <h3 className="text-2xl font-bold text-white mb-2">Optional Support</h3>
              <p className="text-anchor-blue-300 text-sm mb-4">Available after purchase</p>
              <div className="text-3xl font-bold text-anchor-blue-400 mb-4">
                $350–$750
                <span className="text-sm text-anchor-slate font-normal block">per month</span>
              </div>
              <ul className="space-y-2 text-anchor-slate text-sm mb-6">
                <li className="flex items-start">
                  <span className="text-anchor-blue-500 mr-2">✓</span>
                  Monthly architecture office hours
                </li>
                <li className="flex items-start">
                  <span className="text-anchor-blue-500 mr-2">✓</span>
                  Priority email support
                </li>
                <li className="flex items-start">
                  <span className="text-anchor-blue-500 mr-2">✓</span>
                  Upgrade guidance
                </li>
              </ul>
              <p className="text-xs text-anchor-slate italic">
                Available after purchase
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </OceanShell>
  );
};
