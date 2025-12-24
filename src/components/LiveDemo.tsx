import React, { useEffect, useState } from 'react';
import { loadScript } from '../lib/loadScript';

declare global {
  interface Window {
    SupportCopilot?: {
      init: (config: {
        mount: string | HTMLElement;
        tenantSlug: string;
        apiUrl: string;
      }) => void;
      toggle?: () => void;
      open?: () => void;
      setInput?: (input: string) => void;
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
  const [status, setStatus] = useState<'loading' | 'ready' | 'error' | 'warning'>('loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [diagnosticMessage, setDiagnosticMessage] = useState<string | null>(null);
  const [widgetMounted, setWidgetMounted] = useState(false);
  const debugEnabled =
    import.meta.env.DEV || new URLSearchParams(window.location.search).has('debug');

  useEffect(() => {
    const initWidget = async () => {
      const widgetSrc = import.meta.env.VITE_WIDGET_SRC;
      const apiUrl = import.meta.env.VITE_API_BASE;
      const tenantSlug = import.meta.env.VITE_DEMO_TENANT || 'demo';

      setErrorMessage(null);
      setDiagnosticMessage(null);
      setWidgetMounted(false);

      try {
        if (!widgetSrc) {
          throw new Error('VITE_WIDGET_SRC is not set');
        }

        if (!apiUrl) {
          throw new Error('VITE_API_BASE is not set');
        }

        console.log('[Widget] Initializing with config:', { widgetSrc, apiUrl, tenantSlug });

        // Get the actual DOM element instead of using a selector string
        const mountElement = document.getElementById('support-copilot-mount');

        if (!mountElement) {
          throw new Error('Widget mount element not found in DOM');
        }

        console.log('[Widget] Mount element found:', mountElement);

        await loadScript(widgetSrc);
        console.log('[Widget] Script loaded successfully');

        if (!window.SupportCopilot) {
          throw new Error('SupportCopilot not found on window');
        }

        console.log('[Widget] SupportCopilot object found on window');

        try {
          // Pass the actual DOM element to init
          console.log('[Widget] Calling SupportCopilot.init with:', { mount: mountElement, tenantSlug, apiUrl });
          window.SupportCopilot.init({
            mount: mountElement,
            tenantSlug,
            apiUrl,
          });
          console.log('[Widget] SupportCopilot.init called successfully');
        } catch (error) {
          console.error('[Widget] SupportCopilot.init error:', error);
          throw new Error(
            `SupportCopilot.init failed: ${error instanceof Error ? error.message : 'Unknown error'}`
          );
        }

        setStatus('ready');

        setTimeout(() => {
          const isEmpty = !mountElement.hasChildNodes();
          console.log('[Widget] Checking mount element after 400ms:', {
            isEmpty,
            childNodes: mountElement.childNodes.length,
            innerHTML: mountElement.innerHTML
          });
          if (isEmpty) {
            setStatus('warning');
            setDiagnosticMessage(
              'Widget mounted but UI did not render. Check console/network logs, verify API endpoints, and confirm CORS settings.'
            );
          } else {
            setWidgetMounted(true);
            console.log('[Widget] Successfully mounted and rendered');
          }
        }, 400);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        console.error('[Widget] Failed to load widget:', err);
        setErrorMessage(message);
        setStatus('error');
      }
    };

    // Small timeout to allow hydration
    const timer = setTimeout(initWidget, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleQuestionClick = (question: string) => {
    if (window.SupportCopilot?.setInput) {
      window.SupportCopilot.open?.(); // Ensure it's open
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
          <span className="text-xs uppercase tracking-widest text-anchor-blue-500/70 border border-anchor-blue-500/30 px-2 py-1 rounded mt-2 inline-block">Public Tenant • Rate Limited • Logs Reset Daily</span>
          <br />
          <span className="text-xs text-red-300/80 mt-2 block"> Please do not enter sensitive or personal data.</span>
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
                className={`w-3 h-3 rounded-full mb-2 ${status === 'ready' ? 'bg-green-500 animate-pulse' : status === 'warning' ? 'bg-yellow-500' : status === 'error' ? 'bg-red-500' : 'bg-yellow-500'}`}
              />
              <p className="text-sm font-mono text-anchor-slate uppercase">
                System Status: {status}
              </p>
              {errorMessage && (
                <p className="text-xs text-red-300 mt-3">{errorMessage}</p>
              )}
              {diagnosticMessage && (
                <p className="text-xs text-yellow-200/80 mt-3">
                  {diagnosticMessage}
                </p>
              )}
            </div>

            {debugEnabled && (
              <div className="p-4 rounded-lg bg-anchor-blue-800/10 border border-anchor-blue-500/10 text-left text-xs text-anchor-slate space-y-2">
                <div className="text-anchor-blue-200 uppercase tracking-widest text-[10px]">
                  Debug panel
                </div>
                <div>widgetSrc: {import.meta.env.VITE_WIDGET_SRC || 'unset'}</div>
                <div>apiUrl: {import.meta.env.VITE_API_BASE || 'unset'}</div>
                <div>tenantSlug: {import.meta.env.VITE_DEMO_TENANT || 'demo'}</div>
                <div>SupportCopilot: {window.SupportCopilot ? 'available' : 'missing'}</div>
                <div>Mounted: {widgetMounted ? 'yes' : 'no'}</div>
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
                <div className="absolute inset-0 flex items-center justify-center text-anchor-slate animate-pulse">
                  Initializing Widget...
                </div>
              )}
              {status === 'error' && (
                <div className="absolute inset-0 flex items-center justify-center text-red-400 text-center px-6">
                  {errorMessage || 'Widget failed to load. Please check console.'}
                </div>
              )}
              {status === 'warning' && (
                <div className="absolute inset-0 flex items-center justify-center text-yellow-200/80 text-center px-6">
                  {diagnosticMessage}
                </div>
              )}

              {/* The actual mount point */}
              <div id="support-copilot-mount" className="w-full h-full" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
