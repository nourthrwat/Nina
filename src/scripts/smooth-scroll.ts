// Lenis smooth scrolling. Skipped entirely for visitors who prefer reduced
// motion, so they keep native scrolling. Other scripts reach the instance
// through `getLenis()` (e.g. the header pauses it while the menu is open).
import Lenis from 'lenis';

let lenis: Lenis | null = null;

export function getLenis(): Lenis | null {
  return lenis;
}

export function initSmoothScroll(): void {
  if (lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  lenis = new Lenis({
    autoRaf: true,
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    stopInertiaOnNavigate: true,
  });

  // Same-page hash links (e.g. "/#impressie" while on the homepage) glide
  // instead of jumping. force: true lets this run while the menu has Lenis stopped.
  document.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href*="#"]');
    if (!link || link.target || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;

    const url = new URL(link.href, location.href);
    if (url.pathname !== location.pathname || !url.hash) return;

    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) return;

    e.preventDefault();
    history.pushState(null, '', url.hash);
    lenis?.scrollTo(target, { offset: -24, force: true });
  });
}
