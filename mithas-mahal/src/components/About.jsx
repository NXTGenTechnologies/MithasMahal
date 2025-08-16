import React from 'react'
import { motion } from "framer-motion";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const About = () => {
  return (
    <>
    <section>
        <motion.div
          className="flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/images/mithas-mahal.jpg"
            alt="Premium Indian sweets in tray"
            className="w-full h-auto shadow-lg"
          />
        </motion.div>
    </section>
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
          className="text-center px-2 mb-2 md:mb-12 leading-relaxed max-w-4xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Mithas Mahal has grown to be synonymous with premium quality Indian Sweets.
          It has created a niche for itself for being one of the giftable brands
          in Tirunelveli today.
        </motion.p>
        <motion.div
          className="flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/images/hero5.jpg"
            alt="Premium Indian sweets in tray"
            className="hidden md:block w-full h-auto shadow-lg"
          />
        </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Quality that Delights, in every bite
              </h2>
              <p className="mb-6 leading-relaxed">
                At Mithas Mahal, quality is at the heart of everything we do. Each
                Mithas is a masterpiece, crafted with the finest ingredients,
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

      <section className="py-12 px-4 sm:px-6 container mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-serif text-center mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-center mx-auto mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Established in 1998, Mithas Mahal has become a trusted name in premium Indian sweets, known for its unwavering commitment to purity, taste, and tradition. For over 25 years, we have delighted generations with handcrafted mithais made from the finest ingredients sourced across India — from Kashmiri saffron to Delhi’s rich paneer. Our state-of-the-art, hygienic kitchen blends traditional techniques with modern innovation, producing thousands of kilos of fresh sweets daily. As tastes evolve, so do we — constantly updating our offerings and packaging to reflect the spirit of a modern, dynamic India while staying rooted in our values. Whether it’s a daily indulgence or a festive celebration, Mithas Mahal is proud to be a part of your sweetest moments — delivering not just sweets, but trust, joy, and a legacy of flavor in every bite.
        </motion.p>
        <motion.p
          className="text-center mx-auto mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          At Mithas Mahal, we believe that "a sweet isn't just made in the kitchen — it's made in the heart." This philosophy drives everything we do — from sourcing the purest ingredients to preserving age-old recipes passed down through generations. Each sweet we create is a symbol of love, culture, and celebration. With every bite, we strive to bring you not just a taste, but a memory — something that reminds you of home, of joy, and of togetherness. Our journey is not just about making sweets, but about making moments sweeter for everyone, everywhere.
        </motion.p>
      </section>
    </>
  )
}

export default About