import React, { useEffect, useState } from 'react';
import { useKonami } from '../lib/useKonami';

interface OceanShellProps {
  children: React.ReactNode;
}

export const OceanShell: React.FC<OceanShellProps> = ({ children }) => {
  const isDeepDive = useKonami();
  const [bubbles, setBubbles] = useState<number[]>([]);

  useEffect(() => {
    // Generate random bubbles
    const bubbleCount = 20;
    const newBubbles = Array.from({ length: bubbleCount }, (_, i) => i);
    setBubbles(newBubbles);
  }, []);

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-1000 ${isDeepDive ? 'brightness-125' : ''}`}>
      {/* Background Gradients */}
      <div className="fixed inset-0 bg-anchor-blue-900 -z-20" />
      <div className="fixed inset-0 bg-gradient-to-b from-anchor-blue-900 via-anchor-blue-800 to-anchor-blue-900 opacity-80 -z-10" />

      {/* Radial Glow */}
      <div className="fixed top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(100,255,218,0.03),transparent_50%)] -z-10 pointer-events-none" />

      {/* Bubbles */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {bubbles.map((i) => (
          <div
            key={i}
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 15}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Deep Dive Indicator */}
      {isDeepDive && (
        <div className="fixed bottom-4 right-4 text-anchor-blue-500 text-xs opacity-50 font-mono animate-pulse">
          DEEP DIVE MODE ACTIVE
        </div>
      )}
    </div>
  );
};
