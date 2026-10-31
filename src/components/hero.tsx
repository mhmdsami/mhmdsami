import CommandTrigger from "@/components/command-trigger";
import Greeting from "@/components/greeting";
import type { Profile } from "@/shared/types";

export default function Hero({ profile }: { profile: Profile }) {
  return (
    <section className="pt-2 lg:pt-0">
      <Greeting />

      <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
        <h1 className="animate-fade-up text-2xl font-medium leading-[1.05] tracking-[-0.045em] xl:text-3xl">
          <span className="text-tertiary">I&apos;m</span> {profile.name}
        </h1>
        <div className="hidden lg:block">
          <CommandTrigger />
        </div>
      </div>

      <p className="animate-fade-up mt-6 text-sm leading-6 text-secondary [animation-delay:60ms]">{profile.intro}</p>
    </section>
  );
}
