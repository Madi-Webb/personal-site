import { MdSchool } from 'react-icons/md';
import { DiPython, DiJava } from 'react-icons/di';
import { TbCertificate, TbBrandJavascript, TbBrandHtml5, TbBrandCss3 } from 'react-icons/tb';
import { BiGitMerge } from 'react-icons/bi';

const Certifications = () => {

    return (
        <div className='column' id='Certifications'>
            <div className='section-title'>Certifications</div>

            <div className='flex-center-container'>
                <div className='separated-container'>
                    <div className='certification-card'>
                        <div className='usu-bg header'>Computer Science Software Developer Certification</div>
                        <div className='footer-container'>
                            <img src='https://www.usu.edu/brand/standards/logos/images/spirit-marks/Block_A.png'></img>
                            <div className='footer'>
                                <div className='title'>USU College of Science</div>
                                <div className='resume-element'>Completed: May 2022</div>
                            </div>
                        </div>

                    </div>

                    <div className='certification-card'>
                        <div className='usu-bg header'>Computer Science Web & Mobile Developer Certification</div>
                        <div className='footer-container'>
                            <img src='https://www.usu.edu/brand/standards/logos/images/spirit-marks/Block_A.png'></img>
                            <div className='footer'>
                                <div className='title'>USU College of Science</div>
                                <div className='resume-element'>Completed: Dec 2021</div>
                            </div>
                        </div>
                    </div>
                </div>

            
            <div className='separated-container'>
                <div className='certification-card'>
                    <div className='ncees header'>Engineer in Training {'('}EIT{')'} - Fundamentals of Engineering {'('}FE{')'} Mechanical</div>
                    <div className='footer-container'>
                        <img src='https://media.glassdoor.com/sqll/1104619/national-council-of-examiners-for-engineering-and-surveying-squarelogo-1516275690716.png'></img>
                        <div className='footer'>
                            <div className='title'>National Council of Examiners for Engineering and Surveying {'('}NCEES{')'}</div>
                            <div className='resume-element'>Completed: Aug 2021</div>
                        </div>
                    </div>
                </div>

                <div className='certification-card'>
                    <div className='sw header'>Certified SOLIDWORKS Associate {'('}CSWA{')'}</div>
                    <div className='footer-container'>
                        <img src='https://i.imgur.com/ucrqWi0.png'></img>
                        <div className='footer'>
                            <div className='title'>SOLIDWORKS {'('}3D CAD design and analysis software{')'}</div>
                            <div className='resume-element'>Completed: Nov 2018</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Certifications;