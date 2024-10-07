import React from 'react';
import './styling/Hero.css';
import image from './image/image1.jpg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Rishabh Malav</h1>
        <p className="hero-tagline">I'm a Software Developer specializing in Nothing</p>
      </div>
      <div className="hero-image-container">
        <img src={image} alt="Your image" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
