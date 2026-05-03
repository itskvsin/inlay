import { gsap, ScrollTrigger } from "./gsap";

/**
 * Counts up numbers for any element with `data-count`.
 * Attributes:
 *   data-count="50"          — target number
 *   data-suffix="+"          — appended after the number
 *   data-decimal="true"      — render one decimal place
 */
export function initCounters(): void {
  document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
    const target = parseFloat(el.dataset.count!);
    const isDecimal = el.dataset.decimal === "true";
    const suffix = el.dataset.suffix ?? "";

    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 2.2,
      ease: "power2.out",
      onUpdate() {
        el.textContent =
          (isDecimal ? obj.val.toFixed(1) : Math.ceil(obj.val).toString()) +
          suffix;
      },
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });
  });
}

/** Stat numbers scale slightly when scrolled into view (home hero stats). */
export function initStatHovers(): void {
  document.querySelectorAll<HTMLElement>(".stat-num").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(el, { scale: 1.08, duration: 0.25, ease: "back.out(2)" });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, { scale: 1, duration: 0.25, ease: "power2.out" });
    });
  });
}
