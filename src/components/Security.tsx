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
              <h3 className="text-xl font-bold text-white mb-3">Row-Level Security (RLS)</h3>
              <p className="text-anchor-slate leading-relaxed">
                Every query is scoped to the tenant ID at the database level.
                Even if the application layer is compromised, one tenant cannot access another's data.
                Enforced by PostgreSQL.
              </p>
            </div>

            <div className="p-6 rounded bg-anchor-blue-800/20 border border-anchor-blue-500/10">
              <h3 className="text-xl font-bold text-white mb-3">Defense in Depth</h3>
              <p className="text-anchor-slate leading-relaxed">
                API keys are never exposed to the client. The widget communicates with a secure backend
                intermediary (Netlify Functions) which handles authentication with 3rd party services (OpenAI, Supabase).
              </p>
            </div>

            <div className="p-6 rounded bg-anchor-blue-800/20 border border-anchor-blue-500/10">
              <h3 className="text-xl font-bold text-white mb-3">Key Separation</h3>
              <p className="text-anchor-slate leading-relaxed">
                Service roles are strictly used for ingestion and administrative tasks.
                Public-facing interactions use scoped, low-privilege anonymous keys.
              </p>
            </div>

            <div className="p-6 rounded bg-anchor-blue-800/20 border border-anchor-blue-500/10">
              <h3 className="text-xl font-bold text-white mb-3">Audit Logs</h3>
              <p className="text-anchor-slate leading-relaxed">
                Every interaction is logged with correlation IDs, allowing for complete traceability across the stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
