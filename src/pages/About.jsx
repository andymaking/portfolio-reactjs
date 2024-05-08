import React, { useEffect, useLayoutEffect } from 'react';
import gsap  from 'gsap';

import Lists from '../components/Lists';
import Image from '../components/Image';

import aboutImage from "../assets/images/about.webp";

export default function About() {
    useEffect(() => {
        document.title = 'About Jude | Designing User Experiences for Increased conversions.';
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            const t2 = gsap.timeline()

            t1.from('.loadime', {
                left: "-=150",
                opacity: 0,
                duration: 0.6,
            })
            
            t2.from(['.dol, .content'], {
                top: "+=150",
                height: 0,
                duration: 0.6,
                stagger: 0.3
            })
        })

        return () => ctx.revert()
    }, []);

    return (
        <>
            <header className="landing w-full flex flex-col items-center">
                <div className="head w-full">
                    <div className="head-text flex flex-col items-center justify-center">
                        <div className="head-text-top flex flex-col items-start justify-start">
                            <h1 className="h1 loadime text-left">
                                Designing pixels<span id="round">to solve</span>everyday problems.
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
            <section className="main w-full flex flex-col items-center">
                <article className="bio-container w-full flex flex-row justify-start items-start">
                    <div className="dol">
                        <Image
                            src={aboutImage}
                            hash={"LTHVVd.9u6Vr01NGkYnh_3RPVsf+"}
                            alt={"Jude Joshua smiling"}
                            imageType={''}
                        />
                    </div>
                    {/* <div className="content flex flex-col items-start justify-start">
                        <p className="p1">I am Jude Joshua, a digital product designer, formerly at FirstMedtrade Africa. I design websites, landing pages, web apps and mobile apps with a goal to touch the user core pain-point. Since 2017, I have collaborated with brands and businesses to design visually appealing and user-friendly digital experiences for their digital platforms and scale product sales.</p>
                        <p className="p1">I began my journey into design back in 2013, using code (HTML & CSS) to design websites. Over the years, I have continuously pursued this passion, expanding my expertise from designing websites to designing for all types of digital products. My inspiration comes from Nature, my love for good design and the satisfaction I get from creating digital platforms that provide users with a great experience.</p>
                        <p className="p1">In my previous role, I led the redesign of the medical e-commerce platform for FirstMedtrade Africa, which resulted in increased engagement rate as registered on Google Analytics. Currently, I am actively pursuing opportunities that challenge my expertise, prioritize user needs, and enable me to deliver exceptional results.</p>
                    </div> */}
                    <div className="content flex flex-col items-start justify-start">
                        <p className="p1">My name is Jude Joshua. To some people, I am a designer and to others, I am an engineer. I love to merge this worlds together in ways that shape how people live yesterday, now and in the future.</p>
                        <p className="p1">You’ve probably come across my work and your first interaction with it must have been a beautiful one. Unlike others, I do not have a passion for design, I live and breathe Design. My aim is to shape lives positively wherever I find myself, with the Universe’s universal law of building Order out of Chaos.</p>
                        <p className="p1">The goal is to leave a mark, such that users of my products are unplugged from the chaos in their lives and enveloped into the sphere of fulfilling actions, affordable luxury, and peaceful aesthetics.</p>
                        <p className="p1">If you ever do not feel this way with any of my products, then I have failed you and would like to know what I can do to make it better. Send me a message or email on what you think is reproving or complimentary, and I will be more than happy to discuss shaping a great yesterday for the better future, with you today.</p>
                    </div>
                </article>
                <article className="scrolling-container w-full flex flex-row justify-start items-start">
                    <div className="scrolling_text w-full flex flex-row">
                        <div className="text flex flex-row items-center justfiy-center">
                            <span className="h3">Visual design</span>
                            <span className="h3">UI design</span>
                            <span className="h3">Research</span>
                            <span className="h3">Prototypes</span>
                            <span className="h3">Wireframes</span>
                            <span className="h3">Interaction design</span>
                        </div>
                        <div className="text flex flex-row items-center justfiy-center">
                            <span className="h3">Visual design</span>
                            <span className="h3">UI design</span>
                            <span className="h3">Research</span>
                            <span className="h3">Prototypes</span>
                            <span className="h3">Wireframes</span>
                            <span className="h3">Interaction design</span>
                        </div>
                    </div>
                </article>
                <article className="journey-container w-full flex flex-col items-start">
                    <div className="title w-full flex flex-row items-center justify-start">
                        <h2 className="h2" id='round'>Job Highlights</h2>
                    </div>
                    <Lists type={"career"} linkText={"View my Resume"} link={"https://drive.google.com/file/d/1NMBOsx6Q9s9ZRhB8q88Y3NKpHdj0Gk_W/view?usp=drive_link"}/>
                    <div className="title w-full flex flex-row items-center justify-start">
                        <h2 className="h2" id='round'>Project Recap</h2>
                    </div>
                    <Lists type={"projects"} linkText={"View my Resume"} link={"https://drive.google.com/file/d/1NMBOsx6Q9s9ZRhB8q88Y3NKpHdj0Gk_W/view?usp=drive_link"}/>
                </article>
            </section>
        </>
    )
}
