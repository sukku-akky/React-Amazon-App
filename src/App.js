import React from "react";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import MyNavbar from "./components/Navbar/MyNavbar"
import Footer from "./components/Footer/Footer";  
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <MyNavbar/>
      <Header/>
     <Products/>
     <Footer/>
    </CartProvider>
  );
}

export default App;
