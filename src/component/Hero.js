import React, { useEffect } from 'react';
import logo from "./Img/hero.png";
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    // Trigger animation after component mounts
    const image = document.querySelector('.Hero-full-screen-image');
    if (image) {
      image.classList.add('Hero-animate');
    }
  }, []);

  return (
    <div className='Hero-hero-container'>
      <div className="Hero-overlay"></div>
      <img
        src={logo}
        alt="Full screen hero"
        className="Hero-full-screen-image"
      />
      <div className="Hero-content">
        <h1 className="Hero-title">Welcome to Our Platform</h1>
        <p className="Hero-subtitle">Discover amazing experiences</p>
        <button className="Hero-cta">Explore Now</button>
      </div>
    </div>
  );
};

export default Hero;