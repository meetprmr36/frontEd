import React from 'react';
import './App.css';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/navbar';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Auth from './Pages/Auth';
import Account from './Pages/Account';
import ScrollToTop from './components/ScrollToTop';
import EndingComponent from './components/EndingComponent';


function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Homepage />
          </motion.div>
        } />
        <Route path="/About" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <About />
          </motion.div>
        } />
        <Route path="/Auth" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Auth />
          </motion.div>
        } />
        <Route path="/Account" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Account />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <EndingComponent />
      </HashRouter>
    </div>
  );
}

export default App;
