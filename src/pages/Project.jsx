import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';

import ProjectList from "../components/ProjectLists";
import Link from "../components/Links";
import Image from "../components/Image"

import { ArrowLeft } from "@phosphor-icons/react";

const Project = () => {
    const { projectId } = useParams();

    const project = ProjectList.find(project => project.uniqueId === projectId);

    useEffect(() => {
        document.title = project ? project.name + ' | Jude Joshua | Top Product Designer For Businesses And Brands.' : 'Project Not Found! | Jude Joshua | Top Product Designer For Businesses And Brands.';
    }, []);

    return (
        <>
            <header className="landing w-full flex flex-col items-center project-head">
                <div className="head w-full flex flex-col items-start justify-start">
                    <Link target="_self" type={"primary"} href={`/portfolio`}>
                        <div className="icon-hold flex items-center justify-center">
                            <ArrowLeft size={24} weight="regular" />
                        </div>
                        Go back to all projects
                    </Link>
                    <div className="head-text w-full flex flex-col items-start justify-start">
                        <div className="head-text-top w-full">
                            <h3 className={`${project ? "h2 text-left" : "h2 text-center"}`}>
                                {project ? project.title : 'Project Not Found!'}
                            </h3>
                        </div>
                    </div>
                </div>
            </header>
            <section className="main w-full flex flex-col items-center">
                <article className={`project-details idea w-full flex flex-col ` + `${project.name.toLowerCase()}`}>
                    {project &&
                        <>
                            <div className="grouper project-details-description flex flex-col justify-start items-start">
                                <div className="project-details-cover-image w-full" style={{ backgroundImage: `url(${project.coverImage})` }}>
                                    {/* <Image
                                        className='coverImage'
                                        hash={project.coverHash}
                                        src={project.coverImage}
                                        alt={`Cover image`}
                                    /> */}
                                </div>
                                <div className="project-details-description-checker flex flex-row justify-start items-start">
                                    <div className="describe flex flex-col">
                                        <h4 className="h4">The Client</h4>
                                        <p className="p1">{project.description}</p>
                                    </div>
                                    <div className="project-details-description-checker-roles flex flex-col items-start justify-start">
                                        {project.people && Object.keys(project.people).map((roles, roles__i) => (
                                            <div className="project-details-description-checker-roles-section flex flex-col" key={roles__i}>
                                                <h4 className="h4">{roles}</h4>
                                                {typeof project.people[roles] === 'object' ? (
                                                    <div className="project-details-description-checker-roles-section-team flex flex-col">
                                                        {Object.keys(project.people[roles]).map((member, team__i) => (
                                                            <p className="p" key={team__i}>{project.people[roles][member]} - {member}</p>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <p className="p">{project.people[roles]}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {project.problem && (
                                <div className="grouper project-details-problem flex flex-col justify-start items-start">
                                    {Object.keys(project.problem).map((problem, problem__i) => (
                                        <div className={`w-full flex ` + `${problem === 'why' ? 'flex-col ' : 'flex-row '}` + `${problem}`} key={problem__i}>

                                            {Object.keys(project.problem[problem]).map((topic, topic__i) => (
                                                <React.Fragment key={topic__i}>
                                                    {typeof project.problem[problem][topic] !== 'object' ? (
                                                        <>
                                                            {topic === 'title' ? (
                                                                <h3 className="h3">{project.problem[problem][topic]}</h3>
                                                            ) : (
                                                                <p className="p1">{project.problem[problem][topic]}</p>
                                                            )}
                                                        </>
                                                    ) : (
                                                        <div className="images-image flex flex-col">
                                                            {Object.keys(project.problem[problem][topic]).map((image, image__i) => (
                                                                <React.Fragment key={image__i}>
                                                                    {image === 'image' ? (
                                                                        <Image
                                                                            className="project-details-cover-image image"
                                                                            src={project.problem[problem][topic][image]}
                                                                            hash={"L2RC[89a?uWB00R*00ae00kq_3jF"}
                                                                            alt={`problem images ` + (image__i + 1)}
                                                                        />

                                                                    ) : (
                                                                        <div className="image-details">
                                                                            <p className="c1">{project.problem[problem][topic][image]}</p>
                                                                        </div>
                                                                    )}
                                                                </React.Fragment>
                                                            ))}
                                                        </div>
                                                    )}
                                                </React.Fragment>


                                            ))}

                                        </div>
                                    ))}
                                </div>
                            )}
                            {project.insights && (
                                <div className="grouper project-details-insights flex flex-col justify-start items-start">
                                    {Object.keys(project.insights).map((insights, insights__i) => (
                                        <React.Fragment key={insights__i}>
                                            {typeof project.insights[insights] === 'object' && (
                                                <div className={`w-full flex ` + `${insights}`}>
                                                    {insights === 'complaints' ? (
                                                        <>
                                                            <h3 className="h3">{project.insights.title}</h3>
                                                            <ol>
                                                                {Object.keys(project.insights[insights]).map((complaint, complaint_i) => (
                                                                    <li key={complaint_i}>
                                                                        <p className="p1">{project.insights[insights][complaint]}</p>
                                                                    </li>
                                                                ))}
                                                            </ol>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {Object.keys(project.insights[insights]).map((result, result_i) => (
                                                                <div className="numbers-details flex flex-row items-center w-full" key={result_i}>
                                                                    <h3 className="h3">{project.insights[insights][result].split('--')[0]}</h3>
                                                                    <p className="p1">{project.insights[insights][result].split('--')[1]}</p>
                                                                </div>
                                                            ))}
                                                        </>
                                                    )}
                                                </div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            )}
                            {project.understand && (
                                <div className="grouper project-details-understand flex flex-row justify-start items-start">
                                    {Object.keys(project.understand).map((understand, understand__i) => (
                                        <div className={`flex flex-col project-details-understand-section ` + `${understand}`} key={understand__i}>
                                            {Object.keys(project.understand[understand]).map((step, step__i) => (
                                                <React.Fragment key={step__i}>
                                                    {typeof project.understand[understand][step] !== 'object' ? (
                                                        <>
                                                            {understand === 'hmws' && (
                                                                <h4 className="h3">{project.understand[understand][step]}</h4>
                                                            )}
                                                        </>
                                                    ) : (
                                                        <ol key={step__i}>
                                                            {Object.keys(project.understand[understand][step]).map((list, list__i) => (
                                                                <li key={list__i}>
                                                                    <p className={`${understand === 'constraints' ? 'p2' : 'p1'}`}>{project.understand[understand][step][list]}</p>
                                                                </li>
                                                            ))}
                                                        </ol>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                            {project.users && (
                                <div className="grouper project-details-user flex flex-col justify-start items-start">
                                    {Object.keys(project.users).map((section, section__i) => (
                                        <React.Fragment key={section__i}>
                                            {typeof project.users[section] === 'object' ? (
                                                <div className={`w-full flex ` + `${section}`}>
                                                    {Object.keys(project.users[section]).map((topic, topic__i) => (
                                                        <React.Fragment key={topic__i}>
                                                            {typeof project.users[section][topic] === 'object' && (
                                                                <div className="user-persona-details flex flex-col">
                                                                    <div className="user-persona-details-person flex flex-row items-center">
                                                                        <Image
                                                                            src={project.users[section][topic].image}
                                                                            hash={"LTHVesjFX.bw00axt7bH~qbbVsn$"}
                                                                            alt={`${section}` + (topic__i + 1)}
                                                                        />
                                                                        <div className="user-persona-details-person-dels flex flex-col">
                                                                            <h4 className="h4">{project.users[section][topic].name}</h4>
                                                                            <p className="p2">{project.users[section][topic].age}, {project.users[section][topic].occupation}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="user-persona-details-quote">
                                                                        <p className="p1">{project.users[section][topic].quote}</p>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            ) : (
                                                <h3 className="h3">{project.users[section]}</h3>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            )}
                            {project.competition && (
                                <div className="grouper project-details-competition flex flex-col justify-start items-start">
                                    {Object.keys(project.competition).map((section, section__i) => (
                                        <React.Fragment key={section__i}>
                                            {typeof project.competition[section] === 'object' ? (
                                                <div className={`w-full flex ` + `${section}`} key={section__i}>
                                                    {Object.keys(project.competition[section]).map((competitor, competitor__i) => (
                                                        <div className="competitors-info flex flex-col" key={competitor__i}>
                                                            {Object.keys(project.competition[section][competitor]).map((data, data__i) => (
                                                                <React.Fragment key={data__i}>
                                                                    {typeof project.competition[section][competitor][data] === 'object' ? (
                                                                        <ol>
                                                                            {Object.keys(project.competition[section][competitor][data]).map((doing, doing__i) => (
                                                                                <li key={doing__i}>
                                                                                    <p className="p1">{project.competition[section][competitor][data][doing]}</p>
                                                                                </li>
                                                                            ))}
                                                                        </ol>
                                                                    ) : (
                                                                        <img
                                                                            className='competitorLogo'
                                                                            src={project.competition[section][competitor][data]}
                                                                            alt={`${competitor}'s` + ` logo`}
                                                                        />
                                                                    )}
                                                                </React.Fragment>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <h3 className="h3">{project.competition[section]}</h3>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            )}
                            {project.ideas && (
                                <div className="grouper project-details-ideas flex flex-col justify-start items-start">
                                    <div className="flex flex-col project-details-ideas-section">
                                        {Object.keys(project.ideas).map((section, section__i) => (
                                            <React.Fragment key={section__i}>
                                                {typeof project.ideas[section] !== 'object' ? (
                                                    <h4 className="h3">{project.ideas[section]}</h4>
                                                ) : (
                                                    <ol>
                                                        {Object.keys(project.ideas[section]).map((idea, idea__i) => (
                                                            <li key={idea__i}>
                                                                <p className="p1">{project.ideas[section][idea]}</p>
                                                            </li>
                                                        ))}
                                                    </ol>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {project.flow && (
                                <div className="grouper project-details-flow flex flex-col justify-start items-start">
                                    {Object.keys(project.flow).map((image, image__i) => (
                                        <div className="project-details-flow-image flex flex-col" key={image__i}>
                                            <h4 className="h3">Step {image__i + 1}: {(image__i + 1) === 1 ? "Outlining the plan" : "Adding the important steps"}</h4>
                                            <Image
                                                className='flowImage'
                                                hash={"L2RC[89a?uWB00R*00ae00kq_3jF"}
                                                src={project.flow[image]}
                                                alt={`Flow step ` + (image__i + 1)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                            {project.sketches && (
                                <div className="grouper project-details-sketches flex flex-col justify-start items-start">
                                    {Object.keys(project.sketches).map((section, section__i) => (
                                        <React.Fragment key={section__i}>
                                            {typeof project.sketches[section] === 'object' ? (
                                                <div className={`w-full flex flex-wrap project-details-sketches-images ` + `${section}`}>
                                                    {Object.keys(project.sketches[section]).map((link, link__i) => (
                                                        <React.Fragment key={link__i}>
                                                            {typeof project.sketches[section][link] === 'object' && (
                                                                <div className="project-details-sketches-images-details flex flex-col">
                                                                    <Image
                                                                        src={project.sketches[section][link].images}
                                                                        hash={"L2RC[89a?uWB00R*00ae00kq_3jF"}
                                                                        alt={`${section}` + (link__i)}
                                                                    />
                                                                    <p className="c1">{project.sketches[section][link].description}</p>
                                                                </div>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            ) : (
                                                <h3 className="h3">{project.sketches[section]}</h3>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            )}
                            {project.wireframes && (
                                <div className="grouper project-details-wireframes flex flex-col justify-start items-start">
                                    {Object.keys(project.wireframes).map((sizes, sizes__i) => (
                                        <div className={`wireframes-holder flex flex-col ` + `${sizes}`} key={sizes__i}>
                                            {Object.keys(project.wireframes[sizes]).map((section, section__i) => (
                                                <React.Fragment key={section__i}>
                                                    {typeof project.wireframes[sizes][section] === 'object' ? (
                                                        <div className={`w-full flex flex-wrap project-details-wireframes-images ` + `${sizes}`}>
                                                            {Object.keys(project.wireframes[sizes][section]).map((link, link__i) => (
                                                                <React.Fragment key={link__i}>
                                                                    {typeof project.wireframes[sizes][section][link] === 'object' && (
                                                                        <div className="project-details-wireframes-images-details flex flex-col">
                                                                            <Image
                                                                                src={project.wireframes[sizes][section][link].images}
                                                                                hash={"L2RC[89a?uWB00R*00ae00kq_3jF"}
                                                                                alt={`${sizes}` + `wireframe` + (link__i + 1)}
                                                                            />
                                                                            <p className="c1">{project.wireframes[sizes][section][link].description}</p>
                                                                        </div>
                                                                    )}
                                                                </React.Fragment>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        project.wireframes[sizes][section] !== '' && (
                                                            <h3 className="h3">{project.wireframes[sizes][section]}</h3>
                                                        )
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                            {project.testing && (
                                <div className="grouper project-details-insights testing flex flex-col justify-start items-start">
                                    {Object.keys(project.testing).map((insights, insights__i) => (
                                        <React.Fragment key={insights__i}>
                                            {typeof project.testing[insights] === 'object' && (
                                                <div className={`w-full flex ` + `${insights}`}>
                                                    {insights === 'complaints' ? (
                                                        <>
                                                            <h3 className="h3">{project.testing.title}</h3>
                                                            <ol>
                                                                {Object.keys(project.testing[insights]).map((complaint, complaint_i) => (
                                                                    <li key={complaint_i}>
                                                                        <p className="p1">{project.testing[insights][complaint]}</p>
                                                                    </li>
                                                                ))}
                                                            </ol>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {Object.keys(project.testing[insights]).map((result, result_i) => (
                                                                <div className="numbers-details flex flex-row items-center w-full" key={result_i}>
                                                                    <h3 className="h3">{project.testing[insights][result].split('--')[0]}</h3>
                                                                    <p className="p1">{project.testing[insights][result].split('--')[1]}</p>
                                                                </div>
                                                            ))}
                                                        </>
                                                    )}
                                                </div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            )}
                            {project.update && (
                                <div className="grouper project-details-updates flex flex-col justify-start items-start">
                                    {Object.keys(project.update).map((section, section__i) => (
                                        <React.Fragment key={section__i}>
                                            {typeof project.update[section] === 'object' ? (
                                                <div className={`w-full flex flex-wrap project-details-updates-images ` + `${section}`}>
                                                    {Object.keys(project.update[section]).map((image, image__i) => (
                                                        <React.Fragment key={image__i}>
                                                            <div className="project-details-updates-images-details flex flex-col">
                                                                <Image
                                                                    src={project.update[section][image]}
                                                                    hash={"L2RC[89a?uWB00R*00ae00kq_3jF"}
                                                                    alt={`${section}` + (image__i)}
                                                                />
                                                            </div>
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            ) : (
                                                <h3 className="h3">{project.update[section]}</h3>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            )}
                        </>
                    }
                </article>
            </section>

        </>
    )
}

export default Project;
