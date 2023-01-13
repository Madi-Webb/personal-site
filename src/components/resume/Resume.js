import { FiExternalLink } from 'react-icons/fi';


import Contact from './Contact';
import Education from './Education';
import Certifications from './Certifications';
import Skills from './Skills';
import Experience from './Experience';



const Resume = () => {

    return (
        <div className='resume'>
            <div className='centered-container'><a href=''>Single Page PDF version</a><FiExternalLink /></div>
            <Contact />
            <br />
            <Education />
            <br />
            <Certifications />
            <br />
            <Skills />
            <br />
            <Experience />
        </div>
    )
}

export default Resume;