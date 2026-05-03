import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { StatStrip } from "@/components/ui/StatStrip";

const stats = [
  { value: "7+", label: "Years Experience", dataCount: 7, suffix: "+" },
  { value: "100+", label: "Projects Done", dataCount: 100, suffix: "+" },
  { value: "100%", label: "Client Satisfaction", dataCount: 100, suffix: "%" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))" }}>
      {/* Left: Content */}
      <div
        className="flex flex-col justify-center"
        style={{ padding: "clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
      >
        <div style={{ maxWidth: "560px" }}>
          <EyebrowLabel className="mb-8 hero-eyebrow">
            Satellite, Ahmedabad · Est. 2018
          </EyebrowLabel>

          {/* H1 — add data-split for GSAP SplitText */}
          <h1
            className="hero font-display text-[clamp(42px,7vw,88px)] font-light leading-[1.0] tracking-[-0.01em] text-ink mb-6"
            data-split
          >
            Spaces that tell your <em>story.</em>
          </h1>

          <p className="hero-sub font-body text-[clamp(14px,1.8vw,16px)] font-light leading-[1.85] text-muted mb-10 max-w-[440px]">
            We design interiors that are deeply personal — warm, considered, and
            built to last. Based in Satellite, Ahmedabad.
          </p>

          {/* CTA row */}
          <div className="hero-btns flex flex-wrap gap-4 mb-12">
            <a
              href="/contact"
              className="font-body text-[13px] font-normal tracking-[0.10em] uppercase bg-ink text-bg px-8 py-[14px] hover:bg-gold hover:scale-[1.03] transition-[background-color,transform] duration-[200ms,150ms]"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+917016422677"
              className="font-body text-[13px] font-normal tracking-[0.10em] uppercase bg-transparent border border-line text-muted px-7 py-[13px] hover:border-ink hover:text-ink transition-[border-color,color] duration-200"
            >
              📞 +91 7016422677
            </a>
          </div>

          {/* Stats */}
          <StatStrip stats={stats} />
        </div>
      </div>

      {/* Right: Dark decorative panel */}
      <div
        className="hero-right relative min-h-[280px] flex items-center justify-center overflow-hidden bg-dark"
        aria-hidden="true"
      >
        {/* Diagonal gold stroke pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="diagonal-lines"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="40"
                stroke="#B8902A"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>

        {/* Watermark */}
        <div
          className="hero-bg-text select-none pointer-events-none font-display font-light"
          style={{
            fontSize: "clamp(80px, 18vw, 200px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(184,144,42,0.15)",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          INLAY
        </div>
      </div>
    </section>
  );
}
