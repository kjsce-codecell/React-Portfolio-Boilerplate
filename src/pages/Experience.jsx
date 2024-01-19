// importing components
import Card from '../components/Card';
// importing JSON data
import expData from '../data/expData.json';
// importing stylesheet
import '../css/Experience.css';

export default function Experience() {
    const data = expData[0];
    const data2 = expData[1];

    return (
        <div className='margin-block-50 page w-80'>
            <h1 className='page-heading txt-ctr'>Experience</h1>
            <div className='experience'>
                {/* Use index to determine if it's an even or odd card */}
                {/* Create a card component that takes in the data from the JSON file and renders it */}
                <Card
                    isReverse={true}
                    cardName={"expCard"}
                    title={data.title}
                    description={data.description}
                    imageUrl={data.imageUrl}
                    descType={"desc"}
                />

                <Card
                    cardName={"expCard"}
                    title={data2.title}
                    description={data2.description}
                    imageUrl={data2.imageUrl}
                    descType={"desc"}
                />

                {/*Challenge 1: We wants you to make more 2 components of Card with [3] and [4] from expData, but in card-variant: card2 */}
                {/* HINT: Use Props */}
                {/*Challenge 2: Use map function(iterate throught it), and give alternate card1 and card2 to make We Happy */}
                {/* HINT: Use index to determine if it's an even or odd card */}

                {/* {expData.map((data, index) => (
                    index % 2 === 0 ? (
                        <Card
                            key={index}
                            card={"card1"}
                            cardName={"expCard"}
                            title={data.title}
                            description={data.description}
                            imageUrl={data.imageUrl}
                            descType={"desc"}
                        />
                    ) : (
                        <Card
                            key={index}
                            card={"card2"}
                            cardName={"expCard"}
                            isReverse={true}
                            title={data.title}
                            description={data.description}
                            imageUrl={data.imageUrl}
                            descType={"desc"}
                        />
                    )
                ))} */}
            </div>
        </div>
    );
}