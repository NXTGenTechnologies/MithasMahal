import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50 flex justify-between items-center p-4 md:px-16">
      <div className="text-2xl font-serif text-yellow-700 font-bold">Mcube Sweets</div>
      <ul className="flex gap-6">
        <li><a href="#sweets" className="hover:text-green-600">Sweets</a></li>
        <li><a href="#savories" className="hover:text-green-600">Savories</a></li>
        <li><a href="#bakes" className="hover:text-green-600">Bakes</a></li>
        <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
      </ul>
    </header>
  );
};

export default Header;
