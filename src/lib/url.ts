// Prefix internal links with the deploy base path (e.g. /Nina on GitHub Pages).
// Locally the base is "/", so links stay as written.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (href?: string) =>
  href && href.startsWith('/') && !href.startsWith('//') ? `${base}${href}` : href;
