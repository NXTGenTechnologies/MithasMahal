import React from "react";

const blogs = [
  {
    id: 1,
    title: "The Sweet Tradition of Mithai",
    description: "Discover the cultural heritage of Indian sweets and why they’re loved in every celebration.",
    img: "/images/blog1.webp"
  },
  {
    id: 2,
    title: "Healthy Sweets for Festive Seasons",
    description: "Learn about our range of guilt-free sweets made with natural ingredients and less sugar.",
    img: "/images/blog2.jpeg"
  },
  {
    id: 3,
    title: "Behind the Scenes at Mithas Mahal",
    description: "Take a peek into how we prepare fresh, delicious sweets daily with love and care.",
    img: "/images/blog3.jpeg"
  }
];

const Blogs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Latest Blogs</h2>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
              <p className="text-gray-600 text-sm">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
