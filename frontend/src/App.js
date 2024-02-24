import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminHeader from "./components/admin/AdminHeader";
import ProductView from './pages/ProductView';

function App() {
  return (
    <div className="App">
      <div className="dark"></div>
        <Router>
          <Header/>
          <Routes>
          <Route path='/' element={<Home/>}/>    
            <Route path='/product/:id' element={<ProductView/>}/>    
            <Route path='/register' element={<Signup/>}/>    
            <Route path='/login' element={<Login/>}/>    
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
