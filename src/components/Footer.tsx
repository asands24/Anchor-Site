const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 shadow-glow">
            <span className="text-sm font-semibold text-cyan-200">A</span>
          </div>
          <div>
            <p className="text-white">Anchor</p>
            <p className="text-xs text-slate-500">Enterprise Support Copilot</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6">
          <a className="transition hover:text-white" href="#features">Features</a>
          <a className="transition hover:text-white" href="#developers">Developers</a>
          <a className="transition hover:text-white" href="#demo">Live Demo</a>
          <a className="transition hover:text-white" href="mailto:pilot@anchor.ai">Request a pilot</a>
        </div>
        <p className="text-xs text-slate-500">© 2024 Anchor Labs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
