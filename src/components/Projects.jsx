import React from "react";

import Link from "./Links";
import ProjectsList from "./ProjectLists";
import ImageContainer from "./Image";

const Projects = ({ type, category }) => {
    let filteredProjects;

    const filterAndExtractKeys = (array, keys) => {
        return array.map(({ name, title, coverImage, coverHash, type, uniqueId }) => ({ name, title, coverImage, coverHash, type, uniqueId }));
    };

    if (type === "home") {
        filteredProjects = filterAndExtractKeys(ProjectsList.filter(project => project.featured === 1));
    } else {
        filteredProjects = category === 'all projects'
            ? filterAndExtractKeys(ProjectsList)
            : filterAndExtractKeys(ProjectsList.filter(project => project.category.toLowerCase() === category));
    }

    const projectPairs = [];
    for (let i = 0; i < filteredProjects.length; i += 2) {
        const pair = filteredProjects.slice(i, i + 2);
        projectPairs.push(pair);
    }

    const projectElement = (
        projectPairs.map((project, index) => (
            <div className="projekt-pair w-full flex flex-row" key={index}>
                {project.map((project, linkIndex) => (
                    <Link
                        type="none"
                        href={`/portfolio/${project.uniqueId}`}
                        key={linkIndex}
                        extra="projekt w-full"

                    >
                        <div className="projekt-container w-full flex flex-col">
                            <div className="projekt-container-image">
                                <ImageContainer
                                    src={project.coverImage}
                                    hash={project.coverHash}
                                    alt={`${project.name} case study`}
                                />
                            </div>
                            <div className="projekt-container-details w-full flex flex-col justify-end items-start">
                                <div className="clave flex w-full flex-row items-center justify-between">
                                    {type === "home" ? (
                                        <p className="p1">{project.title}</p>
                                    ) : (
                                        <>
                                            <h3 className="h3">{project.name}</h3>
                                            <p className="p1">{project.type}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        ))
    );

    return (
        <div
            className="works w-full flex flex-col items-center"
        >
            {projectElement}
        </div>
    );
};

export default Projects;
