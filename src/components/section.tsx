import type { ReactNode } from "react";

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mt-10 scroll-mt-6 sm:mt-12">
      <h2 className="text-xl font-medium tracking-tight" data-reveal>
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
