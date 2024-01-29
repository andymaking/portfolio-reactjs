import React, { useEffect, useState, useRef } from "react";
import { useParams } from 'react-router-dom';
import { createPortal } from 'react-dom';
import supabase from '../config/supaBaseClient';

import Image from '../components/Image';
import Loading from '../components/Loading';
import NoLoad from '../components/NoLoad';
import OtherProjects from "../components/OtherProjects";
import ProjectData from "../components/ProjectsData";


const CaseStudy = () => {
    const { projectId } = useParams();

    const parentRef = useRef(null);
    const [classNamesList, setClassNamesList] = useState([]);
    const [outlineOpen, setOutlineOpen] = useState(false);

    const handleOutlineOpen = () => {
        setOutlineOpen(true);
    };

    const handleOutlineOpenClose = () => {
        setOutlineOpen(false);
    };

    const scroller = (e) => {
        var classer = e.currentTarget.textContent;
        var goToSection = classer.charAt(0).toLowerCase() + classer.slice(1).replaceAll(' ', '_');
        const targetDiv = document.querySelector(`.` + `${goToSection}`);
        if (targetDiv) {
            targetDiv.scrollIntoView({ behavior: 'smooth' });
        }
        setOutlineOpen(false);
    };

    const [fetchError, setFetchError] = useState(null);
    const [project, setProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                const { data, error } = await supabase
                    .from('projects')
                    .select()
                    .eq('uniqueid', projectId);

                if (error) {
                    setFetchError('Could not fetch the data');
                    setProject(null);
                    console.error(error);
                }

                if (data) {
                    setProject(data);
                    setFetchError(null);
                }
            } catch (error) {
                setFetchError('Could not fetch the data');
                setProject(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjectData();

    }, [projectId]);


    useEffect(() => {
        if (project === undefined || project === null) {
            document.title = 'loading project...';
        } else {
            if (project.length > 0) {
                document.title = `${project[0].name} by Jude Joshua | Designing User Experiences for Increased conversions.`;
            } else {
                document.title = 'Error! This Project by Jude Joshua does not exist.';
            }
        }
    }, [project]);


    useEffect(() => {                           //---------------------------outline
        if (project && project.length > 0) {
            const parentDiv = parentRef.current;

            if (parentDiv) {
                const childrenDivs = Array.from(parentDiv.children);

                const classNames = childrenDivs
                    .filter(child => child.className.includes('details-section'))
                    .map(child => child.className.split(' ').pop().replace(/_/g, ' ').replace(/^\w/, c => c.toUpperCase()));

                // Remove the first element from the array
                classNames.shift();

                setClassNamesList(classNames);
            }
        }
    }, [project]);

    const projectDetails = ProjectData.find(projects => projects.uniqueId === projectId);

    return (
        <>
            {isLoading && <Loading className="">loading details</Loading>}
            {fetchError && (
                <NoLoad />
            )}
            {!isLoading && !fetchError && (
                <>
                    <header className={`landing w-full flex flex-col items-center project-head intro ` + `${outlineOpen ? ' case__overlayed' : ''}`}>
                        <div className="head w-full flex flex-col items-start justify-start">
                            {
                                project.length > 0 ? (
                                    <>
                                        <div className="head-text w-full flex flex-row items-start justify-start">
                                            <div className="head-text-top w-full">
                                                <h3 className="h2 text-left">
                                                    {project[0].name}
                                                </h3>
                                                <p className="p2 text-left">
                                                    {project[0].type}
                                                </p>
                                            </div>
                                            <div className="head-text-top right w-50">
                                                <h4 className="h4 text-left">
                                                    {project[0].title}
                                                </h4>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="not-found flex flex-col justify-center items-center w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 396 396" fill="none">
                                            <path d="M86.2463 0.746219C54.8306 -1.12907 23.7948 15.4434 8.97515 45.1428C-10.7819 84.742 5.63668 132.958 45.5381 152.603L128.716 193.523C118.916 222.986 126.792 256.776 151.587 278.644L261.128 375.206C294.39 404.534 345.486 401.568 375.046 368.554C404.609 335.54 401.613 284.762 368.352 255.434L316.592 209.804L307.25 201.53L290.602 220.145L299.991 228.419L351.751 274.049C374.965 294.517 377 328.964 356.367 352.007C335.732 375.051 300.941 377.107 277.729 356.639L168.188 260.029C151.795 245.573 146.24 224.206 151.499 204.747L176.558 217.078C216.459 236.724 265.019 220.535 284.779 180.936C294.466 161.515 295.544 139.958 289.339 120.818L285.534 108.996L261.693 116.605L265.547 128.428C269.828 141.634 269.142 156.371 262.384 169.913C248.606 197.525 215.591 208.557 187.696 194.823L163.123 182.694C163.369 182.497 163.394 182.267 163.567 182.07C175.08 169.211 190.958 163.032 206.905 163.475L219.416 163.788L220.131 138.925L207.621 138.612C184.619 137.97 161.393 147.08 144.878 165.524C143.176 167.421 141.957 169.561 140.471 171.57L56.6639 130.299C28.7692 116.565 17.6261 83.7785 31.402 56.1658C45.1803 28.5528 78.195 17.5218 106.09 31.2557L179.282 67.2925L190.477 72.8281L201.618 50.5244L190.371 45.0365L117.181 8.95105C107.205 4.03981 96.7035 1.37098 86.2315 0.74573L86.2463 0.746219ZM273.243 19.8291C270.57 19.7778 267.95 20.5792 265.768 22.1157C263.585 23.6522 261.956 25.8431 261.118 28.3671L255.406 44.8853C254.856 46.4326 254.62 48.0726 254.711 49.711C254.802 51.3494 255.218 52.9537 255.935 54.4316C256.652 55.9096 257.656 57.232 258.89 58.3227C260.123 59.4134 261.562 60.2509 263.122 60.7869C264.683 61.3229 266.334 61.5469 267.982 61.4459C269.63 61.345 271.242 60.9211 272.724 60.1987C274.206 59.4763 275.53 58.4696 276.62 57.2366C277.709 56.0036 278.542 54.5687 279.071 53.0143L284.784 36.4963C285.461 34.636 285.682 32.6419 285.429 30.6796C285.175 28.7173 284.454 26.8435 283.326 25.2137C282.197 23.5839 280.694 22.2451 278.94 21.3087C277.187 20.3722 275.234 19.8649 273.243 19.8291ZM328.729 50.7536C325.905 50.856 323.198 51.9058 321.051 53.7319L304.837 67.0096C303.476 68.0153 302.335 69.2855 301.483 70.7429C300.631 72.2004 300.087 73.8147 299.882 75.4878C299.677 77.1609 299.817 78.8579 300.292 80.4758C300.768 82.0936 301.569 83.5986 302.647 84.8992C303.726 86.1999 305.059 87.2691 306.566 88.0419C308.074 88.8147 309.723 89.2749 311.415 89.3947C313.106 89.5145 314.805 89.2913 316.407 88.7388C318.009 88.1862 319.481 87.3158 320.735 86.1803L336.998 72.9036C339.057 71.2709 340.545 69.0341 341.25 66.5118C341.955 63.9896 341.842 61.3104 340.926 58.856C340.009 56.4016 338.337 54.2971 336.147 52.8423C333.957 51.3875 331.362 50.6565 328.729 50.7536ZM350.692 120.507C349.56 120.547 348.439 120.741 347.359 121.082L333.403 125.264C331.826 125.733 330.359 126.507 329.083 127.54C327.808 128.574 326.75 129.847 325.97 131.287C325.191 132.727 324.704 134.306 324.538 135.933C324.373 137.56 324.532 139.204 325.006 140.77C325.48 142.336 326.26 143.793 327.301 145.06C328.343 146.326 329.625 147.376 331.075 148.149C332.525 148.922 334.114 149.404 335.751 149.567C337.389 149.729 339.042 149.569 340.617 149.096L354.623 144.866C357.541 144.01 360.045 142.127 361.667 139.569C363.29 137.012 363.919 133.954 363.437 130.968C362.955 127.983 361.396 125.274 359.05 123.349C356.704 121.423 353.733 120.413 350.692 120.507Z" />
                                        </svg>
                                        <div className="head-text w-full flex flex-row items-center justify-start">
                                            <div className="head-text-top w-full text-center flex flex-col">
                                                <h3 className="h2">
                                                    This project does not exist!
                                                </h3>
                                                <p className="p1">Seems like an error occured and I couldn't find the project you requested.</p>
                                            </div>
                                        </div>

                                    </div>
                                )
                            }
                        </div>
                    </header>
                    <section className={`main w-full flex flex-col items-center` + `${outlineOpen ? ' case__overlayed' : ''}`}>
                        {project.length > 0 && (
                            <>
                                {createPortal(
                                    <div className={`casestudy-outline` + `${outlineOpen ? ' opened' : ''}`}>
                                        <div className="casestudy-outline-opening flex flex-col justify-center items-center">
                                            <div className="half-top flex flex-row justify-center items-center" onClick={handleOutlineOpen}>
                                                <div className="casestudy-outline-opening-bars flex flex-col items-start justify-center">
                                                    <span className="casestudy-outline-opening-bars-span top"></span>
                                                    <span className="casestudy-outline-opening-bars-span mid"></span>
                                                    <span className="casestudy-outline-opening-bars-span last"></span>
                                                </div>
                                                <p className="p2">Outline</p>
                                            </div>
                                            <div className="half-bottom flex flex-row justify-center items-center" onClick={handleOutlineOpenClose}>
                                                <div className="casestudy-outline-opening-minimize-bars flex flex-col items-start justify-center">
                                                    <span className="casestudy-outline-opening-minimize-bars-span left"></span>
                                                    <span className="casestudy-outline-opening-minimize-bars-span right"></span>
                                                </div>
                                                <p className="p2">Minimize</p>
                                            </div>
                                        </div>
                                        <ul>
                                            <li onClick={scroller}>
                                                <p className="p2">
                                                    Intro
                                                </p>
                                            </li>
                                            {classNamesList.map((className, index) => (
                                                <li key={index} onClick={scroller}>
                                                    <p className="p2">
                                                        {className}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>,
                                    document.body
                                )}
                                <article className={`project-details idea w-full flex flex-col ` + `${project[0].name.toLowerCase()}`}>
                                    <div className="grouper project-details-description flex flex-col justify-start items-start" ref={parentRef}>
                                        <div className="details-section project-details-home flex flex-col">
                                            <div className="project-details-cover-image w-full">
                                                <Image
                                                    hash={project[0].coverhash}
                                                    alt={`${project[0].name}` + ` cover image`}
                                                    imageType={'project'}
                                                    src={project[0].imageSrc}
                                                    className='coverImage'
                                                />
                                            </div>
                                            <div className="project-details-description-checker flex flex-row justify-start items-start">
                                                <div className="describe flex flex-col">
                                                    <h4 className="h4">Context</h4>
                                                    <p className="p1">{project[0].description}</p>
                                                </div>
                                                {projectDetails.people &&
                                                    <div className="project-details-description-checker-roles flex flex-row items-start justify-between">
                                                        {Object.keys(projectDetails.people).map((roles, roles__i) => (
                                                            <div className="project-details-description-checker-roles-section flex flex-col" key={roles__i}>
                                                                <h4 className="h4">{roles}</h4>
                                                                {typeof projectDetails.people[roles] === 'object' ? (
                                                                    <div className="project-details-description-checker-roles-section-team flex flex-col">
                                                                        {Object.keys(projectDetails.people[roles]).map((member, team__i) => (
                                                                            <p className="p1" key={team__i}>{projectDetails.people[roles][member]} - {member}</p>
                                                                        ))}
                                                                    </div>
                                                                ) : (
                                                                    <p className="p1">{projectDetails.people[roles]}</p>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        {projectDetails.problem && (
                                            <div className="details-section project-details-problem grid flex-col justify-start items-start project_problem">
                                                {Object.keys(projectDetails.problem).map((problem, problem__i) => (
                                                    <React.Fragment key={problem__i}>

                                                        {Object.keys(projectDetails.problem[problem]).map((topic, topic__i) => (
                                                            <React.Fragment key={topic__i}>
                                                                {typeof projectDetails.problem[problem][topic] !== 'object' ? (
                                                                    <>
                                                                        {topic === 'title' ? (
                                                                            <div className="titler flex flex-col">
                                                                                <p className="p2">The problem:</p>
                                                                                <h3 className="h3">{projectDetails.problem[problem][topic]}</h3>
                                                                            </div>
                                                                        ) : (
                                                                            <p className="p1">{projectDetails.problem[problem][topic]}</p>
                                                                        )}
                                                                    </>
                                                                ) : (
                                                                    <div className="images-image flex flex-col">
                                                                        {Object.keys(projectDetails.problem[problem][topic]).map((state, state__i) => (
                                                                            <React.Fragment key={state__i}>
                                                                                {state === 'image' && (
                                                                                    <Image
                                                                                        className="project-details-cover-image image"
                                                                                        src={projectDetails.problem[problem][topic].image}
                                                                                        hash={projectDetails.problem[problem][topic].hash}
                                                                                        alt={`problem images ` + (state__i + 1)}
                                                                                    />
                                                                                )}
                                                                            </React.Fragment>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </React.Fragment>


                                                        ))}

                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        )}
                                        {projectDetails.insights && (
                                            <div className="details-section project-details-insights flex flex-col justify-start items-start initial_analysis">
                                                {Object.keys(projectDetails.insights).map((insights, insights__i) => (
                                                    <React.Fragment key={insights__i}>
                                                        {typeof projectDetails.insights[insights] === 'object' && (
                                                            <div className={`w-full flex ` + `${insights}`}>
                                                                {insights === 'complaints' ? (
                                                                    <>
                                                                        <h3 className="h3">{projectDetails.insights.title}</h3>
                                                                        <ol>
                                                                            {Object.keys(projectDetails.insights[insights]).map((complaint, complaint_i) => (
                                                                                <li key={complaint_i}>
                                                                                    <p className="p1">{projectDetails.insights[insights][complaint]}</p>
                                                                                </li>
                                                                            ))}
                                                                        </ol>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        {projectDetails.insights[insights] && Object.keys(projectDetails.insights[insights]).length > 0 && (
                                                                            Object.keys(projectDetails.insights[insights]).map((result, result_i) => (
                                                                                <div className="numbers-details flex flex-row items-center w-full" key={result_i}>
                                                                                    <h3 className="h3">{projectDetails.insights[insights][result].split('--')[0]}</h3>
                                                                                    <p className="p1">{projectDetails.insights[insights][result].split('--')[1]}</p>
                                                                                </div>
                                                                            ))
                                                                        )}
                                                                    </>
                                                                )}
                                                            </div>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        )}
                                        {projectDetails.understand && (
                                            <div className="details-section project-details-understand flex flex-row justify-start items-start inquiries">
                                                {Object.keys(projectDetails.understand).map((understand, understand__i) => (
                                                    <div className={`flex flex-col project-details-understand-section ` + `${understand}`} key={understand__i}>
                                                        {Object.keys(projectDetails.understand[understand]).map((step, step__i) => (
                                                            <React.Fragment key={step__i}>
                                                                {typeof projectDetails.understand[understand][step] !== 'object' ? (
                                                                    <>
                                                                        {understand === 'hmws' && (
                                                                            <h4 className="h3">{projectDetails.understand[understand][step]}</h4>
                                                                        )}
                                                                    </>
                                                                ) : (
                                                                    <ol key={step__i}>
                                                                        {Object.keys(projectDetails.understand[understand][step]).map((list, list__i) => (
                                                                            <li key={list__i}>
                                                                                <p className={`${understand === 'constraints' ? 'p2' : 'p1'}`}>{projectDetails.understand[understand][step][list]}</p>
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
                                        {projectDetails.users && (
                                            <div className="details-section project-details-user flex flex-col justify-start items-start user_comprehension">
                                                {Object.keys(projectDetails.users).map((section, section__i) => (
                                                    <React.Fragment key={section__i}>
                                                        {typeof projectDetails.users[section] === 'object' ? (
                                                            <div className={`w-full flex ` + `${section}`}>
                                                                {Object.keys(projectDetails.users[section]).map((topic, topic__i) => (
                                                                    <React.Fragment key={topic__i}>
                                                                        {typeof projectDetails.users[section][topic] === 'object' && (
                                                                            <div className="user-persona-details flex flex-col">
                                                                                <div className="user-persona-details-person flex flex-row items-center">
                                                                                    <div className="image-holder">
                                                                                        <Image
                                                                                            src={projectDetails.users[section][topic].image}
                                                                                            hash={projectDetails.users[section][topic].hash}
                                                                                            alt={`${section}` + (topic__i + 1)}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="user-persona-details-person-dels flex flex-col">
                                                                                        <h4 className="h4">{projectDetails.users[section][topic].name}</h4>
                                                                                        <p className="p2">{projectDetails.users[section][topic].age}, {projectDetails.users[section][topic].occupation}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="user-persona-details-quote">
                                                                                    <p className="p1">{projectDetails.users[section][topic].quote}</p>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </React.Fragment>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <h3 className="h3">{projectDetails.users[section]}</h3>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        )}
                                        {projectDetails.competition && (
                                            <div className="details-section project-details-competition flex flex-col justify-start items-start competitive_pointers">
                                                {Object.keys(projectDetails.competition).map((section, section__i) => (
                                                    <React.Fragment key={section__i}>
                                                        {typeof projectDetails.competition[section] === 'object' ? (
                                                            <div className={`w-full flex ` + `${section}`} key={section__i}>
                                                                {Object.keys(projectDetails.competition[section]).map((competitor, competitor__i) => (
                                                                    <div className="competitors-info flex flex-col" key={competitor__i}>
                                                                        {Object.keys(projectDetails.competition[section][competitor]).map((data, data__i) => (
                                                                            <React.Fragment key={data__i}>
                                                                                {typeof projectDetails.competition[section][competitor][data] === 'object' ? (
                                                                                    <div className="competitorDetails flex flex-col">
                                                                                        <h4 className="h4">{competitor}</h4>
                                                                                        <ol>
                                                                                            {Object.keys(projectDetails.competition[section][competitor][data]).map((doing, doing__i) => (
                                                                                                <li key={doing__i}>
                                                                                                    <p className="p1">{projectDetails.competition[section][competitor][data][doing]}</p>
                                                                                                </li>
                                                                                            ))}
                                                                                        </ol>
                                                                                    </div>
                                                                                ) : (
                                                                                    data === 'screenshot' && (
                                                                                        <div className="competitorImage">
                                                                                            <Image
                                                                                                src={projectDetails.competition[section][competitor].screenshot}
                                                                                                hash={projectDetails.competition[section][competitor].hash}
                                                                                                alt={`${competitor}'s` + ` screenshot`}
                                                                                            />
                                                                                        </div>
                                                                                    )
                                                                                )}
                                                                            </React.Fragment>
                                                                        ))}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <h3 className="h3">{projectDetails.competition[section]}</h3>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        )}
                                        {projectDetails.ideas && (
                                            <div className="details-section project-details-ideas flex flex-col justify-start items-start ideas">
                                                <div className="flex flex-col project-details-ideas-section">
                                                    {Object.keys(projectDetails.ideas).map((section, section__i) => (
                                                        <React.Fragment key={section__i}>
                                                            {typeof projectDetails.ideas[section] !== 'object' ? (
                                                                <h4 className="h3">{projectDetails.ideas[section]}</h4>
                                                            ) : (
                                                                <ol>
                                                                    {Object.keys(projectDetails.ideas[section]).map((idea, idea__i) => (
                                                                        <li key={idea__i}>
                                                                            <p className="p1">{projectDetails.ideas[section][idea]}</p>
                                                                        </li>
                                                                    ))}
                                                                </ol>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {projectDetails.flow && (
                                            <div className="details-section project-details-flow flex flex-row justify-start items-start initial_flows">
                                                {Object.keys(projectDetails.flow).map((flows, flows__i) => (
                                                    <>
                                                        <div className="project-details-flow-image flex flex-col" key={flows__i}>
                                                            <p className="h3">{projectDetails.flow[flows].title}</p>
                                                            <div className="classImage">
                                                                <Image
                                                                    className='flowImage'
                                                                    hash={projectDetails.flow[flows].hash}
                                                                    src={projectDetails.flow[flows].image}
                                                                    alt={`Flow step ` + (flows__i + 1)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </>
                                                ))}
                                            </div>
                                        )}
                                        {projectDetails.sketches && (
                                            <div className="details-section project-details-sketches flex flex-col justify-start items-start sketches">
                                                {Object.keys(projectDetails.sketches).map((section, section__i) => (
                                                    <React.Fragment key={section__i}>
                                                        {typeof projectDetails.sketches[section] === 'object' ? (
                                                            <>
                                                                <div className="project-details-sketches-images-details flex flex-col">
                                                                    <Image
                                                                        src={projectDetails.sketches[section].sketch}
                                                                        hash={projectDetails.sketches[section].hash}
                                                                        alt={`${section}` + (section__i)}
                                                                    />
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <h3 className="h3">{projectDetails.sketches[section]}</h3>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        )}
                                        {projectDetails.wireframes && (
                                            <div className="details-section project-details-wireframes flex flex-col justify-start items-start initial_wireframes">
                                                <h3 className="h3">{projectDetails.wireframes.title}</h3>
                                                {Object.keys(projectDetails.wireframes).map((size, size__i) => (
                                                    (size !== 'title') && (
                                                        <div className={`wireframes-holder flex flex-col ` + `${size}`} key={size__i}>
                                                            <div className={`w-full flex flex-wrap project-details-wireframes-images ` + `${size}`}>
                                                                <div className="project-details-wireframes-images-details flex flex-col">
                                                                    <Image
                                                                        src={projectDetails.wireframes[size].design}
                                                                        hash={projectDetails.wireframes[size].hash}
                                                                        alt={`${size}` + `wireframe` + (size__i + 1)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                ))}
                                            </div>
                                        )}
                                        {projectDetails.testing && (
                                            <div className="details-section project-details-insights testing flex flex-col justify-start items-start testing_101">
                                                {Object.keys(projectDetails.testing).map((insights, insights__i) => (
                                                    <React.Fragment key={insights__i}>
                                                        {typeof projectDetails.testing[insights] === 'object' && (
                                                            <div className={`w-full flex ` + `${insights}`}>
                                                                {insights === 'complaints' ? (
                                                                    <>
                                                                        <h3 className="h3">{projectDetails.testing.title}</h3>
                                                                        <ol>
                                                                            {Object.keys(projectDetails.testing[insights]).map((complaint, complaint_i) => (
                                                                                <li key={complaint_i}>
                                                                                    <p className="p2">{projectDetails.testing[insights][complaint]}</p>
                                                                                </li>
                                                                            ))}
                                                                        </ol>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <h3 className="h3">{projectDetails.testing[insights].title}</h3>
                                                                        <div className="numbers-flex flex flex-row">
                                                                            {Object.keys(projectDetails.testing[insights]).map((rdata, rdata__i) => (
                                                                                rdata !== 'title' && (
                                                                                    <div className="numbers-details flex flex-row items-center w-full" key={rdata__i}>
                                                                                        <h3 className="h3">{projectDetails.testing[insights][rdata].split('--')[0]}</h3>
                                                                                        <p className="p1">{projectDetails.testing[insights][rdata].split('--')[1]}</p>
                                                                                    </div>
                                                                                )
                                                                            ))}
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </div>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        )}
                                        {projectDetails.update && (
                                            <div className="details-section project-details-updates flex flex-col justify-start items-start idea_updates">
                                                {Object.keys(projectDetails.update).map((section, section__i) => (
                                                    <React.Fragment key={section__i}>
                                                        {typeof projectDetails.update[section] === 'object' ? (
                                                            <div className={`w-full flex flex-wrap project-details-updates-images ` + `${section}`}>
                                                                <Image
                                                                    src={projectDetails.update[section].img}
                                                                    hash={projectDetails.update[section].hash}
                                                                    alt={`${section}` + (section__i)}
                                                                />
                                                            </div>
                                                        ) : (
                                                            <h3 className="h3">{projectDetails.update[section]}</h3>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        )}
                                        {projectDetails.branding && (
                                            <div className="details-section project-details-branding flex flex-col justify-start items-start components_&_branding">
                                                <div className="titler flex flex-col">
                                                    <p className="p2">The Brand:</p>
                                                    <div className="daz-title flex flex-row">
                                                        <h3 className="h3">{projectDetails.branding.title}</h3>
                                                        <p className="p1">{projectDetails.branding.describe}</p>
                                                    </div>
                                                </div>
                                                <div className="brand-component flex flex-col">
                                                    <div className="project-details-branding-details w-full flex flex-row">
                                                        <div className="color__list__holder w-full flex flex-row">
                                                            {Object.keys(projectDetails.branding.colors).map((color, color__i) => (
                                                                <React.Fragment key={color__i}>
                                                                    <div className="colors__list flex flex-col justify-end items-start"
                                                                        style={{
                                                                            backgroundColor: "#" + projectDetails.branding.colors[color],
                                                                        }}>
                                                                        <p className="colorate capitalize p2">
                                                                            {color + ":"}
                                                                        </p>
                                                                        <p className="colorate uppercase p2">
                                                                            {"#" + projectDetails.branding.colors[color]}
                                                                        </p>
                                                                    </div>
                                                                </React.Fragment>
                                                            ))}
                                                        </div>
                                                        <div className="type-slaw">
                                                            <Image
                                                                src={projectDetails.branding.typography.image}
                                                                hash={projectDetails.branding.typography.hash}
                                                                alt={"image showing typography used"}
                                                            />
                                                        </div>
                                                    </div>
                                                    {projectDetails.components && (
                                                        <div className="project-details-components-details w-full flex flex-row">
                                                            {Object.keys(projectDetails.components.images).map((image, image__i) => (
                                                                <div className="image-holder" key={image__i}>
                                                                    <Image
                                                                        src={projectDetails.components.images[image__i + 1].image}
                                                                        hash={projectDetails.components.images[image__i + 1].hash}
                                                                        alt={"image showing typography used"}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                        {projectDetails.finalWireframes && (
                                            <div className="details-section project-details-finalWireframes flex flex-col justify-start items-start final_wireframes">
                                                <div className="titler flex flex-col">
                                                    <h3 className="h3">{projectDetails.finalWireframes.title}</h3>
                                                </div>
                                                <div className="project-details-finalWireframes-details w-full flex flex-col">
                                                    {Object.keys(projectDetails.finalWireframes.images).map((image, image__i) => (
                                                        <div className="image-holder" key={image__i}>
                                                            <Image
                                                                src={projectDetails.finalWireframes.images[image__i + 1].image}
                                                                hash={projectDetails.finalWireframes.images[image__i + 1].hash}
                                                                alt={"image showing typography used"}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {projectDetails["final tests"] && (
                                            <div className="details-section project-details-insights testing flex flex-col justify-start items-start final_testing">
                                                <div className="title flex flex-row">
                                                    <h3 className="h3">{projectDetails["final tests"].title}</h3>
                                                    <p className="p1">{projectDetails["final tests"].describe}</p>
                                                </div>
                                                <div className={`w-full flex ` + `list`}>
                                                    <div className="numbers-flex flex flex-row">
                                                        {Object.keys(projectDetails["final tests"].list).map((rdata, rdata__i) => (
                                                            <div className="numbers-details flex flex-row items-center w-full" key={rdata__i}>
                                                                <h3 className="p2">{projectDetails["final tests"].list[rdata]}</h3>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                {projectDetails["final tests"].img && (
                                                    <div className="image-push">
                                                        <div className="w-full">
                                                            <Image
                                                                src={projectDetails["final tests"].img.image}
                                                                hash={projectDetails["final tests"].img.hash}
                                                                alt={`testing image`}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        {projectDetails.stakeholder && (
                                            <div className="details-section project-details-insights review flex flex-row justify-start items-start stakeholder_review">
                                                <div className="title flex flex-col">
                                                    <h3 className="h3">{projectDetails.stakeholder.title}</h3>
                                                </div>
                                                <div className={`w-full flex flex-col ` + `list`}>
                                                    <p className="p1">{projectDetails.stakeholder.describe}</p>
                                                    <ol>
                                                        {Object.keys(projectDetails.stakeholder.list).map((rdata, rdata__i) => (
                                                            <li key={rdata__i}>
                                                                <p className="p1">{projectDetails.stakeholder.list[rdata]}</p>
                                                            </li>
                                                        ))}
                                                    </ol>
                                                </div>
                                            </div>
                                        )}
                                        {projectDetails.tech_constraints && (
                                            <div className="details-section project-details-insights review flex flex-row justify-start items-start technical_constraints">
                                                <div className="title flex flex-col">
                                                    <h3 className="h3">{projectDetails.tech_constraints.title}</h3>
                                                </div>
                                                <div className={`w-full flex flex-col ` + `list`}>
                                                    <p className="p1">{projectDetails.tech_constraints.describe}</p>
                                                    <ol>
                                                        {Object.keys(projectDetails.tech_constraints.list).map((rdata, rdata__i) => (
                                                            <li key={rdata__i}>
                                                                <p className="p1">{projectDetails.tech_constraints.list[rdata]}</p>
                                                            </li>
                                                        ))}
                                                    </ol>
                                                </div>
                                            </div>
                                        )}
                                        {projectDetails.iterations && (
                                            <div className="details-section project-details-insights review flex flex-col justify-start items-start re-iterations">
                                                <div className="title flex flex-col">
                                                    <h3 className="h3">{projectDetails.iterations.title}</h3>
                                                </div>
                                            </div>
                                        )}
                                        {projectDetails.conclusion && (
                                            <div className="details-section project-details-insights review flex flex-row justify-start items-start conclusion">
                                                <div className="title flex flex-col">
                                                    <h3 className="h3">{projectDetails.conclusion.title}</h3>
                                                </div>
                                                <div className={`w-full flex flex-col ` + `list`}>
                                                    <p className="p1">{projectDetails.conclusion.describe}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </article>
                            </>
                        )}

                        <div className="other-projects flex flex-col">
                            <h3 className={`h4` + `${project.length > 0 ? ' text-left' : ' text-center'}`}>Check out these other projects:</h3>
                            <article className="idea w-full flex flex-col">
                                <OtherProjects projectId={projectId} />
                            </article>
                        </div>

                    </section>
                </>
            )
            }
        </>
    );
};

export default CaseStudy;
