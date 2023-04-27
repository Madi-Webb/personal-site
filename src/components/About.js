import { DiPython, DiJava } from 'react-icons/di';
import { TbBrandJavascript, TbBrandHtml5, TbBrandCss3 } from 'react-icons/tb';
import { FaReact, FaVuejs, FaNodeJs } from 'react-icons/fa';
import { SiDjango, SiExpress, SiPostgresql } from 'react-icons/si';

import { BiGitMerge } from 'react-icons/bi';
import { FaRaspberryPi } from 'react-icons/fa';
import { SiArduino } from 'react-icons/si';


const About = () => {

    return (
        <div className="section-container wrap-reverse" id='About Me'>

            <div className='skillbox-container'>
            <div className='sub-section-title'>Languages</div>
                <div className='skillbox-container'>
                    <div className='skillbox'><img alt='Python Logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'></img>Python</div>
                    <div className='skillbox'><img alt='Java Logo' src='https://i.imgur.com/iGBkQld.png'></img>Java</div>
                    <div className='skillbox'><img alt='JavaScript Logo' src='https://www.seekpng.com/png/full/80-803501_javascript-logo-logo-de-java-script-png.png'></img>JavaScript</div>
                    <div className='skillbox'><img alt='HTML5 Logo' src='https://i.imgur.com/mTnw9zc.png'></img>HTML5</div>
                </div>
                <div className='skillbox-container'>
                    <div className='skillbox'><img alt='Sass Logo' src='https://i.imgur.com/3dtCv52.png'></img>Sass</div>
                    <div className='skillbox'><img alt='CSS3 Logo' src='https://i.imgur.com/9mszQfu.png'></img>CSS3</div>
                    <div className='skillbox'><img alt='PostgreSQL Logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png'></img>PostgreSQL</div>
                    <div className='skillbox'><img alt='PostgreSQL Logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/667px-Matlab_Logo.png'></img>MATLAB</div>
                </div>
                <div className='subber-section-title'>Libraries and Frameworks</div>
                <div className='skillbox-container'>
                    <div className='little-skillbox'><img alt='React Logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'></img>React</div>
                    <div className='little-skillbox'><img alt='Django Logo' src='https://youteam.io/blog/wp-content/uploads/2022/06/django-icon-0.png'></img>Django</div>
                    <div className='little-skillbox'><img alt='Vue.js Logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png'></img>Vue.js</div>
                    <div className='little-skillbox'><img alt='Node.js Logo' src='https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'></img>Node.js</div>
                    <div className='little-skillbox'><img alt='Express.js' src='https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'></img>Express.js</div>
                </div>
            </div>

            <div className="column about-me-container">
                <div className="inner-section-title">About Me</div>
                <div className='skill-element'>
                    <ul>
                        <li>Coding for approximately four years in many different languages and applications, including high level numerical methods, full stack web development, mobile development, and a variety of other projects.</li>
                        <li>Proficient with <strong className='inline-flex'>Git<BiGitMerge /></strong> and experienced collaborating with others.</li>
                    </ul>
                </div>
                <div className='skill-element'>
                    <ul>
                        <li>Designed and developed projects and experiments using various software and operating systems including <strong className='inline-flex'>Raspberry Pi's<FaRaspberryPi /></strong> and <strong className='inline-flex'>Arduino's<SiArduino /></strong> for data aquisition to control and evaluate systems.</li>
                        <li>Experienced with electronics, circuits, and wiring components such as sensors, lights, and pumps for remote handling.</li>
                    </ul>
                </div>
                <div className='skill-element'>
                    <ul>
                        <li>Designed 3D solid models for manufactured parts to analyze their properties - designed and printed many unique parts for educational and personal projects.</li>
                        <li>Quick to learn and adapt to any new software - familiar with 3D modeling/simulation software such as <strong>SOLIDWORKS</strong>, <strong>Solid Edge</strong>, <strong>Revit</strong> and <strong>Ansys</strong>.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;