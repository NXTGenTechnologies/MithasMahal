import React from "react";
import { motion } from "framer-motion";

const bestSellers = [
  { name: "Dry Fruit Laddu", img: "/images/bestseller/dry-fruits-ladoo.jpg", border: "bg-purple-400" },
  { name: "Gulab Jamun", img: "/images/bestseller/gulabjamun.webp", border: "bg-green-400" },
  { name: "Chocolate Cube", img: "/images/bestseller/chocolate-cubes.jpeg", border: "bg-yellow-400" },
  { name: "Motichoor Ladoo", img: "/images/bestseller/motichoor.jpg", border: "bg-blue-400" },
  { name: "Rasgulla", img: "/images/bestseller/rasgulla.jpg", border: "bg-purple-400" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.03 },
};

const BestSeller = () => {
  return (
    <section className="py-16 bg-transparent">
      <h2 className="text-3xl md:text-5xl text-center text-gray-950 mb-12">
        Best Seller
      </h2>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {bestSellers.map((item, index) => (
          <motion.div
            key={index}
            className="text-center"
            variants={itemVariants}
            whileHover="hover"
          >
            {/* Top Pattern */}
            <div className={`${item.border} h-4 w-full`} />

            {/* Image */}
            <motion.img
              src={item.img}
              alt={item.name}
              className="w-full h-80 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            {/* Bottom Pattern */}
            <div className={`${item.border} h-4 w-full`} />

            {/* Title */}
            <h3 className="mt-4 text-lg font-semibold text-[#9c7e38]">
              {item.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BestSeller;
