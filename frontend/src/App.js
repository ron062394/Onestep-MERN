import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProductView from "./pages/ProductView";
import Cart from "./pages/Cart";
import Dashboard from "./pages/admin/Dashboard";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout/" element={<Checkout />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
