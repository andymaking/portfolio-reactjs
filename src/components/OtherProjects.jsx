import React from 'react';

import ProjectsShow from '../components/ProjectsShow';
import Projects from '../components/Projects';

const OtherProjects = ({ projectId }) => {

    const data = Projects.filter((project) => project.uniqueid !== projectId);

    const shuffledData = data.sort(() => Math.random() - 0.5);

    const limitedData = shuffledData.slice(0, 2);

    return (
        <ProjectsShow show={limitedData} category={''} />
    )
}

export default OtherProjects;
