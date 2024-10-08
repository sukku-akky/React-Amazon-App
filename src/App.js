import React,{useContext} from "react";
import { BrowserRouter as Router, Route, Routes ,useLocation,Navigate}from 'react-router-dom';
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
import AuthContext from "./store/auth-context";


function App() {
  const authCtx=useContext(AuthContext);
  
  return (
    <CartProvider>
    <Router>
      <MyNavbar/>
      
      <Routes>
        <Route path="/"  element={<Home/>}/>

        <Route 
            path="/store" 
            element={authCtx.isLoggedIn ? <Store /> : <Navigate to="/auth" />} 
          />

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
