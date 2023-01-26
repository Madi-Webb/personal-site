import { FiExternalLink } from 'react-icons/fi';
import { IoRocketSharp } from 'react-icons/io5';

import Links from './Links';

const Home = () => {

    return (
            <div className="section-container wrap-reverse">
                <div className='introduction'>
                    <h1>Hi, I'm Madi!</h1>
                    <div>A passionate developer and engineer <IoRocketSharp /> with experience building web and mobile applications as well as a variety of engineering projects. I'm a natural and eager learner excited to be part of the development of future innovative, clean, and impactful technology.</div>
                    <Links />
                    <a target='_blank' href='https://drive.google.com/file/d/1x61yaDgQEbVoFBcahSy3qP3DsyxJkhRC/view?usp=sharing' className='resume-link'>See My Resume<FiExternalLink /></a>
                </div>
                <img className="me" src='https://i.imgur.com/Wf1PKMQ.gif'></img>
            </div>
    )
}

export default Home;