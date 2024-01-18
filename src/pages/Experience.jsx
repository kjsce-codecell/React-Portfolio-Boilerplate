// importing components
import Card from '../components/Card';
// importing JSON data
import expData from '../data/expData.json';
// importing stylesheet
import '../css/Experience.css';

function Experience() 
{
    const data = expData[0];
    const data2 = expData[1];
    return (
        <div className='margin-block-50 page w-80'>
            <h1 className='page-heading'>Experience</h1>
            <div className='experience'>
                {/* Use index to determine if it's an even or odd card */}
                {/* Create a card component that takes in the data from the JSON file and renders it */}
                <Card
                    card={"card1"}
                    cardName={"expCard"}
                    title={data.title}
                    description={data.description}
                    imageUrl={data.imageUrl}
                    descType={"desc"}
                />
                <Card
                    card={"card1"}
                    cardName={"expCard"}
                    title={data2.title}
                    description={data2.description}
                    imageUrl={data2.imageUrl}
                    descType={"desc"}
                />
                {/*Challenge 1: Apurva wants you to make more 2 components of Card with [3] and [4] from expData, but in card-variant: card2 */}
                {/* HINT: Use Props */}
                {/*Challenge 2: Use map function(iterate throught it), and give alternate card1 and card2 to make Apurva Happy */}
                {/* HINT: Use index to determine if it's an even or odd card */}
                {/* Code it and make her Happy */}

                {/* ---------------------START CODING FROM HERE----------------------------- */}





                {/* END CODING HERE */}
            </div>
        </div>
    );
}


export default Experience;
