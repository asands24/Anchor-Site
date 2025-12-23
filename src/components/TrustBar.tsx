const logos = ['HarborStack', 'Lattice', 'BlueCurrent', 'Keystone', 'HelixWorks'];

const TrustBar = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-12">
      <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-400">
          Trusted by teams scaling human-grade support
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
          {logos.map((logo) => (
            <span key={logo} className="rounded-full border border-white/10 bg-deep-800/70 px-4 py-2">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
