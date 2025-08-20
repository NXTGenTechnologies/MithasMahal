/*import React, { useState } from "react";
import { motion } from "framer-motion";

const savouryData = [
  { id: 1, name: "Samosa", price: 40, image: "/images/savouries/DaalSamosa.jpg", category: "Fried Snacks" },
  { id: 2, name: "Nendram", price: 50, image: "/images/savouries/NendramChips.jpg", category: "Fried Snacks" },
  { id: 3, name: "Karasev", price: 100, image: "/images/savouries/pepperKarachev.jpeg", category: "Dry Snacks" },
  { id: 4, name: "Murukku", price: 120, image: "/images/savouries/SpicyMurkku.webp", category: "Dry Snacks" },
  { id: 5, name: "Cashew", price: 90, image: "/images/savouries/fried-cashew.webp", category: "Tea Time Snacks" },
  { id: 6, name: "Thattai", price: 80, image: "/images/savouries/Thattai.webp", category: "Fried Snacks" },
  { id: 7, name: "kadhalai mitthai", price: 70, image: "/images/savouries/kadalai-mittai.jpg", category: "Dry Snacks" },
  { id: 8, name: "Pakora", price: 60, image: "/images/savouries/pakora.jpeg", category: "Tea Time Snacks" },
];

const categories = ["All Savouries", "Fried Snacks", "Dry Snacks", "Tea Time Snacks"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function Savouries() {
  const [selectedCategory, setSelectedCategory] = useState("All Savouries");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredSavouries = savouryData.filter((item) =>
    selectedCategory === "All Savouries" ? true : item.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredSavouries.length / itemsPerPage);
  const paginatedSavouries = filteredSavouries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const countByCategory = (cat) =>
    savouryData.filter((item) =>
      cat === "All Savouries" ? true : item.category === cat
    ).length;

  return (
    <div className="px-4 py-8 mb-10 max-w-screen-xl mx-auto">
      <motion.h2 className="text-3xl md:text-5xl lg:text-6xl text-center mt-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Savouries
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
            onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
            className={`cursor-pointer border rounded-xl text-center transition ${
              selectedCategory === cat ? "border-[#9c7e38]" : "border-transparent"
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <h3 className="text-xl font-semibold">{cat}</h3>
            <div className="text-sm text-gray-800">{countByCategory(cat)} Products</div>
          </motion.div>
        ))}
      </motion.div>

      
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      >
        {paginatedSavouries.map((item) => (
          <motion.div
            key={item.id}
            className="rounded-xl p-4 flex flex-col bg-transparent transition"
            whileHover={{ scale: 1.02 }}
          >
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

const savouryData = [
  { id: 1, name: "Samosa", price: 40, image: "/images/savouries/DaalSamosa.jpg", category: "Fried Snacks" },
  { id: 2, name: "Nendram", price: 50, image: "/images/savouries/NendramChips.jpg", category: "Fried Snacks" },
  { id: 3, name: "Karasev", price: 100, image: "/images/savouries/pepperKarachev.jpeg", category: "Dry Snacks" },
  { id: 4, name: "Murukku", price: 120, image: "/images/savouries/SpicyMurkku.webp", category: "Dry Snacks" },
  { id: 5, name: "Cashew", price: 90, image: "/images/savouries/fried-cashew.webp", category: "Tea Time Snacks" },
  { id: 6, name: "Thattai", price: 80, image: "/images/savouries/Thattai.webp", category: "Fried Snacks" },
  { id: 7, name: "kadhalai mitthai", price: 70, image: "/images/savouries/kadalai-mittai.jpg", category: "Dry Snacks" },
  { id: 8, name: "Pakora", price: 60, image: "/images/savouries/pakora.jpeg", category: "Tea Time Snacks" },
];

const categories = ["All Savouries", "Fried Snacks", "Dry Snacks", "Tea Time Snacks"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function Savouries() {
  const [selectedCategory, setSelectedCategory] = useState("All Savouries");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredSavouries = savouryData.filter((item) =>
    selectedCategory === "All Savouries" ? true : item.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredSavouries.length / itemsPerPage);
  const paginatedSavouries = filteredSavouries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const countByCategory = (cat) =>
    savouryData.filter((item) =>
      cat === "All Savouries" ? true : item.category === cat
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
        Savouries
      </motion.h2>

      {/* Info Section */}
      <motion.div
        className="flex justify-center gap-6 md:gap-24 m-16 flex-wrap"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          { img: "shipping", text: "National Shipping in 4-6 days" },
          { img: "time", text: "15 Days Shelf Life" },
          { img: "earth", text: "International Shipping in 6-9 days" },
          { img: "no-preservatives", text: "No Preservatives" },
        ].map(({ img, text }, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center text-center text-sm sm:text-base"
          >
            <img
              src={`/images/${img}.png`}
              alt={text}
              width={40}
              height={40}
              className="py-4"
            />
            <p className="hidden md:block">{text}</p>
          </div>
        ))}
      </motion.div>

      {/* Categories */}
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
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-xl font-semibold">{cat}</h3>
            <div className="text-sm text-gray-800">{countByCategory(cat)} Products</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Products */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      >
        {paginatedSavouries.map((item) => (
          <motion.div
            key={item.id}
            className="rounded-xl p-4 flex flex-col bg-transparent transition"
            whileHover={{ scale: 1.02 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover mb-3 rounded-md mx-auto"
            />
            <h3 className="font-semibold text-[#9c7e38] text-xl">{item.name}</h3>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      <motion.div
        className="flex justify-center mt-10 space-x-3 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          className="px-3 py-1 cursor-pointer"
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
          className="px-3 py-1 cursor-pointer"
        >
          &gt;
        </button>
      </motion.div>
    </div>
  );
}


