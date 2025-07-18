import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import EndingComponent from './components/EndingComponent'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <EndingComponent />
      </BrowserRouter>
    </div>
  );
}

export default App; 
