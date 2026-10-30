import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/components/ui/cn";

const base =
  "inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border font-medium transition-[background-color,border-color,color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:translate-y-px active:scale-[0.98]";

const variants = {
  default: "border-transparent bg-primary text-primary-foreground hover:bg-primary-hover",
  outline: "border-border text-foreground hover:border-input hover:bg-surface-2",
  ghost: "border-transparent text-secondary hover:bg-surface-2 hover:text-foreground",
};

const sizes = {
  xs: "h-6 rounded-sm px-2 text-2xs",
  sm: "h-7 px-2.5 text-xs",
  md: "h-8 px-3 text-sm",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  children: ReactNode;
}

export function Button({ href, variant = "outline", size = "sm", className, children, ...props }: ButtonProps) {
  return (
    <a href={href} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  );
}
