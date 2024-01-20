
// importing from config

// importing stylesheet
import "../src/index.css";
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from "./components/NavBar";

const App = () => {
    return (
        <div>
        <Navbar/>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
         
            <Home/>
            <About/>
            <Experience/>
            <Projects/>
            <Contact/> 
        </div>
        </div>
    );
};

export default App;
