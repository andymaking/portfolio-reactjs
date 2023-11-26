import React, { useEffect, useState } from 'react';
import supabase from '../config/supaBaseClient';

import Tab from '../components/Tab';
import ProjectList from '../components/ProjectList';
import Loading from '../components/Loading';

export default function Portfolio() {
    const [fetchError, setFetchError] = useState(null);
    const [projects, setProjects] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedTab, setSelectedTab] = useState('All projects');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data, error } = await supabase
                    .from('projects')
                    .select()
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
        document.title = 'Portfolio by Jude | Designing User Experiences for Increased conversions.';
    }, []);

    const designCategories = ['All projects', 'Case studies', 'Visual Design'];

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <>
            <header className="landing w-full flex flex-col items-center">
                <div className="head w-full">
                    <div className="head-text flex flex-col items-center justify-center">
                        <div className="head-text-top w-full">
                            <h1 className="h1 text-center">Work</h1>
                        </div>
                        <div className="tagger w-full flex justify-center items-start">
                            <Tab tabArray={designCategories} selectedTab={selectedTab} onTabClick={handleTabClick} />
                        </div>
                    </div>
                </div>
            </header>
            <section className="main w-full flex flex-col items-center">
                <article className="idea w-full flex flex-col">
                    {isLoading && <Loading className="">loading projects</Loading>}
                    {!isLoading && !fetchError && (
                        <>
                            <ProjectList projectList={projects} category={selectedTab.toLowerCase()} />
                        </>
                    )}
                </article>
            </section>
        </>
    );
}
