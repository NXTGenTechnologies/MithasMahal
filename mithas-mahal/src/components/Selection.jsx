import React from "react";
import { CheckCircle, Truck, Heart, Leaf } from "lucide-react";

const Selection = () => {
  const features = [
    {
      icon: <Leaf className="w-10 h-10 text-green-600" />,
      title: "100% Pure Ingredients",
      desc: "We use only premium quality ingredients for authentic taste.",
    },
    {
      icon: <Heart className="w-10 h-10 text-pink-600" />,
      title: "Made with Love",
      desc: "Traditional recipes passed down generations, made fresh daily.",
    },
    {
      icon: <Truck className="w-10 h-10 text-blue-600" />,
      title: "Fast Delivery",
      desc: "Get your favorite sweets delivered right to your doorstep.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-yellow-600" />,
      title: "Trusted by Thousands",
      desc: "Serving happy customers across the city for over 20 years.",
    },
  ];

  return (
    <section className="py-12 bg-transparent text-center my-10">
      <h2 className="text-3xl md:text-5xl text-gray-950 mb-12">
        Why Choose <span className="text-[#9c7e38]">Mithas Mahal</span>?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {features.map((f, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold text-gray-950 mb-2">
              {f.title}
            </h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Selection;
