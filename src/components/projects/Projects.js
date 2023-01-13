import { useState } from 'react';

import { projectData } from "./ProjectData";
import ProjectInfo from './ProjectInfo';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Projects = () => {

    const [currentProject, setCurrentProject] = useState();
    const [toggleProjectInfo, setToggleProjectInfo] = useState(false);

    function handleToggleProjectInfo(project) {
        if (!currentProject) {
            setCurrentProject(project);
            setToggleProjectInfo(!toggleProjectInfo);
        } else {
            if (currentProject.id == project.id) {
                setToggleProjectInfo(!toggleProjectInfo)
            } else {
                setCurrentProject(project);
                setToggleProjectInfo(true);
            };
        }

    }

    const sliderLeft = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const sliderRight = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <div className='vert-center-container'>
            <div className='project-statement'>something about my projects</div>

            <div className='projects-preview-container'>
                <AiOutlineLeft className='slider-nav' onClick={sliderLeft}/>

                <div className='slider' id='slider'>
                    {
                        projectData.map((project, idx) => {
                            return <img className='project-preview' src={project.img} onClick={event => handleToggleProjectInfo(project)} key={idx}></img>
                        })
                    }
                </div>

                <AiOutlineRight className='slider-nav' onClick={sliderRight}/>
            </div>

            {
                toggleProjectInfo ? <ProjectInfo project={currentProject} /> : null
            }

        </div>
    )
}

export default Projects;