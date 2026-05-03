import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HomeServices } from "@/components/sections/HomeServices";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { WhyCard } from "@/components/ui/WhyCard";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { homeWhys, homeReviews, featuredProject } from "@/lib/data/home";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <Hero />

        {/* Services — editorial list layout */}
        <HomeServices />

        {/* Featured Project */}
        <section
          className="border-t border-line bg-bg"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <EyebrowLabel className="mb-12">Featured Commission</EyebrowLabel>
            <div
              className="grid gap-12 items-center reveal-stagger"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))" }}
            >
              {/* Project image placeholder */}
              <div className="relative aspect-4/3 bg-dark overflow-hidden group reveal-left">
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{ background: "linear-gradient(135deg, #2a2010 0%, #1a1508 40%, #111008 100%)" }}
                />
                <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="fp-lines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="40" stroke="#B8902A" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#fp-lines)" />
                </svg>
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)" }}
                />
                <div className="absolute bottom-6 left-6">
                  <div className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-gold mb-1">
                    {featuredProject.tag}
                  </div>
                  <div className="font-display text-[clamp(18px,2.5vw,24px)] font-light text-[#F0EAD8]">
                    {featuredProject.title}
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="reveal-right">
                <h3 className="font-display text-[clamp(28px,4vw,44px)] font-light leading-[1.1] text-ink mb-5">
                  {featuredProject.title},<br /><em>{featuredProject.subtitle}</em>
                </h3>
                <p className="font-body text-[clamp(13px,1.6vw,15px)] font-light leading-[1.85] text-muted mb-8">
                  {featuredProject.description}
                </p>
                <div className="grid grid-cols-3 gap-4 border-t border-line pt-6 mb-8">
                  {featuredProject.meta.map((d) => (
                    <div key={d.label}>
                      <div className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-muted mb-1">
                        {d.label}
                      </div>
                      <div className="font-body text-[13px] font-light text-ink">{d.value}</div>
                    </div>
                  ))}
                </div>
                <a
                  href="/portfolio"
                  className="font-body text-[12px] uppercase tracking-[0.10em] text-muted hover:text-gold transition-colors duration-200 border-b border-line hover:border-gold pb-px"
                >
                  View all projects →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy / Why */}
        <section
          className="border-t border-line bg-surface"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <EyebrowLabel className="mb-6">Our Philosophy</EyebrowLabel>
            <h2
              className="font-display text-[clamp(30px,5vw,60px)] font-light leading-none text-ink mb-14"
              data-split
            >
              Designed for the <em>discerning.</em>
            </h2>
            <div
              className="grid gap-4 reveal-stagger"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))" }}
            >
              {homeWhys.map((w) => (
                <WhyCard key={w.number} {...w} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          className="border-t border-line bg-bg"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <EyebrowLabel className="mb-6">What Our Patrons Say</EyebrowLabel>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
              <h2
                className="font-display text-[clamp(30px,5vw,60px)] font-light leading-none text-ink"
                data-split
              >
                Words from our <em>clients.</em>
              </h2>
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-gold text-[14px]">★</span>
                  ))}
                </div>
                <span className="font-body text-[13px] font-light text-muted">
                  5.0 · 50+ Google reviews
                </span>
              </div>
            </div>
            <div
              className="grid gap-4 reveal-stagger"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))" }}
            >
              {homeReviews.map((r) => (
                <ReviewCard key={r.author} {...r} />
              ))}
            </div>
            <div className="mt-10">
              <a
                href="/reviews"
                className="font-body text-[12px] uppercase tracking-[0.10em] text-muted hover:text-gold transition-colors duration-200 border-b border-line hover:border-gold pb-px"
              >
                Read all reviews →
              </a>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section
          className="bg-dark border-t-2 border-gold"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div className="text-center" style={{ maxWidth: "640px", margin: "0 auto" }}>
            <EyebrowLabel className="mb-8 justify-center">
              <span className="text-gold">Available for 2025 Commissions</span>
            </EyebrowLabel>
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.1] text-[#F0EAD8] mb-4">
              Begin your <em>transformation.</em>
            </h2>
            <p className="font-body text-[clamp(13px,1.6vw,15px)] font-light leading-[1.85] text-[rgba(240,234,216,0.6)] mb-10">
              Available for select residential and commercial commissions. Free consultation, transparent quote, no pressure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="font-body text-[13px] font-medium uppercase tracking-[0.10em] bg-gold text-dark px-8 py-3.5 hover:bg-gold-dim transition-colors duration-200"
              >
                Book a Free Consultation
              </a>
              <a
                href="/portfolio"
                className="font-body text-[13px] font-normal uppercase tracking-[0.10em] border border-[rgba(240,234,216,0.2)] text-[rgba(240,234,216,0.7)] px-8 py-3.5 hover:border-[rgba(240,234,216,0.6)] hover:text-[#F0EAD8] transition-[border-color,color] duration-200"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
