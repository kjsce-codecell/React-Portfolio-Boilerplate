// importing from react
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { Link } from 'react-router-dom';
// importing assets
import cassete from '../../public/cassete.svg';
import radio from '../../public/radio.png';
// importing audio
import musicFile from '../../public/music.mp3';
// Importing components
import Card from '../components/Card';
// importing data
import expData from '../data/expData.json';
import Data from "../data/projectData.json";
// importing stylesheets
import '../css/Home.css';

export default function Home() {
    // state to control the play/pause of music
    const [play, { stop }] = useSound(musicFile, { volume: 0.5 });
    // state to store a boolean value of status of music - true when playing and false when paused
    const [isPlaying, setIsPlaying] = useState(false);
    // state to manage the position of cd when the music play/pause
    const [cdPosition, setCdPosition] = useState(false);
    
    // useEffect to be called 
    useEffect(() => {
        if (!isPlaying) {
            stop(); // stop the music
        } else {
            play(); // play the music
        }
        setCdPosition(isPlaying ? false : true);
        return () => {
            stop();
        }
    }, [isPlaying]);

    // function to handle the radio click
    const handleRadioClick = () => {
        setIsPlaying(prevState => !prevState);
    };

    // Select a specific card by index
    const selectedProjectIndex = 0;
    const selectedProject = Data[selectedProjectIndex];
    const selectedExperienceIndex = 0;
    const selectedExperience = expData[selectedExperienceIndex];

    return (
        <>
            <div className='home-container'>
                <img
                    src={radio}
                    alt="radio"
                    className='home-radio'
                />

                {/* CASSET */}
                <img
                    src={cassete}
                    alt="casset"
                    className={`home-cassete ${ isPlaying && "down"}`}
                />

                <h1 className='home-title'>
                    Lorem ipsum
                </h1>
            </div>

            <div
                className='click-btn'
                onClick={handleRadioClick}
            >
                {isPlaying ? "PAUSE" : "PLAY"}
            </div>

            <div className='flex gap-20 w-80 margin-a-a margin-block-50 preview'>
                {/* We want to make a preview of the "Experience" and "Projects" page, So, we want to display two Card component from each page */}
                {/* HINT: Use Props */}
                {/* Use card-variant: card1/card_2, 
                    cardName: infoCard
                    isReverse: true/false
                    title: Experiences or Projects
                    descriptionType: info
                    viewMore: true/false
                    viewMoreLink: /experience or /projects
                */}
                {/* Hint: The similar thing is on the page */}

                {/* ---------------------START CODING FROM HERE----------------------------- */}



                {/* END CODING HERE */}
            </div>
        </>
    );
};
