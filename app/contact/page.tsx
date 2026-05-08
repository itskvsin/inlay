import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Inlay Interior Design, Ahmedabad",
  description:
    "Book a free consultation with Inlay Interior Design. Based in Satellite, Ahmedabad. Call +91 7016422677 or send an enquiry.",
};

const faqs = [
  {
    question: "How quickly can you start?",
    answer:
      "After the free consultation we typically begin concept work within 1–2 weeks, depending on our current project load. Site work timing depends on contractor availability and your project scope.",
  },
  {
    question: "Do you offer a free consultation?",
    answer:
      "Yes — always. Our first conversation is complimentary and carries zero obligation. We want to understand your brief before either of us commits to anything.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "Our studio is based in Satellite, Ahmedabad. We work across all of Ahmedabad, and also take on projects in Surat, Vadodara, and other Gujarat cities. Contact us to discuss your location.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section
          className="border-b border-line bg-bg"
          style={{
            padding:
              "clamp(5rem, 10vw, 8rem) clamp(1rem, 4vw, 3rem) clamp(3rem, 6vw, 5rem)",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <EyebrowLabel className="mb-8">Get in Touch</EyebrowLabel>
            <h1 className="font-display text-[clamp(42px,7vw,88px)] font-light leading-none tracking-[-0.01em] text-ink mb-6">
              Start your dream <em>space.</em>
            </h1>
            <p className="font-body text-[clamp(14px,1.8vw,16px)] font-light leading-[1.85] text-muted max-w-[480px]">
              Free consultation. We&apos;ll listen, understand your vision, and
              give you a transparent quote — no obligations, no pressure.
            </p>
          </div>
        </section>

        {/* Contact split */}
        <section
          className="border-b border-line bg-bg"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div
            className="grid gap-16 items-start"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            }}
          >
            {/* Left: Contact info */}
            <div>
              <EyebrowLabel className="mb-10">Direct Contact</EyebrowLabel>

              {/* Phone — primary */}
              <Link href="tel:+917016422677" className="group block mb-10">
                <div className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-muted mb-2">
                  Phone
                </div>
                <div className="font-display text-[clamp(28px,4vw,44px)] font-light text-gold group-hover:text-gold-dim transition-colors duration-200 leading-none">
                  +91 7016422677
                </div>
              </Link>

              {/* Details grid */}
              <div className="flex flex-col divide-y divide-line">
                <div className="py-4 flex gap-6">
                  <span className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-muted w-[72px] shrink-0 pt-0.5">
                    WhatsApp
                  </span>
                  <a
                    href="https://wa.me/917016422677"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[14px] font-light text-ink hover:text-gold transition-colors duration-200"
                  >
                    wa.me/917016422677
                  </a>
                </div>
                <div className="py-4 flex gap-6">
                  <span className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-muted w-[72px] shrink-0 pt-0.5">
                    Email
                  </span>
                  <a
                    href="mailto:inlaydesign1829@gmail.com"
                    className="font-body text-[14px] font-light text-ink hover:text-gold transition-colors duration-200 break-all"
                  >
                    inlaydesign1829@gmail.com
                  </a>
                </div>
                <div className="py-4 flex gap-6">
                  <span className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-muted w-[72px] shrink-0 pt-0.5">
                    Studio
                  </span>
                  <div className="font-body text-[14px] font-light text-ink leading-[1.6]">
                    Satellite, Ahmedabad
                    <br />
                    Gujarat, India
                  </div>
                </div>
                <div className="py-4 flex gap-6">
                  <span className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-muted w-[72px] shrink-0 pt-0.5">
                    Hours
                  </span>
                  <div className="font-body text-[14px] font-light text-ink leading-[1.6]">
                    Mon – Sat
                    <br />
                    10:00 am – 7:00 pm
                  </div>
                </div>
                <div className="py-4 flex gap-6">
                  <span className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-muted w-[72px] shrink-0 pt-0.5">
                    Response
                  </span>
                  <div className="font-body text-[13px] font-light text-muted">
                    We reply within 1 hour
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Dark form */}
            <div>
              <div className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-muted mb-4">
                Send an Enquiry
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Map placeholder */}
        <section className="border-b border-line">
          <div
            className="w-full bg-dark relative overflow-hidden flex flex-col gap-20 items-center justify-center"
            style={{ height: "clamp(800px, 80vw, 800px)" }}
            aria-label="Studio location: Satellite, Ahmedabad"
          >
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.04]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="map-lines"
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
              <rect width="100%" height="100%" fill="url(#map-lines)" />
            </svg>
            <div className="text-center z-10">
              <div className="font-body text-[11px] uppercase tracking-[0.18em] text-gold mb-2">
                Our Studio
              </div>
              <div className="font-display text-[clamp(20px,3vw,32px)] font-light text-[#F0EAD8]">
                Satellite, Ahmedabad
              </div>
              <div className="font-body text-[12px] text-[rgba(240,234,216,0.5)] mt-2">
                Gujarat, India
              </div>
              <Link
                href="https://maps.app.goo.gl/Qar65yoiX2Czd7Je7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 font-body text-[11px] uppercase tracking-[0.12em] border border-gold text-gold px-5 py-2.5 hover:bg-gold hover:text-dark transition-[background-color,color] duration-200"
              >
                Open in Google Maps
              </Link>
            </div>
            <iframe
              width="80%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.2898735846297!2d72.524631!3d23.013126599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8372f1731fa7%3A0xf2c075a9a3ec48ab!2sInlay%20Interior%20Design%20-%20interior%20designer%20in%20Ahmedabad!5e0!3m2!1sen!2sin!4v1778222970859!5m2!1sen!2sin"
              className="pointer-events-auto rounded-2xl z-999"
            />
          </div>
        </section>

        {/* FAQ strip */}
        <section
          className="bg-bg"
          style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div
              className="grid gap-16"
              style={{
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              }}
            >
              <div>
                <EyebrowLabel className="mb-6">Quick Answers</EyebrowLabel>
                <h2 className="font-display text-[clamp(24px,3.5vw,42px)] font-light leading-none text-ink">
                  Before you <em>reach out.</em>
                </h2>
              </div>
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
