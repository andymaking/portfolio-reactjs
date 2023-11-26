import React, { useEffect, useState } from 'react';
import supabase from '../config/supaBaseClient';

import ProjectList from '../components/ProjectList';
import Lists from '../components/Lists';
import Image from '../components/Image';
import Loading from '../components/Loading';

import EmojiSmile from "../assets/images/Smiling Face.svg";
import EmojiRocket from "../assets/images/Rocket.svg";
import {ReactComponent as PushDown} from "../assets/images/mobile-down.svg";
import EmojiSmileHeart from "../assets/images/Smiling Face With Heart Eyes.svg";
import EmojiSmileTear from "../assets/images/Smiling Face With Tear.svg";
import HomeImage from "../assets/images/home.webp";
import Reviewer01 from "../assets/images/review-1.webp";
import Reviewer02 from "../assets/images/review-2.webp";

import { ArrowDown, ArrowUp } from "@phosphor-icons/react";

export default function Home() {
    const [fetchError, setFetchError] = useState(null);
    const [projects, setProjects] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data, error } = await supabase
                    .from('projects')
                    .select()
                    .is('featured', 'true')
                    .order('id', { ascending: true });

                if (error) {
                    setFetchError('Could not fetch the data');
                    setProjects(null);
                    console.error(error);
                }

                if (data) {
                    setProjects(data);
                    setFetchError(null);
                }
            } catch (error) {
                setFetchError('Could not fetch the data');
                setProjects(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    useEffect(() => {
        document.title = 'Jude Joshua | Designing User Experiences for Increased conversions.';
    }, []);

    const reviews = [
        {
            img: Reviewer01,
            hash: "L7B:dGxt0w4n00D%5A?vInyD~DMc",
            name: "Amina Ibrahim",
            position: "SEO Consultant, Prosple",
            content: "I have worked with Jude on several occasions, and I can confidently say that he is an exceptional product designer. He has a remarkable ability to grasp the product idea quickly and then works diligently to ensure that it aligns with the users' needs and developers' requirements.\n\nJude is also highly patient and willing to collaborate with clients to guarantee that their expectations are met. His work is consistently of outstanding quality, and his designs have consistently met the clients' standards.",
        },
        {
            img: Reviewer02,
            hash: "LHD+e~n$00oe00oz_4e.x^RjRioz",
            name: "Victoria Oniyide",
            position: "Communications Manager, Paaira",
            content: "I recently had the pleasure of working with Jude, a digital product designer who specializes in improving digital user experiences. He is highly professional and knowledgeable about his field.\n\nJude's work is exceptionally meticulous and detailed. He takes the time to test different versions of the product to ensure that it meets all the necessary requirements. His work has resulted in positive feedback from both users and developers, and I would recommend him without hesitation.",
        }
    ];

    return (
        <>
            <header className="landing w-full flex flex-col items-center">
                <div className="head">
                    <div className="head-text flex flex-col items-center justify-center">
                        <div className="head-text-top flex flex-col items-center justify-center">
                            <h1 className="h1 w-full text-center">
                                Designing experiences
                                <span className="h4 lighter flex items-center justify-center">user</span>
                            </h1>
                            <h1 className="h1 hightlight text-center flex flex-row justify-left">
                                <span>for increased conversions.</span>
                            </h1>
                        </div>
                        <div className="head-text-club w-full flex flex-row flex-wrap items-end justify-end content-center">
                            <svg className='more' xmlns="http://www.w3.org/2000/svg" fill="none">
                                <path d="M90.2523 32.2228L90.0309 31.2476L90.2523 32.2228ZM6.22871 204.801C6.56813 205.237 7.19647 205.315 7.63215 204.976L14.7319 199.444C15.1676 199.105 15.2456 198.477 14.9062 198.041C14.5668 197.605 13.9385 197.527 13.5028 197.867L7.19187 202.783L2.27533 196.472C1.93591 196.037 1.30758 195.959 0.871898 196.298C0.43622 196.638 0.358185 197.266 0.697602 197.702L6.22871 204.801ZM144.906 0.273531C116.324 0.665417 97.2461 26.8006 89.2617 53.312C85.2559 66.6131 83.9807 80.1724 85.7205 90.9259C87.4511 101.623 92.2496 109.899 100.712 111.9L101.172 109.954C93.9205 108.239 89.3839 101.047 87.6948 90.6065C86.0148 80.2228 87.2351 66.9766 91.1768 53.8888C99.0873 27.6225 117.712 2.64656 144.933 2.27334L144.906 0.273531ZM100.712 111.9C109.164 113.899 117.726 108.371 124.439 99.8586C131.201 91.2846 136.368 79.3654 138.036 67.7693C139.701 56.1972 137.905 44.7156 130.418 37.2791C122.904 29.8149 109.962 26.7224 90.0309 31.2476L90.4737 33.198C110.094 28.7432 122.193 31.9278 129.009 38.6981C135.853 45.4962 137.679 56.2067 136.056 67.4846C134.437 78.7386 129.409 90.3275 122.869 98.6201C116.28 106.974 108.433 111.671 101.172 109.954L100.712 111.9ZM90.0309 31.2476C73.9002 34.91 60.8652 45.5296 50.3361 59.799C39.8091 74.0656 31.7361 92.0462 25.5324 110.58C13.1246 147.647 8.12753 187.136 6.0252 204.063L8.00995 204.31C10.1122 187.383 15.0912 148.073 27.429 111.214C33.598 92.7847 41.5902 75.0202 51.9454 60.9864C62.2987 46.9555 74.963 36.7196 90.4737 33.198L90.0309 31.2476Z" />
                            </svg>
                            <div className="head-text-club-image">
                                <Image
                                    src={HomeImage}
                                    hash={"LdKd}Q%ipxxu4?S$NKZ~.TM_nOs,"}
                                    alt={"Jude Joshua smiling with his left hand on his head"}
                                    imageType={''}
                                    cloudSrc={''}
                                />
                            </div>
                            <p className="p1 head-text-club-grab">
                                Design generalist driving business growth by crafting digital experiences that users love to use.
                            </p>
                            {/* <svg className="more phone" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <path d="M10.6645 191.296C11.2552 191.877 12.2049 191.869 12.7858 191.278L22.2518 181.653C22.8327 181.063 22.8248 180.113 22.2341 179.532C21.6435 178.951 20.6938 178.959 20.1129 179.55L11.6986 188.105L3.14291 179.691C2.55227 179.11 1.60255 179.118 1.02167 179.709C0.440783 180.299 0.448698 181.249 1.03935 181.83L10.6645 191.296ZM122.808 0.232019C122.955 40.5318 121.249 67.0225 118.188 83.399C116.655 91.6015 114.805 97.1368 112.761 100.582C110.734 104 108.683 105.117 106.723 105.107C104.601 105.096 102.032 103.785 99.0106 101.057C96.0329 98.368 92.8408 94.5104 89.4864 89.8736C82.7709 80.5908 75.6219 68.4993 68.4016 57.0426C61.2347 45.6705 53.9719 34.8808 47.1262 28.507C43.7129 25.329 40.2196 23.0701 36.7302 22.5456C33.0853 21.9978 29.7356 23.3789 26.8435 26.8019C24.0149 30.1497 21.5614 35.5039 19.4547 43.1454C17.3401 50.8157 15.5399 60.9249 14.1012 73.9021C11.2236 99.8582 9.77633 137.439 10.2163 190.239L13.2162 190.214C12.7766 137.458 14.2247 100.014 17.083 74.2326C18.5122 61.3409 20.2901 51.4031 22.3468 43.9427C24.4115 36.4535 26.7225 31.5935 29.1351 28.738C31.4841 25.9579 33.8519 25.1467 36.2843 25.5123C38.8721 25.9013 41.8156 27.6614 45.0819 30.7026C51.5955 36.7673 58.6633 47.2171 65.8636 58.6421C73.0105 69.9824 80.2653 82.2456 87.0557 91.632C90.4543 96.3298 93.7907 100.385 97.0001 103.283C100.166 106.142 103.443 108.09 106.708 108.107C110.136 108.124 113.015 106.036 115.342 102.112C117.653 98.2149 119.582 92.2704 121.137 83.9501C124.252 67.2809 125.955 40.5541 125.808 0.221106L122.808 0.232019Z" fill="#006A5D" />
                            </svg> */}
                            <PushDown className='more phone' />
                        </div>
                    </div>
                </div>
            </header>
            <section className="main w-full flex flex-col items-center">
                <article className="idea w-full flex flex-col">
                    {isLoading && <Loading className="">loading projects</Loading>}
                    {!isLoading && !fetchError && (
                        <>
                            <ProjectList projectList={projects} category={''} />
                        </>
                    )}
                </article>
                <article className="process-container w-full flex flex-col items-start">
                    <div className="title">
                        <h2 className="h2 flex flex-row items-center">Your project
                            <span className="liner"></span>
                        </h2>
                        <h2 className="h2 flex flex-row items-center">is a journey for me.</h2>
                    </div>
                    <Lists type={"home"} linkText={"View pricing guide"} link={"pricing"} />
                </article>
                <article className="testimonials-container w-full flex flex-col items-start">
                    <div className="title">
                        <h2 className="h2 flex flex-row items-center">An iterative journey,</h2>
                        <h2 className="h2 flex flex-row items-center">
                            <span className="liner secondary"></span> backed by results.
                        </h2>
                    </div>
                    <span className="liner secondary"></span>
                    <div className='data w-full flex flex-col justify-start'>
                        <div className='data-results flex flex-row items-center justify-start'>
                            <div className='data-results-left flex flex-row items-center justify-start'>
                                <div className="data-results-left-plug flex flex-col">
                                    <div className="data-results-left-plug-title flex flex-row items-center">
                                        <ArrowUp />
                                        <h3 className="h3">
                                            80%
                                        </h3>
                                    </div>
                                    <div className='data-results-left-plug-description'>
                                        <h4 className="h4">
                                            Total user satisfaction
                                        </h4>
                                    </div>
                                </div>
                                <div className="data-results-left-plug flex flex-col">
                                    <div className="data-results-left-plug-title flex flex-row items-center">
                                        <ArrowDown />
                                        <h3 className="h3">
                                            65%
                                        </h3>
                                    </div>
                                    <div className='data-results-left-plug-description'>
                                        <h4 className="h4">
                                            Total user bounce rates
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="data-results-right">
                                <div className="questionsContainer flex flex-col justify-center items-center">
                                    <div className="questions">
                                        <img
                                            className='smileHeart'
                                            src={EmojiSmileHeart}
                                            alt="smileHeart emoji"
                                        />
                                        <p className="p2">The users love these!</p>
                                    </div>
                                    <div className="questions">
                                        <p className="p2">Does this color work?</p>
                                    </div>
                                    <div className="questions">
                                        <p className="p2">The interaction failed!<br />Let’s find out why.</p>
                                        <img
                                            className='smileTear'
                                            src={EmojiSmileTear}
                                            alt="smileTear emoji"
                                        />
                                    </div>
                                    <img
                                        className='smile'
                                        src={EmojiSmile}
                                        alt="smile emoji"
                                    />
                                    <img
                                        className='rocket'
                                        src={EmojiRocket}
                                        alt="rocket emoji"
                                    />
                                </div>
                            </div>
                        </div>
                        <span className="liner secondary"></span>
                        <div className="client-responses flex flex-col items-start">
                            <div className="title">
                                <p className="p1">Using an Agile approach, I continually test each component for the optimal solution that satisfies business, user, and developer requirements; never settling for “Okay...”</p>
                            </div>
                            <div className="talk flex flex-row justify-start">
                                {reviews.map((item, index) => (
                                    <div className="review w-full flex flex-col justify-between content-start" key={index}>
                                        <p className="p1">{item.content}</p>
                                        <div className="review-details flex flex-row justify-start items-center">
                                            <div className="review-details-image">
                                                <Image
                                                    src={item.img}
                                                    hash={item.hash}
                                                    alt={`Reviewer, ${item.name}`}
                                                    imageType={''}
                                                    cloudSrc={''}
                                                />
                                            </div>
                                            <div className="clave flex flex-col">
                                                <p className="p2">{item.name}</p>
                                                <p className="p2">{item.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>
                <article className="sales-container w-full flex flex-col items-start">
                    <div className="title">
                        <h2 className="h2 flex flex-row items-center">
                            I help your product <br />make more sales...
                        </h2>
                    </div>
                    <div className='sales-container-call flex flex-row items-end'>
                        <div className="sales-container-call-objects flex flex-col">
                            <h4 className="h4">01</h4>
                            <p className="p1">By providing a seamless and delightful experience, to satisfy your user needs and ensure their happiness.</p>
                        </div>
                        <div className="sales-container-call-objects flex flex-col">
                            <h4 className="h4">02</h4>
                            <p className="p1">By making you the best at solving your users' problems; delivering the fastest and easiest way to meet their needs.</p>
                        </div>
                    </div>
                </article>
            </section>

        </>
    )
}
