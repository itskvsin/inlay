import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { homeServices } from "@/lib/data/home";

/**
 * Editorial list layout for the home page services section.
 * Two-column desktop: intro column (left) + numbered service list (right).
 * Single column on mobile.
 */
export function HomeServices() {
  return (
    <section
      className="border-t border-line bg-surface"
      style={{ padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)" }}
    >
      <div
        className="grid gap-12 lg:gap-20"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          alignItems: "start",
        }}
      >
        {/* Left: intro */}
        <div className="lg:sticky lg:top-28">
          <EyebrowLabel className="mb-6">Our Expertise</EyebrowLabel>
          <h2
            className="font-display text-[clamp(30px,5vw,56px)] font-light leading-none text-ink mb-6"
            data-split
          >
            Curated <em>Services.</em>
          </h2>
          <p className="font-body text-[clamp(13px,1.6vw,15px)] font-light leading-[1.85] text-muted mb-8 max-w-[300px]">
            From a single room transformation to a complete turnkey home — every space deserves the same care.
          </p>
          <a
            href="/services"
            className="inline-flex items-center gap-2 font-body text-[12px] uppercase tracking-[0.10em] text-muted hover:text-gold transition-colors duration-200 border-b border-line hover:border-gold pb-px"
          >
            Explore All Services
            <span className="text-[10px]">→</span>
          </a>
        </div>

        {/* Right: numbered service list */}
        <div className="flex flex-col divide-y divide-line">
          {homeServices.map((service, i) => (
            <a
              key={service.number}
              href="/services"
              className="group flex items-start gap-6 py-8 pl-4 border-l-2 border-l-transparent hover:border-l-gold transition-[border-color,background-color] duration-200 hover:bg-bg -mx-4 px-4"
            >
              {/* Number */}
              <span
                className="font-display text-[clamp(32px,4vw,48px)] font-light leading-none text-faint group-hover:text-gold transition-colors duration-200 shrink-0 w-[56px]"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="pt-1 flex-1">
                <h3 className="font-display text-[clamp(18px,2.5vw,26px)] font-normal text-ink leading-[1.2] mb-2 group-hover:text-gold transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="font-body text-[13px] font-light leading-[1.7] text-muted">
                  {service.description}
                </p>
              </div>

              {/* Arrow */}
              <span className="font-body text-[16px] text-faint group-hover:text-gold group-hover:translate-x-1 transition-[color,transform] duration-200 shrink-0 mt-1">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
