import React, { useEffect, useState, useRef } from "react";
import { useParams } from 'react-router-dom';
import { createPortal } from 'react-dom';


import Image from '../components/Image';

import OtherProjects from "../components/OtherProjects";
import ProjectData from "../components/ProjectsData";
import Projects from '../components/Projects';


const CaseStudy = () => {
    const { projectId } = useParams();

    const parentRef = useRef(null);
    const [outlineOpen, setOutlineOpen] = useState(false);

    const handleOutlineOpen = () => {
        setOutlineOpen(true);
    };

    const handleOutlineOpenClose = () => {
        setOutlineOpen(false);
    };

    const outline = (e) => {
        var classer = e.currentTarget.textContent;
        var goToSection = classer.charAt(0).toLowerCase() + classer.slice(1).replaceAll(' ', '_');
        const targetDiv = document.querySelector(`.${goToSection}`);
        if (targetDiv) {
            targetDiv.scrollIntoView({ behavior: 'smooth' });
        }
        setOutlineOpen(false);
    };

    const project = Projects.filter(project => project.uniqueid === projectId);

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

    const projectDetails = ProjectData.find(projects => projects.uniqueId === projectId);
    const projectOutline = Object.keys(projectDetails)
    projectOutline.splice(0,2)

    return (
        <>
            <header className={`landing w-full flex flex-col items-center project-head intro ${outlineOpen ? ' case__overlayed' : ''}`}>
                <div className="head w-full flex flex-col items-start justify-start">
                    {
                        project.length > 0 ? (
                            <>
                                <div className="head-text w-full flex flex-col items-center justify-center">
                                    <div className="head-text-top w-full">
                                        <h2 className="h2 text-left">
                                            {project[0].title}
                                        </h2>
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
                                            This project,<br /><span id='round'>does not exist!</span>
                                        </h3>
                                        <p className="p1">You can try these other projects below...</p>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>
            </header>
            <section className={`main w-full flex flex-col items-center${outlineOpen ? ' case__overlayed' : ''}`}>
                {project.length > 0 && (
                    <>
                        {createPortal(
                            <div className={`casestudy-outline${outlineOpen ? ' opened' : ''}`}>
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
                                    <li onClick={outline}>
                                        <p className="p2">
                                            Intro
                                        </p>
                                    </li>
                                    {Object.keys(projectOutline).map((className, index) => (
                                        <li key={index} onClick={outline}>
                                            <p className="p2">
                                                {projectOutline[className].split(' ').pop().replace(/_/g, ' ').replace(/^\w/, c => c.toUpperCase())}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>,
                            document.body
                        )}
                        <article className={`project-details idea w-full flex flex-col ${project[0].name.toLowerCase()}`}>
                            <div className="grouper project-details-description flex flex-col justify-start items-start" ref={parentRef}>
                                <div className="details-section project-details-home flex flex-col">
                                    <div className="project-details-cover-image w-full">
                                        <Image
                                            src={project[0].casecoverimage}
                                            hash={project[0].casecoverhash}
                                            alt={`${project[0].name} cover image`}
                                            imageType={'project'}
                                            className='coverImage'
                                        />
                                    </div>
                                </div>
                                <div className="details-section project-details-description flex flex-col">
                                    <div className="project-details-description-checker flex flex-col justify-start items-start">
                                        <div className="title flex flex-col">
                                            <h4 className="h4">Context</h4>
                                        </div>
                                        <div className="project-details-description-checker-context flex flex-row">
                                            <div className="project-details-description-checker-context-describe">
                                                <p className="p1">{project[0].description}</p>
                                            </div>
                                            <div className="project-details-description-checker-context-roles flex flex-col items-start justify-between">
                                                <div className="project-details-description-checker-roles-section flex flex-col">
                                                    <h4 className="p1">Project Type</h4>
                                                    <p className="p2">{project[0].type}</p>
                                                </div>
                                                {projectDetails.people &&
                                                    Object.keys(projectDetails.people).map((roles, roles__i) => (
                                                        <div className="project-details-description-checker-context-roles-section flex flex-col" key={roles__i}>
                                                            <h4 className="p1">{roles}</h4>
                                                            {typeof projectDetails.people[roles] === 'object' ? (
                                                                <div className="project-details-description-checker-context-roles-section-team flex flex-col">
                                                                    {Object.keys(projectDetails.people[roles]).map((member, team__i) => (
                                                                        <p className="p2" key={team__i}>{projectDetails.people[roles][member]} - {member}</p>
                                                                    ))}
                                                                </div>
                                                            ) : (
                                                                <p className="p2">{projectDetails.people[roles]}</p>
                                                            )}
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {projectDetails.problem && (
                                    <>
                                        <div className="details-section divider">
                                            <span className="liner"></span>
                                        </div>
                                        <div className="details-section problem project-details-problem flex flex-col justify-start items-start project_problem">
                                            <div className="title flex flex-col">
                                                <div className="titler flex flex-row justify-between">
                                                    <p className="h5">{projectDetails.problem['why']['title']}</p>
                                                    <p className="p1 describer">{projectDetails.problem['why']['details']}</p>
                                                </div>
                                            </div>
                                            <div className="images-image flex flex-col">
                                                {Object.keys(projectDetails.problem['images']).map((state, state__i) => (
                                                    <React.Fragment key={state__i}>
                                                        <div className="images-image-self flex flex-col">
                                                            <Image
                                                                className="project-details-cover-image image"
                                                                src={projectDetails.problem['images'][state].image}
                                                                hash={projectDetails.problem['images'][state].hash}
                                                                alt={`problem images ` + (state__i + 1)}
                                                            />
                                                        </div>
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                                {projectDetails.insights && (
                                    <div className="details-section insights project-details-insights flex flex-col justify-start items-start initial_analysis">
                                        <h4 className="h4 details-section-title">
                                            {projectDetails.insights.title}
                                        </h4>
                                        <div className={`w-full flex complaints`}>
                                            <ol>
                                                {Object.keys(projectDetails.insights['complaints']).map((complaint, complaint_i) => (
                                                    <li className="p1" key={complaint_i}>
                                                        {projectDetails.insights['complaints'][complaint]}
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>
                                        <div className={`w-full flex numbers`}>
                                            {projectDetails.insights['numbers'] && Object.keys(projectDetails.insights['numbers']).length > 0 && (
                                                Object.keys(projectDetails.insights['numbers']).map((result, result_i) => (
                                                    <div className="numbers-details flex flex-row items-center w-full" key={result_i}>
                                                        <h4 className="h4">{projectDetails.insights['numbers'][result].split('--')[0]}</h4>
                                                        <p className="p2">{projectDetails.insights['numbers'][result].split('--')[1]}</p>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                )}
                                {projectDetails.target_users && (
                                    <>
                                        <div className="details-section divider">
                                            <span className="liner"></span>
                                        </div>
                                        <div className="details-section target_users project-details-user flex flex-col justify-start items-start user_comprehension">
                                            <div className="titler flex flex-row justify-between">
                                                <p className="h5">{projectDetails.target_users['head']}</p>
                                                <p className="p1 describer">{projectDetails.target_users['title']}</p>
                                            </div>
                                            <div className={`w-full flex persona`}>
                                                {Object.keys(projectDetails.target_users['persona']).map((topic, topic__i) => (
                                                    <div className="user-persona-details flex flex-row" key={topic__i}>
                                                        <div className="user-persona-details-person-image-holder">
                                                            <Image
                                                                src={projectDetails.target_users['persona'][topic].image}
                                                                hash={projectDetails.target_users['persona'][topic].hash}
                                                                alt={`${'persona'}` + (topic__i + 1)}
                                                            />
                                                        </div>

                                                        <div className="user-persona-details-person flex flex-col w-full items-center justify-between">
                                                            <div className="user-persona-details-person-dels w-full flex flex-col">
                                                                <h4 className="h5">{projectDetails.target_users['persona'][topic].name}</h4>
                                                                <p className="p2">{projectDetails.target_users['persona'][topic].age}, {projectDetails.target_users['persona'][topic].occupation}</p>
                                                            </div>
                                                            <div className="user-persona-details-quote">
                                                                <p className="p2">{projectDetails.target_users['persona'][topic].quote}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                                {projectDetails.understand && (
                                    <>
                                        <div className="details-section divider">
                                            <span className="liner"></span>
                                        </div>
                                        <div className="details-section understand project-details-understand flex flex-col justify-start items-start inquiries">
                                            <div className={`flex flex-row justify-between w-full items-center project-details-understand-section constraints`}>
                                                <h4 className="h4">{projectDetails.understand['hmws']['title']}</h4>
                                                <ol>
                                                    {Object.keys(projectDetails.understand['constraints']['complaints']).map((list, list__i) => (
                                                        <li className={`p2`} key={list__i}>
                                                            {projectDetails.understand['constraints']['complaints'][list]}
                                                        </li>
                                                    ))}
                                                </ol>
                                            </div>
                                            <span className="liner"></span>
                                            <div className="titler flex flex-row justify-between">
                                                <p className="h5">Leaning into the HMWs:</p>
                                                <ol className="describer">
                                                    {Object.keys(projectDetails.understand['hmws']['complaints']).map((list, list__i) => (
                                                        <li className={`p1`} key={list__i}>
                                                            {projectDetails.understand['hmws']['complaints'][list]}
                                                        </li>
                                                    ))}
                                                </ol>
                                            </div>
                                        </div>
                                    </>
                                )}
                                {projectDetails.competition && (
                                    <>
                                        <div className="details-section divider">
                                            <span className="liner"></span>
                                        </div>
                                        <div className="details-section competition project-details-competition flex flex-col justify-start items-center competitive_pointers">
                                            <h4 className="h4 details-section-title text-center">{projectDetails.competition['title']}</h4>
                                            <span className="liner"></span>
                                            <div className={`w-full flex competitors`}>
                                                {Object.keys(projectDetails.competition['competitors']).map((competitor, competitor__i) => (

                                                    <div className="competitors-info flex flex-col" key={competitor__i}>
                                                        <div className="competitorDetails flex flex-col items-start">
                                                            <h5 className="h5" id="round">{competitor}</h5>

                                                            {Object.keys(projectDetails.competition['competitors'][competitor]).map((data, data__i) => (
                                                                data === 'list' && (
                                                                    <ol key={data__i}>
                                                                        {Object.keys(projectDetails.competition['competitors'][competitor][data]).map((doing, doing__i) => (
                                                                            <li className="p1" key={doing__i}>
                                                                                {projectDetails.competition['competitors'][competitor][data][doing]}
                                                                            </li>
                                                                        ))}
                                                                    </ol>
                                                                )
                                                            ))}
                                                        </div>
                                                        {Object.keys(projectDetails.competition['competitors'][competitor]).map((data, data__i) => (
                                                            data === 'screenshot' && (
                                                                <div className="competitorImage" key={data__i}>
                                                                    <Image
                                                                        src={projectDetails.competition['competitors'][competitor].screenshot}
                                                                        hash={projectDetails.competition['competitors'][competitor].hash}
                                                                        alt={`${competitor}'s screenshot`}
                                                                    />
                                                                </div>
                                                            )
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                                {projectDetails.ideas && (
                                    <>
                                        <div className="details-section divider">
                                            <span className="liner"></span>
                                        </div>
                                        <div className="details-section ideas project-details-ideas flex flex-col justify-start items-start ideas">
                                            <div className="titler w-full flex flex-row justify-between project-details-ideas-section">
                                                <p className="h5">{projectDetails.ideas['title']}</p>
                                                <div className="describer flex flex-col">
                                                    <p className="p1">{projectDetails.ideas['details']}</p>
                                                    <ol>
                                                        {Object.keys(projectDetails.ideas['ideaList']).map((idea, idea__i) => (
                                                            <li className="p1" key={idea__i}>
                                                                {projectDetails.ideas['ideaList'][idea]}
                                                            </li>
                                                        ))}
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                                {projectDetails.inital_user_flows && (
                                    <>
                                        <div className="details-section divider">
                                            <span className="liner"></span>
                                        </div>
                                        <div className="details-section inital_user_flows project-details-flow flex flex-row justify-start items-start initial_flows">
                                            {Object.keys(projectDetails.inital_user_flows).map((flows, flows__i) => (
                                                <div className="project-details-flow-image flex flex-col" key={flows__i}>
                                                    <h5 className="h5">{projectDetails.inital_user_flows[flows].title}</h5>
                                                    <div className="classImage">
                                                        <Image
                                                            className='flowImage'
                                                            hash={projectDetails.inital_user_flows[flows].hash}
                                                            src={projectDetails.inital_user_flows[flows].image}
                                                            alt={`Flow step ` + (flows__i + 1)}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                                {projectDetails.sketches && (
                                    <div className="details-section sketches project-details-sketches flex flex-col justify-start items-start sketches">
                                        <div className="titler">
                                            <p className="h5 details-section-title">{projectDetails.sketches['title']}</p>
                                        </div>
                                        {Object.keys(projectDetails.sketches).map((section, section__i) => (
                                            <React.Fragment key={section__i}>
                                                {typeof projectDetails.sketches[section] === 'object' && (
                                                    <>
                                                        <div className="project-details-sketches-images-details flex flex-col">
                                                            <Image
                                                                src={projectDetails.sketches[section].sketch}
                                                                hash={projectDetails.sketches[section].hash}
                                                                alt={`${section}` + (section__i)}
                                                            />
                                                        </div>
                                                    </>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                )}
                                {projectDetails.wireframes && (
                                    <div className="details-section wireframes project-details-wireframes flex flex-col justify-start items-start initial_wireframes">
                                        <div className="titler">
                                            <h5 className="h5 details-section-title">{projectDetails.wireframes.title}</h5>
                                        </div>
                                        <div className="screens-holder flex flex-col">
                                            {Object.keys(projectDetails.wireframes).map((size, size__i) => (
                                                (size !== 'title') && (
                                                    <div className={`wireframes-holder flex flex-col ${size}`} key={size__i}>
                                                        <div className={`w-full flex flex-wrap project-details-wireframes-images ${size}`}>
                                                            <p className="p2" id="round">{projectDetails.wireframes[size].sub}</p>
                                                            <div className="project-details-wireframes-images-details flex flex-col">
                                                                <Image
                                                                    src={projectDetails.wireframes[size].design}
                                                                    hash={projectDetails.wireframes[size].hash}
                                                                    alt={`${size}wireframe` + (size__i + 1)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {projectDetails.testing && (
                                    <>
                                        <div className="details-section divider">
                                            <span className="liner"></span>
                                        </div>
                                        <div className="details-section testing project-details-insights testing flex flex-col justify-start items-start testing_101">
                                            <div className={`w-full flex complaints flex-row justify-between`}>
                                                <h5 className="h5">{projectDetails.testing.title}</h5>
                                                <ol>
                                                    {Object.keys(projectDetails.testing['compliants']).map((complaint, complaint_i) => (
                                                        <li className="p2" key={complaint_i}>
                                                            {projectDetails.testing['compliants'][complaint]}
                                                        </li>
                                                    ))}
                                                </ol>
                                            </div>
                                            <span className="liner"></span>
                                            <div className={`w-full flex numbers justify-center items-center`}>
                                                <p className="h4 text-left">{projectDetails.testing['numbers']['title']}</p>
                                                <div className="numbers-flex flex flex-row w-full">
                                                    {Object.keys(projectDetails.testing['numbers']).map((rdata, rdata__i) => (
                                                        rdata !== 'title' && (
                                                            <div className="numbers-details flex flex-row items-center w-full" key={rdata__i}>
                                                                <h4 className="h4">{projectDetails.testing['numbers'][rdata].split('--')[0]}</h4>
                                                                <p className="p2">{projectDetails.testing['numbers'][rdata].split('--')[1]}</p>
                                                            </div>
                                                        )
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                                {projectDetails.final_user_flows && (
                                    <>
                                        <div className="details-section divider">
                                            <span className="liner"></span>
                                        </div>
                                        <div className="details-section final_user_flows final_user_flows project-details-updates flex flex-col justify-start items-start idea_updates">
                                            {Object.keys(projectDetails.final_user_flows).map((section, section__i) => (
                                                <React.Fragment key={section__i}>
                                                    {typeof projectDetails.final_user_flows[section] === 'object' ? (
                                                        <div className={`w-full flex flex-wrap project-details-updates-images ${section}`}>
                                                            <Image
                                                                src={projectDetails.final_user_flows[section].img}
                                                                hash={projectDetails.final_user_flows[section].hash}
                                                                alt={`${section}` + (section__i)}
                                                            />
                                                        </div>
                                                    ) : (
                                                        <h5 className="h5 details-section-title">{projectDetails.final_user_flows[section]}</h5>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </>
                                )}
                                {projectDetails.branding && (
                                    <>
                                        <div className="details-section divider">
                                            <span className="liner"></span>
                                        </div>
                                        <div className="details-section branding components project-details-branding flex flex-col justify-start items-start components_&_branding">
                                            <div className="titler flex flex-row justify-between">
                                                <p className="p2">The Brand:</p>
                                                <p className="p1 describer">{projectDetails.branding.describe}</p>
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
                                    </>
                                )}
                                {projectDetails.final_wireframes && (
                                    <div className="details-section final_wireframes project-details-finalWireframes flex flex-col justify-start items-start final_wireframes">
                                        <div className="titler flex flex-col">
                                            <h5 className="h5 details-section-title">{projectDetails.final_wireframes.title}</h5>
                                        </div>
                                        <div className="project-details-finalWireframes-details w-full flex flex-col">
                                            {Object.keys(projectDetails.final_wireframes.images).map((imager, imager__i) => (
                                                <>
                                                    <span className="liner secondary"></span>

                                                    <div className="flex flex-col full-images-section" key={imager__i}>
                                                        <p>{projectDetails.final_wireframes.images[imager].title}</p>
                                                        <div className="flex flex-row full-images-section-images" key={imager__i}>
                                                            {Object.keys(projectDetails.final_wireframes.images[imager].img).map((image, image__i) => (
                                                                <div className="full-images-section-images-holder flex flex-col" key={image__i}>
                                                                    <Image
                                                                        key={image__i}
                                                                        src={projectDetails.final_wireframes.images[imager].img[image].image}
                                                                        hash={projectDetails.final_wireframes.images[imager].img[image].hash}
                                                                        alt={`${projectDetails.final_wireframes.images[imager].img[image]} image`}
                                                                    />
                                                                    <p className="p2">{projectDetails.final_wireframes.images[imager].img[image].sub}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {projectDetails.final_tests && (
                                    <div className="details-section final_tests project-details-insights testing flex flex-col justify-start items-start final_testing">
                                        <div className="titler flex flex-row justify-between">
                                            <div className="flex flex-row">
                                                <p className="h5">{projectDetails.final_tests.title}</p>
                                                <ol className="describer">
                                                    {Object.keys(projectDetails.final_tests.list).map((rdata, rdata__i) => (
                                                        <li className="p1" key={rdata__i}>
                                                            {projectDetails.final_tests.list[rdata]}
                                                        </li>
                                                    ))}
                                                </ol>
                                            </div>
                                        </div>
                                        {projectDetails.final_tests.describe && (
                                            <div className="titler flex flex-col justify-between">
                                                <span className="liner"></span>
                                                <div className="filler flex flex-row justify-between">
                                                    <p className="p2">Key Insights</p>
                                                    <p className="p1 describer">{projectDetails.final_tests.describe}</p>
                                                </div>
                                            </div>
                                        )}
                                        {projectDetails.final_tests.img && (
                                            <div className="image-push">
                                                <div className="w-full">
                                                    <Image
                                                        src={projectDetails.final_tests.img.image}
                                                        hash={projectDetails.final_tests.img.hash}
                                                        alt={`testing image`}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                                {projectDetails.stakeholder_constraints && (
                                    <>
                                        <div className="details-section divider">
                                            <span className="liner"></span>
                                        </div>
                                        <div className="details-section stakeholder_constraints project-details-insights review flex flex-row justify-start items-start stakeholder_review">
                                            <div className="title flex flex-col">
                                                <h5 className="h5">{projectDetails.stakeholder_constraints.title}</h5>
                                            </div>
                                            <div className={`w-full flex flex-col list describer`}>
                                                <p className="p1">{projectDetails.stakeholder_constraints.describe}</p>
                                                <ol>
                                                    {Object.keys(projectDetails.stakeholder_constraints.list).map((rdata, rdata__i) => (
                                                        <li key={rdata__i}>
                                                            <p className="p1">{projectDetails.stakeholder_constraints.list[rdata]}</p>
                                                        </li>
                                                    ))}
                                                </ol>
                                            </div>
                                        </div>
                                    </>
                                )}
                                {projectDetails.tech_constraints && (
                                    <>
                                        <div className="details-section divider">
                                            <span className="liner"></span>
                                        </div>
                                        <div className="details-section tech_constraints project-details-insights review flex flex-row justify-start items-start technical_constraints">
                                            <div className="title flex flex-col">
                                                <h5 className="h5">{projectDetails.tech_constraints.title}</h5>
                                            </div>
                                            <div className={`w-full flex flex-col list describer`}>
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
                                    </>
                                )}
                                {projectDetails.iterations && (
                                    <div className="details-section iterations project-details-re-iterations review flex flex-col justify-start items-start re-iterations">
                                        <div className="project-details-re-iterations-title flex flex-row">
                                            <p className="p1">{projectDetails.iterations.intro.title}</p>
                                            <div className="describer">
                                                <Image
                                                    src={projectDetails.iterations.intro.img.image}
                                                    hash={projectDetails.iterations.intro.img.hash}
                                                    alt={`intro image`}
                                                />
                                            </div>
                                        </div>
                                        <span className="liner secondary"></span>
                                        {Object.keys(projectDetails.iterations.images).map((imager, imager__i) => (
                                            <div className="flex flex-col full-images-section" key={imager__i}>
                                                <p>{projectDetails.iterations.images[imager].title}</p>
                                                <div className="flex flex-row full-images-section-images" key={imager__i}>
                                                    {Object.keys(projectDetails.iterations.images[imager].img).map((image, image__i) => (
                                                        <div className="full-images-section-images-holder flex flex-col" key={image__i}>
                                                            <Image
                                                                key={image__i}
                                                                src={projectDetails.iterations.images[imager].img[image].image}
                                                                hash={projectDetails.iterations.images[imager].img[image].hash}
                                                                alt={`${projectDetails.iterations.images[imager].img[image]} image`}
                                                            />
                                                            <p className="p2">{projectDetails.iterations.images[imager].img[image].sub}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {projectDetails.conclusion && (
                                    <div className="details-section conclusion project-details-insights review flex flex-row justify-start items-start conclusion">
                                        <div className="title flex flex-col">
                                            <h5 className="h5">{projectDetails.conclusion.title}</h5>
                                        </div>
                                        <div className={`w-full flex flex-col list`}>
                                            <p className="p1">{projectDetails.conclusion.describe}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </article>
                    </>
                )}


                <div className="other-projects flex flex-col w-full">
                    <div className="other-projects-divider">
                        <span className="liner"></span>
                    </div>
                    <div className="other-projects-details flex flex-col">
                        {project.length > 0 && (
                            <p className={`other-projects-details-head h5 ${project.length > 0 ? 'text-left' : 'text-center'}`}>Check out these other projects</p>
                        )}
                        <article className="idea w-full flex flex-col">
                            <OtherProjects projectId={projectId} />
                        </article>
                    </div>
                </div>

            </section >

        </>
    );
};

export default CaseStudy;
