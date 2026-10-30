import Contact from "@/components/contact";
import Education from "@/components/education";
import ExperienceList from "@/components/experience-list";
import Hero from "@/components/hero";
import Section from "@/components/section";
import Stack from "@/components/stack";
import WorkList from "@/components/work-list";
import type { SiteData } from "@/shared/types";

export default function SitePage({ data }: { data: SiteData }) {
  return (
    <>
      <Hero profile={data.profile} />

      {data.work.length > 0 && (
        <Section id="projects" title="Projects">
          <WorkList work={data.work} also={data.also} />
        </Section>
      )}

      {data.experience.length > 0 && (
        <Section id="experience" title="Experience">
          <ExperienceList experience={data.experience} />
        </Section>
      )}

      <Section id="education" title="Education">
        <Education education={data.education} />
      </Section>

      {data.stack.length > 0 && (
        <Section id="stack" title="Stack">
          <Stack stack={data.stack} favorite={data.favoriteStack} />
        </Section>
      )}

      <Contact profile={data.profile} />
    </>
  );
}
