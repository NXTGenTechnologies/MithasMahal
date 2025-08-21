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

const Award = () => {
  return (
    <>
      <section className="py-12 px-4 sm:px-6 container mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-serif text-center mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Awards and Accreditations
        </motion.h2>
        <motion.p
          className="text-center max-w-4xl mx-auto mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          A Legacy of Excellence Recognized Globally. At Mithas Mahal, our passion for
          crafting luxurious mithais has earned us recognition from renowned
          institutions and delighted customers worldwide.
        </motion.p>
        <motion.p
          className="text-center max-w-4xl mx-auto mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          From being honored for our exquisite flavors to receiving accolades
          for sustainability and craftsmanship, each recognition motivates us to
          continue raising the bar.
        </motion.p>

        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-lg md:text-2xl font-medium mb-2">Priority</h3>
          <h3 className="text-xl md:text-3xl font-medium mb-6">
            Certifications
          </h3>
        </motion.div>

        <motion.div
          className="flex justify-center gap-10 sm:gap-16 md:gap-24 lg:gap-48 mt-8 flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {["1999", "iso", "fssai3", "fda"].map((cert, idx) => (
            <motion.div
              key={cert}
              className="w-16 h-16 flex items-center justify-center"
              custom={idx}
              variants={fadeUp}
            >
              <img src={`/images/${cert}.png`} alt={cert} width={64} height={64} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Award;
