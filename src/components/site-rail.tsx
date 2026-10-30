import Link from "next/link";
import LocalTime from "@/components/local-time";
import RailNav from "@/components/rail-nav";
import RotatingLocation from "@/components/rotating-location";
import { Button } from "@/components/ui/button";
import { site } from "@/shared/data/site";

export default function SiteRail() {
  const { profile } = site;

  return (
    <aside className="border-b py-4 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:border-b-0 lg:py-10">
      <div className="flex items-center justify-between gap-3">
        <Link href="/" className="text-sm font-medium tracking-tight">
          sam1.space
        </Link>
        <Button href="/resume.pdf" download="mohamed-sami-resume.pdf" size="sm">
          resume
        </Button>
      </div>

      <div className="mt-4 hidden flex-col gap-1 text-2xs text-tertiary lg:mt-6 lg:flex">
        <span>{profile.role}</span>
        <a
          href="https://headout.com"
          target="_blank"
          rel="noreferrer"
          className="w-fit transition-colors duration-150 hover:text-foreground"
        >
          at Headout
        </a>
        <RotatingLocation items={profile.cities} country={profile.country} />
        <LocalTime />
      </div>

      <RailNav />
    </aside>
  );
}
