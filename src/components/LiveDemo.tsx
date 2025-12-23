import { useEffect, useRef, useState } from 'react';
import loadScript from '../lib/loadScript';

declare global {
  interface Window {
    SupportCopilot?: {
      init: (config: { mount: HTMLElement; tenantSlug: string; apiBaseUrl: string }) => void;
      open?: () => void;
      setInput?: (input: string) => void;
    };
  }
}

const suggestedQuestions = [
  'How does tenant isolation work?',
  'Show me recent retrieval logs.',
  'How do I embed the widget?',
  'What does the ingestion CLI support?'
];

const LiveDemo = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const widgetSrc = import.meta.env.VITE_WIDGET_SRC as string | undefined;
  const apiBaseUrl = import.meta.env.VITE_API_BASE as string | undefined;
  const tenantSlug = (import.meta.env.VITE_DEMO_TENANT as string | undefined) ?? 'demo';

  useEffect(() => {
    if (!widgetSrc || !apiBaseUrl) {
      setStatus('error');
      setMessage('Add VITE_WIDGET_SRC and VITE_API_BASE to your .env file to load the demo widget.');
      return;
    }

    if (!mountRef.current) {
      return;
    }

    setStatus('loading');
    loadScript(widgetSrc)
      .then(() => {
        if (!window.SupportCopilot?.init) {
          throw new Error('SupportCopilot.init is not available.');
        }

        window.SupportCopilot.init({
          mount: mountRef.current!,
          tenantSlug,
          apiBaseUrl
        });
        setStatus('ready');
      })
      .catch((error) => {
        setStatus('error');
        setMessage(
          error instanceof Error
            ? error.message
            : 'We could not load the widget. Verify the script URL and try again.'
        );
      });
  }, [widgetSrc, apiBaseUrl, tenantSlug]);

  const handleSuggestion = (question: string) => {
    if (!window.SupportCopilot) {
      return;
    }
    window.SupportCopilot.open?.();
    window.SupportCopilot.setInput?.(question);
  };

  return (
    <section id="demo" className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Live Demo</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Try Anchor live.</h2>
          <p className="text-slate-300">
            Ask the copilot about your product docs, security posture, or onboarding flow. Anchor streams answers and
            keeps the conversation stored locally so your customers never lose context.
          </p>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-200">Suggested questions</p>
            <div className="flex flex-wrap gap-3">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-200"
                  onClick={() => handleSuggestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-400">
            Demo tenant: <span className="text-slate-200">{tenantSlug}</span>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-deep-800/70 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Support Widget</p>
              <p className="text-lg font-semibold text-white">Anchor Live</p>
            </div>
            <span
              className={`rounded-full border px-3 py-1 text-xs ${
                status === 'ready'
                  ? 'border-cyan-400/40 bg-cyan-500/10 text-cyan-200'
                  : status === 'loading'
                    ? 'border-yellow-400/40 bg-yellow-500/10 text-yellow-200'
                    : 'border-white/10 bg-white/5 text-slate-300'
              }`}
            >
              {status === 'ready' ? 'Connected' : status === 'loading' ? 'Loading' : 'Offline'}
            </span>
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-deep-900/60 p-4">
            {status === 'error' ? (
              <div className="space-y-3 text-sm text-slate-300">
                <p>We could not load the widget.</p>
                <p className="text-xs text-slate-400">{message}</p>
                <p className="text-xs text-slate-400">
                  Verify that your widget script allows embedding and that the API base URL is reachable.
                </p>
              </div>
            ) : (
              <div
                ref={mountRef}
                className="min-h-[320px] rounded-xl border border-dashed border-white/10 bg-gradient-to-br from-white/5 to-transparent"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
