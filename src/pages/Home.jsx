// importing from react
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { Link } from 'react-router-dom';
// importing assets
import background from '../assets/background-home.png';
import cd from '../assets/cd.svg';
import casette from '../assets/casette.png';
import ribbon from "../assets/ribbon.png";
// importing audio
import musicFile from '../assets/music.mp3';
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
    const [cdPosition, setCdPosition] = useState(-1500);



    useEffect ( () =>{ 
        
        if (!isPlaying) {
            stop(); // stop the music
        } else {
            play(); // play the music
        }
        setCdPosition(!isPlaying ? -1500 : -400);
        return  ( ) => {
            stop();
        } 
    }, [isPlaying])
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
                    src={casette}
                    alt=""
                    className='home-radio' // adding onClick event
                />

                {/* CD */}
                <img
                    src={cd}
                    alt=""
                    style={{
                        position: 'absolute',
                        top: `${cdPosition}px`,
                        left: '0',
                        width: '100%',
                        zIndex: '1',
                        transform: 'scale(0.1)',
                        transition: 'top 1s ease-in-out',
                    }}
                />

                <h1
                    className='home-title'
                >
                    Apurva Dharam
                </h1>
            </div>

            <div
                className='click-btn'
                onClick={handleRadioClick}
            >
                {isPlaying ? "PAUSE" : "PLAY"}
            </div>

            <div className='flex gap-20 w-80 margin-a-a margin-block-50 preview'>
                <Card
                    card={"card1"}
                    cardName={"infoCard"}
                    title={"PROJECTS"}
                    description={selectedProject.description}
                    descType={"info"}
                    viewMore={true}
                    viewMoreLink={"/projects"}
                />

                <Card
                    card={"card2 card_2"}
                    cardName={"infoCard"}
                    isReverse={true}
                    title={"EXPERIENCES"}
                    description={selectedExperience.description}
                    descType={"info"}
                    viewMore={true}
                    viewMoreLink={"/experience"}
                />
            </div>
        </>
    );
};
