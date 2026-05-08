import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { allReviews as reviews, ratingBreakdown, featuredReview } from "@/lib/data/reviews";

export const metadata: Metadata = {
  title: "Reviews — Inlay Interior Design, Ahmedabad",
  description: "What our clients say. 50+ happy Ahmedabad families. 5-star rated on Google.",
};

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero / Rating Summary */}
        <section
          className="border-b border-line bg-bg"
          style={{ padding: "clamp(5rem, 10vw, 8rem) clamp(1rem, 4vw, 3rem) clamp(3rem, 6vw, 5rem)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <EyebrowLabel className="mb-10">Client Love</EyebrowLabel>
            <div
              className="grid gap-16 items-center"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))" }}
            >
              {/* Big rating */}
              <div>
                <div className="font-display text-[clamp(72px,12vw,120px)] font-light text-gold leading-none">5.0</div>
                <div className="flex gap-1 mt-3 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-gold text-[20px]">★</span>
                  ))}
                </div>
                <div className="font-body text-[13px] font-light text-muted">Based on 50+ Google reviews</div>
                <div className="flex gap-3 mt-6">
                  <span className="font-body text-[10px] font-medium uppercase tracking-[0.14em] border border-line text-muted px-3 py-1.5">Google</span>
                  <span className="font-body text-[10px] font-medium uppercase tracking-[0.14em] border border-line text-muted px-3 py-1.5">JustDial</span>
                </div>
              </div>

              {/* Breakdown bars */}
              <div className="flex flex-col gap-3">
                {ratingBreakdown.map((row) => (
                  <div key={row.label} className="flex items-center gap-4">
                    <span className="font-body text-[11px] text-muted w-[42px] shrink-0">{row.label}</span>
                    <div className="flex-1 h-px bg-line relative">
                      <div
                        className="absolute top-0 left-0 h-px bg-gold transition-all duration-700"
                        style={{ width: `${row.percent}%` }}
                      />
                    </div>
                    <span className="font-body text-[11px] text-muted w-[30px] text-right shrink-0">{row.percent}%</span>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="flex flex-col gap-6 border-t border-line pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-12">
                <div>
                  <div className="font-display text-[clamp(36px,5vw,52px)] font-light text-gold leading-none">4.9</div>
                  <div className="font-body text-[12px] text-muted mt-1 tracking-[0.06em]">Average client rating</div>
                </div>
                <div>
                  <div className="font-display text-[clamp(36px,5vw,52px)] font-light text-gold leading-none">98%</div>
                  <div className="font-body text-[12px] text-muted mt-1 tracking-[0.06em]">Retention & referrals</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured review */}
        <section
          className="bg-dark border-b border-[rgba(255,255,255,0.08)]"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <EyebrowLabel className="mb-10">
              <span className="text-gold">Featured Review</span>
            </EyebrowLabel>
            <div className="max-w-[800px]">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-gold text-[16px]">★</span>
                ))}
              </div>
              <blockquote className="font-display text-[clamp(22px,3.5vw,40px)] font-light italic leading-[1.3] text-[#F0EAD8] mb-8">
                &ldquo;{featuredReview.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[rgba(184,144,42,0.2)] border border-gold flex items-center justify-center">
                  <span className="font-display text-[16px] font-light text-gold">
                    {featuredReview.author[0]}
                  </span>
                </div>
                <div>
                  <div className="font-body text-[13px] font-medium uppercase tracking-[0.10em] text-[#F0EAD8]">
                    {featuredReview.author}
                  </div>
                  <div className="font-body text-[11px] text-[rgba(240,234,216,0.5)] mt-0.5">
                    {featuredReview.location} · {featuredReview.service}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All reviews grid */}
        <section
          className="bg-surface border-b border-line"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <EyebrowLabel className="mb-6">All Reviews</EyebrowLabel>
            <h2 className="font-display text-[clamp(30px,5vw,60px)] font-light leading-none text-ink mb-14">
              The collective <em>voice.</em>
            </h2>
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 400px), 1fr))" }}
            >
              {reviews.map((r) => (
                <ReviewCard key={r.author} {...r} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="bg-bg border-t border-line"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div className="text-center" style={{ maxWidth: "560px", margin: "0 auto" }}>
            <EyebrowLabel className="mb-6 justify-center">Join 50+ Happy Families</EyebrowLabel>
            <h2 className="font-display text-[clamp(28px,4vw,48px)] font-light leading-[1.1] text-ink mb-4">
              Your story starts with a <em>conversation.</em>
            </h2>
            <p className="font-body text-[14px] font-light leading-[1.85] text-muted mb-8">
              Free consultation. Transparent quote. No obligations.
            </p>
            <a
              href="/contact"
              className="inline-block font-body text-[13px] font-medium uppercase tracking-[0.10em] bg-ink text-bg px-8 py-3.5 hover:bg-gold transition-colors duration-200"
            >
              Book Your Consultation
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
