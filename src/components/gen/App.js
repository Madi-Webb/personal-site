import { Outlet } from 'react-router-dom';

import { BsLinkedin, BsGithub } from 'react-icons/bs';


import '../style.css';

import Navbar from './Navbar';

const App = () => {

    return (
        <div className='body'>
            <header>
                <div className='name'>{'<'} Madi Webb {'/>'}</div>
                <Navbar />
            </header>


            <Outlet />

            <footer>
                <a target='_blank' href='https://www.linkedin.com/in/madilynmwebb/'><BsLinkedin className='linkedin-icon'/></a>
                <a target='_blank' href='https://github.com/Madi-Webb'><BsGithub className='github-icon'/></a>
            </footer>

        </div>
    )
}

export default App;