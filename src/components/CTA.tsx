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

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">

          {/* Starter Tier */}
          <div className="bg-anchor-blue-800/20 border border-anchor-blue-500/20 rounded-lg p-6 text-left hover:border-anchor-blue-500/40 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
            <p className="text-anchor-blue-300 text-sm mb-4">License Only</p>
            <div className="text-3xl font-bold text-anchor-blue-400 mb-4">
              $2k–$5k
              <span className="text-sm text-anchor-slate font-normal block">one-time</span>
            </div>
            <ul className="space-y-2 text-anchor-slate text-sm mb-6">
              <li className="flex items-start">
                <span className="text-anchor-blue-500 mr-2">✓</span>
                Complete source code
              </li>
              <li className="flex items-start">
                <span className="text-anchor-blue-500 mr-2">✓</span>
                Commercial license
              </li>
              <li className="flex items-start">
                <span className="text-anchor-blue-500 mr-2">✓</span>
                Multi-tenant architecture
              </li>
              <li className="flex items-start">
                <span className="text-anchor-blue-500 mr-2">✓</span>
                30-day email support
              </li>
            </ul>
            <p className="text-xs text-anchor-slate italic">
              Ideal for teams who want to self-deploy
            </p>
          </div>

          {/* Pro Tier */}
          <div className="bg-anchor-blue-700/30 border-2 border-anchor-blue-500 rounded-lg p-6 text-left relative shadow-[0_0_30px_rgba(100,255,218,0.2)]">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-anchor-blue-500 text-anchor-blue-900 text-xs font-bold px-3 py-1 rounded-full">
              POPULAR
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
            <p className="text-anchor-blue-300 text-sm mb-4">License + Setup</p>
            <div className="text-3xl font-bold text-anchor-blue-400 mb-4">
              $3k–$8k
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
                Infrastructure review
              </li>
              <li className="flex items-start">
                <span className="text-anchor-blue-500 mr-2">✓</span>
                Custom branding
              </li>
            </ul>
            <p className="text-xs text-anchor-slate italic">
              Get running in production faster
            </p>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-anchor-blue-800/20 border border-anchor-blue-500/20 rounded-lg p-6 text-left hover:border-anchor-blue-500/40 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-anchor-blue-300 text-sm mb-4">Custom</p>
            <div className="text-3xl font-bold text-anchor-blue-400 mb-4">
              Contact
              <span className="text-sm text-anchor-slate font-normal block">for pricing</span>
            </div>
            <ul className="space-y-2 text-anchor-slate text-sm mb-6">
              <li className="flex items-start">
                <span className="text-anchor-blue-500 mr-2">✓</span>
                Everything in Pro
              </li>
              <li className="flex items-start">
                <span className="text-anchor-blue-500 mr-2">✓</span>
                Custom features (SSO, RBAC)
              </li>
              <li className="flex items-start">
                <span className="text-anchor-blue-500 mr-2">✓</span>
                SLA & uptime guarantees
              </li>
              <li className="flex items-start">
                <span className="text-anchor-blue-500 mr-2">✓</span>
                Purchase order support
              </li>
            </ul>
            <p className="text-xs text-anchor-slate italic">
              For complex compliance needs
            </p>
          </div>

        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:support@anchor.ai?subject=Anchor%20License%20Inquiry"
            className="px-8 py-4 rounded-md bg-anchor-blue-500 text-anchor-blue-900 font-bold hover:bg-anchor-blue-500/90 transition-all text-lg shadow-[0_0_20px_rgba(100,255,218,0.3)]"
          >
            Get a Quote
          </a>
          <a
            href="https://github.com/asands24/Anchor"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-md border-2 border-anchor-blue-500/50 text-anchor-blue-400 font-bold hover:border-anchor-blue-500 hover:bg-anchor-blue-500/10 transition-all text-lg"
          >
            View on GitHub
          </a>
        </div>

        <p className="text-sm text-anchor-slate mt-8">
          Pay by Stripe invoice or checkout • Net 14/30 terms • PO available for Enterprise
        </p>
      </div>
    </section>
  );
};
