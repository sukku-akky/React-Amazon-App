import React,{useState} from 'react';
import { Navbar, Nav, Button, NavLink } from 'react-bootstrap';
import "./MyNavbar.css";
import CartItems from '../Cart/CartItems';
function MyNavbar() {
  const [showCart,setShowCart]=useState(false);

  const handleShowCart=()=>{
    setShowCart(true);
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
          <Nav.Link>HOME</Nav.Link>
          <Nav.Link>STORE</Nav.Link>
          <Nav.Link>ABOUT</Nav.Link>
          <Nav className='ml-auto'>
          <Button  onClick={handleShowCart}>cart</Button>
          </Nav>
          
        </Nav>
         
        </Navbar.Collapse>
      </Navbar>
     
      </>
    );
  }
  
  export default MyNavbar;