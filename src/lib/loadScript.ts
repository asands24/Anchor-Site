// Share the actual load result, including while a script is still downloading.
const pendingScripts = new Map<string, Promise<void>>();

export const loadScript = (src: string, timeoutMs?: number): Promise<void> => {
  const url = new URL(src, document.baseURI).href;
  const pending = pendingScripts.get(url);
  if (pending) return pending;

  const promise = new Promise<void>((resolve, reject) => {
    const existing = Array.from(document.scripts).find(script => script.src === url);
    const script = existing || document.createElement('script');
    let timer: ReturnType<typeof setTimeout> | undefined;
    const cleanup = () => {
      script.removeEventListener('load', onLoad);
      script.removeEventListener('error', onError);
      if (timer) clearTimeout(timer);
    };
    const onLoad = () => {
      cleanup();
      script.dataset.anchorLoaded = 'true';
      resolve();
    };
    const fail = (message: string) => {
      cleanup();
      if (!existing) script.remove();
      reject(new Error(message));
    };
    const onError = () => fail(`Failed to load script: ${src}`);
    if (script.dataset.anchorLoaded === 'true') {
      resolve();
      return;
    }
    script.addEventListener('load', onLoad);
    script.addEventListener('error', onError);
    if (timeoutMs) timer = setTimeout(() => fail(`Timed out loading script: ${src}`), timeoutMs);
    if (!existing) {
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
    }
  });
  pendingScripts.set(url, promise);
  // A failed load must be retryable; successful loads remain shared.
  void promise.catch(() => pendingScripts.delete(url));
  return promise;
};
