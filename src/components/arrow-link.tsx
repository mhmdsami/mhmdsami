import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  underline?: boolean;
}

export function ArrowLink({ href, children, className, underline = true }: ArrowLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn("group/link inline text-inherit transition-colors duration-150 hover:text-primary", className)}
    >
      <span
        className={cn(
          underline &&
            "underline decoration-foreground/40 decoration-1 underline-offset-[4px] group-hover/link:decoration-primary",
        )}
      >
        {children}
      </span>
      <svg
        aria-hidden="true"
        viewBox="0 0 12 12"
        className="ml-1 inline h-2.5 w-2.5 -translate-y-px transition-transform duration-200 ease-out group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
      >
        <path
          d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
