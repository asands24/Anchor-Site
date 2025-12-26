import React from 'react';
import { Link } from 'react-router-dom';

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
          © {new Date().getFullYear()} S&S Technologies.
        </div>

        <div className="flex gap-6 text-sm">
          <Link to="/pricing" className="text-anchor-slate/50 hover:text-anchor-blue-500 transition-colors">Pricing</Link>
          <Link to="/privacy" className="text-anchor-slate/50 hover:text-anchor-blue-500 transition-colors">Privacy</Link>
          <Link to="/terms" className="text-anchor-slate/50 hover:text-anchor-blue-500 transition-colors">Terms</Link>
          <Link to="/security" className="text-anchor-slate/50 hover:text-anchor-blue-500 transition-colors">Security</Link>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-4">
        <div className="text-center text-[10px] text-anchor-slate/10 hover:text-anchor-slate/30 transition-all duration-500 cursor-default select-none">
          press ⌘K three times to reveal the depths
        </div>
      </div>
    </footer>
  );
};
