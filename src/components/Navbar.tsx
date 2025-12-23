const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-deep-900/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 shadow-glow">
            <span className="text-lg font-semibold text-cyan-200">A</span>
          </div>
          <div>
            <p className="text-lg font-semibold">Anchor</p>
            <p className="text-xs text-slate-400">Enterprise Support Copilot</p>
          </div>
        </div>
        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-white" href="#features">Features</a>
          <a className="transition hover:text-white" href="#developers">Developers</a>
          <a className="transition hover:text-white" href="#demo">Live Demo</a>
          <a className="transition hover:text-white" href="#security">Security</a>
        </div>
        <a
          className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100 shadow-glow transition hover:bg-cyan-500/20"
          href="mailto:pilot@anchor.ai"
        >
          Request a pilot
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
