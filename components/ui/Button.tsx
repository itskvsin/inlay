import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "nav";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-bg px-8 py-[14px] hover:bg-gold hover:scale-[1.03] transition-[background-color,transform] duration-[200ms,150ms]",
  outline:
    "bg-transparent border border-line text-muted px-7 py-[13px] hover:border-ink hover:text-ink transition-[border-color,color] duration-200",
  nav: "border border-ink text-ink px-5 py-2 hover:bg-ink hover:text-bg transition-[background-color,color] duration-200",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`font-body text-[13px] font-normal tracking-[0.10em] uppercase ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
