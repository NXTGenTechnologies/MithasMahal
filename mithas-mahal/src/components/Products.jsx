import React from 'react';
import laddu from '../assets/images/laddu.jpg';
import rasu from '../assets/images/rasu.jpg';
import soan from '../assets/images/soan.jpg';
import kaju from '../assets/images/kaju.jpg';
import mys from '../assets/images/mys.jpg';

const products = [
  { id: 1, name: 'Motichoor Laddu', price: 'Rs 200', img: laddu },
  { id: 2, name: 'Rasgulla', price: 'Rs 180', img: rasu },
  { id: 3, name: 'Soan Papadi', price: 'Rs 99', img: soan },
  { id: 4, name: 'Kaju katli', price: 'Rs 140', img: kaju },
  { id: 5, name: 'Mysore pak', price: 'Rs 110', img: mys },
];

const Products = ({ title, id }) => {
  return (
    <section className="py-12 px-4">
      <h2 id={id} className="text-3xl text-green-600 mb-6 text-center">{title}</h2>
      <div className="flex overflow-x-auto gap-4">
        {products.map(p => (
          <div key={p.id} className="flex-none w-44 bg-white rounded-lg shadow p-4 text-center">
            {/* Use the imported image directly */}
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

