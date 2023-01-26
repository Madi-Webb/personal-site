import { MdLocationPin } from 'react-icons/md';
import Links from './Links';
const Contact = () => {

    return (
        <div className="opp wrap-reverse">
            <div className="contact" id='Contact Me'>
                <h1>Reach out to me!</h1>
                <h2>Discuss a project or just want to say hi? My inbox is open for all.</h2>
                <h3><MdLocationPin />SLC Area</h3>
                <div>Open to opportunities: Yes</div>
                <Links />
            </div>
            <img className="my-pic" src='https://i.imgur.com/DZ0agFj.png'></img>
        </div>
    )
}

export default Contact;