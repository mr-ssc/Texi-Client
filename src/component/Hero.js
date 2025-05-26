import React from 'react';
import logo from "./Img/logo.png";
import './Hero.css';

const Hero = () => {
  return (
    <div className='Hero-hero-container'>
      <img 
        src={logo} 
        alt="Full screen logo" 
        className="Hero-full-screen-image"
      />
    </div>
  );
};

export default Hero;