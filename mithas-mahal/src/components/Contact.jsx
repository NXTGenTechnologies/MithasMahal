import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-12 px-4">
      <h2 className="text-3xl text-green-600 mb-6 text-center">Contact Us</h2>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 border rounded" required />
        <input type="email" placeholder="Email" className="p-3 border rounded" required />
        <textarea placeholder="Message" rows="4" className="p-3 border rounded" required></textarea>
        <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-800 transition">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
