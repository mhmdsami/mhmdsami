"use client";

import Link from "next/link";
import Desk from "@/app/(site)/_components/desk";
import Nav from "@/app/(site)/_components/rail/nav";
import ThemeToggle from "@/app/(site)/_components/rail/theme-toggle";
import Time from "@/app/(site)/_components/rail/time";
import Wordmark from "@/app/(site)/_components/rail/wordmark";
import { Button } from "@/components/button";
import RotatingText from "@/components/rotating-text";
import { site } from "@/data/site";

export default function Rail() {
  const { profile } = site;

  return (
    <aside className="border-b py-4 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:border-b-0 lg:py-10">
      <div className="flex items-center justify-between gap-3">
        <Link href="/" aria-label="Sami, home" className="text-sm font-medium tracking-tight">
          <Wordmark />
        </Link>
        <div className="flex items-center gap-2 lg:hidden">
          <Button href="/resume.pdf" download="mohamed-sami-resume.pdf" size="sm">
            resume
          </Button>
          <ThemeToggle />
        </div>
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
        <RotatingText
          items={profile.cities.map((city) => ({ text: `${city}, ${profile.country}`, lang: "en" }))}
          interval={12000}
        />
        <Time />
      </div>

      <Nav />

      <div className="mt-6 hidden lg:mt-auto lg:block">
        <Desk className="mb-6" />
        <div className="flex items-center justify-between">
          <Button href="/resume.pdf" download="mohamed-sami-resume.pdf" size="xs">
            resume
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
