import React, { useEffect, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';

import ProjectsShow from '../components/ProjectsShow';
import Projects from '../components/Projects';
import Image from '../components/Image';
import Links from "../components/Links";

import Reviewer01 from "../assets/images/review-1.webp";
import Reviewer02 from "../assets/images/review-2.webp";

import { ArrowLeft, ArrowRight, ArrowSquareOut } from "@phosphor-icons/react";

export default function Home() {
    const featuredProjects = Projects.filter((project) => project.featured === true);
    const compareIds = (a, b) => {
        return a.id - b.id;
    };
    const projects = featuredProjects.slice().sort(compareIds);

    useEffect(() => {
        document.title = 'Jude Joshua | Designing User Experiences for Increased conversions.';
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            const t2 = gsap.timeline()
            const t3 = gsap.timeline()

            t1.from('.loadime', {
                top: "+=50",
                opacity: 0,
                duration: 0.6,
            }).from('.aboute-blob', {
                opacity: 0,
                duration: 0.8
            })

            t2.from('#highlight-reel', {
                top: "+=50",
                opacity: 0,
                duration: 0.8,
            }).from('.aboute-grab', {
                left: "-=30",
                opacity: 0,
                duration: 0.6,
                delay: 0.2,
            }).from('.scroller', {
                top: "-=20",
                opacity: 0,
                duration: 0.6
            })

            t3.from('.lighter span',{
                top: "-=50",
                opacity: 0,
                duration: 0.8,
            })
        })

        return () => ctx.revert()
    }, []);

    const reviews = [
        {
            img: Reviewer01,
            hash: "L7A-n*.R31000cH?a8?^53tm,]R4",
            name: "Amina Ibrahim",
            position: "SEO Consultant, Prosple",
            content: "I have worked with Jude on several occasions, and I can confidently say that he is an exceptional product designer. He has a remarkable ability to grasp the product idea quickly and then works diligently to ensure that it aligns with the users' needs and developers' requirements.\n\nJude is also highly patient and willing to collaborate with clients to guarantee that their expectations are met. His work is consistently of outstanding quality, and his designs have consistently met the clients' standards.",
        },
        {
            img: Reviewer02,
            hash: "LFA-x4RP0Jt700t7~XR%t,R%iwxb",
            name: "Victoria Oniyide",
            position: "Communications Manager, Paaira",
            content: "I had the pleasure of working with Jude recently, and it was an experience that left me thoroughly impressed. His level of professionalism and expertise in his field is remarkable and truly stands out. I can confidently say that Jude is an asset to any team and an individual who sets a high standard for excellence.\n\nHe takes his time to test different versions of the product to ensure that it meets all the necessary requirements. His work has resulted in positive feedback from my team and clients, and I would recommend him without hesitation.",
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const nextSlide = () => {
        setActiveIndex((prevIndex) => Math.min(prevIndex + 1, 2));
    };
    const prevSlide = () => {
        setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };


    return (
        <>
            <header className="landing w-full flex flex-col items-center">
                <div className="head">
                    <div className={`head-text flex flex-col items-center justify-between`}>
                        <div className="head-text-top flex flex-col items-center justify-center">
                            <h1 className="h1 w-full text-left">
                                <span className='loadime'>Designing </span>
                                <span className="h4 lighter flex items-center justify-center"><span>user</span></span>
                                <span className='loadime'>experiences</span>
                            </h1>
                            <h1 className="h1 highlight text-left flex flex-row justify-left">
                                <span id='highlight-reel'>for increased conversions.</span>
                            </h1>
                        </div>
                        <div className="head-text-club w-full flex flex-row items-start justify-between">
                            <div className='aboute flex flex-row items-start justify-start'>
                                <div className="aboute-blob flex items-center justify-center">
                                    <p className='p2'>About</p>
                                </div>
                                <p className="p2 aboute-grab">
                                    Design generalist driving business growth by crafting digital experiences that users love to use.
                                    <Links href={'about'} extra={'highlight-link'}>Learn more<ArrowSquareOut/></Links>
                                </p>
                            </div>
                            <div className='scroller flex flex-row justify-center items-center'>
                                <ArrowLeft />
                                <p className='p2'>Scroll down</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="main w-full flex flex-col items-center">
                <article className="idea w-full flex flex-col" >
                    <div className="title">
                        <h2 className="h2 flex flex-row justify-end">Selected<span id='round'>Projects</span></h2>
                    </div>
                    <ProjectsShow show={projects} category={''} />
                    <div className='moreProjects flex flex-col justify-center items-center'>
                        <p className='p1'>Discover the depth of my creativity and expertise. Click the button below to see more projects.</p>
                        <Links target="_self" type={"primary"} href={`/portfolio`}>
                            <div className="icon-hold flex items-center justify-center">
                                <ArrowRight size={24} weight="regular" />
                            </div>
                            <span className='linkContent'>
                                <span>
                                    See more work
                                </span>
                            </span>
                        </Links>
                    </div>
                </article>

                <article className="testimonials-container w-full flex flex-col items-start">
                    <div className="title text-center">
                        <p className="h2 flex flex-row items-center">Your project is more than just another task for me.</p>
                    </div>
                    <div className='data w-full flex flex-col justify-start'>
                        <div className="client-responses w-full flex flex-col items-start">
                            <div className="talk w-full flex flex-col justify-start">
                                <div className='review-container flex flex-row'>
                                    {reviews.map((item, index) => (
                                        <div className={`review w-full flex flex-row justify-between items-center ${activeIndex === index ? 'active' : activeIndex === index + 1 ? 'back' : activeIndex === index - 1 ? 'forward' : ''}`} key={index}>
                                            <div className='review-details-image'>
                                                <div className="review-details-image-holder">
                                                    <Image
                                                        src={item.img}
                                                        hash={item.hash}
                                                        alt={`Reviewer, ${item.name}`}
                                                        imageType={''}
                                                    />
                                                </div>
                                                <span className='p2 hello-reviewer'>Hi, I'm {item.name}</span>
                                            </div>
                                            <div className="review-details flex flex-col justify-start items-start">
                                                <p className="p1">{item.content}</p>
                                                <div className="clave flex flex-col">
                                                    <p className="p2">{item.name}</p>
                                                    <p className="p2">{item.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='navigate'>
                                    <span onClick={prevSlide} className={`nav-btn previous ${activeIndex > 0 ? 'showing' : 'hidden'}`}>
                                        <ArrowLeft weight="thin"/>
                                    </span>
                                    <span onClick={nextSlide} className={`nav-btn next ${activeIndex < 1 ? 'showing' : 'hidden'}`}>
                                        <ArrowRight weight="thin"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

        </>
    )
}
