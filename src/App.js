import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Home />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
