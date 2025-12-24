const DevSection = () => {
  return (
    <section id="developers" className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Developer Ready</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ship Anchor in hours, not weeks.</h2>
          <p className="text-slate-300">
            Bring your own tenants, wire in existing knowledge sources, and embed Anchor with a tiny snippet. The API is
            composable, versioned, and designed for modern support stacks.
          </p>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400 shadow-glow" />
              Webhooks for ingestion events and escalation routing.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400 shadow-glow" />
              Tenant-specific model tuning and prompt control.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400 shadow-glow" />
              Observability hooks to stream logs to your SIEM.
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-deep-800/60 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Embed snippet</p>
          <pre className="code-block mt-4 overflow-x-auto rounded-2xl p-5 text-xs text-slate-200">
            <code>{`<script src="https://cdn.anchor.ai/widget.js"></script>
<script>
  window.SupportCopilot.init({
    mount: document.getElementById('anchor-support'),
    tenantSlug: 'northwind',
    apiUrl: 'https://api.anchor.ai'
  });
</script>`}</code>
          </pre>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
            Store the widget bundle behind your CDN, then pass tenant-aware configuration at runtime.
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevSection;
