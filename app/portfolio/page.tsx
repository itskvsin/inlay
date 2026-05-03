import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio — Inlay Interior Design, Ahmedabad",
  description: "Browse 100+ completed interior design projects across Ahmedabad. Residential, commercial, kitchens, bedrooms, and full-home interiors.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section
          className="border-b border-line bg-bg"
          style={{ padding: "clamp(5rem, 10vw, 8rem) clamp(1rem, 4vw, 3rem) clamp(3rem, 6vw, 5rem)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <EyebrowLabel className="mb-8">Our Work</EyebrowLabel>
            <div
              className="flex flex-wrap items-end justify-between gap-6"
            >
              <h1 className="font-display text-[clamp(42px,7vw,88px)] font-light leading-none tracking-[-0.01em] text-ink">
                The <em>Portfolio.</em>
              </h1>
              <p className="font-body text-[clamp(13px,1.6vw,15px)] font-light leading-[1.85] text-muted max-w-[360px]">
                100+ projects across Ahmedabad, Surat, and beyond. Residential, commercial, and everything in between.
              </p>
            </div>
          </div>
        </section>

        {/* Grid with filters */}
        <section
          className="bg-bg"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <PortfolioGrid />
          </div>
        </section>

        {/* Instagram strip */}
        <section
          className="bg-surface border-t border-line"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              <div>
                <EyebrowLabel className="mb-3">Follow Along</EyebrowLabel>
                <h2 className="font-display text-[clamp(24px,3vw,36px)] font-light text-ink">
                  @inlayinteriordesign
                </h2>
              </div>
              <a
                href="https://instagram.com/inlayinteriordesign"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[12px] uppercase tracking-[0.10em] border border-ink text-ink px-5 py-2.5 hover:bg-ink hover:text-bg transition-[background-color,color] duration-200"
              >
                Follow on Instagram
              </a>
            </div>
            {/* Six placeholder tiles */}
            <div
              className="grid gap-2"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 160px), 1fr))" }}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-dark relative overflow-hidden group cursor-pointer"
                >
                  <div
                    className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                    style={{
                      background: [
                        "linear-gradient(135deg, #2a2010 0%, #111008 100%)",
                        "linear-gradient(135deg, #1a1a14 0%, #0e0e0a 100%)",
                        "linear-gradient(135deg, #241c08 0%, #111008 100%)",
                        "linear-gradient(135deg, #201808 0%, #0e0c06 100%)",
                        "linear-gradient(135deg, #181410 0%, #0e0c0a 100%)",
                        "linear-gradient(135deg, #1c1a08 0%, #111008 100%)",
                      ][i],
                    }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
                    <span className="font-body text-[10px] uppercase tracking-[0.14em] text-[#F0EAD8]">View</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="bg-dark border-t-2 border-gold"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div className="text-center" style={{ maxWidth: "640px", margin: "0 auto" }}>
            <h2 className="font-display text-[clamp(28px,4vw,48px)] font-light leading-[1.1] text-[#F0EAD8] mb-4">
              Ready to define your <em>space?</em>
            </h2>
            <p className="font-body text-[clamp(13px,1.6vw,15px)] font-light leading-[1.85] text-[rgba(240,234,216,0.6)] mb-8">
              Every great project begins with a conversation. Let&apos;s discuss how we can bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-block font-body text-[13px] font-medium uppercase tracking-[0.10em] bg-gold text-dark px-8 py-3.5 hover:bg-gold-dim transition-colors duration-200"
            >
              Start Your Project
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
