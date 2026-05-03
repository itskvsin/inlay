export function Footer() {
  return (
    <footer className="bg-dark border-t-2 border-gold">
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 3rem)",
        }}
      >
        <div
          className="grid gap-12"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          }}
        >
          {/* Brand */}
          <div>
            <a
              href="/"
              className="font-display text-[28px] font-normal text-[#F0EAD8] leading-none tracking-[0.06em] block mb-4"
            >
              In<em>lay</em>
            </a>
            <p className="font-body text-[13px] font-light leading-[1.7] text-[rgba(240,234,216,0.6)]">
              Spaces that tell your story.
            </p>
            <p className="font-body text-[12px] text-[rgba(240,234,216,0.4)] mt-3 tracking-[0.05em]">
              Satellite, Ahmedabad, Gujarat
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-body text-[10px] font-medium uppercase tracking-[0.18em] text-gold mb-5">
              Navigation
            </div>
            <ul className="flex flex-col gap-3" role="list">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "About", href: "/about" },
                { label: "Reviews", href: "/reviews" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-[12px] uppercase tracking-[0.08em] text-[rgba(240,234,216,0.5)] hover:text-[#F0EAD8] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-body text-[10px] font-medium uppercase tracking-[0.18em] text-gold mb-5">
              Contact
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+917016422677"
                className="font-display text-[clamp(18px,2vw,22px)] font-light text-gold hover:text-gold-dim transition-colors duration-200"
                aria-label="Call Inlay Interior Design"
              >
                +91 7016422677
              </a>
              <a
                href="https://wa.me/917016422677"
                className="font-body text-[12px] uppercase tracking-[0.08em] text-[rgba(240,234,216,0.5)] hover:text-[#F0EAD8] transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a
                href="mailto:inlaydesign1829@gmail.com"
                className="font-body text-[12px] text-[rgba(240,234,216,0.5)] hover:text-[#F0EAD8] transition-colors duration-200"
              >
                inlaydesign1829@gmail.com
              </a>
              <p className="font-body text-[11px] text-[rgba(240,234,216,0.35)] mt-1">
                Mon–Sat, 10am–7pm
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.08)] mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="font-body text-[11px] text-[rgba(240,234,216,0.3)]">
            © {new Date().getFullYear()} Inlay Interior Design. All rights reserved.
          </p>
          <p className="font-body text-[11px] text-[rgba(240,234,216,0.3)]">
            Satellite, Ahmedabad · Est. 2018
          </p>
        </div>
      </div>
    </footer>
  );
}
