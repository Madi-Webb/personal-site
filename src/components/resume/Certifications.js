import { MdSchool } from 'react-icons/md';
import { DiPython, DiJava } from 'react-icons/di';
import { TbCertificate, TbBrandJavascript, TbBrandHtml5, TbBrandCss3 } from 'react-icons/tb';
import { BiGitMerge } from 'react-icons/bi';

const Certifications = () => {

    return (
        <div>
            <div className='title'>Certifications</div>

            <div className='certification-element'>
                <div className='fs certification-info'><img src='https://i.imgur.com/5h78mwT.png' className='icon-logo'></img>FullStack Academy</div>
                <div className='separated-container'>
                    <div className='subtitle resume-element'><TbCertificate className='icon-logo'/>Full-Stack Web Development Certification</div>
                    <div className='resume-element'>Completed: Dec 2022</div>
                </div>
            </div>

            <div className='certification-element'>
                <div className='usu certification-info'><img src='https://www.usu.edu/brand/standards/logos/images/spirit-marks/Block_A.png' className='icon-logo'></img>Utah State University, College of Science</div>
                <div className='separated-container'>
                    <div className='subtitle resume-element'><TbCertificate  className='icon-logo'/>Computer Science Software Developer Certification</div>
                    <div className='resume-element'>Completed: May 2022</div>
                </div>
                <div className='separated-container'>
                    <div className='subtitle resume-element'><TbCertificate  className='icon-logo'/>Computer Science Web & Mobile Developer Certification</div>
                    <div className='resume-element'>Completed: Dec 2021</div>
                </div>
            </div>

            <div className='certification-element'>
                <div className='ncees certification-info'><img src='https://media.glassdoor.com/sqll/1104619/national-council-of-examiners-for-engineering-and-surveying-squarelogo-1516275690716.png' className='icon-logo'></img>National Council of Examiners for Engineering and Surveying {'('}NCEES{')'}</div>
                <div className='separated-container'>
                    <div className='subtitle resume-element'><TbCertificate className='icon-logo'/>Engineer in Training {'('}EIT{')'} - Fundamentals of Engineering {'('}FE{')'} Mechanical</div>
                    <div className='resume-element'>Completed: Aug 2021</div>
                </div>
            </div>

            <div className='certification-element'>
                <div className='sw certification-info'><img src='https://i.imgur.com/ucrqWi0.png' className='icon-logo'></img>SOLIDWORKS {'('}3D CAD design and analysis software{')'}</div>
                <div className='separated-container'>
                    <div className='subtitle resume-element'><TbCertificate className='icon-logo'/>Certified SOLIDWORKS Associate {'('}CSWA{')'}</div>
                    <div className='resume-element'>Completed: Nov 2018</div>
                </div>
            </div>


        </div>
    )
}

export default Certifications;