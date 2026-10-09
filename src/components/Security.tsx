import React from 'react';
import { Link } from 'react-router-dom';

export const Security: React.FC = () => {
  return (
    <section className="py-24 border-t border-anchor-slate/10 bg-anchor-blue-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Security at the Core. <span className="text-anchor-slate font-normal">Not an Afterthought.</span>
          </h2>

          <p className="text-anchor-slate text-center mb-8">Inspect the <Link to="/security" className="text-anchor-blue-500 underline">security model and its limits</Link> and the <a href="/security-implementation.md" className="text-anchor-blue-500 underline">implementation reference</a>. No independent certification is asserted here.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded bg-anchor-blue-800/20 border border-anchor-blue-500/10">
              <h3 className="text-xl font-bold text-white mb-3">Database-Level Data Isolation</h3>
              <p className="text-anchor-slate leading-relaxed">
                Tenant-scoped retrieval uses tenant_id filters, with PostgreSQL row-level security for user-scoped access.
                Service-role operations bypass RLS and require explicit authorization checks. Review and test both paths in your deployment.
              </p>
            </div>

            <div className="p-6 rounded bg-anchor-blue-800/20 border border-anchor-blue-500/10">
              <h3 className="text-xl font-bold text-white mb-3">Layered Security Architecture</h3>
              <p className="text-anchor-slate leading-relaxed">
                OpenAI and Supabase service-role secrets belong on the server. Public Supabase client keys are designed for browser use. The chat widget communicates with secure backend
                services that handle all authentication with OpenAI and the database.
              </p>
            </div>

            <div className="p-6 rounded bg-anchor-blue-800/20 border border-anchor-blue-500/10">
              <h3 className="text-xl font-bold text-white mb-3">Separated Access Credentials</h3>
              <p className="text-anchor-slate leading-relaxed">
                Administrative tools use privileged credentials for data management.
                The widget calls a backend that must enforce access rules; keeping a service key on the server does not replace tenant validation.
              </p>
            </div>

            <div className="p-6 rounded bg-anchor-blue-800/20 border border-anchor-blue-500/10">
              <h3 className="text-xl font-bold text-white mb-3">Complete Activity Tracking</h3>
              <p className="text-anchor-slate leading-relaxed">
                The backend includes request identifiers, retrieval logs, and LLM usage logs when database logging is configured. Bundled sample responses do not create backend logs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
