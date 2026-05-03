interface ServiceCardProps {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export function ServiceCard({
  number,
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group relative bg-bg border border-line p-[clamp(1.5rem,3vw,2.5rem)] hover:bg-surface transition-colors duration-200 overflow-hidden reveal-scale">
      {/* Gold bottom bar reveal */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />

      <div className="text-2xl mb-3">{icon}</div>
      <div className="font-display text-[11px] font-light text-faint mb-2">
        {number}
      </div>
      <h3 className="font-display text-[clamp(18px,2.5vw,24px)] font-normal leading-[1.2] text-ink mb-3">
        {title}
      </h3>
      <p className="font-body text-[13px] font-light leading-[1.7] text-muted">
        {description}
      </p>
    </div>
  );
}
