"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const ExcellenceSection = () => {
  return (
    <>
      <section className="py-16">
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl px-1 text-center mt-12 mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Excellence in Every Morsel
        </motion.h2>
        <motion.p
          className="text-center mb-2 md:mb-8 leading-relaxed max-w-4xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Mithas Mahal has grown to be synonymous with premium quality Indian Sweets.
          It has created a niche for itself for being one of the giftable brands
          in Gurugram today.
        </motion.p>
      </section>

      <section className="py-12 bg-transparent px-4 sm:px-6 lg:px-20 xl:px-32">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="md:w-1/2 order-2 md:order-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Quality that Delights, in every bite
              </h2>
              <p className="mb-6 leading-relaxed">
                At Mithas Mahal, quality is at the heart of everything we do. Each
                mithai is a masterpiece, crafted with the finest ingredients,
                meticulous attention to detail, and a passion for perfection.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img
                src="/images/peda.webp"
                alt="Kaju Katli and other sweets"
                className="rounded-lg shadow-sm w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-transparent px-4 sm:px-6 lg:px-20 xl:px-32" id="aboutus">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="md:w-1/2">
              <img
                src="/images/diwali-sweets-2.jpg"
                alt="Family behind Mithas Mahal"
                className="rounded-xl shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm mx-auto"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-lg md:text-2xl font-medium mb-2">About Us</h3>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Taste of Sweet India
              </h2>
              <p className="leading-relaxed">
                We believe that desserts are more than just treats—they're
                moments of joy, love, and togetherness. From traditional
                favorites to innovative confections, our creations are crafted
                with the finest ingredients and a passion for perfection.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-transparent px-4 sm:px-6 lg:px-20 xl:px-32">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="md:w-1/2 order-2 md:order-1 text-center md:text-left">
              <h3 className="text-lg md:text-2xl font-medium mb-2">
                Our Philosophy
              </h3>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Luxurious Mithais, Accessible To Everyone
              </h2>
              <p className="leading-relaxed">
                Our luxurious mithais are crafted with the finest ingredients,
                ensuring a melt-in-your-mouth experience that speaks of elegance
                and quality. Yet, our mission goes beyond indulgence—we believe
                that these exquisite delights should be accessible to everyone.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img
                src="/images/rasgulla-avacado.jpg"
                alt="Handcrafted sweets being made"
                className="rounded-xl shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ExcellenceSection;
