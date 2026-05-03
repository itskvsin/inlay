import { gsap, ScrollTrigger, SplitText } from "./gsap";

/** Fade + rise — default for most elements marked `.reveal` */
export function initScrollReveals(): void {
  gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "reveal",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      }
    );
  });

  gsap.utils.toArray<HTMLElement>(".reveal-left").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.0,
        ease: "luxury",
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      }
    );
  });

  gsap.utils.toArray<HTMLElement>(".reveal-right").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.0,
        ease: "luxury",
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      }
    );
  });

  gsap.utils.toArray<HTMLElement>(".reveal-scale").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.92 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: "reveal",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      }
    );
  });

  // Stagger children — for grids
  gsap.utils.toArray<HTMLElement>(".reveal-stagger").forEach((parent) => {
    gsap.fromTo(
      Array.from(parent.children) as HTMLElement[],
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: parent, start: "top 82%", once: true },
      }
    );
  });
}

/** Masked line reveal on every h2[data-split] — the signature luxury animation. */
export function initHeadingReveals(): void {
  document.querySelectorAll<HTMLElement>("h2[data-split]").forEach((el) => {
    const split = new SplitText(el, { type: "lines" });

    split.lines.forEach((line) => {
      const wrapper = document.createElement("div");
      wrapper.style.overflow = "hidden";
      wrapper.style.display = "block";
      line.parentNode!.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    gsap.fromTo(
      split.lines,
      { yPercent: 105 },
      {
        yPercent: 0,
        duration: 1.0,
        stagger: 0.12,
        ease: "luxury",
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      }
    );
  });
}

/** Gold eyebrow line draws in from left on scroll. */
export function initEyebrowLines(): void {
  gsap.utils.toArray<HTMLElement>(".section-eyebrow-line").forEach((line) => {
    gsap.fromTo(
      line,
      { scaleX: 0, transformOrigin: "left" },
      {
        scaleX: 1,
        duration: 0.8,
        ease: "power3.inOut",
        scrollTrigger: { trigger: line, start: "top 88%", once: true },
      }
    );
  });
}

/** Parallax scroll on hero watermark and right panel. */
export function initParallax(): void {
  const bgText = document.querySelector<HTMLElement>(".hero-bg-text");
  if (bgText) {
    gsap.to(bgText, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }

  const heroRightInner = document.querySelector<HTMLElement>(".hero-right-inner");
  if (heroRightInner) {
    gsap.to(heroRightInner, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
    });
  }

  // Section eyebrow lines drift slightly on scroll
  gsap.utils.toArray<HTMLElement>(".section-eyebrow-line").forEach((el) => {
    gsap.to(el, {
      x: 8,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}

export function refreshScrollTrigger(): void {
  ScrollTrigger.refresh();
}
