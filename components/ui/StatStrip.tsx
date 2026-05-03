interface Stat {
  value: string;
  suffix?: string;
  label: string;
  dataCount?: number;
  dataDecimal?: boolean;
}

interface StatStripProps {
  stats: Stat[];
  className?: string;
}

export function StatStrip({ stats, className = "" }: StatStripProps) {
  return (
    <div
      className={`grid border-t border-line pt-8 ${className}`}
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
      }}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-1">
          <span
            className="font-display text-[clamp(28px,4vw,40px)] font-light text-gold leading-none"
            data-count={stat.dataCount}
            data-decimal={stat.dataDecimal ? "true" : undefined}
            data-suffix={stat.suffix}
          >
            {stat.value}
          </span>
          <span className="font-body text-[11px] text-muted tracking-[0.08em]">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
