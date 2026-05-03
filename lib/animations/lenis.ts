import { gsap, ScrollTrigger } from "./gsap";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

/** Initialises Lenis smooth scroll and connects it to GSAP ScrollTrigger. */
export function initLenis(): Lenis {
  lenisInstance = new Lenis({
    duration: 1.4,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    smoothWheel: true,
  });

  lenisInstance.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenisInstance!.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}

export function destroyLenis(): void {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}
