import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Login from "./pages/Login/Login/Login";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />}>
            {/* <Route path="dashboard" element={</>} /> */}
            {/* <Route path="addAProduct" element={<AdminRoute><AddAProduct /></AdminRoute>} /> */}

          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
