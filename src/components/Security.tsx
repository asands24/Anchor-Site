import React from 'react';

export const Security: React.FC = () => {
  return (
    <section className="py-24 border-t border-anchor-slate/10 bg-anchor-blue-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Security at the Core. <span className="text-anchor-slate font-normal">Not an Afterthought.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded bg-anchor-blue-800/20 border border-anchor-blue-500/10">
              <h3 className="text-xl font-bold text-white mb-3">Database-Level Data Isolation</h3>
              <p className="text-anchor-slate leading-relaxed">
                Every database query automatically filters by customer ID at the database level.
                Even if your application is compromised, one customer cannot access another customer's data.
                Enforced by PostgreSQL security policies.
              </p>
            </div>

            <div className="p-6 rounded bg-anchor-blue-800/20 border border-anchor-blue-500/10">
              <h3 className="text-xl font-bold text-white mb-3">Layered Security Architecture</h3>
              <p className="text-anchor-slate leading-relaxed">
                API keys and credentials are never exposed in browser code. The chat widget communicates with secure backend
                services that handle all authentication with OpenAI and the database.
              </p>
            </div>

            <div className="p-6 rounded bg-anchor-blue-800/20 border border-anchor-blue-500/10">
              <h3 className="text-xl font-bold text-white mb-3">Separated Access Credentials</h3>
              <p className="text-anchor-slate leading-relaxed">
                Administrative tools use privileged credentials for data management.
                Public-facing widgets use restricted, low-permission access keys that limit potential damage.
              </p>
            </div>

            <div className="p-6 rounded bg-anchor-blue-800/20 border border-anchor-blue-500/10">
              <h3 className="text-xl font-bold text-white mb-3">Complete Activity Tracking</h3>
              <p className="text-anchor-slate leading-relaxed">
                Every interaction is logged with unique tracking identifiers, allowing you to trace any request through the entire system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
