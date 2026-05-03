"use client";

import { useState } from "react";
import {
  portfolioFilters,
  portfolioProjects,
  type PortfolioCategory,
} from "@/lib/data/portfolio";

export function PortfolioGrid() {
  const [active, setActive] = useState<PortfolioCategory>("All");
  const filtered =
    active === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {portfolioFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={`font-body text-[11px] font-medium uppercase tracking-[0.14em] px-5 py-2.5 border transition-[background-color,color,border-color] duration-200 ${
              active === f
                ? "bg-ink text-bg border-ink"
                : "bg-transparent text-muted border-line hover:border-ink hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        className="grid gap-4 reveal-stagger"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
        }}
      >
        {filtered.map((project) => (
          <a
            key={project.title}
            href="#"
            className="project-card group relative block aspect-4/3 overflow-hidden bg-dark"
            aria-label={`View project: ${project.title}`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 ease-out group-hover:scale-[1.06]`}
            />
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.04]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id={`p-${project.title.replace(/\s/g, "-")}`}
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <line x1="0" y1="0" x2="0" y2="40" stroke="#B8902A" strokeWidth="1" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill={`url(#p-${project.title.replace(/\s/g, "-")})`}
              />
            </svg>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-gold mb-1.5">
                {project.tag}
              </div>
              <h3 className="font-display text-[clamp(18px,2.5vw,22px)] font-light text-[#F0EAD8] leading-[1.2]">
                {project.title}
              </h3>
              <p className="font-body text-[11px] text-[rgba(240,234,216,0.5)] mt-1">
                {project.location} · {project.year}
              </p>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-body text-[10px] uppercase tracking-[0.12em] text-gold border border-gold px-3 py-1.5">
                View
              </span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
