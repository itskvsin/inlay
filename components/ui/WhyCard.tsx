interface WhyCardProps {
  number: string;
  title: string;
  description: string;
}

export function WhyCard({ number, title, description }: WhyCardProps) {
  return (
    <div className="group border border-line border-l-2 border-l-gold p-[clamp(1.25rem,3vw,2rem)] hover:border-gold transition-[border-color] duration-200 reveal">
      <div className="font-display text-[11px] font-light text-faint mb-3">
        {number}
      </div>
      <h3 className="font-display text-[clamp(16px,2vw,20px)] font-normal leading-[1.3] text-ink mb-3">
        {title}
      </h3>
      <p className="font-body text-[13px] font-light leading-[1.65] text-muted">
        {description}
      </p>
    </div>
  );
}
