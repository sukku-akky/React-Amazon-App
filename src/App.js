import React,{useContext,Suspense,lazy} from "react";
import { BrowserRouter as Router, Route, Routes ,useLocation,Navigate}from 'react-router-dom';
//import Home from "./pages/Home";
//import Store from "./pages/Store";
import Header from "./components/Header/Header";
import MyNavbar from "./components/Navbar/MyNavbar"
import Footer from "./components/Footer/Footer";  
//import About from "./pages/About";
import CartProvider from "./store/CartProvider";
//import ContactPage from "./pages/ContactPage"
//import SingleProductPage from "./pages/ProductPage/SingleProductPage";
//import AuthPage from "./pages/ProductPage/AuthPage";
//import ProfilePage from "./pages/ProductPage/ProfilePage";
import AuthContext from "./store/auth-context";


const Home = lazy(() => import("./pages/Home"));
const Store = lazy(() => import("./pages/Store"));
const About = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const SingleProductPage = lazy(() => import("./pages/ProductPage/SingleProductPage"));
const AuthPage = lazy(() => import("./pages/ProductPage/AuthPage"));
const ProfilePage = lazy(() => import("./pages/ProductPage/ProfilePage"));


function App() {
  const authCtx=useContext(AuthContext);
  
  return (
    <CartProvider>
      
    <Router>
      <MyNavbar/>
      < Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      <Footer />
    </Router>
    
  </CartProvider>
  );
}

export default App;
