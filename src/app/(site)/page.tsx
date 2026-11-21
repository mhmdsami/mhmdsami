import { Fragment } from "react";
import Activity from "@/app/(site)/_components/activity";
import CommandButton from "@/app/(site)/_components/command-button";
import Greeting from "@/app/(site)/_components/greeting";
import { ArrowLink } from "@/components/arrow-link";
import Section from "@/components/section";
import { agentSkills, site } from "@/data/site";
import { getCombinedContributions } from "@/lib/contributions";

export default async function Home() {
  const stats = await getCombinedContributions();
  const max = stats ? Math.max(1, ...stats.days.map((day) => day.count)) : 1;
  const { profile, experience, work, stack, favoriteStack, education } = site;

  return (
    <>
      <section className="pt-2 lg:pt-0">
        <Greeting />

        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <h1 className="animate-fade-up text-2xl font-medium leading-[1.05] tracking-[-0.045em] xl:text-3xl">
            <span className="text-tertiary">I&apos;m</span> {profile.name}
          </h1>
          <div className="hidden lg:block">
            <CommandButton />
          </div>
        </div>

        <p className="animate-fade-up mt-6 text-sm leading-6 text-secondary [animation-delay:60ms]">{profile.intro}</p>
      </section>

      {experience.length > 0 && (
        <Section id="experience" title="Experience">
          <ul className="space-y-6">
            {experience.map(({ role, org, orgUrl, period, previous, detail }, index) => (
              <li key={`${org}-${period}-${index}`} data-reveal style={{ "--i": index } as React.CSSProperties}>
                <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
                  <div className="min-w-0 wrap-break-word text-sm">
                    <span className="font-medium text-foreground">{role}</span>
                    <span className="text-tertiary"> · </span>
                    {orgUrl ? (
                      <ArrowLink href={orgUrl} className="text-secondary">
                        {org}
                      </ArrowLink>
                    ) : (
                      <span className="text-secondary">{org}</span>
                    )}
                  </div>
                  <span className="shrink-0 text-2xs text-tertiary tabular-nums sm:ml-auto">{period}</span>
                </div>
                {previous && (
                  <div className="mt-2.5 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
                    <span className="min-w-0 wrap-break-word text-sm text-foreground">{previous.role}</span>
                    <span className="shrink-0 text-2xs text-tertiary tabular-nums sm:ml-auto">{previous.period}</span>
                  </div>
                )}

                <p className="mt-3 wrap-break-word text-sm leading-6 text-secondary">
                  {typeof detail === "string"
                    ? detail.split("\n").map((line, lineIndex) => (
                        <Fragment key={lineIndex}>
                          {lineIndex > 0 && <br />}
                          {line}
                        </Fragment>
                      ))
                    : detail.map((part, partIndex) =>
                        part.href ? (
                          <ArrowLink key={partIndex} href={part.href} className="text-foreground">
                            {part.text}
                          </ArrowLink>
                        ) : (
                          <span key={partIndex}>{part.text}</span>
                        ),
                      )}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {work.length > 0 && (
        <Section
          id="projects"
          title="Projects"
          aside={
            <ArrowLink
              href="https://github.com/mhmdsami?tab=repositories"
              className="text-sm text-secondary"
              underline={false}
            >
              all repos
            </ArrowLink>
          }
        >
          <ul className="-my-4">
            {work.map((item, index) => {
              const primary = item.href ?? item.repo;
              const className = "row-hover -mx-3 block rounded-md px-3 py-4 transition-colors duration-150";
              const body = (
                <>
                  <span className="row-title block text-sm font-medium transition-colors duration-150">
                    <span className="wrap-break-word">{item.name}</span>
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
                  </span>
                  <p className="mt-1.5 wrap-break-word text-sm leading-6 text-secondary">{item.summary}</p>
                  <p className="mt-2 wrap-break-word text-2xs text-tertiary">{item.stack.join(", ")}</p>
                </>
              );

              return (
                <li key={`${item.name}-${index}`} data-reveal style={{ "--i": index } as React.CSSProperties}>
                  {primary ? (
                    <a href={primary} target="_blank" rel="noreferrer" className={className}>
                      {body}
                    </a>
                  ) : (
                    <div className={className}>{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Section>
      )}

      {stats && <Activity days={stats.days} max={max} />}

      <Section id="stack" title="Stack">
        <dl className="grid gap-y-2.5 sm:grid-cols-[8rem_1fr] sm:gap-x-4">
          {stack.map(({ title, items }, index) => (
            <div key={title} data-reveal style={{ "--i": index } as React.CSSProperties} className="contents">
              <dt className="wrap-break-word text-2xs text-tertiary sm:pt-0.5">{title}</dt>
              <dd className="wrap-break-word text-sm text-secondary">{items.join(", ")}</dd>
            </div>
          ))}
        </dl>

        {favoriteStack && (
          <div className="mt-10" data-reveal>
            <h3 className="text-sm font-medium">Current favorite</h3>
            <p className="mt-2 wrap-break-word text-sm text-secondary">{favoriteStack.items.join(" · ")}</p>
            <p className="mt-1.5 text-2xs leading-5 text-tertiary">
              {favoriteStack.link && (
                <ArrowLink href={favoriteStack.link.href} className="text-tertiary">
                  {favoriteStack.link.label}
                </ArrowLink>
              )}{" "}
              {favoriteStack.note}
            </p>
          </div>
        )}
      </Section>

      <Section id="education" title="Education">
        <div data-reveal>
          <div className="flex items-baseline justify-between gap-4">
            <span className="min-w-0 wrap-break-word text-sm font-medium text-foreground">{education.school}</span>
            <span className="ml-auto shrink-0 text-2xs text-tertiary tabular-nums">{education.period}</span>
          </div>
          <p className="mt-1 wrap-break-word text-sm text-secondary">{education.degree}</p>
          <p className="mt-1.5 text-2xs text-tertiary">{education.detail}</p>
        </div>
      </Section>

      <Section
        id="ai-skills"
        title="AI Skills"
        aside={
          <ArrowLink href="https://skills.sam1.space" className="text-sm text-secondary" underline={false}>
            all skills
          </ArrowLink>
        }
      >
        <ul className="space-y-5">
          {agentSkills.map(({ name, description }) => (
            <li key={name}>
              <p className="text-sm font-medium">{name}</p>
              <p className="mt-1.5 text-sm leading-6 text-secondary">{description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <footer id="contact" data-reveal className="mt-16 scroll-mt-6 border-t pt-10 lg:mt-20">
        <h2 className="text-lg font-medium tracking-tight">Contact</h2>

        <a
          href={`mailto:${profile.email}`}
          className="mt-3 inline-block max-w-full wrap-break-word text-base font-medium transition-colors duration-150 hover:text-primary"
        >
          {profile.email}
        </a>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-secondary">
          {profile.links
            .filter(({ label }) => label !== "email")
            .map(({ label, href }) => (
              <a
                key={label}
                href={href ?? "#"}
                target="_blank"
                rel="noreferrer"
                className="py-1 transition-colors duration-150 hover:text-foreground"
              >
                {label}
              </a>
            ))}
        </div>

        <p className="mt-10 text-2xs text-tertiary">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  );
}
