import ProjectCard from "./ProjectCard";
import projects from "../lib/projects";

function Projects() {
    return (
        <div id="projects" className="mt-32 md:pt-48 md:mt-48">
            <div className="md:text-center">
                <h1 className=" text-4xl md:text-6xl font-bold mt-2">
                    Projects
                </h1>
                <p className="mt-6 max-w-lg md:mx-auto">
                    From honing my skills re-engineering what others have done
                    to experimenting with my own ideas. Here’s a couple of
                    projects i’ve built
                </p>
            </div>
            <div className="flex flex-col gap-20 mt-16">
                {projects.map((project, ii) => (
                    <ProjectCard key={ii} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
