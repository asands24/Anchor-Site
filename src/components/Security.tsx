const securityItems = [
  'Tenant isolation with separate vector indexes and prompt guards.',
  'Tenant-scoped retrieval to prevent cross-org data leakage.',
  'Audit-friendly logs with configurable redaction policies.',
  'Rate limiting and abuse detection baked into the gateway.',
  'Safe demo tenant with synthetic data and privacy controls.'
];

const Security = () => {
  return (
    <section id="security" className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-deep-800/70 p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Security</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Enterprise-grade guardrails by default.</h2>
            <p className="text-slate-300">
              Anchor is built for high-stakes support flows with compliance-ready telemetry and clear tenant boundaries.
            </p>
          </div>
          <ul className="space-y-4 text-sm text-slate-300">
            {securityItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400 shadow-glow" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Security;
