import { gsap } from "./gsap";

/**
 * Plays the page loader animation, then calls onComplete.
 * Triggered once per session (checked by caller via sessionStorage).
 */
export function initLoader(onComplete: () => void): gsap.core.Timeline {
  const tl = gsap.timeline({ onComplete });

  tl.fromTo(
    "#loader .loader-logo",
    { opacity: 0, letterSpacing: "0.5em" },
    { opacity: 1, letterSpacing: "0.12em", duration: 1.2, ease: "luxury" }
  );

  tl.fromTo(
    "#loader .loader-line",
    { scaleX: 0, transformOrigin: "left" },
    { scaleX: 1, duration: 0.8, ease: "power3.inOut" },
    "-=0.4"
  );

  tl.to("#loader", {
    opacity: 0,
    duration: 0.5,
    ease: "power2.in",
    delay: 0.3,
    onComplete: () => {
      const el = document.getElementById("loader");
      if (el) el.style.display = "none";
    },
  });

  return tl;
}
