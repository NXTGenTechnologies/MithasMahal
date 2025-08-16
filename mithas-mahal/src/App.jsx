import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Products title="Sweets" id="sweets" />
              <Products title="Savouries" id="savouries" />
              <Products title="Bakes" id="bakes" />
              <Contact />

            </>
                }
              />

              <Route path="/aboutus" element={<About />} />
            </Routes>

      <Footer />
    </div>
  );
}

export default App;
