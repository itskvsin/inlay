"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { initLoader } from "@/lib/animations/loader";
import { initHero } from "@/lib/animations/hero";
import { initAllAnimations } from "@/lib/animations/index";

/* Register @gsap/react plugin once */
import { useGSAP as _useGSAP } from "@gsap/react";
gsap.registerPlugin(_useGSAP);

const SESSION_KEY = "inlay-loader-shown";

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [loaderDone, setLoaderDone] = useState(false);
  const shown = useRef(false);

  useEffect(() => {
    // Only show loader on first visit per session
    const alreadyShown =
      typeof sessionStorage !== "undefined" &&
      sessionStorage.getItem(SESSION_KEY) === "1";

    if (alreadyShown) {
      setLoaderDone(true);
      shown.current = true;
    }
  }, []);

  useGSAP(() => {
    if (shown.current) {
      // Return visit — skip loader, run animations immediately
      initHero();
      initAllAnimations();
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setLoaderDone(true);
      initAllAnimations();
      return;
    }

    initLoader(() => {
      if (typeof sessionStorage !== "undefined") {
        sessionStorage.setItem(SESSION_KEY, "1");
      }
      setLoaderDone(true);
      initHero();
      initAllAnimations();
    });
  });

  return (
    <>
      {/* Page Loader */}
      {!loaderDone && (
        <div
          id="loader"
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center gap-6 bg-bg"
        >
          <div
            className="loader-logo font-display font-light text-ink"
            style={{ fontSize: "clamp(36px, 6vw, 72px)", letterSpacing: "0.12em" }}
          >
            In<em>lay</em>
          </div>
          <div
            className="loader-line bg-gold"
            style={{ width: "clamp(80px, 15vw, 160px)", height: "1px" }}
          />
        </div>
      )}

      {/* Custom cursor (desktop only) */}
      <div className="cursor hidden md:block" aria-hidden="true">
        <div className="cursor-label">View</div>
      </div>
      <div className="cursor-dot hidden md:block" aria-hidden="true" />

      {/* Gold page-transition curtain */}
      <div id="page-curtain" aria-hidden="true" />

      {children}
    </>
  );
}
