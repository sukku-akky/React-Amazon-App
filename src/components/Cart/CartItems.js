 import React from "react" ;
 import {Modal,Button} from "react-bootstrap";
import CartProduct from "./CartProduct"
import "./CartItems.css"
    
    const  cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]

    const CartItems=(props)=>{
        
        return <>
        <Modal show={props.onShow} onHide={props.onClose}>
            <Modal.Header>
                <Modal.Title className="head">
                    <h1>Cart</h1>

                </Modal.Title>
             
                <div className="sub">
                   
                    <h2 className="title">ITEM</h2>
                    <h2 className="price">PRICE</h2>
                    <h2 className="quantity">QUANTITY</h2>
                </div>
            </Modal.Header>
            <Modal.Body>
                <CartProduct items={cartElements}/>
            </Modal.Body>
            <Modal.Footer >
                <Button onClick={props.onClose}>Purchase</Button>
            </Modal.Footer>
        </Modal>
        </>

    }

    export default CartItems;