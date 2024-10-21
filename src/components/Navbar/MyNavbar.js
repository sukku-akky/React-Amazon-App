import React,{useState,useContext} from 'react';
import { Navbar, Nav, Button} from 'react-bootstrap';
import {NavLink,useNavigate} from "react-router-dom"
import "./MyNavbar.css";
import CartItems from '../Cart/CartItems';
import { useDispatch,useSelector } from 'react-redux';
import { cartActions } from '../../store/reduc.store';
import AuthContext from '../../store/auth-context';
function MyNavbar() {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const authCtx=useContext(AuthContext);

  const isLoggedIn=authCtx.isLoggedIn;
  const items=useSelector(state=>state.cart.items)


  const cartIsVisible=useSelector(state=>state.cart.cartIsVisible)
  const userEmail=authCtx.email;
  console.log(userEmail);

  const handleShowCart=()=>{
    dispatch(cartActions.toggle());
    console.log(cartIsVisible)
  }

  const logoutHandler=()=>{
    authCtx.logout();
    navigate("/auth");
  }

  const handleCloseCart=()=>{
    dispatch(cartActions.toggle());
  }

    return (
      <>
    
      {cartIsVisible && <CartItems  onClose={handleCloseCart}/>}
      <Navbar bg="dark" expand="lg" variant='dark' style={{position:"fixed"}}>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mx-auto">
          {isLoggedIn && <Nav.Link as={NavLink} to="/">HOME</Nav.Link>}
          {isLoggedIn && <Nav.Link as={NavLink} to="/store">STORE</Nav.Link>}
          {isLoggedIn && <Nav.Link as={NavLink} to="/about">ABOUT</Nav.Link>}
          {isLoggedIn && <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>}
          {!isLoggedIn &&<Nav.Link as={NavLink } to="/auth">Login</Nav.Link>}
          {isLoggedIn && <Nav.Link as={NavLink} to="/profile">profile</Nav.Link>}
          {isLoggedIn && <Nav.Link as={Button} onClick={logoutHandler}>Logout</Nav.Link>}
          {isLoggedIn && <li><span className='user'>Hi, {userEmail.split('@')[0]}</span></li>} 
          <Nav className='ml-auto'>
          <a className='cart-holder' onClick={handleShowCart}>Cart <span className='cart-number' >{items.length}</span></a>
          </Nav>

        </Nav>

        </Navbar.Collapse>
      </Navbar>

      </>
    );
  }
export default MyNavbar;