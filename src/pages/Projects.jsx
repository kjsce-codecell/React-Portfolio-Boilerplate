// importing data
import Data from "../data/projectData.json";
// importing stylesheets
import '../css/Projects.css';
// importing components
import Card from "../components/Card";

export default function Projects() {
    const imgArray = [
        "/sample.png",
        "/datazen.png",
        "/hack.jpeg"
    ];

    return (
        <>
            <div className='margin-block-50 page w-80'>
                <h1 className='page-heading txt-ctr' id="projects">Projects</h1>

                <div className='preview'>
                    <img src='/sample.png' alt='Project Preview'></img>
                    <img src='/datazen.png' alt='Project Preview'></img>
                    <img src='/hack.png' alt='Project Preview'></img>
                </div>

                <div className="project-container">
                    {/* Apurva wants to iterate(map) throught the "Data" with Card props with  */}
                    {/* title, description, imageUrl, descType, isReverse */}
                    {/* HINT: Use map function(iterate throught it), and give alternate card1 and card2 to make her Happy */}
                    {/* HINT: Use index to determine if it's an even or odd card */}
                    
                    {/* {Data.map((data, index) => {
                        return (
                            <div className='project' key={data.id}>
                                <Card
                                    cardName={"infoCard"}
                                    title={data.title}
                                    description={data.description}
                                    descType={"info"}
                                    isReverse={index % 2 === 0 ? true : false}

                                />
                            </div>

                        );
                    })} */}

                </div>
            </div>
        </>
    );
}


