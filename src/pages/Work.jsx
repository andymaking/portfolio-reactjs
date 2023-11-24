import React, { useEffect, useState } from 'react';
import supabase from '../config/supaBaseClient'

import Tab from '../components/Tab';
import Project from '../components/Projects';

export default function Work() {

    const [fetchError, setFetchError] = useState(null)

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {

            const { data, error } = await supabase
                .from('projects')
                .select()
                .order('id', { ascending: true })

            if (error) {
                setFetchError('Could not fetch the data')
                setProjects(null)
                console.log(error)
            }

            if (data) {
                setProjects(data)
                setFetchError(null)
            }
        }

        fetchProjects()

    }, [])


    useEffect(() => {
        document.title = 'Portfolio | Top Product Designer For Businesses And Brands.';
    }, []);

    const designCategories = ['All projects', 'Case studies', 'Visual Design'];
    const [selectedTab, setSelectedTab] = useState(designCategories[0]);

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <>
            {fetchError && (<p>{fetchError}</p>)}
            <header className="landing w-full flex flex-col items-center">
                <div className="head w-full">
                    <div className="head-text flex flex-col items-center justify-center">
                        <div className="head-text-top w-full">
                            <h1 className="h1 text-center">
                                Work
                            </h1>
                        </div>
                        <div className="tagger w-full flex justify-center items-start">
                            <Tab tabArray={designCategories} selectedTab={selectedTab} onTabClick={handleTabClick} />
                        </div>
                    </div>
                </div>
            </header>
            <section className="main w-full flex flex-col items-center">
                <article className="idea w-full flex flex-col">
                    <Project projectList={projects} category={selectedTab.toLowerCase()} />
                </article>
            </section>
        </>
    )
}
