import React from "react";

import Link from "./Links";
import ProjectsList from "./ProjectLists";
import ImageContainer from "./Image";

const Projects = ({ type, category }) => {
    let filteredProjects;

    if (type === "home") {
        filteredProjects = ProjectsList.filter(project => project.featured === 1);
    } else {
        filteredProjects = category === 'all projects'
            ? ProjectsList
            : ProjectsList.filter(project => project.category.toLowerCase() === category);
    }

    const projectPairs = [];
    for (let i = 0; i < filteredProjects.length; i += 2) {
        const pair = filteredProjects.slice(i, i + 2);
        projectPairs.push(pair);
    }

    const projectElements = projectPairs.map((pair, index) => (
        <div className="projekt-pair w-full flex flex-row" key={index}>
            {pair.map((project) => (
                <Link type={"none"} href={"/portfolio/" + project.uniqueId} key={project.id} extra={`projekt w-full`}>
                    <div className={`projekt-container w-full flex flex-col`}>
                        <div className="projekt-container-image">
                            <ImageContainer
                                src={project.coverImage}
                                hash={project.coverHash}
                                alt={`${project.name}` + ` case study`}
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
    ));

    return (
        <div className="works w-full flex flex-col items-center">
            {projectElements}
        </div>
    )
}

export default Projects;
