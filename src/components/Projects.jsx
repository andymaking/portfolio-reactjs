import React from "react";

import Link from "./Links";

const Projects = ({ type }) => {

    const projectsList = [
        {
            home: [
                // {
                //     // img: Pommo,
                //     name: "Pommo",
                //     description: "",
                //     id: 0,
                // },
                {
                    name: "FirstMedtrade",
                    description: "Improving how hospitals and patients in Nigeria connect to international manufacturers and local vendors for streamlined access to medical supplies.",
                    uniqueId: "jf09a422",
                    id: 1,
                },
                {
                    name: "TGIT",
                    description: "Adding life to IT programs for engineering professionals, making access to courses less confusing and easy to navigate through.",
                    uniqueId: "jfcd04r1",
                    id: 2,
                },
                {
                    name: "LunarLuxury",
                    description: "Simplifying the digital tavel solutions for luxury nomads, with a focus on facilitating seamless explorations of luxury destinations.",
                    uniqueId: "",
                    id: 3,
                }
            ],
            work: [
                {
                    name: "Pommo",
                    type: "UX Design",
                    uniqueId: "",
                    id: 0,
                },
                {
                    name: "FirstMedtrade",
                    type: "UX Design",
                    uniqueId: "",
                    id: 1,
                },
                {
                    name: "LunarLuxury",
                    type: "UX Design",
                    uniqueId: "",
                    id: 2,
                },
                {
                    name: "Thrive",
                    type: "UX Design",
                    uniqueId: "",
                    id: 3,
                },
                {
                    name: "UberEats",
                    type: "UI Design",
                    uniqueId: "",
                    id: 4,
                },
                {
                    name: "TGIT",
                    type: "UX Design",
                    uniqueId: "",
                    id: 5,
                },
                {
                    name: "SoliumRise",
                    type: "UI Design",
                    uniqueId: "",
                    id: 6,
                },
                {
                    name: "Hotel Capricon",
                    type: "UI Design",
                    uniqueId: "",
                    id: 7,
                }
            ],
        },
    ];

    const typeToDisplay = type;

    const projectsOfType = projectsList[0][typeToDisplay] || [];

    const projectPairs = [];
    for (let i = 0; i < projectsOfType.length; i += 2) {
        const pair = projectsOfType.slice(i, i + 2);
        projectPairs.push(pair);
    }

    if (type === "home") {
        const projectElements = projectsOfType.map((project, index) => (
            <Link type={"none"} href={"/portfolio/" +  project.uniqueId} extra={`projekt w-full`} key={index}>
                <div className={`projekt-container w-full flex`} key={index}>
                    <div className="projekt-container-image"></div>
                    <div className="projekt-container-details flex flex-col justify-end items-start">
                        <div className="clave flex flex-col">
                            <p className="p1">{project.description}</p>
                        </div>
                    </div>
                </div>
            </Link>
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
                    <Link type={"none"} href={"/portfolio/" + project.uniqueId} key={project.id} extra={`projekt w-full`}>
                        <div className={`projekt-container w-full flex flex-col`}>
                            <div className="projekt-container-image"></div>
                            <div className="projekt-container-details w-full flex flex-col justify-end items-start">
                                <div className="clave flex w-full flex-row items-center justify-between">
                                    <h3 className="h3">{project.name}</h3>
                                    <p className="p1">{project.type}</p>
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
    };
}

export default Projects;