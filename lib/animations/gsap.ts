import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

// SplitText is free in GSAP 3.13+
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText);

  CustomEase.create("luxury", "0.22, 1, 0.36, 1");   // Slow start, fast mid, soft landing
  CustomEase.create("reveal", "0.16, 1, 0.3, 1");     // Ultra-smooth entrance
  CustomEase.create("sharp",  "0.43, 0.195, 0.02, 1"); // Snappy, confident
}

export { gsap, ScrollTrigger, SplitText, CustomEase };
