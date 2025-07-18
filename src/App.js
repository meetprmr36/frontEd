import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import EndingComponent from './components/EndingComponent';
import ScrollToTop from './components/ScrollToTop';
import { Homepage } from './Pages/Homepage';
import About from './Pages/About';
import Auth from './Pages/Auth';
import Account from './Pages/Account';

function App() {
  return (
    <div className="App">
      <HashRouter >
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/About' element={<About />} />
          <Route path='/Auth' element={<Auth />} />
          <Route path='/Account' element={<Account />} />
        </Routes>
        <EndingComponent />
      </HashRouter >
    </div>
  );
}

export default App; 
