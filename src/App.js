import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Store from "./pages/Store";
import Header from "./components/Header/Header";
import MyNavbar from "./components/Navbar/MyNavbar"
import Footer from "./components/Footer/Footer";  
import About from "./pages/About";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
    <Router>
      <MyNavbar />
      
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/about" element={<About />} />
        
      </Routes>
      
      <Footer />
    </Router>
  </CartProvider>
  );
}

export default App;
