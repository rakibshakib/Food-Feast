import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register"
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
