import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

import Link from "./Links";
import Image from "./Image";

gsap.registerPlugin(ScrollTrigger);

const ProjectsShow = ({ show, category }) => {

    if (!show) {
        return null;
    }

    const filterAndExtractKeys = (array, keys) => {
        return array.map(({ name, title, coverhash, type, uniqueid, imageSrc }) => ({ name, title, coverhash, type, uniqueid, imageSrc }));
    };

    if (category !== "") {
        show = category === 'all projects'
            ? filterAndExtractKeys(show)
            : filterAndExtractKeys(show.filter(project => project.category.toLowerCase() === category));
    }

    const projectPairs = [];
    for (let i = 0; i < show.length; i += 2) {
        const pair = show.slice(i, i + 2);
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
                                    src={project.imageSrc}
                                    hash={project.coverhash}
                                    alt={`${project.name} case study`}
                                />
                            </div>
                            <div className="projekt-container-details w-full flex flex-col justify-end items-start">
                                <div className="clave flex w-full flex-col items-center justify-between">
                                    {category === "" ? (
                                        <>
                                            <h2 className="h3">{project.name}</h2>
                                            <p className="p2 text-center">{project.title}</p>
                                        </>
                                    ) : (
                                        <>
                                            <h2 className="h3">{project.name}</h2>
                                            <p className="p2 text-center">{project.title}</p>
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
        <article className="idea w-full flex flex-col" >
            <div className="works w-full flex flex-col items-center">
                {projectElement}
            </div>
        </article>
    );
};

export default ProjectsShow;
