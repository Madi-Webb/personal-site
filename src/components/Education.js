import { HiDesktopComputer } from 'react-icons/hi';
import { TbMathSymbols } from 'react-icons/tb';
import { BsTreeFill } from 'react-icons/bs';


const Education = () => {

    return (
        <div className='column' id='Education'>
            <div className='section-title'>Education</div>

            <div className='flex'>
                <img src='https://i.imgur.com/5h78mwT.png' className='education-img'></img>
                <div className='column'>
                    <div className='fs education-title'>FullStack Academy</div>
                    <div className='education-details'>Certificate in Full Stack Web Development</div>
                    <div>Completed: Dec 2022</div>
                </div>
            </div>

            <div className='flex'>
                <img src='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Utah_State_University_seal.svg/1200px-Utah_State_University_seal.svg.png' className='education-img'></img>
                <div className='column'>
                    <div className='usu education-title'>Utah State University</div>
                    <div className='education-details'>Bachelor of Science, Mechanical Engineering</div>
                    <div className='minors'>Minors:<HiDesktopComputer />Computer Science, <TbMathSymbols />Mathematics, <BsTreeFill />Environmental Studies</div>
                    <div>Completed: May 2022</div>
                </div>
            </div>
        </div>
    )
}

export default Education;