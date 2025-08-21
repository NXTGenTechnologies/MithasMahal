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
      <section className="py-12">
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl px-1 text-center mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Excellence in Every Morsel
        </motion.h2>
        <motion.p
          className="text-center mb-2 leading-relaxed max-w-4xl mx-auto"
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
    </>
  );
};

export default ExcellenceSection;
