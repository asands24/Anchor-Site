const features = [
  {
    title: 'Multi-tenant RAG copilot',
    description: 'Tenant-isolated vector stores with scoped retrieval so every response stays in-bounds.'
  },
  {
    title: 'Embeddable chat widget',
    description: 'Drop-in widget.js with SupportCopilot.init for a branded, fast support surface.'
  },
  {
    title: 'Admin logs viewer',
    description: 'Monitor every LLM and retrieval event in /logs with redaction-ready metadata.'
  },
  {
    title: 'Ingestion CLI',
    description: 'ingest-cli.ts pulls docs, tickets, and changelogs into durable RAG indexes.'
  },
  {
    title: 'Streaming responses',
    description: 'Keep customers engaged with partial answers and progress indicators.'
  },
  {
    title: 'Conversation persistence',
    description: 'LocalStorage-backed threads in the widget keep context between sessions.'
  }
];

const Features = () => {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Core Features</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Everything you need to launch a secure, AI-first support desk.
        </h2>
        <p className="mt-4 text-slate-300">
          Anchor blends enterprise guardrails with a delightful customer experience in one streamlined platform.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <article key={feature.title} className="glow-card rounded-3xl border border-white/10 bg-deep-800/60 p-6">
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
