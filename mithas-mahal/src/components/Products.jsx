import React from "react";
import { Link } from "react-router-dom";

// Add more products for demonstration
const products = [
  // Sweets
  { id: 1, name: "Motichoor Laddu", price: "Rs 200", img: "/images/sweets/laddu.webp", category: "Sweets" },
  { id: 2, name: "Rasgulla", price: "Rs 180", img: "/images/sweets/rasgulla.webp", category: "Sweets" },
  { id: 3, name: "Soan Papadi", price: "Rs 99", img: "/images/sweets/soan-papdi.webp", category: "Sweets" },
  { id: 4, name: "Kaju Katli", price: "Rs 140", img: "/images/sweets/kajukatli.webp", category: "Sweets" },
  { id: 13, name: "Gulab Jamun", price: "Rs 160", img: "/images/sweets/gulabjamun.webp", category: "Sweets" },
  { id: 14, name: "Barfi", price: "Rs 120", img: "/images/sweets/barfi.webp", category: "Sweets" },
  { id: 15, name: "Peda", price: "Rs 110", img: "/images/sweets/peda.webp", category: "Sweets" },
  { id: 15, name: "Jalebi", price: "Rs 110", img: "/images/sweets/jalebi.webp", category: "Sweets" },

  // Savouries
  { id: 5, name: "Daal Samosa", price: "Rs 120", img: "/images/savouries/DaalSamosa.jpg", category: "Savouries" },
  { id: 6, name: "Nendram Chips", price: "Rs 90", img: "/images/savouries/NendramChips.jpg", category: "Savouries" },
  { id: 7, name: "Spicy Murukku", price: "Rs 150", img: "/images/savouries/SpicyMurkku.webp", category: "Savouries" },
  { id: 8, name: "Thatthai", price: "Rs 100", img: "/images/savouries/Thattai.webp", category: "Savouries" },
  { id: 16, name: "Cashew", price: "Rs 90", img: "/images/savouries/fried-cashew.webp", category: "Savouries" },
  { id: 17, name: "Karasev", price: "Rs 100", img: "/images/savouries/pepperKarachev.jpeg", category: "Savouries" },
  { id: 17, name: "Kadhalai Mitthai", price: "Rs 70", img: "/images/savouries/kadalai-mittai.jpg", category: "Savouries" },
  { id: 17, name: "Pakora", price: "Rs 60", img: "/images/savouries/pakora.jpeg", category: "Savouries" },

  // Bakes
  { id: 9, name: "Cream Roll", price: "Rs 130", img: "/images/bakes/CreamRoll.jpg", category: "Bakes" },
  { id: 10, name: "Ghee Cake", price: "Rs 160", img: "/images/bakes/Ghee-Cake.jpg", category: "Bakes" },
  { id: 11, name: "Banana Cake", price: "Rs 170", img: "/images/bakes/BANANACAKE.webp", category: "Bakes" },
  { id: 12, name: "Jam Roll", price: "Rs 140", img: "/images/bakes/jam-roll.jpeg", category: "Bakes" },
  { id: 18, name: "Pastry", price: "Rs 180", img: "/images/bakes/pastry.webp", category: "Bakes" },
  { id: 19, name: "Pancake", price: "Rs 400", img: "/images/bakes/pancake.webp", category: "Bakes" },
  { id: 19, name: "Sweet Bun", price: "Rs 250", img: "/images/bakes/sweet-bun.jpg", category: "Bakes" },
  { id: 19, name: "Cupcake", price: "Rs 120", img: "/images/bakes/cup-cake.jpg", category: "Bakes" },

];

const Products = ({ title, id }) => {
  const filteredProducts = products.filter((p) => p.category === title);

  return (
    <section className="py-12 px-6">
      <h2
        id={id}
        className="text-3xl md:text-5xl lg:text-6xl text-gray-950 mb-12 text-center"
      >
        {title}
      </h2>

      <div className="scrollbar-hide flex gap-8 overflow-x-auto pb-4">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="min-w-[240px] max-w-[240px] bg-gray-100 rounded-xl overflow-hidden text-center transition transform hover:scale-105"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-[#9c7e38]">{p.name}</h4>
              {/* <p className="text-md text-gray-600">{p.price}</p> */}
              {/* <p className="text-sm text-gray-500 mt-1">500g | 1 Box</p> */}
            </div>
          </div>
        ))}
      </div>

      {title === "Sweets" && (
        <div className="w-full flex justify-center mt-4">
          <Link
            to="/sweets"
            className="bg-[#9c7e38] border border-[#9c7e38] text-white px-6 py-2 rounded-md hover:bg-transparent hover:text-[#9c7e38] transition"
          >
            View All Sweets
          </Link>
        </div>
      )}
      {title === "Savouries" && (
        <div className="w-full flex justify-center mt-4">
          <Link
            to="/savouries"
            className="bg-[#9c7e38] border border-[#9c7e38] text-white px-6 py-2 rounded-md hover:bg-transparent hover:text-[#9c7e38] transition"
          >
            View All Savouries
          </Link>
        </div>
      )}
      {title === "Bakes" && (
        <div className="w-full flex justify-center mt-4">
          <Link
            to="/bakes"
            className="bg-[#9c7e38] border border-[#9c7e38] text-white px-6 py-2 rounded-md hover:bg-transparent hover:text-[#9c7e38] transition"
          >
            View All Bakes
          </Link>
        </div>
      )}
    </section>
  );
};

export default Products;