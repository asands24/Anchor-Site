import React, { useEffect, useState } from 'react';
import { loadScript } from '../lib/loadScript';
import { normalizeApiUrl } from '../lib/normalizeApiUrl';

declare global {
  interface Window {
    SupportCopilot?: {
      init: (config: {
        tenantSlug: string;
        apiUrl: string;
        mount?: string | HTMLElement;
        mode?: 'embed' | 'widget';
        primaryColor?: string;
      }) => void;
      toggle?: () => void;
      open?: () => void;
      setInput?: (input: string) => void;
      destroy?: () => void;
    };
  }
}

const DEMO_QUESTIONS = [
  "How does Anchor handle multi-tenancy?",
  "Can I customize the widget color?",
  "Is my data used to train models?",
  "What is the pricing model?"
];

export const LiveDemo: React.FC = () => {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const debugEnabled =
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') &&
    new URLSearchParams(window.location.search).get('debug') === '1';

  useEffect(() => {
    const initWidget = async () => {
      const widgetSrc = import.meta.env.VITE_WIDGET_SRC;
      const apiUrl = import.meta.env.VITE_API_BASE;
      const tenantSlug = import.meta.env.VITE_DEMO_TENANT || 'demo';

      setErrorMessage(null);

      try {
        if (!widgetSrc) {
          throw new Error('Missing VITE_WIDGET_SRC environment variable');
        }

        if (!apiUrl) {
          throw new Error('Missing VITE_API_BASE environment variable');
        }

        await loadScript(widgetSrc);

        if (!window.SupportCopilot) {
          throw new Error('SupportCopilot not available after script load');
        }

        const mountElement = document.getElementById('support-copilot-mount');
        if (!mountElement) {
          throw new Error('Mount element #support-copilot-mount not found');
        }

        window.SupportCopilot.init({
          tenantSlug,
          apiUrl: normalizeApiUrl(apiUrl),
          mount: mountElement,
          mode: 'embed',
        });

        setStatus('ready');
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error occurred';
        setErrorMessage(message);
        setStatus('error');
      }
    };

    const el = document.getElementById('demo');
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          initWidget();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleQuestionClick = (question: string) => {
    if (window.SupportCopilot?.setInput) {
      window.SupportCopilot.open?.();
      window.SupportCopilot.setInput(question);
    }
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-anchor-blue-900/0 to-anchor-blue-900/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          See it in action
        </h2>
        <p className="text-anchor-slate mb-12 max-w-2xl mx-auto">
          This is a live instance of the SupportCopilot widget connected to a public demo tenant.
          <br />
          <span className="text-xs uppercase tracking-widest text-anchor-blue-500/70 border border-anchor-blue-500/30 px-2 py-1 rounded mt-2 inline-block">
            Public demo tenant • Rate limited • No sensitive data
          </span>
        </p>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-stretch h-[600px]">

          {/* Controls Side */}
          <div className="lg:w-1/3 flex flex-col gap-4 text-left">
            <div className="p-6 rounded-lg bg-anchor-blue-800/20 border border-anchor-blue-500/10">
              <h3 className="text-white font-bold mb-4">Try these questions:</h3>
              <div className="space-y-3">
                {DEMO_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuestionClick(q)}
                    className="w-full text-left p-3 rounded bg-anchor-blue-900/50 hover:bg-anchor-blue-800 transition-colors text-anchor-slate text-sm border border-transparent hover:border-anchor-blue-500/30"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 p-6 rounded-lg bg-anchor-blue-800/20 border border-anchor-blue-500/10 flex flex-col justify-center items-center text-center">
              <div
                className={`w-3 h-3 rounded-full mb-2 ${
                  status === 'ready'
                    ? 'bg-green-500 animate-pulse'
                    : status === 'error'
                    ? 'bg-red-500'
                    : 'bg-yellow-500'
                }`}
              />
              <p className="text-sm font-mono text-anchor-slate uppercase">
                System Status: {status}
              </p>
              {errorMessage && (
                <p className="text-xs text-red-300 mt-3">{errorMessage}</p>
              )}
            </div>

            {debugEnabled && (
              <div className="p-4 rounded-lg bg-anchor-blue-800/10 border border-anchor-blue-500/10 text-left text-xs text-anchor-slate space-y-2">
                <div className="text-anchor-blue-200 uppercase tracking-widest text-[10px]">
                  Debug Panel
                </div>
                <div>widgetSrc: {import.meta.env.VITE_WIDGET_SRC || 'unset'}</div>
                <div>apiUrl: {import.meta.env.VITE_API_BASE || 'unset'}</div>
                <div>tenantSlug: {import.meta.env.VITE_DEMO_TENANT || 'demo'}</div>
                <div>SupportCopilot: {window.SupportCopilot ? 'detected' : 'not detected'}</div>
              </div>
            )}
          </div>

          {/* Widget Mount Point */}
          <div className="lg:w-2/3 relative rounded-xl bg-anchor-blue-900 border border-anchor-blue-500/20 shadow-2xl overflow-hidden flex flex-col">
            <div className="bg-anchor-blue-900/80 p-4 border-b border-anchor-blue-500/10 flex items-center justify-between">
              <span className="text-sm font-medium text-anchor-slate">Live Preview</span>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/20" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                <div className="w-2 h-2 rounded-full bg-green-500/20" />
              </div>
            </div>

            <div className="flex-1 relative bg-white/5">
              {status === 'loading' && (
                <div className="absolute inset-0 flex items-center justify-center text-anchor-slate animate-pulse z-10 pointer-events-none">
                  Initializing Widget...
                </div>
              )}
              {status === 'error' && (
                <div className="absolute inset-0 flex items-center justify-center text-red-400 text-center px-6 z-10">
                  {errorMessage || 'Widget failed to load. Please check console.'}
                </div>
              )}

              {/* Widget embed container */}
              <div id="support-copilot-mount" className="w-full h-full" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
