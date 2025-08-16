import React from 'react';
import heroImage from '../assets/images/sweets.jpg';

const Hero = () => {
  return (
    <section 
      className="text-center text-black py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <h1 className="text-4xl md:text-5xl font-serif text-blue-600 mb-4">Welcome to Mithas Mahal Sweets</h1>
      <p className="text-lg md:text-xl">Delicious sweets, savories & bakes crafted with love</p>
    </section>
  );
};

export default Hero;
