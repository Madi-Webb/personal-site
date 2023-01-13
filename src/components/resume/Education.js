import { MdSchool } from 'react-icons/md';


const Education = () => {

    return (
        <div>
            <div className='title'>Education</div>
{/* 
            <div className='education-element'>
                <div className='separated-container'>
                    <div className='subtitle resume-element'><MdSchool />Full-Stack Web Development Certification</div>
                    <div className='resume-element'>Completed: May 2022</div>
                </div>
            </div>

            <br /> */}

            <div className='education-element'>
                <div className='separated-container'>
                    <div className='subtitle resume-element'><MdSchool className='icon-logo'/>Bachelor of Science, Mechanical Engineering</div>
                    <div className='resume-element'>Completed: May 2022</div>
                </div>

                <div className='resume-element'>Minors: <strong> Computer Science, Mathematics, Environmental Studies</strong></div>

                <div className='usu resume-element'>
                    <img src='https://www.usu.edu/brand/standards/logos/images/spirit-marks/Block_A.png' className='icon-logo'></img>
                    Utah State University {'('}USU{')'}, Logan, Utah - College of Engineering
                </div>
                
                <div className='resume-element'>Institutional Honors:</div>
                <ul className='separated-container'>
                    <li className='resume-element'>Graduated <i>cum laude</i> {'('}GPA 3.77{')'}</li>
                    <li className='resume-element'>College of Engineering Dean's List {'('}7/10 semesters{')'}</li>
                    <li className='resume-element'>Utah Regent's Scholarship {'('}Exemplary Award{')'}</li>
                    <li className='resume-element'>USU Aggie Scholar Scholarhsip</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Education;