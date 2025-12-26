import React, { useEffect, useState } from 'react';

interface EasterEggProps {
  isActive: boolean;
}

export const EasterEgg: React.FC<EasterEggProps> = ({ isActive }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShow(true);
      // Auto-hide after 8 seconds
      const timer = setTimeout(() => setShow(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
      style={{
        background: 'linear-gradient(to bottom, rgba(0, 20, 40, 0.95) 0%, rgba(0, 40, 80, 0.95) 50%, rgba(0, 10, 30, 0.98) 100%)',
        animation: 'fadeIn 1s ease-in-out'
      }}
    >
      {/* Bubbles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: `${Math.random() * 20 + 5}px`,
            height: `${Math.random() * 20 + 5}px`,
            left: `${Math.random() * 100}%`,
            bottom: '-10%',
            animation: `rise ${Math.random() * 6 + 4}s linear infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Anchor dropping animation */}
      <div
        className="relative"
        style={{ animation: 'anchorDrop 3s ease-out' }}
      >
        <div className="text-9xl" style={{ filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))' }}>
          ⚓
        </div>
      </div>

      {/* Secret message */}
      <div
        className="absolute bottom-1/4 text-center"
        style={{ animation: 'fadeIn 2s ease-in 2s both' }}
      >
        <div className="text-4xl font-bold text-blue-300 mb-4" style={{ textShadow: '0 0 20px rgba(59, 130, 246, 0.8)' }}>
          You've discovered the depths
        </div>
        <div className="text-xl text-blue-400/70">
          Cast your anchor with confidence
        </div>
      </div>

      {/* Fish swimming */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`fish-${i}`}
          className="absolute text-4xl"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: '-10%',
            animation: `swim ${Math.random() * 8 + 6}s linear infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        >
          🐟
        </div>
      ))}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes rise {
          from {
            transform: translateY(0);
            opacity: 0.7;
          }
          to {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }

        @keyframes anchorDrop {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(0) rotate(20deg);
            opacity: 1;
          }
        }

        @keyframes swim {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(110vw);
          }
        }
      `}</style>
    </div>
  );
};
