// importing from react-router-dom
import { Link } from 'react-router-dom';
// importing stylesheet
import '../css/Projects.css';

export default function Card(props) {
    return (
        <>
            <div className='card'>
                {/* card = card1 or card2 */}
                <div className={props.isReverse ? "card1":"card2"}>
                    {/* cardName - expCard or infoCard */}
                    <div >
                    <div className={`header`}>
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
            </div>
        </>
    );
};