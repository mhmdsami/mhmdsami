import Greeting from "@/components/greeting";
import { Button } from "@/components/ui/button";
import type { Profile } from "@/shared/types";

export default function Hero({ profile }: { profile: Profile }) {
  return (
    <section className="pt-2 lg:pt-0">
      <Greeting />

      <h1 className="animate-fade-up mt-2 text-2xl font-medium leading-[1.05] tracking-[-0.045em] xl:text-3xl">
        <span className="text-tertiary">I&apos;m</span> {profile.name}
      </h1>

      <p className="animate-fade-up mt-6 text-sm leading-6 text-secondary [animation-delay:60ms]">{profile.intro}</p>

      <div className="animate-fade-up mt-5 [animation-delay:120ms] lg:hidden">
        <Button href="/resume.pdf" download="mohamed-sami-resume.pdf" size="sm">
          resume
        </Button>
      </div>
    </section>
  );
}
