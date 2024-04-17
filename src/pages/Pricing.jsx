import React, { useEffect, useLayoutEffect } from 'react';
import gsap  from 'gsap';

import Lists from '../components/Lists';

export default function Pricing() {
    useEffect(() => {
        document.title = 'Pricing for Jude | Designing User Experiences for Increased conversions.';
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()

            t1.from('.loadime', {
                top: "+=50",
                opacity: 0,
                duration: 0.6,
            })
        })

        return () => ctx.revert()
    }, []);

    return (
        <>
            <header className="landing w-full flex flex-col items-center">
                <div className="head w-full">
                    <div className="head-text flex flex-col items-center justify-center">
                        <div className="head-text-top w-full">
                            <h1 className="h1 loadime text-center">
                                Pricing Guide
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
            <section className="main w-full flex flex-col items-center">
                <article className="process-container w-full flex flex-col items-start">
                    <Lists type={"pricing"} linkText={"none"} link={""} />
                </article>
                <article className="journey-container w-full flex flex-col items-start">
                    <div className="title w-full flex flex-row items-center justify-start">
                        <h2 className="h2" id='round'>Frequently Asked</h2>
                    </div>
                    <Lists type={"career"} linkText={"none"} link={""}/>
                    <div className="title w-full flex flex-row items-center justify-start">
                        <h2 className="h2" id='round'>Services</h2>
                    </div>
                    <Lists type={"projects"} linkText={"none"} link={""}/>
                </article>
                <article className="journey-container w-full flex flex-col items-start">
                    <div className="title w-full flex flex-row items-center justify-start">
                        <h2 className="h2" id='round'>Pricing Guide</h2>
                    </div>
                    <Lists type={"pricing"} linkText={"none"} link={""} />
                </article>
            </section>
        </>
    )
}
