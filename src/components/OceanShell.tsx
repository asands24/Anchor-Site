import { PropsWithChildren } from 'react';
import useKonami from '../lib/useKonami';

const bubbles = [
  { size: 120, top: '20%', left: '8%', delay: '0s' },
  { size: 80, top: '42%', left: '82%', delay: '1s' },
  { size: 60, top: '68%', left: '20%', delay: '2s' },
  { size: 140, top: '78%', left: '70%', delay: '3s' }
];

const OceanShell = ({ children }: PropsWithChildren) => {
  const deepDive = useKonami();

  return (
    <div className={`ocean-shell ${deepDive ? 'deep-dive' : ''}`}>
      {bubbles.map((bubble) => (
        <span
          key={`${bubble.size}-${bubble.left}`}
          className="bubble"
          style={{
            width: bubble.size,
            height: bubble.size,
            top: bubble.top,
            left: bubble.left,
            animationDelay: bubble.delay
          }}
        />
      ))}
      <div className="ocean-content">
        {deepDive && (
          <div className="fixed bottom-6 right-6 z-50 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200 shadow-glow">
            Deep Dive Mode
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default OceanShell;
