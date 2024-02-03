import React, { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';

import Lists from '../components/Lists';

export default function Contact() {
    useEffect(() => {
        document.title = 'Contact Jude | Designing User Experiences for Increased conversions.';
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
                                <span id='round'>
                                    Get in touch
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
            <section className="main w-full flex flex-col items-center">
                <article className="process-container w-full flex flex-row justify-between items-start">
                    <Lists type={"contact"} linkText={"none"} link={""} />
                </article>
            </section>
        </>
    )
}
