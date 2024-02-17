import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <div className="dark"></div>
      <Header/>
        <Login/>
      <Footer/>
    </div>
  );
}

export default App;
