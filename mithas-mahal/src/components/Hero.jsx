import React from 'react';
import heroImage from '/images/all-sweets.webp';

const Hero = () => {
  return (
      <section 
  className="w-full h-[600px] md:h-[500px] text-center text-black bg-cover bg-center"
  style={{ backgroundImage: `url(${heroImage})` }}
>
      <h1 className="text-4xl md:text-5xl font-serif text-blue-600 mb-4">Welcome to Mithas Mahal Sweets</h1>
      <p className="text-lg md:text-xl">Delicious sweets, savories & bakes crafted with love</p>
    </section>
  );
};



export default Hero;
