// Scroll-triggered reveals. Elements opt in with `data-reveal` (optionally
// "fade" | "scale" | "clip"); children of `data-reveal-stagger` get an
// incremental delay so grids cascade in.

const STAGGER_STEP = 0.12;

export function initReveal(): void {
  const root = document.documentElement;
  (window as Window & { __revealReady?: boolean }).__revealReady = true;

  document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      const el = child as HTMLElement;
      if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', '');
      el.style.setProperty('--reveal-delay', `${(i * STAGGER_STEP).toFixed(2)}s`);
    });
  });

  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || reduceMotion) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
  );

  targets.forEach((el) => observer.observe(el));
  root.classList.add('reveal-ready');
}
