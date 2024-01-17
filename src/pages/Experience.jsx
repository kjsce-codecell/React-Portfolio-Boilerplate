import React from 'react';
// importing components
import Card from '../components/Card';
// importing JSON data
import expData from '../data/expData.json';
// importing stylesheet
import '../css/Experience.css';

const Experience = () => {
    return (
        <div className='margin-block-50 page w-80'>
            <h1 className='page-heading'>Experience</h1>
            <div className='experience'>
                {/* Use index to determine if it's an even or odd card */}
                {expData.map((data, index) => (
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
                ))}
            </div>
        </div>
    );
};

export default Experience;
