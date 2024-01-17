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
                {/*Create a card component that takes in the data from the JSON file and renders it*/}
            </div>
        </div>
    );
};

export default Experience;
