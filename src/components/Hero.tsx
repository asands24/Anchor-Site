const Hero = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-20">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200">
            Anchor Platform
          </p>
          <h1 className="glow-text text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Anchor enterprise support with a secure, multi-tenant copilot.
          </h1>
          <p className="text-lg text-slate-300">
            Anchor combines tenant-isolated RAG, streaming answers, and a polished widget experience so every customer
            feels like they have their own dedicated AI team.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-glow transition hover:bg-cyan-400"
              href="#demo"
            >
              Try the live demo
            </a>
            <a
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/60 hover:text-cyan-200"
              href="mailto:pilot@anchor.ai"
            >
              Request a pilot
            </a>
          </div>
          <div className="grid gap-4 pt-6 sm:grid-cols-3">
            {[
              { label: 'Tenant-safe RAG', value: '99.99%' },
              { label: 'Median response', value: '420ms' },
              { label: 'Audit-ready logs', value: '24/7' }
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                <p className="text-2xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 top-4 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-10 right-10 h-52 w-52 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="glow-card relative space-y-6 rounded-3xl border border-white/10 bg-deep-800/70 p-8 shadow-glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Anchor Control Room</p>
                <p className="text-xl font-semibold text-white">Tenant-aware Copilot</p>
              </div>
              <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">
                Live
              </span>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Northwind', status: 'RAG synced' },
                { label: 'Oceanic', status: 'Streaming' },
                { label: 'Brightside', status: 'Widget active' }
              ].map((tenant) => (
                <div key={tenant.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-white">{tenant.label}</p>
                    <p className="text-xs text-slate-400">{tenant.status}</p>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-glow" />
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100">
              “Anchor feels like a staffed escalation desk for every customer.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
