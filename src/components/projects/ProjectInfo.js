import { FiExternalLink } from 'react-icons/fi';
import { GrGroup } from 'react-icons/gr';
import { AiOutlineUser } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';

const ProjectInfo = ({project}) => {

    return (
        <div className="project-info-display">
            <div className="project-name">{project.name}</div>
            <a target='_blank' href={project.link}>{project.link} <FiExternalLink /></a>
            {
                project.collaboration ? <div className='project-collaboration'><div>Collaboration</div><GrGroup /></div> : <div className='project-collaboration'>Solo Project <AiOutlineUser /></div>
            }
            <div className="project-description">{project.description}</div>
            <div className='project-skills-container'>
                {
                    project.skills.length ? project.skills.map((skill, idx) => {
                        return <div className='project-skill' key={idx}>{skill}</div>
                    }) : null
                }
            </div>
            <div className='github-link'>View code on <a target='_blank' href={project.link}>Github <BsGithub /></a></div>

        </div>
    )
}

export default ProjectInfo;