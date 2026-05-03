export { gsap, ScrollTrigger, SplitText, CustomEase } from "./gsap";
export { initLoader } from "./loader";
export { initHero } from "./hero";
export {
  initScrollReveals,
  initHeadingReveals,
  initEyebrowLines,
  initParallax,
  refreshScrollTrigger,
} from "./scroll";
export { initCounters, initStatHovers } from "./counters";
export { initMagneticCursor } from "./cursor";
export { initNavScroll } from "./nav";
export { initLenis, destroyLenis } from "./lenis";

/**
 * Orchestrates the full animation stack.
 * Call once on first page load (after loader exits).
 * Respects prefers-reduced-motion.
 */
export function initAllAnimations(): void {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced) {
    // Show everything immediately — no motion
    document
      .querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right, .reveal-scale")
      .forEach((el) => {
        el.style.opacity = "1";
      });
    return;
  }

  import("./lenis").then(({ initLenis }) => initLenis());
  import("./scroll").then(({ initScrollReveals, initHeadingReveals, initEyebrowLines, initParallax }) => {
    initScrollReveals();
    initHeadingReveals();
    initEyebrowLines();
    initParallax();
  });
  import("./counters").then(({ initCounters, initStatHovers }) => {
    initCounters();
    initStatHovers();
  });
  import("./nav").then(({ initNavScroll }) => initNavScroll());

  // Cursor — desktop only
  if (window.innerWidth > 768) {
    import("./cursor").then(({ initMagneticCursor }) => initMagneticCursor());
  }
}
