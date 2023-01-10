import React from "react";
import ProjectCard from "./components/ProjectCard";
import image from "./assets/profile.jpg";

function App() {
    let projectDetails = {
        projectType: "Experimental",
        title: "Resume Generator",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi",
        repoLink: "https://github.com/jeffreyon/cv-generator",
        liveLink: "https://example.com",
        tags: ["React", "TailwindCSS"],
        caseStudyLink: "https://example.com",
        imageUrl: image,
    };
    return <ProjectCard {...projectDetails} />;
}

export default App;
