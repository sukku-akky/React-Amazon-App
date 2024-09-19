import React from "react";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import MyNavbar from "./components/Navbar/MyNavbar"
  

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <Header/>
     <Products/>
    </div>
  );
}

export default App;
