
import React from 'react';
import { motion } from 'framer-motion';

const bestSellers = [
  { name: "Sweets", img: "/images/best.jpeg", border: "purple-400" },
  { name: "snacks", img: "/images/best1.jpg", border: "green-400" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05 }
};

const BestSeller = () => {
  return (
    <section className="bg-[#f0ede0] py-16">
      <h2 className="text-3xl font-semibold text-center mb-12">Best Seller</h2>
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {bestSellers.map((item, index) => (
          <motion.div
            key={index}
            className="text-center cursor-pointer"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className={`border-t-8 border-b-8 border-${item.border} overflow-hidden rounded-lg`}>
              <motion.img
                src={item.img}
                alt={item.name}
                className="w-full h-72 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <h3 className="mt-4 font-semibold">{item.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BestSeller;
