import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { allServices as services, processSteps as steps, pricingPackages as packages, servicesFaqs as faqs } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services — Inlay Interior Design, Ahmedabad",
  description: "From living rooms to full-home turnkey interiors. Explore Inlay's services, transparent pricing, and design process.",
};

export default function ServicesPage() {
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
            <EyebrowLabel className="mb-8">What We Offer</EyebrowLabel>
            <h1 className="font-display text-[clamp(42px,7vw,88px)] font-light leading-none tracking-[-0.01em] text-ink max-w-[760px]">
              Every space.<br /><em>Every detail.</em>
            </h1>
            <p className="font-body text-[clamp(14px,1.8vw,16px)] font-light leading-[1.85] text-muted mt-6 max-w-[520px]">
              From a single room transformation to a complete turnkey home — we curate environments that reflect the unique narrative of those who live within them.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section
          className="bg-surface border-b border-line"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <EyebrowLabel className="mb-12">Our Services</EyebrowLabel>
            <div
              className="grid gap-px bg-line"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))" }}
            >
              {services.map((s) => (
                <div key={s.n} className="group relative bg-surface hover:bg-bg p-[clamp(1.5rem,3vw,2.5rem)] transition-colors duration-200 overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="text-2xl mb-3">{s.icon}</div>
                  <div className="font-display text-[11px] text-faint mb-2">{s.n}</div>
                  <h2 className="font-display text-[clamp(18px,2.5vw,24px)] font-normal leading-[1.2] text-ink mb-3">{s.title}</h2>
                  <p className="font-body text-[13px] font-light leading-[1.7] text-muted">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          className="bg-bg border-b border-line"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <EyebrowLabel className="mb-6">How We Work</EyebrowLabel>
            <h2 className="font-display text-[clamp(30px,5vw,60px)] font-light leading-none text-ink mb-14">
              The Inlay <em>Process.</em>
            </h2>
            <div
              className="grid gap-8"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))" }}
            >
              {steps.map((step, i) => (
                <div key={step.n} className="relative">
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-4 left-full w-8 h-px bg-line" style={{ transform: "translateX(-50%)" }} />
                  )}
                  <div className="font-display text-[clamp(36px,5vw,56px)] font-light text-faint leading-none mb-4">{step.n}</div>
                  <h3 className="font-display text-[clamp(18px,2vw,22px)] font-normal text-ink mb-3">{step.title}</h3>
                  <p className="font-body text-[13px] font-light leading-[1.7] text-muted">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          className="bg-surface border-b border-line"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <EyebrowLabel className="mb-6">Transparent Pricing</EyebrowLabel>
            <h2 className="font-display text-[clamp(30px,5vw,60px)] font-light leading-none text-ink mb-4">
              Investment <em>tiers.</em>
            </h2>
            <p className="font-body text-[14px] font-light text-muted mb-14 max-w-[480px]">
              All prices vary based on area and material specifications. Free consultation to get your exact quote.
            </p>
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))" }}
            >
              {packages.map((pkg) => (
                <div
                  key={pkg.label}
                  className={`relative flex flex-col p-[clamp(1.5rem,3vw,2.5rem)] border transition-colors duration-200 ${
                    pkg.highlight
                      ? "bg-ink text-bg border-ink"
                      : "bg-bg border-line hover:border-ink"
                  }`}
                >
                  {pkg.highlight && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold" />
                  )}
                  <div className={`font-body text-[10px] font-medium uppercase tracking-[0.18em] mb-4 ${pkg.highlight ? "text-gold" : "text-gold"}`}>
                    {pkg.label}
                  </div>
                  <div className={`font-display text-[clamp(28px,4vw,40px)] font-light leading-none mb-1 ${pkg.highlight ? "text-bg" : "text-ink"}`}>
                    {pkg.from}
                  </div>
                  <div className={`font-body text-[11px] mb-8 ${pkg.highlight ? "text-[rgba(250,248,243,0.5)]" : "text-muted"}`}>
                    {pkg.unit}
                  </div>
                  <ul className="flex flex-col gap-3 flex-1 mb-10">
                    {pkg.features.map((f) => (
                      <li key={f} className={`font-body text-[13px] font-light flex items-start gap-2 ${pkg.highlight ? "text-[rgba(250,248,243,0.8)]" : "text-muted"}`}>
                        <span className="text-gold mt-0.5 shrink-0">—</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={pkg.href}
                    className={`font-body text-[12px] font-medium uppercase tracking-[0.10em] px-6 py-3.5 text-center transition-[background-color,color] duration-200 ${
                      pkg.highlight
                        ? "bg-gold text-dark hover:bg-gold-dim"
                        : "border border-ink text-ink hover:bg-ink hover:text-bg"
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="bg-bg border-b border-line"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div
              className="grid gap-16"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))" }}
            >
              <div>
                <EyebrowLabel className="mb-6">FAQ</EyebrowLabel>
                <h2 className="font-display text-[clamp(30px,5vw,52px)] font-light leading-none text-ink mb-6">
                  Common <em>enquiries.</em>
                </h2>
                <p className="font-body text-[13px] font-light leading-[1.85] text-muted">
                  Can&apos;t find your answer? <a href="/contact" className="text-gold hover:text-gold-dim underline underline-offset-4 transition-colors duration-200">Reach out directly.</a>
                </p>
              </div>
              <FAQAccordion items={faqs} />
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
              Ready to begin your <em>transformation?</em>
            </h2>
            <p className="font-body text-[clamp(13px,1.6vw,15px)] font-light leading-[1.85] text-[rgba(240,234,216,0.6)] mb-8">
              Available for select residential and commercial commissions. Free consultation, transparent quote.
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
