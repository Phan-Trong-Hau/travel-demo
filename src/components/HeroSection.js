import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video2 from '../../src/components/assets/videos/video-2.mp4';


const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src={video2} autoPlay loop muted></video>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className='fa-regular fa-circle-play'></i></Button>
            
            </div>
        </div>
    );
};

export default HeroSection;