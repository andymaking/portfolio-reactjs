import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import supabase from '../config/supaBaseClient';
import gsap  from 'gsap';

import ProjectList from '../components/ProjectList';
import Lists from '../components/Lists';
import Image from '../components/Image';
import Loading from '../components/Loading';

import EmojiSmile from "../assets/images/Smiling Face.svg";
import EmojiRocket from "../assets/images/Rocket.svg";
import { ReactComponent as PushDown } from "../assets/images/mobile-down.svg";
import EmojiSmileHeart from "../assets/images/Smiling Face With Heart Eyes.svg";
import EmojiSmileTear from "../assets/images/Smiling Face With Tear.svg";
import HomeImage from "../assets/images/home.webp";
import Reviewer01 from "../assets/images/review-1.webp";
import Reviewer02 from "../assets/images/review-2.webp";

import { ArrowDown, ArrowUp } from "@phosphor-icons/react";

export default function Home({ }) {
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

    const headerContainerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            const t2 = gsap.timeline()
            const t3 = gsap.timeline()

            t1.from('.loadime', {
                top: "+=50",
                opacity: 0,
                duration: 0.6,
            })
            
            t2.from('#highlight-background', {
                height: 0,
                duration: 0.6,
            }).from('.head-text-club-image', {
                opacity: 0,
                duration: 0.6
            })
            
            t3.from('#highlight-reel', {
                top: "+=50",
                opacity: 0,
                duration: 0.8,
            }).from('.head-text-club-grab',{
                left: "-=100",
                opacity: 0,
                duration: 0.6
            })
        }, headerContainerRef)

        return () => ctx.revert()
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
            <header className="landing w-full flex flex-col items-center" ref={headerContainerRef}>
                <div className="head">
                    <div className={`head-text flex flex-col items-center justify-center`}>
                        <div className="head-text-top flex flex-col items-center justify-center">
                            <h1 className="h1 w-full text-center">
                                <span className='loadime'>Designing </span>
                                <span className="h4 lighter flex items-center justify-center">user</span>
                                <span className='loadime'>experiences</span>
                            </h1>
                            <h1 className="h1 highlight text-center flex flex-row justify-left">
                                <span id='highlight-background'></span>
                                <span id='highlight-reel'>for increased conversions.</span>
                            </h1>
                        </div>
                        <div className="head-text-club w-full flex flex-row items-end justify-end content-center">
                            <svg className='more' xmlns="http://www.w3.org/2000/svg" fill="none">
                                <path d="M136.462 1.89014C113.501 2.91058 95.4979 15.9657 83.0007 32.3661C77.4951 40.0134 74.6752 44.5336 70.5638 53.3588C64.9865 65.7693 62.2916 77.9714 62.5861 86.8943C62.7337 91.366 63.6283 94.9034 65.179 97.2383C66.6868 99.5086 68.8312 100.682 71.7422 100.484C78.3926 100.033 84.0054 94.8893 87.9546 87.2593C91.8873 79.6611 94.037 69.8228 93.8543 60.5071C93.671 51.1692 91.1511 42.5405 85.9538 37.1994C83.8642 35.3691 82.7794 34.2625 79.9736 33.0908C75.2469 31.1001 69.1449 30.9078 61.4288 33.4278C49.4455 37.3415 39.9157 46.4073 32.3552 57.9383C24.7963 69.4669 19.2576 83.3828 15.2345 96.8483C11.2134 110.307 8.71844 123.274 7.22896 132.88C6.46388 138.096 6.03618 141.02 5.48701 146.254L2.30273 140.326H10.1858L5.43517 147.296" stroke="#006A5D" strokeWidth="2" />
                            </svg>
                            <div className="head-text-club-image">
                                <Image
                                    src={HomeImage}
                                    hash={"LdKd}Q%ipxxu4?S$NKZ~.TM_nOs,"}
                                    alt={"Selfie of Jude Joshua smiling"}
                                    imageType={''}
                                />
                            </div>
                            <p className="p1 head-text-club-grab">
                                Design generalist driving business growth by crafting digital experiences that users love to use.
                            </p>
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
                <article className="sales-container w-full flex flex-row items-start">
                    <div className="title">
                        <h2 className="h2 flex flex-row items-center">
                            I help your digital product make more sales...
                        </h2>
                    </div>
                    <div className='sales-container-call flex flex-col items-end'>
                        <div className="sales-container-call-objects flex flex-col">
                            <h4 className="h4">01</h4>
                            <p className="p1">By providing a seamless and delightful experience, to establish a credible and reliable image in the minds of users.</p>
                        </div>
                        <div className="sales-container-call-objects flex flex-col">
                            <h4 className="h4">02</h4>
                            <p className="p1">By positioning you as the best at solving your users' problems; delivering the fastest and easiest way to meet their needs.</p>
                        </div>
                    </div>
                </article>
            </section>

        </>
    )
}
