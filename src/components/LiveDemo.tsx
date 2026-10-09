import React, { useEffect, useState } from 'react';
import { loadScript } from '../lib/loadScript';
import { normalizeApiUrl } from '../lib/normalizeApiUrl';

declare global {
  interface Window {
    SupportCopilot?: {
      init: (config: {
        tenantSlug: string;
        apiUrl: string;
        tenantName?: string;
        welcomeMessage?: string;
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
  "How does setup work?",
  "Is my data used to train AI models?",
  "Can it match my brand?",
  "What does it cost?"
];

export const LiveDemo: React.FC = () => {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [attempt, setAttempt] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const debugEnabled =
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') &&
    new URLSearchParams(window.location.search).get('debug') === '1';

  useEffect(() => {
    let cancelled = false;
    let initialized = false;
    const initWidget = async () => {
      setStatus('loading');
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

        await loadScript(widgetSrc, 15000);
        if (cancelled) return;

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
          tenantName: 'Anchor',
          welcomeMessage: "I'm Anchor's own assistant, answering from our docs. Ask me anything.",
        });

        initialized = true;
        setStatus('ready');
      } catch (err) {
        if (cancelled) return;
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
    return () => {
      cancelled = true;
      observer.disconnect();
      if (initialized) window.SupportCopilot?.destroy?.();
    };
  }, [attempt]);

  const handleQuestionClick = (question: string) => {
    if (window.SupportCopilot?.setInput) {
      window.SupportCopilot.open?.();
      window.SupportCopilot.setInput(question);
      document.querySelector<HTMLTextAreaElement | HTMLInputElement>('#support-copilot-mount textarea, #support-copilot-mount input')?.focus();
    }
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-anchor-blue-900/0 to-anchor-blue-900/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Try it: this is Anchor answering about itself
        </h2>
        <p className="text-anchor-slate mb-12 max-w-2xl mx-auto">
          It answers from our own website and docs, exactly the way yours would answer from your FAQ, services and policies.
          Ask one of the questions below or type your own.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-stretch lg:h-[600px]">

          {/* Controls Side */}
          <div className="lg:w-1/3 flex flex-col gap-4 text-left">
            <div className="p-6 rounded-lg bg-anchor-blue-800/20 border border-anchor-blue-500/10">
              <h3 className="text-white font-bold mb-4">Questions customers ask us:</h3>
              <div className="space-y-3">
                {DEMO_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    disabled={status !== 'ready'}
                    onClick={() => handleQuestionClick(q)}
                    className="disabled:opacity-50 disabled:cursor-not-allowed w-full text-left p-3 rounded bg-anchor-blue-900/50 hover:bg-anchor-blue-800 transition-colors text-anchor-slate text-sm border border-transparent hover:border-anchor-blue-500/30"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 p-6 rounded-lg bg-anchor-blue-800/20 border border-anchor-blue-500/10 text-sm text-anchor-slate space-y-3">
              <h3 className="text-white font-bold">On your site, it would:</h3>
              <ul className="space-y-2">
                <li className="flex"><span className="text-anchor-blue-500 mr-2">✓</span>Use your colors and business name</li>
                <li className="flex"><span className="text-anchor-blue-500 mr-2">✓</span>Answer only from your content</li>
                <li className="flex"><span className="text-anchor-blue-500 mr-2">✓</span>Point people to your phone or email when it doesn't know</li>
              </ul>
              <p role="status" aria-live="polite" className="sr-only">Demo status: {status}</p>
              {errorMessage && debugEnabled && <p className="text-xs text-red-300">{errorMessage}</p>}
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
          <div className="h-[480px] lg:h-auto lg:w-2/3 relative rounded-xl bg-anchor-blue-900 border border-anchor-blue-500/20 shadow-2xl overflow-hidden flex flex-col">
            <div className="bg-anchor-blue-900/80 p-4 border-b border-anchor-blue-500/10 flex items-center justify-between">
              <span className="text-sm font-medium text-anchor-slate">Live demo</span>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/20" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                <div className="w-2 h-2 rounded-full bg-green-500/20" />
              </div>
            </div>

            <div className="flex-1 relative bg-white/5">
              {status === 'loading' && (
                <div className="absolute inset-0 flex items-center justify-center text-anchor-slate animate-pulse z-10 pointer-events-none">
                  Loading the assistant…
                </div>
              )}
              {status === 'error' && (
                <div className="absolute inset-0 flex items-center justify-center text-red-400 text-center px-6 z-10">
                  <div role="alert">
                    <p>The demo didn't load. That's on us, not you.</p>
                    <button onClick={() => setAttempt(value => value + 1)} className="mt-4 px-4 py-2 rounded border border-anchor-blue-500 text-anchor-blue-500 hover:bg-anchor-blue-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-anchor-blue-500">Retry demo</button>
                  </div>
                </div>
              )}

              {/* Widget embed container — absolute inset-0 gives definite pixel dimensions
                  so height:100% inside the widget resolves correctly in all browsers */}
              <div id="support-copilot-mount" className="absolute inset-0" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
