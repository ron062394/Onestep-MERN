import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminLogin from "./pages/admin/AdminLogin";
import Sidebar from "./components/admin/AdminSidebar";
import AdminHeader from "./components/admin/AdminHeader";
import Dashboard from "./pages/admin/Dashboard";
import AddProduct from "./pages/admin/AddProduct";
import ViewProduct from "./pages/ViewProduct";
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <div className="dark"></div>
        <Router>
          <Header/>
          <Routes>
            <Route path='/product/:id' element={<ViewProduct/>}/>    
            <Route path='/' element={<Home/>}/>    
          </Routes>    
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
