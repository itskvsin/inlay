interface ReviewCardProps {
  quote: string;
  author: string;
  location?: string;
  source?: string;
  rating?: number;
  service?: string;
}

export function ReviewCard({
  quote,
  author,
  location,
  source = "Google",
  rating = 5,
  service,
}: ReviewCardProps) {
  return (
    <div className="group bg-surface border border-line p-[clamp(1.25rem,3vw,2rem)] hover:border-gold transition-colors duration-200 reveal">
      <div
        className="text-[13px] text-gold mb-4"
        style={{ letterSpacing: "3px" }}
        aria-label={`${rating} out of 5 stars`}
      >
        {"★".repeat(rating)}
      </div>

      <blockquote className="font-display text-[clamp(15px,1.8vw,17px)] italic leading-[1.65] text-muted mb-5">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <footer className="flex items-center justify-between gap-2">
        <div>
          <div className="font-body text-[12px] font-medium uppercase tracking-[0.08em] text-ink">
            {author}
          </div>
          {location && (
            <div className="font-body text-[11px] text-faint mt-0.5">
              {location}
            </div>
          )}
        </div>
        <div className="flex flex-col items-end gap-1">
          {source && (
            <span className="font-body text-[11px] text-faint">{source}</span>
          )}
          {service && (
            <span className="font-body text-[10px] font-medium uppercase tracking-[0.08em] text-gold-dim">
              {service}
            </span>
          )}
        </div>
      </footer>
    </div>
  );
}
