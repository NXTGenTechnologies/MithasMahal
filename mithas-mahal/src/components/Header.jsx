'use client';

import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


const navItems = [
  { name: "Home", href: "/" },
  { name: "Sweets", href: "/sweets" },
  { name: "Savouries", href: "/savouries" },
  { name: "Bakes", href: "/bakes" },
  { name: "About Us", href: "/aboutus" },
  { name: "Contact Us", href: "/contactus" },
];


const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const handleScroll = (e, href) => {
    if (href.includes("#")) {
      e.preventDefault();
      const id = href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-transparent border-b border-[#9c7e38] top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
          <Link to="/">
            <img
              src="/logo.png"
              alt="Mithas Mahal"
              className="h-16 w-auto object-contain"
            />
            </Link>
          </motion.div>

          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                  {item.href.startsWith("/") && !item.href.includes("#") ? (
                  <Link
                    to={item.href}
                    className="text-neutral-900 hover:text-[#9c7e38] transition"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-neutral-900 hover:text-[#9c7e38] transition cursor-pointer"
                  >
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}
          </nav>
         
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-transparent px-4 pt-4 pb-6 border-t border-[#9c7e38]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              {["Home", "About Us", "Sweets", "Shop", "Contact Us"].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                    {item.href.startsWith("/") && !item.href.includes("#") ? (
                    <Link
                      to={item.href}
                      className="text-gray-900 hover:text-[#9c7e38] font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className="text-gray-900 hover:text-[#9c7e38] font-medium cursor-pointer"
                    >
                      {item.name}
                    </a>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
