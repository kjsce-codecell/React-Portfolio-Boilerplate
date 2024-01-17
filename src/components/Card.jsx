// importing from react-router-dom
import { Link } from 'react-router-dom';
// importing framer
import { motion } from 'framer-motion';
// importing stylesheet
import '../css/Projects.css';

export default function Card(props) {

    const cardVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <motion.div
                className='card'
                variants={cardVariants}
                initial='hidden'
                animate='visible'
                transition={{ duration: 0.75 }}
            >
                {/* card = card1 or card2 */}
                <div className={props.card}>
                    {/* cardName - expCard or infoCard */}
                    <div className={props.cardName}>
                        <div className={`${props.isReverse && "reverse"} ${props.cardName === "infoCard" && "header"}`}>
                            <div className="bg">
                                <div className={props.cardName === "infoCard" ? "heading" : "title"}>
                                    {props.title}
                                </div>
                            </div>
                        </div>

                        <div className={props.descType}>
                            {props.description}
                            {/* conditional rendering */}
                            {/* will only render the image block if the imageUrl exists */}
                            {props.imageUrl && (
                                <img
                                    src={props.imageUrl}
                                    alt={props.title}
                                    className="card-image"
                                />
                            )}
                        </div>

                        {props.viewMore && (
                            <div className='margin-block-20 view-more'>
                                <Link onClick={() => { window.scrollTo(0, 0) }} to={props.viewMoreLink}>View more</Link>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </>
    );
};