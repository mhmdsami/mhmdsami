import { ArrowLink } from "@/components/ui/arrow-link";
import type { FavoriteStack, StackGroup } from "@/shared/types";

interface StackProps {
  stack: Array<StackGroup>;
  favorite?: FavoriteStack;
}

export default function Stack({ stack, favorite }: StackProps) {
  return (
    <>
      <dl className="grid gap-y-2.5 sm:grid-cols-[8rem_1fr] sm:gap-x-4">
        {stack.map(({ title, items }, index) => (
          <div key={title} data-reveal style={{ "--i": index } as React.CSSProperties} className="contents">
            <dt className="break-words text-2xs text-tertiary sm:pt-0.5">{title}</dt>
            <dd className="break-words text-sm text-secondary">{items.join(", ")}</dd>
          </div>
        ))}
      </dl>

      {favorite && (
        <div className="mt-10" data-reveal>
          <h3 className="text-sm font-medium">Current favorite</h3>
          <p className="mt-2 break-words text-sm text-secondary">{favorite.items.join(" · ")}</p>
          <p className="mt-1.5 text-2xs leading-5 text-tertiary">
            {favorite.link && (
              <ArrowLink href={favorite.link.href} className="text-tertiary">
                {favorite.link.label}
              </ArrowLink>
            )}{" "}
            {favorite.note}
          </p>
        </div>
      )}
    </>
  );
}
