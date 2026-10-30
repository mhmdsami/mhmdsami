import { notFound } from "next/navigation";
import SitePage from "@/components/site-page";
import { previews } from "@/shared/data/preview";

const modes = ["demo", "worst", "empty", "one"] as const;

type Mode = (typeof modes)[number];

export function generateStaticParams() {
  return modes.map((mode) => ({ mode }));
}

export const dynamicParams = false;

function PreviewToggle({ active }: { active: Mode }) {
  const labels: Record<Mode, string> = {
    demo: "Demo data",
    worst: "Worst case",
    empty: "Empty",
    one: "One",
  };

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-max max-w-[calc(100vw-1.5rem)] -translate-x-1/2 rounded-full bg-neutral-200 p-1 text-[11px] shadow-lg shadow-black/30">
      <div className="flex flex-wrap items-center justify-center gap-0.5">
        {modes.map((mode) => (
          <a
            key={mode}
            href={`/dev/preview/${mode}`}
            aria-current={mode === active ? "page" : undefined}
            className={
              mode === active
                ? "rounded-full bg-white px-2.5 py-1.5 font-medium text-neutral-900 shadow-sm"
                : "rounded-full px-2.5 py-1.5 text-neutral-600 transition-colors duration-150 hover:text-neutral-900"
            }
          >
            {labels[mode]}
          </a>
        ))}
      </div>
    </div>
  );
}

export default async function Preview({ params }: { params: Promise<{ mode: string }> }) {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  const { mode } = await params;

  if (!modes.includes(mode as Mode)) {
    notFound();
  }

  const active = mode as Mode;

  return (
    <>
      <SitePage data={previews[active]} />
      <div aria-hidden className="h-16" />
      <PreviewToggle active={active} />
    </>
  );
}
