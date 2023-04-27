import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Links = () => {

    return (
        <div className='my-links'>
            <a target='_blank' href='https://www.linkedin.com/in/madilynmwebb/' ><BsLinkedin className='linkedin'/></a>
            <a target='_blank' href='https://github.com/Madi-Webb'><BsGithub className='github'/></a>
            <a href = "mailto: madilynwebb98@gmail.com"><MdEmail className='email'/></a>
        </div>
    )
}

export default Links;