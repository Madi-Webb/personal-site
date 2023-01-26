import './style.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const App = () => {

    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
        </div>
    )
}

export default App;