import { gsap, SplitText } from "./gsap";

/** Hero entrance — runs after loader completes (or immediately on return visits). */
export function initHero(): gsap.core.Timeline {
  const tl = gsap.timeline({ delay: 0.1 });

  // 1. Eyebrow line draws in from left
  tl.fromTo(
    ".hero-eyebrow .section-eyebrow-line",
    { scaleX: 0, transformOrigin: "left" },
    { scaleX: 1, duration: 0.7, ease: "power3.inOut" }
  );

  // 2. Eyebrow text fades in
  tl.fromTo(
    ".hero-eyebrow span",
    { opacity: 0, x: -12 },
    { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
    "-=0.3"
  );

  // 3. H1 — char-by-char entrance via SplitText
  const heroTitle = document.querySelector<HTMLElement>(".hero h1");
  if (heroTitle) {
    const split = new SplitText(heroTitle, { type: "chars,words" });
    tl.fromTo(
      split.chars,
      { opacity: 0, yPercent: 110, rotateX: -15 },
      {
        opacity: 1,
        yPercent: 0,
        rotateX: 0,
        duration: 0.9,
        stagger: 0.022,
        ease: "power4.out",
      },
      "-=0.2"
    );
  }

  // 4. Subtext — line by line
  const subEl = document.querySelector<HTMLElement>(".hero-sub");
  if (subEl) {
    const subSplit = new SplitText(subEl, { type: "lines" });
    tl.fromTo(
      subSplit.lines,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "luxury" },
      "-=0.5"
    );
  }

  // 5. CTA buttons slide up
  tl.fromTo(
    ".hero-btns > *",
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
    "-=0.3"
  );

  // 6. Stats strip divider expands
  tl.fromTo(
    ".hero-divider-line",
    { scaleX: 0, transformOrigin: "left" },
    { scaleX: 1, duration: 1.2, ease: "expo.inOut" },
    "-=0.8"
  );

  // 7. Right dark panel — diagonal clip-path reveal
  tl.fromTo(
    ".hero-right",
    { clipPath: "inset(0 100% 0 0)" },
    { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power4.inOut" },
    0.2
  );

  // 8. Watermark text looping float (fire-and-forget)
  gsap.to(".hero-bg-text", {
    y: -30,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 2,
  });

  return tl;
}
