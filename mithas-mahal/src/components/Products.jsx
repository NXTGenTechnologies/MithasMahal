import React from 'react';

const products = [
  { id: 1, name: 'Motichoor Laddu', price: 'Rs 200', img: '/images/sweets/laddu.webp', category: 'Sweets' },
  { id: 2, name: 'Rasgulla', price: 'Rs 180', img: '/images/sweets/rasgulla.webp', category: 'Sweets' },
  { id: 3, name: 'Soan Papadi', price: 'Rs 99', img: '/images/sweets/soan-papdi.webp', category: 'Sweets' },
  { id: 4, name: 'Kaju Katli', price: 'Rs 140', img: '/images/sweets/kajukatli.webp', category: 'Sweets' },
  { id: 5, name: 'Mysore Pak', price: 'Rs 110', img: '/images/sweets/mysorepak.webp', category: 'Sweets' },

  { id: 6, name: 'Daal Samosa', price: 'Rs 120', img: '/images/savouries/DaalSamosa.jpg', category: 'Savouries' },
  { id: 7, name: 'Nendram Chips', price: 'Rs 90', img: '/images/savouries/NendramChips.jpg', category: 'Savouries' },
  { id: 8, name: 'Spicy Murukku', price: 'Rs 150', img: '/images/savouries/SpicyMurkku.webp', category: 'Savouries' },
  { id: 9, name: 'Thatthai', price: 'Rs 100', img: '/images/savouries/Thattai.webp', category: 'Savouries' },

  { id: 10, name: 'Cream Roll', price: 'Rs 130', img: '/images/bakes/CreamRoll.jpg', category: 'Bakes' },
  { id: 11, name: 'Ghee Cake', price: 'Rs 160', img: '/images/bakes/Ghee-Cake.jpg', category: 'Bakes' },
  { id: 12, name: 'Banana Cake', price: 'Rs 170', img: '/images/bakes/BANANACAKE.webp', category: 'Bakes' },
  { id: 13, name: 'Jam Roll', price: 'Rs 140', img: '/images/bakes/jam-roll.jpeg', category: 'Bakes' },
];

const Products = ({ title, id }) => {
  const filteredProducts = products.filter(p => p.category === title);

  return (
    <section className="py-12 px-4">
      <h2 id={id} className="text-3xl text-green-600 mb-6 text-center">{title}</h2>
      <div className="flex overflow-x-auto gap-4">
        {filteredProducts.map(p => (
          <div key={p.id} className="flex-none w-44 bg-white rounded-lg shadow p-4 text-center">
            <img src={p.img} alt={p.name} className="w-full h-32 object-cover rounded mb-2"/>
            <h4 className="font-semibold">{p.name}</h4>
            <p>{p.price}</p>
            <p>500g | 1 Box</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
