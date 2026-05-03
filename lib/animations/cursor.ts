import { gsap } from "./gsap";

/** Custom magnetic cursor — hides default cursor, tracks mouse, enlarges on hovers. */
export function initMagneticCursor(): void {
  const cursor = document.querySelector<HTMLElement>(".cursor");
  const cursorDot = document.querySelector<HTMLElement>(".cursor-dot");
  if (!cursor || !cursorDot) return;

  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.6, ease: "power2.out" });
    gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.15 });
  });

  // Expand on interactive elements
  document.querySelectorAll<HTMLElement>("a, button, .project-card, .service-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(cursor, { scale: 2.5, opacity: 0.6, duration: 0.3, ease: "power2.out" });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
    });
  });

  // "View" label on project cards
  document.querySelectorAll<HTMLElement>(".project-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(".cursor-label", { opacity: 1, scale: 1, duration: 0.3 });
      gsap.to(cursor, { scale: 3.5, duration: 0.4 });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(".cursor-label", { opacity: 0, scale: 0.5, duration: 0.2 });
      gsap.to(cursor, { scale: 1, duration: 0.3 });
    });
  });
}
