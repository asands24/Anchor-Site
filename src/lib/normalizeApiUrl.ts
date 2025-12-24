/**
 * Normalizes an API URL by ensuring it has a protocol and no trailing slash.
 *
 * @param url - The URL to normalize (may or may not include protocol)
 * @returns A fully-qualified URL with protocol and no trailing slash
 *
 * @example
 * normalizeApiUrl('anchor-core.netlify.app') // 'https://anchor-core.netlify.app'
 * normalizeApiUrl('https://api.example.com/') // 'https://api.example.com'
 * normalizeApiUrl('http://localhost:3000') // 'http://localhost:3000'
 */
export function normalizeApiUrl(url: string): string {
  if (!url) {
    throw new Error('API URL cannot be empty');
  }

  let normalized = url.trim();

  // Prepend https:// if the URL doesn't start with http:// or https://
  if (!normalized.startsWith('http://') && !normalized.startsWith('https://')) {
    normalized = `https://${normalized}`;
  }

  // Remove trailing slashes
  normalized = normalized.replace(/\/+$/, '');

  return normalized;
}
