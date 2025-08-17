
/*import React from 'react';

const products = [
  { id: 1, name: 'Motichoor Laddu', price: 'Rs 200', img: '/images/sweets/laddu.webp', category: 'Sweets' },
  { id: 2, name: 'Rasgulla', price: 'Rs 180', img: '/images/sweets/rasgulla.webp', category: 'Sweets' },
  { id: 3, name: 'Soan Papadi', price: 'Rs 99', img: '/images/sweets/soan-papdi.webp', category: 'Sweets' },
  { id: 4, name: 'Kaju Katli', price: 'Rs 140', img: '/images/sweets/kajukatli.webp', category: 'Sweets' },

  { id: 5, name: 'Daal Samosa', price: 'Rs 120', img: '/images/savouries/DaalSamosa.jpg', category: 'Savouries' },
  { id: 6, name: 'Nendram Chips', price: 'Rs 90', img: '/images/savouries/NendramChips.jpg', category: 'Savouries' },
  { id: 7, name: 'Spicy Murukku', price: 'Rs 150', img: '/images/savouries/SpicyMurkku.webp', category: 'Savouries' },
  { id: 8, name: 'Thatthai', price: 'Rs 100', img: '/images/savouries/Thattai.webp', category: 'Savouries' },

  { id: 9, name: 'Cream Roll', price: 'Rs 130', img: '/images/bakes/CreamRoll.jpg', category: 'Bakes' },
  { id: 10, name: 'Ghee Cake', price: 'Rs 160', img: '/images/bakes/Ghee-Cake.jpg', category: 'Bakes' },
  { id: 11, name: 'Banana Cake', price: 'Rs 170', img: '/images/bakes/BANANACAKE.webp', category: 'Bakes' },
  { id: 12, name: 'Jam Roll', price: 'Rs 140', img: '/images/bakes/jam-roll.jpeg', category: 'Bakes' },
];

const Products = ({ title, id }) => {
  const filteredProducts = products.filter(p => p.category === title);

  return (
    <section className="py-12 px-4">
      <h2 id={id} className="text-3xl text-green-600 mb-6 text-center">{title}</h2>
      
      
      <div className="flex justify-center flex-wrap gap-6">
        {filteredProducts.map(p => (
          <div 
            key={p.id} 
            className="w-44 bg-white rounded-lg shadow p-4 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            
            <img 
              src={p.img} 
              alt={p.name} 
              className="w-full h-32 object-cover rounded mb-2 transition-transform duration-300 hover:scale-110"
            />
            <h4 className="font-semibold">{p.name}</h4>
            <p className="text-gray-600">{p.price}</p>
            <p className="text-sm text-gray-500">500g | 1 Box</p>
          </div>
        ))}
      </div>
    </section>
  );
};/*export default Products;*/
import React from 'react';

const products = [
  { id: 1, name: 'Motichoor Laddu', price: 'Rs 200', img: '/images/sweets/laddu.webp', category: 'Sweets' },
  { id: 2, name: 'Rasgulla', price: 'Rs 180', img: '/images/sweets/rasgulla.webp', category: 'Sweets' },
  { id: 3, name: 'Soan Papadi', price: 'Rs 99', img: '/images/sweets/soan-papdi.webp', category: 'Sweets' },
  { id: 4, name: 'Kaju Katli', price: 'Rs 140', img: '/images/sweets/kajukatli.webp', category: 'Sweets' },

  { id: 5, name: 'Daal Samosa', price: 'Rs 120', img: '/images/savouries/DaalSamosa.jpg', category: 'Savouries' },
  { id: 6, name: 'Nendram Chips', price: 'Rs 90', img: '/images/savouries/NendramChips.jpg', category: 'Savouries' },
  { id: 7, name: 'Spicy Murukku', price: 'Rs 150', img: '/images/savouries/SpicyMurkku.webp', category: 'Savouries' },
  { id: 8, name: 'Thatthai', price: 'Rs 100', img: '/images/savouries/Thattai.webp', category: 'Savouries' },

  { id: 9, name: 'Cream Roll', price: 'Rs 130', img: '/images/bakes/CreamRoll.jpg', category: 'Bakes' },
  { id: 10, name: 'Ghee Cake', price: 'Rs 160', img: '/images/bakes/Ghee-Cake.jpg', category: 'Bakes' },
  { id: 11, name: 'Banana Cake', price: 'Rs 170', img: '/images/bakes/BANANACAKE.webp', category: 'Bakes' },
  { id: 12, name: 'Jam Roll', price: 'Rs 140', img: '/images/bakes/jam-roll.jpeg', category: 'Bakes' },
];

const Products = ({ title, id }) => {
  const filteredProducts = products.filter(p => p.category === title);

  return (
    <section className="py-12 px-4">
      <h2 id={id} className="text-4xl text-green-700 font-bold mb-10 text-center">{title}</h2>
      
      <div className="flex justify-center flex-wrap gap-8">
        {filteredProducts.map(p => (
          <div 
            key={p.id} 
            className="w-60 bg-white rounded-xl shadow-md p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
           
            <img 
              src={p.img} 
              alt={p.name} 
              className="w-full h-44 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-110"
            />
            
            <h4 className="text-lg font-semibold text-gray-800">{p.name}</h4>
            <p className="text-md text-gray-600">{p.price}</p>
            <p className="text-sm text-gray-500 mt-1">500g | 1 Box</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;


