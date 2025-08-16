import React from 'react';
import laddu from '/images/sweets/laddu.webp';
import rasu from '/images/rasugulla.webp';
import soan from '/images/soan-papdi.webp';
import kaju from '/images/kajukatli.webp';
import mys from '/images/mysorepak.webp';
import dal from '/images/savouries/DaalSamosa.webp'
import nendram from '/images/savouries/NendramChips.webp'
import spicy from '/images/savouries/SpicyMurkku.webp'
import thathai from '/images/savouries/Thatthai.webp'
import cream from '/images/bakes/CreamRoll.webp'
import ghee from '/images/bakes/Ghee-Cake.webp'
import banana from '/images/bakes/BANANACAKE.webp'
import jam from '/images/bakes/jam-roll.webp'
const products = [
  { id: 1, name: 'Motichoor Laddu', price: 'Rs 200', img: laddu },
  { id: 2, name: 'Rasgulla', price: 'Rs 180', img: rasu },
  { id: 3, name: 'Soan Papadi', price: 'Rs 99', img: soan },
  { id: 4, name: 'Kaju katli', price: 'Rs 140', img: kaju },
  { id: 5, name: 'Mysore pak', price: 'Rs 110', img: mys },
  { id: 6, name: 'Daal Samosa', price: 'Rs 120', img: dal },
  { id: 7, name: 'Nendram Chips', price: 'Rs 90', img: nendram },
  { id: 8, name: 'Spicy Murukku', price: 'Rs 150', img: spicy },
  { id: 9, name: 'Thatthai', price: 'Rs 100', img: thathai},
  { id: 10, name: 'Cream Roll', price: 'Rs 130', img: cream },
  { id: 11, name: 'Ghee Cake', price: 'Rs 160', img: ghee },
  { id: 12, name: 'Banana Cake', price: 'Rs 170', img: banana },
  { id: 13, name: 'Jam Roll', price: 'Rs 140', img: jam },
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

