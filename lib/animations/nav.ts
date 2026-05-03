import { gsap, ScrollTrigger } from "./gsap";

/**
 * Two behaviours:
 * 1. Nav gains shadow and stronger bg after scrolling 80px.
 * 2. Nav hides on scroll-down, reappears on scroll-up.
 */
export function initNavScroll(): void {
  // Background opacity transition
  ScrollTrigger.create({
    start: "top -80",
    onEnter: () =>
      gsap.to("nav", {
        backgroundColor: "rgba(250, 248, 243, 0.97)",
        boxShadow: "0 2px 40px rgba(28, 26, 22, 0.08)",
        duration: 0.4,
      }),
    onLeaveBack: () =>
      gsap.to("nav", {
        backgroundColor: "rgba(250, 248, 243, 0.93)",
        boxShadow: "none",
        duration: 0.4,
      }),
  });

  // Hide on scroll-down, reveal on scroll-up
  let lastY = 0;
  ScrollTrigger.create({
    onUpdate: (self) => {
      const currentY = self.scroll();
      if (currentY > lastY && currentY > 150) {
        gsap.to("nav", { yPercent: -110, duration: 0.4, ease: "power2.in" });
      } else {
        gsap.to("nav", { yPercent: 0, duration: 0.4, ease: "power2.out" });
      }
      lastY = currentY;
    },
  });
}
