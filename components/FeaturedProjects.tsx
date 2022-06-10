import {Project} from "./";
import React from "react";
import {ProjectProps} from "./Project";

const featuredProjects = [
    { name: "ScoreBoard", image: "/projects/scoreboard.png", repo: "https://github.com/sm-sami/ScoreBoard", deps: "https://score-board-sm-sa.vercel.app/", children: "A place to keep track of your scores, built with Svelte 🧡" },
    { name: "typr", image: "/projects/typr.png", repo: "https://github.com/sm-sami/typr", deps: "https://typr-sm-sa.glitch.me/", children: "Typing Speed Test" }
]

const FeaturedProjects = () => {
    return (
        <div id="projects" className="mt-[5vh] mb-10">
            <div className="text-base md:text-lg font-bold uppercase">Featured Projects</div>
            <div className="grid md:grid-cols-2 gap-x-7">
                {featuredProjects.map(( {name, image, repo, deps, children}: ProjectProps, index: number) => (
                    <Project key={index} name={name} image={image} repo={repo} deps={deps}>
                        {children}
                    </Project>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProjects;