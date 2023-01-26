import { useState } from 'react';
import { Link } from 'react-scroll';

import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [dropNavToggle, setDropNavToggle] = useState(false);
    const [dropNavClass, setDropNavClass] = useState('hidden drop-nav');

    let sections = ["About Me", "Projects", "Education", "Contact Me"];

    function handleToggleNav() {
        setDropNavClass('visible drop-nav')
        setDropNavToggle(!dropNavToggle);
    }


    return (
        <div>
            <header>
                <div>{'<'} Madilyn Webb {'/>'}</div>
                <div>
                    <AiOutlineMenu className='nav-icon hidden' onClick={handleToggleNav} />
                    <nav>
                        { sections.map((section, idx) => {
                            return <Link activeClass="active" to={section} spy={true} smooth={true} offset={50} duration={500} key={idx} className='nav-link' >{section}</Link>
                        })}
                    </nav>
                </div>
            </header>
            {
                dropNavToggle ? 
                <nav className={dropNavClass}>
                    { sections.map((section, idx) => {
                            return <Link activeClass="active" to={section} spy={true} smooth={true} offset={50} duration={500} key={idx} className='drop-nav-link' onClick={() => setDropNavToggle(false)} >{section}</Link>
                    })}
                </nav> : null
            }
        </div>
        
    )
}

export default Navbar;