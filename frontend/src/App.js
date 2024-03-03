import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminLogin from "./pages/admin/AdminLogin";
import ProductView from "./pages/ProductView";
import Cart from "./pages/Cart";
import Sidebar from "./pages/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import AdminHeader from "./pages/admin/AdminHeader";

function App() {
  return (
    <div className="App">

        {/* <div className="admin-section">
          <Sidebar/>
          <div>
            <AdminHeader/>
            <Routes>
              <Route path="/admin" element={<Dashboard />} />
            </Routes>

          </div>
        </div> */}

      <div className="dark"></div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
