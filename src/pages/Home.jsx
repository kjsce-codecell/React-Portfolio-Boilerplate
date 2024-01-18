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
    //Make a state to store the value of isPlaying and a function to update it named setIsPlaying for it to pause and play the music
    // Start coding from here









    // End coding here

    const [cdPosition, setCdPosition] = useState("up");
    
    // add a useEffect to play the music when the component is mounted

    // function to handle the radio click
    const handleRadioClick = () => {
        console.log("clicked");
        //Change the state of isPlaying to the opposite of what it is
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
                    alt="cassete"
                    className={`home-cassete`}
                />

                <h1 className='home-title'>
                    Apurva Dharam
                </h1>
            </div>

            <div
                className='click-btn'
                // onClick={handleRadioClick}
            >
                {"CLICK ME"}
                {/* {isPlaying ? "PAUSE" : "PLAY"} */}
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
