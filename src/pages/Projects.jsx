// importing data
import Data from "../data/projectData.json";
// importing stylesheets
import '../css/Projects.css';
// importing components
import Card from "../components/Card";

export default function Projects() {
    return (
        <>
            <div className='margin-block-50 page w-80'>
                <h1 className='page-heading'>Projects</h1>

                <div className='preview'>
                    <img src='src/assets/sample.png' alt='Project Preview'></img>
                    <img src='src/assets/datazen.jpeg' alt='Project Preview'></img>
                    <img src='src/assets/hack.jpeg' alt='Project Preview'></img>
                </div>

                <div className="desp">
                    {Data.map((data, index) => {
                        return (
                            <div className='project' key={data.id}>
                                {index % 2 === 0 ? (
                                    <Card
                                        card={"card1"}
                                        cardName={"infoCard"}
                                        title={data.title}
                                        description={data.description}
                                        descType={"info"}
                                    />
                                ) : (
                                    <Card
                                        card={"card2 card_2"}
                                        cardName={"infoCard"}
                                        isReverse={true}
                                        title={data.title}
                                        description={data.description}
                                        descType={"info"}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};


