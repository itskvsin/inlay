"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: readonly FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-line">
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between gap-6 py-6 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-display text-[clamp(16px,2vw,20px)] font-normal text-ink group-hover:text-gold transition-colors duration-200">
              {item.question}
            </span>
            <span
              className="font-body text-[20px] font-light text-muted shrink-0 transition-transform duration-300"
              style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="pb-6">
              <p className="font-body text-[14px] font-light leading-[1.85] text-muted max-w-[640px]">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
