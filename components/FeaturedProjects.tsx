import {Project} from "./";
import React from "react";
import {ProjectProps} from "../pages/api/projects";

interface FeaturedProjectsProps {
    projects: Array<ProjectProps>
}

const FeaturedProjects = ( {projects}: FeaturedProjectsProps ) => {
    return (
        <div id="projects" className="mt-[5vh] mb-10">
            <div className="text-base md:text-lg font-bold uppercase">Featured Projects</div>
            <div className="grid md:grid-cols-2 gap-x-7">
                {projects.map(( {name, image, repo, deps, desc}: ProjectProps, index: number) => (
                    <Project key={index} name={name} image={image} repo={repo} deps={deps}>
                        {desc}
                    </Project>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProjects;