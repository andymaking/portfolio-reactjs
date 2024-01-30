import React, { useEffect, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';

import Tab from '../components/Tab';
import ProjectsShow from '../components/ProjectsShow';
import Projects from '../components/Projects';

export default function Portfolio() {
    const [selectedTab, setSelectedTab] = useState('All projects');

    const compareDates = (a, b) => {
        const dateA = new Date(a.year);
        const dateB = new Date(b.year);
        // Reverse the order of comparison to sort in descending order
        return dateB - dateA;
    };
    const projects = Projects.slice().sort(compareDates);

    useEffect(() => {
        document.title = 'Portfolio by Jude | Designing User Experiences for Increased conversions.';
    }, []);

    const designCategories = ['All projects', 'Case studies', 'Visual Design'];

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            const t2 = gsap.timeline()

            t1.from(['.loadime, .tagger'], {
                top: "+=50",
                opacity: 0,
                duration: 0.6,
                stagger: 0.2
            })
            t2.from('.clipper', {
                top: "+=150",
                opacity: 0,
                duration: 1,
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
                            <h1 className="h1 loadime text-center">Work</h1>
                        </div>
                        <div className="tagger w-full flex justify-center items-start">
                            <Tab tabArray={designCategories} selectedTab={selectedTab} onTabClick={handleTabClick} />
                        </div>
                    </div>
                </div>
            </header>
            <section className="main w-full flex flex-col items-center clipper">
                    <ProjectsShow show={projects} category={selectedTab.toLowerCase()} />
            </section>
        </>
    );
}
