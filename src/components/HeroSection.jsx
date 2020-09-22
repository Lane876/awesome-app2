import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link as Scroll } from "react-scroll";


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Let's Work Together!</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      <Scroll
                activeClass="active"
                to="cards"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-70}
                duration={700}
                delay={100}
                isDynamic={true}
                ignoreCancelEvents={false}
                
              >
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          PROJECTS
        </Button>
        </Scroll>
        <Scroll
                activeClass="active"
                to="footer-container"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-70}
                duration={700}
                delay={100}
                isDynamic={true}
                ignoreCancelEvents={false}
                
              >
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          CONTACT <i className="fas fa-envelope"/>
        </Button>
        </Scroll>
      </div>
    </div>
  );
}

export default HeroSection;