import Activity from "@/components/activity";
import Contact from "@/components/contact";
import Education from "@/components/education";
import ExperienceList from "@/components/experience-list";
import Hero from "@/components/hero";
import Section from "@/components/section";
import SkillsPreview from "@/components/skills-preview";
import Stack from "@/components/stack";
import { ArrowLink } from "@/components/ui/arrow-link";
import WorkList from "@/components/work-list";
import { agentSkills } from "@/shared/data/site";
import type { SiteData } from "@/shared/types";

export default function SitePage({ data }: { data: SiteData }) {
  return (
    <>
      <Hero profile={data.profile} />

      {data.experience.length > 0 && (
        <Section id="experience" title="Experience">
          <ExperienceList experience={data.experience} />
        </Section>
      )}

      {data.work.length > 0 && (
        <Section
          id="projects"
          title="Projects"
          aside={
            <ArrowLink href="https://github.com/mhmdsami?tab=repositories" className="text-sm text-tertiary">
              all repos
            </ArrowLink>
          }
        >
          <WorkList work={data.work} />
        </Section>
      )}

      <Activity />

      <Section id="stack" title="Stack">
        <Stack stack={data.stack} favorite={data.favoriteStack} />
      </Section>

      <Section id="education" title="Education">
        <Education education={data.education} />
      </Section>

      <Section
        id="ai-skills"
        title="AI Skills"
        aside={
          <ArrowLink href="https://skills.sam1.space" className="text-sm text-tertiary">
            all skills
          </ArrowLink>
        }
      >
        <SkillsPreview skills={agentSkills} />
      </Section>

      <Contact profile={data.profile} />
    </>
  );
}
