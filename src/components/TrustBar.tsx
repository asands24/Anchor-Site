import React from 'react';

export const TrustBar: React.FC = () => {
  return (
    <div className="border-y border-anchor-slate/10 bg-anchor-blue-900/30 backdrop-blur-sm">
      <div className="container mx-auto py-8">
        <p className="text-center text-sm font-semibold text-anchor-slate mb-6 uppercase tracking-widest opacity-70">
          The Enterprise Standard For
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {['Security', 'Isolation', 'Observability', 'Scalability'].map((item) => (
            <div key={item} className="flex items-center gap-2 group">
              <div className="w-2 h-2 rounded-full bg-anchor-blue-500 group-hover:shadow-[0_0_10px_#64ffda]" />
              <span className="text-lg font-bold text-white tracking-wide">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
