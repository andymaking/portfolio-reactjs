import React from "react";

import Link from "./Links";
import Image from "./Image";

const Projects = ({ projectList, category }) => {

    if (!projectList) {
        return null;
    }

    const filterAndExtractKeys = (array, keys) => {
        return array.map(({ name, title, coverimage, coverhash, type, uniqueid, cloudinary }) => ({ name, title, coverimage, coverhash, type, uniqueid, cloudinary }));
    };

    if (category !== "") {
        projectList = category === 'all projects'
            ? filterAndExtractKeys(projectList)
            : filterAndExtractKeys(projectList.filter(project => project.category.toLowerCase() === category));
    }

    const projectPairs = [];
    for (let i = 0; i < projectList.length; i += 2) {
        const pair = projectList.slice(i, i + 2);
        projectPairs.push(pair);
    }

    const projectElement = (
        projectPairs.map((projectPair, index) => (
            <div className="projekt-pair w-full flex flex-row" key={index}>
                {projectPair.map((project, linkIndex) => (
                    <Link
                    type="none"
                    href={`/portfolio/${project.uniqueid}`}
                    key={linkIndex}
                    extra="projekt w-full"
                    >
                        <div className="projekt-container w-full flex flex-col">
                            <div className="projekt-container-image">
                                <Image
                                    src={project.coverimage}
                                    hash={project.coverhash}
                                    alt={`${project.name} case study`}
                                    imageType={'project'}
                                    cloudSrc={project.cloudinary}
                                />
                            </div>
                            <div className="projekt-container-details w-full flex flex-col justify-end items-start">
                                <div className="clave flex w-full flex-row items-center justify-between">
                                    {category === "" ? (
                                        <p className="p1">{project.title}</p>
                                    ) : (
                                        <>
                                            <h2 className="h3">{project.name}</h2>
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
