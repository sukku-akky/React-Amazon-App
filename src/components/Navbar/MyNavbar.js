import React,{useState,useContext} from 'react';
import { Navbar, Nav, Button} from 'react-bootstrap';
import {NavLink,useNavigate} from "react-router-dom"
import "./MyNavbar.css";
import CartItems from '../Cart/CartItems';
import CartContext from '../../store/cart-context';
import AuthContext from '../../store/auth-context';
function MyNavbar() {
  const navigate=useNavigate();

  const authCtx=useContext(AuthContext);

  const isLoggedIn=authCtx.isLoggedIn;

  const cartCtx=useContext(CartContext);

  const [showCart,setShowCart]=useState(false);

  const handleShowCart=()=>{
    setShowCart(true);
  }

  const logoutHandler=()=>{
    authCtx.logout();
    navigate("/auth");
  }

  const handleCloseCart=()=>{
    setShowCart(false);
  }
  
    return (
      <>
      {showCart && <CartItems onShow={showCart} onClose={handleCloseCart}/>}
      <Navbar bg="dark" expand="lg" variant='dark' style={{position:"fixed"}}>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mx-auto">
          <Nav.Link as={NavLink} to="/">HOME</Nav.Link>
          <Nav.Link as={NavLink} to="/store">STORE</Nav.Link>
          <Nav.Link as={NavLink} to="/about">ABOUT</Nav.Link>
          <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
          {!isLoggedIn &&<Nav.Link as={NavLink } to="/auth">Login</Nav.Link>}
          {isLoggedIn && <Nav.Link as={NavLink} to="/profile">profile</Nav.Link>}
          {isLoggedIn && <Nav.Link as={Button} onClick={logoutHandler}>Logout</Nav.Link>}
          <Nav className='ml-auto'>
          <a className='cart-holder' onClick={handleShowCart}>Cart <span className='cart-number' >{cartCtx.items.length}</span></a>
          </Nav>
          
        </Nav>
         
        </Navbar.Collapse>
      </Navbar>
     
      </>
    );
  }
  
  export default MyNavbar;