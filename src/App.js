import React from "react";
import { BrowserRouter as Router, Route, Routes ,useLocation} from 'react-router-dom';
import Home from "./pages/Home";
import Store from "./pages/Store";
import Header from "./components/Header/Header";
import MyNavbar from "./components/Navbar/MyNavbar"
import Footer from "./components/Footer/Footer";  
import About from "./pages/About";
import CartProvider from "./store/CartProvider";
import ContactPage from "./pages/ContactPage"
import SingleProductPage from "./pages/ProductPage/SingleProductPage";
import AuthPage from "./pages/ProductPage/AuthPage";
import ProfilePage from "./pages/ProductPage/ProfilePage";

function App() {
  // const location = useLocation();

  // // Conditional rendering: hide the navbar on specific routes
  // const hideNavbarOnRoutes = ['/products']; // List of routes where the navbar should be hidden
  // const shouldHideNavbar = hideNavbarOnRoutes.includes(location.pathname);

  return (
    <CartProvider>
    <Router>
      <MyNavbar/>
      
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/about" element={<About />} />
        <Route  path="/contact" element={<ContactPage/>}/>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        
        <Route path="/products/:id" element={<SingleProductPage/>}/>
      </Routes>
      
      <Footer />
    </Router>
  </CartProvider>
  );
}

export default App;
