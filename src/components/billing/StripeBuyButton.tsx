import React, { useEffect } from 'react';

interface StripeBuyButtonProps {
  buyButtonId: string;
  publishableKey: string;
}

export const StripeBuyButton: React.FC<StripeBuyButtonProps> = ({
  buyButtonId,
  publishableKey,
}) => {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const existingScript = document.querySelector(
      'script[src="https://js.stripe.com/v3/buy-button.js"]',
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/buy-button.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <stripe-buy-button
      buy-button-id={buyButtonId}
      publishable-key={publishableKey}
    />
  );
};
