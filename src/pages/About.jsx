// importing necessary dependencies

import { Description } from '@mui/icons-material';
import '../css/About.css';
// import photo from '../assets/photo.png';

const About = () => {
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 , transition: {delay: 0.2}},
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
    };

    return (
        <>
            <div className='about-page'>

                <h1 className='page-heading'>About Me</h1>
                <div className='frame'>
                    {/*We want you to add your image here with path ../assets/photo.png and border with border=10px*/}
                </div>
                    {/*We want you to add your name here name with h1 tag with className="about-name" */}

                    {/*We want you to add your description here with className="about-description" */}
            </div>
        </>
    );
};

export default About;



















// Example Description:

// Hello there! I'm CodeCell, a passionate web developer with a knack for turning ideas into reality through clean and efficient code.
// My journey in the world of web development began 2 years ago, and since then, I've been on a continuous quest to enhance my skills
// and stay on the cutting edge of technology. With a solid foundation in HTML, CSS, and JavaScript, I specialize in crafting responsive and
// user-friendly websites that not only meet but exceed the expectations of clients.