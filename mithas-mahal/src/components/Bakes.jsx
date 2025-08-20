/*import React, { useState } from "react";
import { motion } from "framer-motion";

const bakeData = [
  { id: 1, name: "Banana Cake", price: 350, image: "/images/bakes/BANANACAKE.webp", category: "Cakes" },
  { id: 2, name: "CreamRoll", price: 200, image: "/images/bakes/CreamRoll.jpg", category: "Pastries" },
  { id: 3, name: "Ghee cake", price: 150, image: "/images/bakes/Ghee-Cake.jpg", category: "Cakes" },
  { id: 4, name: "Jam roll", price: 180, image: "/images/bakes/jam-roll.jpeg", category: "Pastries" },
  { id: 5, name: "Cupcake", price: 120, image: "/images/bakes/cup-cake.jpg", category: "Muffins" },
  { id: 6, name: "Pancake", price: 400, image: "/images/bakes/pancake.webp", category: "Cakes" },
  { id: 7, name: "Pastry", price: 220, image: "/images/bakes/pastry.webp", category: "Pastries" },
  { id: 8, name: "Sweet bun", price: 250, image: "/images/bakes/sweet-bun.jpg", category: "Muffins" },
];

const categories = ["All Bakes", "Cakes", "Muffins", "Pastries"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

export default function Bakes() {
  const [selectedCategory, setSelectedCategory] = useState("All Bakes");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredBakes = bakeData.filter((item) =>
    selectedCategory === "All Bakes" ? true : item.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredBakes.length / itemsPerPage);
  const paginatedBakes = filteredBakes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const countByCategory = (cat) =>
    bakeData.filter((item) => (cat === "All Bakes" ? true : item.category === cat)).length;

  return (
    <div className="px-4 py-8 mb-10 max-w-screen-xl mx-auto">
      <motion.h2 className="text-3xl md:text-5xl lg:text-6xl text-center mt-8"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        Bakes
      </motion.h2>

      
      <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 pt-8"
        initial="hidden" animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {categories.map((cat) => (
          <motion.div key={cat} onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
            className={`cursor-pointer border rounded-xl text-center transition ${
              selectedCategory === cat ? "border-[#9c7e38]" : "border-transparent"
            }`}
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          >
            <h3 className="text-xl font-semibold">{cat}</h3>
            <div className="text-sm text-gray-800">{countByCategory(cat)} Products</div>
          </motion.div>
        ))}
      </motion.div>

      
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden" animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      >
        {paginatedBakes.map((item) => (
          <motion.div key={item.id} className="rounded-xl p-4 flex flex-col bg-transparent transition"
            whileHover={{ scale: 1.02 }}>
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-3 rounded-md mx-auto" />
            <h3 className="font-semibold text-[#9c7e38] text-xl">{item.name}</h3>
          </motion.div>
        ))}
      </motion.div>

      
      <motion.div className="flex justify-center mt-10 space-x-3 font-semibold">
        <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}>&lt;</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i + 1} onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-full cursor-pointer ${
              currentPage === i + 1 ? "bg-[#9c7e38] text-white" : ""
            }`}>
            {i + 1}
          </button>
        ))}
        <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}>&gt;</button>
      </motion.div>
    </div>
  );
}*/
import React, { useState } from "react";
import { motion } from "framer-motion";

const bakeData = [
  { id: 1, name: "Banana Cake", price: 350, image: "/images/bakes/BANANACAKE.webp", category: "Cakes" },
  { id: 2, name: "Cream Roll", price: 200, image: "/images/bakes/CreamRoll.jpg", category: "Pastries" },
  { id: 3, name: "Ghee Cake", price: 150, image: "/images/bakes/Ghee-Cake.jpg", category: "Cakes" },
  { id: 4, name: "Jam Roll", price: 180, image: "/images/bakes/jam-roll.jpeg", category: "Pastries" },
  { id: 5, name: "Cupcake", price: 120, image: "/images/bakes/cup-cake.jpg", category: "Muffins" },
  { id: 6, name: "Pancake", price: 400, image: "/images/bakes/pancake.webp", category: "Cakes" },
  { id: 7, name: "Pastry", price: 220, image: "/images/bakes/pastry.webp", category: "Pastries" },
  { id: 8, name: "Sweet Bun", price: 250, image: "/images/bakes/sweet-bun.jpg", category: "Muffins" },
];

const categories = ["All Bakes", "Cakes", "Muffins", "Pastries"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function Bakes() {
  const [selectedCategory, setSelectedCategory] = useState("All Bakes");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredBakes = bakeData.filter((item) =>
    selectedCategory === "All Bakes" ? true : item.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredBakes.length / itemsPerPage);
  const paginatedBakes = filteredBakes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const countByCategory = (cat) =>
    bakeData.filter((item) =>
      cat === "All Bakes" ? true : item.category === cat
    ).length;

  return (
    <div className="px-4 py-8 mb-10 max-w-screen-xl mx-auto">
      
      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl text-center mt-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Bakes
      </motion.h2>

      
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 pt-8"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {categories.map((cat) => (
          <motion.div
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1);
            }}
            className={`cursor-pointer border rounded-xl text-center transition ${
              selectedCategory === cat ? "border-[#9c7e38]" : "border-transparent"
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <h3 className="text-xl font-semibold">{cat}</h3>
            <div className="text-sm text-gray-800">
              {countByCategory(cat)} Products
            </div>
          </motion.div>
        ))}
      </motion.div>

      
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      >
        {paginatedBakes.map((item) => (
          <motion.div
            key={item.id}
            className="rounded-xl p-4 flex flex-col bg-transparent transition"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover mb-3 rounded-md mx-auto"
            />
            <h3 className="font-semibold text-[#9c7e38] text-xl">
              {item.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>

      
      <motion.div className="flex justify-center mt-10 space-x-3 font-semibold">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="disabled:opacity-50"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-full cursor-pointer ${
              currentPage === i + 1 ? "bg-[#9c7e38] text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="disabled:opacity-50"
        >
          &gt;
        </button>
      </motion.div>
    </div>
  );
}





