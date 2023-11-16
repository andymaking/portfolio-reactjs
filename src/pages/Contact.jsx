import React from 'react';

import Lists from '../components/Lists';

export default function Contact() {

    return (
        <>
            <header className="landing w-full flex flex-col items-center">
                <div className="head w-full">
                    <div className="head-text flex flex-col items-center justify-center">
                        <div className="head-text-top w-full">
                            <h1 className="h1 text-center">
                                Get in touch
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
