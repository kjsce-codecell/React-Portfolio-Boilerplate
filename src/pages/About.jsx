// importing necessary dependencies
import React from 'react';
import { motion } from 'framer-motion';
import '../css/About.css';
import photo from '../assets/photo.png';

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
            <motion.div
                className='margin-block-50 page'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <h1 className='page-heading txt-ctr'>About Me</h1>
                <motion.div
                    className='frame margin-block-50'
                    variants={imageVariants}
                    initial='hidden'
                    animate='visible'
                >
                    <img src={photo} alt='my-img' border="10px" />
                </motion.div>

                <h1 className="page-sub-heading txt-ctr margin-block-20">
                    Kjsce CodeCell
                </h1>

                <motion.div
                    className='text margin-block-20'
                    variants={textVariants}
                    initial='hidden'
                    animate='visible'
                >
                    Hello there! I'm CodeCell, a passionate web developer with a knack for turning ideas into reality through clean and efficient code.
                    My journey in the world of web development began 2 years ago, and since then, I've been on a continuous quest to enhance my skills
                    and stay on the cutting edge of technology. With a solid foundation in HTML, CSS, and JavaScript, I specialize in crafting responsive and
                    user-friendly websites that not only meet but exceed the expectations of clients.
                </motion.div>
            </motion.div>
        </>
    );
};

export default About;
