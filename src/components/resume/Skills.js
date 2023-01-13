import { DiPython, DiJava } from 'react-icons/di';
import { TbBrandJavascript, TbBrandHtml5, TbBrandCss3 } from 'react-icons/tb';
import { BiGitMerge } from 'react-icons/bi';
import { FaRaspberryPi } from 'react-icons/fa';
import { SiArduino } from 'react-icons/si';

const Skills = () => {

    return (
        <div>
            <div className='title'>Technical Skills</div>

            <div className='skill-element'>
                <div className='skillbox-container'>
                    <div className='skillbox'><DiPython className='skill-icon'/>Python</div>
                    <div className='skillbox'><DiJava  className='skill-icon'/>Java</div>
                    <div className='skillbox'><TbBrandJavascript  className='skill-icon'/>JavaScript</div>
                    <div className='skillbox'><TbBrandHtml5  className='skill-icon'/>HTML5</div>
                    <div className='skillbox'><TbBrandCss3  className='skill-icon'/>CSS3</div>
                </div>

                <div>
                    <ul>
                        <li>Completed several computer science courses using <strong>Python</strong>, <strong>Java</strong>, <strong>JavaScript</strong>, <strong>HTML/CSS</strong>, <strong>SQL</strong>, and <strong>MATLAB</strong>. Obtained over three years of coding experience and proficiency using <div className='git'><strong>Git</strong><BiGitMerge /></div>.</li>
                        <li>Proficient in high-level numerical methods, full-stack web development, and general-purpose programming. Experienced with mobile app development.</li>
                    </ul>
                </div>
            </div>

            <div className='skill-element'>
                <div>
                    <ul>
                        <li>Designed and developed projects and experiments using <div className='git'><strong>Raspberry Pi's</strong><FaRaspberryPi /></div> and <div className='git'><strong>Arduino's</strong><SiArduino /></div> for data aquisition to control and evaluate systems.</li>
                        <li>Experienced with electronics, circuits, and wiring components such as sensors, lights, and pumps for remote handling.</li>
                    </ul>
                </div>
            </div>

            <div className='skill-element'>
                <div>
                    <ul>
                        <li>Certified at the associate level in <strong>SOLIDWORKS</strong>. Designed 3D solid models for manufactured parts to analyze their properties.</li>
                        <li>Designed and printed many unique parts for educational and personal projects. Also familiar with other 3D modeling/simulation software such as <strong>Solid Edge</strong> and <strong>Ansys</strong>.</li>
                    </ul>
                </div>
            </div>

            <div className='subtitle'><strong>Relevant Completed Coursework</strong></div>
            <div className='course-container'>
                <div className='course'>Computer Science {'('}I-III{')'}</div>
                <div className='course'>Algorithms and Data Structures</div>
                <div className='course'>Methods in CS</div>
                <div className='course'>Event Dr Prog and GUI's</div>
                <div className='course'>Developing Web Applications</div>
                <div className='course'>Operating Systems and Concurrency</div>
                <div className='course'>Numerical Methods</div>
                <div className='course'>Technical Communication</div>
                <div className='course'>Heat Transfer</div>
                <div className='course'>Vibrations</div>
                <div className='course'>Computational Fluid Dynamics</div>
                <div className='course'>Hybrid Energy</div>
                <div className='course'>Machine Design</div>
                <div className='course'>Linear Algebra and Differential Equations</div>
                <div className='course'>Partial Differential Equations</div>
            </div>

        </div>
    )
}

export default Skills;