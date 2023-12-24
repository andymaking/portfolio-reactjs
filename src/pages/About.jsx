import React, { useEffect } from 'react';

import Lists from '../components/Lists';
import Image from '../components/Image';

import aboutImage from "../assets/images/about-2.webp";

export default function Pricing() {
    useEffect(() => {
        document.title = 'About Jude | Designing User Experiences for Increased conversions.';
    }, []);

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
                        <Image
                            src={aboutImage}
                            hash={"LTHVVd.9u6Vr01NGkYnh_3RPVsf+"}
                            alt={"Jude Joshua smiling"}
                            imageType={''}
                            cloudSrc={''}
                        />
                    </div>
                    <div className="content flex flex-col items-start justify-start">
                        <p className="p1">I am Jude Joshua, a digital product designer, formerly at FirstMedtrade Africa. Since 2017, I have collaborated with brands and businesses to design visually appealing and user-friendly digital experiences for their mobile apps and websites.</p>
                        <p className="p1">I began my journey in product design back in 2013. Over the years, I have continuously pursued this passion, expanding my expertise from designing websites to designing for all types of digital products. My inspiration comes from my love for design and the satisfaction I get from creating digital platforms that provide users with a great experience.</p>
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
                    <Lists type={"about"} linkText={"View my Resume"} link={"https://drive.google.com/file/d/1NMBOsx6Q9s9ZRhB8q88Y3NKpHdj0Gk_W/view?usp=drive_link"}/>
                </article>
            </section>
        </>
    )
}
