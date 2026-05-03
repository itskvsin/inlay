"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-50 border-b border-line"
        style={{
          backgroundColor: "rgba(250, 248, 243, 0.93)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 clamp(1rem, 4vw, 3rem)",
            height: "64px",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            className="font-display text-[22px] font-normal text-ink leading-none tracking-[0.06em] hover:tracking-[0.09em] transition-[letter-spacing] duration-200"
            aria-label="Inlay Interior Design — home"
          >
            In<em>lay</em>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-[12px] font-normal uppercase tracking-[0.10em] text-muted hover:text-ink transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="nav" onClick={() => (window.location.href = "/contact")}>
              Get a Quote
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-px bg-ink transition-transform duration-200 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-ink transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-ink transition-transform duration-200 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ backgroundColor: "rgba(250, 248, 243, 0.98)" }}
        >
          <ul className="flex flex-col items-center gap-6" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-[14px] font-normal uppercase tracking-[0.12em] text-muted hover:text-ink transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="nav" onClick={() => (window.location.href = "/contact")}>
            Get a Quote
          </Button>
        </div>
      )}
    </>
  );
}
