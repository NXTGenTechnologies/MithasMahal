"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/heroBG.jpeg",
  "/images/heroBG2.jpg",
  "/images/heroBG3.jpg",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] flex items-center py-10 sm:py-12 md:py-20 overflow-hidden">
      
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/10" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center md:text-right">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 sm:mb-8 leading-snug sm:leading-tight font-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <br className="hidden md:block" /> Mithas Mahal
        </motion.h1>

        <motion.p
          className="text-white text-sm sm:text-base md:text-lg mb-8 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Wide variety of sweets and delicacies to choose from. <br className="hidden sm:block" />
          Explore the deliciousness that awaits you!
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
