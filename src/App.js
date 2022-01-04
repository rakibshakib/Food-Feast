import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import BookingPage from "./pages/BookingPage/BookingPage";
import NotFound from "./pages/NotFound/NotFound";
import AddProduct from "./pages/Dashboard/AddProduct/AddProduct";
import ManageOrders from "./pages/Dashboard/ManageOrders/ManageOrders";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashbaordHome";
import ManageProducts from "./pages/Dashboard/ManageProduct/ManageProducts";
import Explore from "./pages/Explore/Explore";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="manageProducts" element={<ManageProducts />} />
            <Route path="dashboardHome" element={<DashboardHome />} />
            <Route path="manageOrders" element={<ManageOrders />} />
            <Route path="makeAdmin" element={<MakeAdmin />} />
          </Route>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/booking-food/:id" element={<BookingPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
