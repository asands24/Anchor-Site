import React, { useEffect, useState, useRef } from 'react';
import { loadScript } from '../../lib/loadScript';

interface StripeBuyButtonProps {
  buyButtonId: string;
  publishableKey: string;
}

export const StripeBuyButton: React.FC<StripeBuyButtonProps> = ({
  buyButtonId,
  publishableKey,
}) => {
  const [isReady, setIsReady] = useState(false);
  const checkAttempts = useRef(0);
  const maxCheckAttempts = 30; // 3 seconds at 100ms intervals

  useEffect(() => {
    // Load Stripe buy-button script
    loadScript('https://js.stripe.com/v3/buy-button.js');

    // Log when component mounts
    console.log('[StripeBuyButton] Component mounted, checking for custom element registration');

    // Check if custom element is already registered
    const checkCustomElementRegistered = () => {
      const isRegistered = typeof window !== 'undefined' &&
        window.customElements &&
        window.customElements.get('stripe-buy-button') !== undefined;

      if (isRegistered) {
        console.log('[StripeBuyButton] ✓ Custom element "stripe-buy-button" is registered');
        setIsReady(true);
        return true;
      }
      return false;
    };

    // If already registered, set ready immediately
    if (checkCustomElementRegistered()) {
      return;
    }

    // Otherwise, poll until registered or timeout
    console.log('[StripeBuyButton] Custom element not yet registered, polling...');
    const pollInterval = setInterval(() => {
      checkAttempts.current += 1;

      if (checkCustomElementRegistered()) {
        clearInterval(pollInterval);
      } else if (checkAttempts.current >= maxCheckAttempts) {
        console.warn(
          '[StripeBuyButton] ⚠ Timeout: stripe-buy-button custom element not registered after 3 seconds. ' +
          'Ensure https://js.stripe.com/v3/buy-button.js is loaded and not blocked by CSP or ad blockers.'
        );
        clearInterval(pollInterval);
        // Set ready anyway so user sees something rather than infinite loading
        setIsReady(true);
      }
    }, 100);

    return () => {
      clearInterval(pollInterval);
    };
  }, []);

  // Show loading state while waiting for custom element to register
  if (!isReady) {
    return (
      <div className="w-full py-3 px-4 rounded-md bg-anchor-blue-700/50 text-anchor-slate text-center text-sm">
        Loading checkout...
      </div>
    );
  }

  return (
    <stripe-buy-button
      buy-button-id={buyButtonId}
      publishable-key={publishableKey}
    />
  );
};
