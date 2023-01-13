import React from "react";
import LinkButton from "./LinkButton";
import Pill from "./Pill";
import IconLink from "./IconLink";

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
        <div className="flex flex-col-reverse lg:flex-row gap-10 md:gap-20 lg:items-center">
            <article className="flex flex-col gap-6 max-w-md md:mt-0">
                <div>
                    <p className="text-sm text-slate-500 font-semibold tracking-wider uppercase">
                        {projectType}
                    </p>
                    <h1 className="font-bold text-3xl mt-2">{title}</h1>
                    <p className="mt-3">{description}</p>
                </div>
                <div className="flex gap-4">
                    <IconLink
                        linkTo={repoLink}
                        icon="mingcute:github-line"
                        target="_blank"
                    />
                    <IconLink
                        linkTo={liveLink}
                        icon="majesticons:open-line"
                        target="_blank"
                    />
                </div>
                <div className="flex flex-wrap gap-3">
                    {tags.map((tag, ii) => (
                        <Pill key={ii} label={tag} />
                    ))}
                </div>
                <div className="flex">
                    {caseStudyLink && (
                        <LinkButton
                            target="_blank"
                            linkTo={caseStudyLink}
                            style="outline"
                            label="Read Case Study"
                        />
                    )}
                </div>
            </article>
            <div>
                <img
                    className=" drop-shadow-lg md:min-w-[400px]"
                    src={imageUrl}
                    alt=""
                />
            </div>
        </div>
    );
}

export default ProjectCard;
