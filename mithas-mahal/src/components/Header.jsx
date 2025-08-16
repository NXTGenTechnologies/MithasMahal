import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-transparent shadow top-0 z-50 flex justify-between items-center p-4 md:px-16">
      <div className="text-2xl font-serif text-yellow-700 font-bold">Mithas Mahal</div>
      <ul className="flex gap-6">
        <li><a href="#sweets" className="hover:text-green-600">Sweets</a></li>
        <li><a href="#savouries" className="hover:text-green-600">Savouries</a></li>
        <li><a href="#bakes" className="hover:text-green-600">Bakes</a></li>
        <li><Link to="/aboutus" className="hover:text-green-600">About Us</Link></li>
        <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
      </ul>
    </header>
  );
};

export default Header;
