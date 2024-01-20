// importing necessary dependencies
import { Description } from '@mui/icons-material';
// importing stylesheet
import '../css/About.css';
// importing assets
// import yourImageName from "../../public/yourImageName";

export default function About() {
    return (
        <>
            <div className='about-page'>
                <h1 className='page-heading' id='about'>
                    About Me
                </h1>

                <div className='frame margin-block-50'>
                    {/* 
                        Hint: 
                        Store your image in the public folder
                        import the image above in line 6
                        create a img tag 
                        In the scr tag type {yourImageName}
                     */}
                </div>

                {/* 
                    Create an h1 tag with className = "about-name" 
                    Add your name inside the h1 tag
                */}

                {/* 
                    Create a paragraph tag with className = "about-desc"
                    Add your description inside the p tag

                    Example Description:
                    Hello there! I'm CodeCell, a passionate web developer with a knack for turning ideas into reality through clean and efficient code.
                    My journey in the world of web development began 2 years ago, and since then, I've been on a continuous quest to enhance my skills
                    and stay on the cutting edge of technology. With a solid foundation in HTML, CSS, and JavaScript, I specialize in crafting responsive and
                    user-friendly websites that not only meet but exceed the expectations of clients.
                */}

                {/* remove this line after you've coded the above section */}
                <p className="txt-ctr">We'll code this empty page</p>
            </div>
        </>
    );
};
