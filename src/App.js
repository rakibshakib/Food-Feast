import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
