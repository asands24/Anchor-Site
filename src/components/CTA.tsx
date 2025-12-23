const CTA = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10">
      <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10 p-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Ready to anchor your support?</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Bring Anchor to your customers in a single sprint.
        </h2>
        <p className="mt-4 text-slate-300">
          Pilot with one tenant, then scale across your customer base with confidence.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
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
      </div>
    </section>
  );
};

export default CTA;
