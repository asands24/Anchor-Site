/**
 * Debug utility to track scroll-related calls during development.
 * This helps identify what's causing unwanted page scrolls.
 *
 * Enable by setting ?scrollDebug=1 in the URL
 */

let isEnabled = false;
const originalScrollTo = window.scrollTo;
const originalScrollIntoView = Element.prototype.scrollIntoView;

export function enableScrollDebug() {
  if (isEnabled) return;
  isEnabled = true;

  // Intercept window.scrollTo
  window.scrollTo = function(...args: any[]) {
    console.warn('[ScrollDebug] window.scrollTo called:', args);
    console.trace();
    return originalScrollTo.apply(window, args as any);
  };

  // Intercept Element.scrollIntoView
  Element.prototype.scrollIntoView = function(...args: any[]) {
    console.warn('[ScrollDebug] scrollIntoView called on:', this, 'args:', args);
    console.trace();
    return originalScrollIntoView.apply(this, args as any);
  };

  console.log('[ScrollDebug] Enabled. All scroll operations will be logged with stack traces.');
}

export function disableScrollDebug() {
  if (!isEnabled) return;
  isEnabled = false;

  window.scrollTo = originalScrollTo;
  Element.prototype.scrollIntoView = originalScrollIntoView;

  console.log('[ScrollDebug] Disabled.');
}

// Auto-enable if ?scrollDebug=1 is in URL
if (typeof window !== 'undefined') {
  const params = new URLSearchParams(window.location.search);
  if (params.get('scrollDebug') === '1') {
    enableScrollDebug();
  }
}
