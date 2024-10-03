import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Services from './Components/Services';
import Products from './Components/Products';
import Admin from "./Components/Admin";
import Gallery from "./Components/Gallery";
import Certificates from './Components/Certificates';
import SeparateProducts from './Components/SeparateProducts';
import Contact from './Components/Contact';
import Transition from './Components/Transition';

function AnimatedRoutes() {
  const location = useLocation(); // This tracks the route changes

  return (
    <AnimatePresence mode='wait'>
      {/* Transition component triggers before route change */}
      <Transition />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Certificate" element={<Certificates />} />
        <Route path="/Products/:id" element={<SeparateProducts />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      {/* Optional: Add Transition here if you want an effect on page exit */}
      <Transition />
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="h-full"
      >
        <AnimatedRoutes />
      </motion.div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
