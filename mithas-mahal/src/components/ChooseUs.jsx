import React from "react";
import { FaMapMarkerAlt, FaHeart, FaCheckCircle, FaFlask } from "react-icons/fa";

const ChooseUs = () => {
  return (
    <section className="bg-red-700 my-12 md:my-16 text-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        
        <div>
          <FaMapMarkerAlt className="mx-auto text-4xl mb-3" />
          <h3 className="font-bold text-lg">Loved By India</h3>
          <p>Loved by 5 lakh+ customers</p>
        </div>
        
        <div>
          <FaHeart className="mx-auto text-4xl mb-3" />
          <h3 className="font-bold text-lg">Handmade</h3>
          <p>Every piece is made with love</p>
        </div>
        
        <div>
          <FaCheckCircle className="mx-auto text-4xl mb-3" />
          <h3 className="font-bold text-lg">100% Pure</h3>
          <p>Crafted with 100% Purity</p>
        </div>
        
        <div>
          <FaFlask className="mx-auto text-4xl mb-3" />
          <h3 className="font-bold text-lg">No Preservatives</h3>
          <p>Pure taste, naturally fresh</p>
        </div>

      </div>
    </section>
  );
};

export default ChooseUs;
