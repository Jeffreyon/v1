import React from "react";

function ProjectCard(props) {
    let {
        projectType,
        title,
        description,
        repoLink,
        liveLink,
        tags,
        caseStudyLink,
        imageUrl,
    } = props;

    return (
        <div>
            <article>
                <p>{projectType.toUpperCase()}</p>
                <h1>{title}</h1>
                <p>{description}</p>
                <div>
                    <a href="#">Github: {repoLink}</a>
                    <a href="#">Live Project: {liveLink}</a>
                </div>
                <div></div>
                <a href={caseStudyLink}>Read Case Study</a>
            </article>
            <div>
                <img src={imageUrl} alt="" />
            </div>
        </div>
    );
}

export default ProjectCard;
