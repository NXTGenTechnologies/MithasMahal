import React from 'react';
import aboutImg from '/images/mithas-mahal.jpg';

const About = () => {
  return (
    <section className="text-center py-16 px-4">
      <h1 className="text-3xl text-green-600 mb-4">Quality that delights, In every bite.</h1>
      <p className="mb-4 text-lg">At Mithas Mahal, each sweet is a masterpiece crafted with the finest ingredients and a passion for perfection. Experience a blend of tradition, innovation, and unmatched flavor.</p>
      <p className="mb-6 text-lg">From the first bite to the last, we promise a delightful experience that tantalizes your taste buds and leaves you craving more.</p>
      <img src={aboutImg} alt="Delicious sweets" className="mx-auto rounded-lg shadow-lg w-full max-w-md"/>
    </section>
  );
};

export default About;
