import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-anchor-slate/5 bg-anchor-blue-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full border-2 border-anchor-slate/30 flex items-center justify-center text-anchor-slate/50 font-bold text-xs">
            A
          </div>
          <span className="text-anchor-slate/50 font-medium">Anchor</span>
        </div>

        <div className="text-anchor-slate/40 text-sm">
          © {new Date().getFullYear()} Anchor Reference Implementation. Not a real startup.
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-anchor-slate/50 hover:text-anchor-blue-500 transition-colors">GitHub</a>
          <a href="#" className="text-anchor-slate/50 hover:text-anchor-blue-500 transition-colors">Documentation</a>
        </div>
      </div>
    </footer>
  );
};
