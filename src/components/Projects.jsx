import React from "react";
import { ArrowRight } from "@phosphor-icons/react";

import Link from "./Links";

const Project = ({ type }) => {

    const projects = [
        {
            home: [
                {
                    // img: Pommo,
                    name: "Pommo",
                    description: "Minimizing distractions with a productivity desktop app built around focus.",
                    id: 0,
                },
                {
                    name: "FirstMedtrade",
                    description: "A superhero’s quest to make medical products accessible and affordable for Nigerians.",
                    id: 1,
                },
                {
                    name: "LunarLuxury",
                    description: "A web-based travel agent simplifying travel options for luxury Nomads.",
                    id: 2,
                }
            ],
            work: [
                {
                    name: "Pommo",
                    type: "UX Design",
                    id: 0,
                },
                {
                    name: "FirstMedtrade",
                    type: "UX Design",
                    id: 1,
                },
                {
                    name: "LunarLuxury",
                    type: "UX Design",
                    id: 2,
                },
                {
                    name: "Thrive",
                    type: "UX Design",
                    id: 3,
                },
                {
                    name: "UberEats",
                    type: "UI Design",
                    id: 4,
                },
                {
                    name: "TGIT",
                    type: "UX Design",
                    id: 5,
                },
                {
                    name: "SoliumRise",
                    type: "UI Design",
                    id: 6,
                },
                {
                    name: "Hotel Capricon",
                    type: "UI Design",
                    id: 7,
                }
            ],
        },
    ];

    const typeToDisplay = type;

    const projectsOfType = projects[0][typeToDisplay] || [];

    const projectPairs = [];
    for (let i = 0; i < projectsOfType.length; i += 2) {
        const pair = projectsOfType.slice(i, i + 2);
        projectPairs.push(pair);
    }

    if (type === "home") {
        const projectElements = projectsOfType.map((project, index) => (
            <div className="projekt w-full flex flex-row content-end" key={index}>
                <div className="projekt-image"></div>
                <div className="projekt-details flex flex-col justify-end items-start">
                    <div className="clave flex flex-col">
                        <h3 className="h3">{project.name}</h3>
                        <p className="p1">{project.description}</p>
                    </div>
                    <Link type={"primary"} href={"/cover"}>
                        <div className="icon-hold flex items-center justify-center">
                            <ArrowRight size={24} weight="regular" />
                        </div>
                        View Case Study
                    </Link>
                </div>
            </div>
        ));

        return (
            <div className="works w-full flex flex-col items-center">
                {projectElements}
            </div>
        )
    } else {
        const projectElements = projectPairs.map((pair, index) => (
            <div className="projekt-pair w-full flex flex-row" key={index}>
                {pair.map((project) => (
                    <div className="projekt w-full flex flex-col content-end" >
                        <div className="projekt-image"></div>
                        <div className="projekt-details w-full flex flex-col justify-end items-start">
                            <div className="clave flex w-full flex-row items-center justify-between">
                                <h3 className="h3">{project.name}</h3>
                                <p className="p1">{project.type}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ));

        return (
            <div className="works w-full flex flex-col items-center">
                {projectElements}
            </div>
        )
    };






}

export default Project;