interface EyebrowLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function EyebrowLabel({ children, className = "" }: EyebrowLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="section-eyebrow-line h-px w-[30px] bg-gold shrink-0 origin-left" />
      <span
        className="font-body text-[11px] font-medium tracking-[0.18em] uppercase text-gold"
        data-text={typeof children === "string" ? children : undefined}
      >
        {children}
      </span>
    </div>
  );
}
