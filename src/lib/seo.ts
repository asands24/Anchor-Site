export const SITE_NAME = 'Anchor';
export const SITE_URL = 'https://anchor-widget.com';
export const DEFAULT_OG_IMAGE_PATH = '/og-image.svg';

export const toAbsoluteUrl = (url: string): string => {
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return new URL(url, `${SITE_URL}/`).toString();
};
