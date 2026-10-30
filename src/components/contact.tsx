import type { Profile } from "@/shared/types";

export default function Contact({ profile }: { profile: Profile }) {
  return (
    <footer id="contact" data-reveal className="mt-16 scroll-mt-6 border-t  pt-10 lg:mt-20">
      <h2 className="text-lg font-medium tracking-tight">Contact</h2>

      <a
        href={`mailto:${profile.email}`}
        className="mt-3 inline-block max-w-full break-words text-base font-medium transition-colors duration-150 hover:text-primary"
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
  );
}
