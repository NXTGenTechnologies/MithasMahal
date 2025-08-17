/*import React from 'react';
import heroImage from '/images/hero5.jpg';

const Hero = () => {
  return (
      <section 
  className="w-full h-[600px] md:h-[500px] text-center text-black bg-cover bg-center"
  style={{ backgroundImage: `url(${heroImage})` }}
>
      <h1 className="text-4xl md:text-5xl font-serif text-white-600 mb-4">Welcome to Mithas Mahal Sweets</h1>
      <p className="text-lg md:text-xl">Delicious sweets, savories & bakes crafted with love</p>
    </section>
  );
};



export default Hero;*/
import React from 'react';
import heroImage from '/images/hero5.jpg';

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[500px] text-center">
     
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

     
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4">
        <h1 className="text-5xl md:text-6xl font-serif text-white font-bold drop-shadow-lg mb-4">
          Welcome to Mithas Mahal
        </h1>
        <p className="text-lg md:text-2xl text-white drop-shadow-md mb-6">
          Delicious sweets, savories & bakes crafted with love
        </p>
       
      </div>
    </section>
  );
};
export default Hero;

export default Hero;

