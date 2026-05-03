import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { guidingPrinciples as principles, studioValues as values, craftNetwork as network } from "@/lib/data/about";

export const metadata: Metadata = {
  title: "About — Inlay Interior Design, Ahmedabad",
  description: "The story behind Inlay Interior Design. A boutique studio in Satellite, Ahmedabad, crafting personalised interiors since 2018.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section
          className="grid border-b border-line"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))" }}
        >
          {/* Left: Content */}
          <div
            className="flex flex-col justify-center bg-bg"
            style={{ padding: "clamp(5rem, 10vw, 8rem) clamp(1rem, 4vw, 3rem)" }}
          >
            <EyebrowLabel className="mb-8">Our Story</EyebrowLabel>
            <h1 className="font-display text-[clamp(42px,6vw,72px)] font-light leading-none text-ink mb-6">
              Design from the heart<br />of <em>Ahmedabad.</em>
            </h1>
            <p className="font-body text-[clamp(14px,1.8vw,16px)] font-light leading-[1.85] text-muted max-w-[460px]">
              A boutique interior design studio in Satellite, Ahmedabad — crafting spaces that feel deeply personal, quietly luxurious, and built to endure.
            </p>
          </div>

          {/* Right: Dark accent panel */}
          <div
            className="relative min-h-[320px] bg-dark flex items-center justify-center overflow-hidden"
            aria-hidden="true"
          >
            <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="about-lines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="40" stroke="#B8902A" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#about-lines)" />
            </svg>
            <div
              className="font-display font-light select-none pointer-events-none text-center px-8"
              style={{
                fontSize: "clamp(48px, 10vw, 120px)",
                color: "transparent",
                WebkitTextStroke: "1px rgba(184,144,42,0.15)",
                lineHeight: 1,
              }}
            >
              EST.<br />2018
            </div>
          </div>
        </section>

        {/* Studio Story */}
        <section
          className="bg-bg border-b border-line"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div
            className="grid gap-16 items-start"
            style={{ maxWidth: "1280px", margin: "0 auto", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))" }}
          >
            <div>
              <EyebrowLabel className="mb-8">The Inlay Ethos</EyebrowLabel>
              <div className="flex flex-col gap-5">
                <p className="font-body text-[clamp(14px,1.8vw,16px)] font-light leading-[1.85] text-ink">
                  Inlay Interior Design was founded in 2018 in Satellite, Ahmedabad, with a singular conviction: that a home should be an honest reflection of the people who live in it — warm, considered, and unmistakably theirs.
                </p>
                <p className="font-body text-[clamp(14px,1.8vw,16px)] font-light leading-[1.85] text-muted">
                  We work closely with a curated circle of craftsmen, vendors, and civil teams across Gujarat. Our process is hands-on from the first sketch to the final walkthrough — because the details only come right when someone cares about every step.
                </p>
                <p className="font-body text-[clamp(14px,1.8vw,16px)] font-light leading-[1.85] text-muted">
                  Over 100 projects later, our belief hasn&apos;t changed: the best rooms have something to say about the people who live in them.
                </p>
              </div>
            </div>

            {/* Pull quote */}
            <div className="border-l-2 border-gold pl-8 py-4">
              <blockquote className="font-display text-[clamp(22px,3vw,32px)] font-light italic leading-[1.3] text-ink">
                &ldquo;The best rooms have something to say about the people who live in them.&rdquo;
              </blockquote>
              <div className="mt-6 font-body text-[11px] uppercase tracking-[0.14em] text-muted">
                Inlay Interior Design · Ahmedabad
              </div>
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section
          className="bg-surface border-b border-line"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <EyebrowLabel className="mb-6">Guiding Principles</EyebrowLabel>
            <h2 className="font-display text-[clamp(30px,5vw,60px)] font-light leading-none text-ink mb-14">
              The pillars of our <em>practice.</em>
            </h2>
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))" }}
            >
              {principles.map((p) => (
                <div key={p.title} className="bg-bg border border-line border-l-2 border-l-gold p-[clamp(1.5rem,3vw,2.5rem)]">
                  <div className="font-display text-[24px] text-gold mb-4">{p.icon}</div>
                  <h3 className="font-display text-[clamp(18px,2vw,22px)] font-normal text-ink mb-3">{p.title}</h3>
                  <p className="font-body text-[13px] font-light leading-[1.7] text-muted">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section
          className="bg-bg border-b border-line"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <EyebrowLabel className="mb-6">What We Stand For</EyebrowLabel>
            <h2 className="font-display text-[clamp(30px,5vw,60px)] font-light leading-none text-ink mb-14">
              Values we don&apos;t <em>compromise.</em>
            </h2>
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))" }}
            >
              {values.map((v) => (
                <div key={v.n} className="group border border-line border-l-2 border-l-gold p-[clamp(1.25rem,3vw,2rem)] hover:border-gold transition-[border-color] duration-200">
                  <div className="font-display text-[11px] text-faint mb-3">{v.n}</div>
                  <h3 className="font-display text-[clamp(16px,2vw,20px)] font-normal text-ink mb-3">{v.title}</h3>
                  <p className="font-body text-[13px] font-light leading-[1.65] text-muted">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Craftsmen Network */}
        <section
          className="bg-dark border-b border-[rgba(255,255,255,0.08)]"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div
            className="grid gap-16 items-center"
            style={{ maxWidth: "1280px", margin: "0 auto", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))" }}
          >
            <div>
              <EyebrowLabel className="mb-6">
                <span className="text-gold">Our Network</span>
              </EyebrowLabel>
              <h2 className="font-display text-[clamp(28px,4vw,48px)] font-light leading-[1.1] text-[#F0EAD8] mb-6">
                A collective of<br />master <em>craftsmen.</em>
              </h2>
              <p className="font-body text-[clamp(13px,1.6vw,15px)] font-light leading-[1.85] text-[rgba(240,234,216,0.6)]">
                We don&apos;t work with just anyone. Our circle of trusted artisans and contractors is carefully maintained — chosen for precision, reliability, and pride in their craft.
              </p>
            </div>
            <ul className="flex flex-col divide-y divide-[rgba(255,255,255,0.08)]">
              {network.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 py-4 font-body text-[14px] font-light text-[rgba(240,234,216,0.7)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section
          className="bg-dark border-t-2 border-gold"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div className="text-center" style={{ maxWidth: "640px", margin: "0 auto" }}>
            <h2 className="font-display text-[clamp(28px,4vw,48px)] font-light leading-[1.1] text-[#F0EAD8] mb-4">
              Ready to transform your <em>space?</em>
            </h2>
            <p className="font-body text-[clamp(13px,1.6vw,15px)] font-light leading-[1.85] text-[rgba(240,234,216,0.6)] mb-8">
              Free consultation. No obligations. Just an honest conversation about your home.
            </p>
            <a
              href="/contact"
              className="inline-block font-body text-[13px] font-medium uppercase tracking-[0.10em] bg-gold text-dark px-8 py-3.5 hover:bg-gold-dim transition-colors duration-200"
            >
              Book a Free Consultation
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
