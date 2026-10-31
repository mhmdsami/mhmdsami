import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  aside?: ReactNode;
  children: ReactNode;
}

export default function Section({ id, title, aside, children }: SectionProps) {
  return (
    <section id={id} className="mt-10 scroll-mt-6 sm:mt-12">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-xl font-medium tracking-tight" data-reveal>
          {title}
        </h2>
        {aside}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}
