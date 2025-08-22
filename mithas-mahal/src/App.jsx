import React from 'react';
import Blogs from './components/Blogs';
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion"; 
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Products from './components/Products';
import Footer from './components/Footer';
import ExcellenceSection from './components/ExcellenceSection';
import Sweets from './components/Sweets';
import Savouries from './components/Savouries';
import Bakes from './components/Bakes';
import Selection from './components/Selection';
import Award from './components/Award';
import ContactUs from './components/ContactUs';
import Choose from './components/ChooseUs';
import Best from './components/BestSeller.jsx';
import Testimonials from './components/Testimonials.jsx';
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Hero />
              </motion.div>

             
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Features />
                <ExcellenceSection />
              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Best />
              </motion.div>

              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Products title="Sweets" id="sweets" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Products title="Savouries" id="savouries" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Products title="Bakes" id="bakes" />
              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Choose />
                <Award />
                <Blogs />
              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Selection />
                <Testimonials />
              </motion.div>
            </>
          }
        />
        
       <Route path="/aboutus" element={<About />} />
       <Route path="/sweets" element={<Sweets />} />
        <Route path="/savouries" element={<Savouries />} />
        <Route path="/bakes" element={<Bakes />} />
        <Route path="/contactus" element={<ContactUs />}/>

      </Routes>
      

      <Footer />
    </div>
  );
}

export default App;

