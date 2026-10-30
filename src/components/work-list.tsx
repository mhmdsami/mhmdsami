import type { Link as LinkType, WorkItem } from "@/shared/types";

function Arrow() {
  return (
    <span className="row-arrow ml-1 inline-block transition-transform duration-200 ease-out">
      <svg aria-hidden="true" viewBox="0 0 12 12" className="inline h-2.5 w-2.5 translate-y-px">
        <path
          d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function Row({ item, index }: { item: WorkItem; index: number }) {
  const primary = item.href ?? item.repo;

  const body = (
    <>
      <div className="min-w-0">
        <span className="row-title text-sm font-medium transition-colors duration-150">
          <span className="break-words">{item.name}</span>
          <Arrow />
        </span>
      </div>

      <p className="mt-1.5 break-words text-sm leading-6 text-secondary">{item.summary}</p>

      <p className="mt-2 break-words text-2xs text-tertiary">{item.stack.join(", ")}</p>
    </>
  );

  const className = "row-hover -mx-3 block rounded-md px-3 py-4 transition-colors duration-150";

  return (
    <li data-reveal style={{ "--i": index } as React.CSSProperties}>
      {primary ? (
        <a href={primary} target="_blank" rel="noreferrer" className={className}>
          {body}
        </a>
      ) : (
        <div className={className}>{body}</div>
      )}
    </li>
  );
}

export default function WorkList({ work, also }: { work: Array<WorkItem>; also: Array<LinkType> }) {
  return (
    <>
      <ul className="-my-4">
        {work.map((item, index) => (
          <Row key={`${item.name}-${index}`} item={item} index={index} />
        ))}
      </ul>

      {also.length > 0 && (
        <div className="mt-10" data-reveal>
          <h3 className="text-sm font-medium">Also</h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-secondary sm:grid-cols-3">
            {also.map(({ label, href }) => (
              <li key={label} className="min-w-0">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="break-words py-0.5 transition-colors duration-150 hover:text-primary"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
