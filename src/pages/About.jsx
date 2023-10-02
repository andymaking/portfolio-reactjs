import React from 'react';

import Lists from '../components/Lists';

import aboutImage from "../assets/images/about-2.jpg";

export default function Pricing() {

    return (
        <>
            <header className="landing w-full flex flex-col items-center">
                <div className="head w-full">
                    <div className="head-text flex flex-col items-center justify-center">
                        <div className="head-text-top flex flex-col items-center justify-center">
                            <h1 className="h1 text-left">
                                Designing pixels to solve everyday problems.
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
            <section className="main w-full flex flex-col items-center">
                <article className="bio-container w-full flex flex-row justify-start items-start">
                    <div className="dol">
                        <img
                            src={aboutImage}
                            alt="Jude Joshua smiling"
                        />
                    </div>
                    <div className="content flex flex-col items-start justify-start">
                        <p className="p1">I am Jude Joshua, a digital product designer, previously at FirstMedtrade Africa. From 2017 till now, I have collaborated with start-ups, Web3 ventures, and most recently, a Fintech brand, to create visually pleasing and user friendly digital experiences for their digital platforms.</p>
                        <p className="p1">I first delved into product design in 2013, and over the years, I have pursued this passion, transitioning from designing solely websites, to designing for all digital products. My motivation is fueled by my love for design and my desire to create digital platforms that leave users feeling satisfied.</p>
                        <p className="p1">Recently, I successfully led the complete overhaul of the medical e-commerce platform for FirstMedtrade Africa, which resulted in an impressive 80% reduction in the user bounce rate.</p>
                        <p className="p1">Currently, I am actively pursuing opportunities that challenge my expertise, prioritize user needs, and enable me to deliver exceptional results.</p>
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
                <article className="journey-container w-full flex flex-row items-start">
                    <div className="title">
                        <h2 className="h2 flex flex-row items-center">Relevant<br />Experience.</h2>
                    </div>
                    <Lists type={"about"} linkText={"View my Resume"} link={"pricing"} />
                </article>
            </section>
        </>
    )
}
