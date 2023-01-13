import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <nav>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='projects' className='nav-link'>Projects</Link>
                <Link to='resume' className='nav-link'>Resume</Link>
                <Link to='about' className='nav-link'>About</Link>
            </nav>
        </div>
    )
}

export default Navbar;