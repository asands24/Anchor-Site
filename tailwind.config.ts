import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deep: {
          900: '#050816',
          800: '#0a1024',
          700: '#0e1733'
        }
      },
      boxShadow: {
        glow: '0 0 20px rgba(86, 220, 255, 0.25)',
        'glow-strong': '0 0 35px rgba(86, 220, 255, 0.4)'
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at top, rgba(59, 130, 246, 0.2), transparent 60%)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        drift: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-18px) translateX(6px)' },
          '100%': { transform: 'translateY(0) translateX(0)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        drift: 'drift 8s ease-in-out infinite'
      }
    }
  },
  plugins: []
} satisfies Config;
