import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import supabase from '../config/supaBaseClient';

import Image from '../components/Image';
import Loading from '../components/Loading';
import OtherProjects from "../components/OtherProjects";

const CaseStudy = () => {
    const { projectId } = useParams();

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

    return (
        <>
            {isLoading && <Loading className="">loading</Loading>}
            {!isLoading && !fetchError && (
                <>
                    <header className="landing w-full flex flex-col items-center project-head">
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
                    <section className="main w-full flex flex-col items-center">

                        {project.length > 0 && (
                            <article className={`project-details idea w-full flex flex-col ` + `${project[0].name.toLowerCase()}`}>
                                <div className="grouper project-details-description flex flex-col justify-start items-start">
                                    <div className="project-details-cover-image w-full">
                                        <Image
                                            src={null}
                                            hash={project[0].coverhash}
                                            alt={`${project[0].name}` + ` cover image`}
                                            imageType={'project'}
                                            cloudSrc={project[0].cloudinary}
                                            className='coverImage'
                                        />
                                    </div>
                                    <div className="project-details-description-checker flex flex-row justify-start items-start">
                                        <div className="describe flex flex-col">
                                            <h4 className="h4">The Client</h4>
                                            <p className="p1">{project[0].description}</p>
                                        </div>
                                        {project.people &&
                                            <div className="project-details-description-checker-roles flex flex-col items-start justify-start">
                                                {Object.keys(project.people).map((roles, roles__i) => (
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
                                        }
                                    </div>
                                </div>
                            </article>
                        )}

                        <div className="other-projects flex flex-col">
                            <h3 className={`h4` + `${project.length > 0 ? ' text-left' : ' text-center'}`}>Check out these other projects:</h3>
                            <article className="idea w-full flex flex-col">
                                <OtherProjects projectId={projectId} />
                            </article>
                        </div>

                    </section>
                </>
            )}
        </>
    );
};

export default CaseStudy;
