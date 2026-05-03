interface ProjectCardProps {
  tag: string;
  title: string;
  location?: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
}

export function ProjectCard({
  tag,
  title,
  location,
  imageSrc,
  imageAlt = "",
  href = "#",
}: ProjectCardProps) {
  return (
    <a
      href={href}
      className="project-card group relative block aspect-[4/3] overflow-hidden bg-dark reveal-scale"
      aria-label={`View project: ${title}`}
    >
      {/* Background image / gradient */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="project-bg absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.07]"
        />
      ) : (
        <div
          className="project-bg absolute inset-0 transition-transform duration-[800ms] ease-out group-hover:scale-[1.07]"
          style={{
            background:
              "linear-gradient(135deg, #1a1608 0%, #2a2010 40%, #111008 100%)",
          }}
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
        }}
      />

      {/* Hover content overlay — clip-path reveal (GSAP handles this in production) */}
      <div
        className="project-overlay-content absolute inset-0 flex flex-col justify-end p-[clamp(1rem,2.5vw,1.5rem)]"
        style={{ clipPath: "inset(100% 0% 0% 0%)" }}
      />

      {/* Always-visible bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-[clamp(1rem,2.5vw,1.5rem)]">
        <div className="font-body text-[10px] font-medium uppercase tracking-[0.12em] text-gold mb-1">
          {tag}
        </div>
        <h3 className="font-display text-[clamp(18px,2.5vw,24px)] font-light leading-[1.2] text-[#F0EAD8]">
          {title}
        </h3>
        {location && (
          <p className="font-body text-[11px] text-[rgba(240,234,216,0.6)] mt-1">
            {location}
          </p>
        )}
      </div>
    </a>
  );
}
