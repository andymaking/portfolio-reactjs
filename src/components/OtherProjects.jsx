import React, { useEffect, useState } from 'react';
import supabase from '../config/supaBaseClient';
import ProjectList from '../components/ProjectList';

const OtherProjects = ({ projectId }) => {
    const [fetchError, setFetchError] = useState(null);
    const [projects, setProjects] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data, error } = await supabase
                    .from('projects')
                    .select()
                    .neq('uniqueid', projectId);

                if (error) {
                    setFetchError('Could not fetch the data');
                    setProjects(null);
                    console.error(error);
                }

                if (data) {
                    const shuffledData = data.sort(() => Math.random() - 0.5);

                    const limitedData = shuffledData.slice(0, 2);

                    setProjects(limitedData);
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
    }, [projectId]);

    return (
        <ProjectList projectList={projects} category={''} />
    )
}

export default OtherProjects;
