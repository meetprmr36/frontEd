import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import EndingComponent from './components/EndingComponent';
import { HashRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <EndingComponent />
      </HashRouter>
    </div>
  );
}

export default App;
