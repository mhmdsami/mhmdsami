import React from "react";
import Image from "next/image";

interface ProjectProps {
    title: string;
    children: React.ReactNode;
    image: string;
    deps: string;
    repo: string;
}

const Project = ({ title, children, image, deps, repo }: ProjectProps) => {
    return (
        <div id="projects" className="bg-gray-200 rounded-md md:rounded-xl p-5 mt-4 mb-7">
            <div className="text-lg font-bold">{title}</div>
            <div className="flex flex-col gap-3">
                {children}
                <a href={deps}><img src={image} alt={title} className="rounded-sm md:rounded-md"/></a>
            </div>
            <div className="flex gap-2 place-content-center mt-5">
                <a href={repo} className="transition-all duration-300 hover:-translate-y-1"><Image src={`/socials/github.svg`}  alt="github logo" width={28} height={28}/></a>
                <a href={deps} className="transition-all duration-300 hover:-translate-y-1"><Image src={`/website.svg`}  alt="website" width={28} height={28}/></a>
            </div>
        </div>
    )
}

const FeaturedProjects = () => {
    return (
        <div id="projects" className="mt-[5vh] mb-10">
            <div className="text-base md:text-lg font-bold uppercase">Featured Projects</div>
            <div className="grid md:grid-cols-2 gap-x-7">
                <Project title="ScoreBoard" image="/projects/scoreboard.png" deps="https://score-board-sm-sa.vercel.app/" repo="https://github.com/sm-sami/ScoreBoard">A place to keep track of your scores, built with Svelte 🧡</Project>
                <Project title="typr" image="/projects/typr.png" deps="https://typr-sm-sa.glitch.me/" repo="https://github.com/sm-sami/typr">Typing Speed Test</Project>
            </div>
        </div>
    )
}

export default FeaturedProjects;