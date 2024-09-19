 import React, {useContext} from "react" ;
 import {Modal,Button} from "react-bootstrap";
import CartProduct from "./CartProduct"
import "./CartItems.css"
import CartContext from "../../store/cart-context";
    
    

    const CartItems=(props)=>{
        const cartCtx=useContext(CartContext);
       
        const handlePurchase=()=>{
            alert("thanks for the purchase")
        }
        return <>
        <Modal show={props.onShow} onHide={props.onClose}>
            <Modal.Header>
                <Modal.Title className="head">
                    <h1>Cart</h1>
                    <button onClick={props.onClose} className="cancel">X</button>

                </Modal.Title>
             
                
            </Modal.Header>
            <div className="sub">
                   
             <span className="title">ITEM</span>
             <span className="price">PRICE</span>
             <span className="quantity">QUANTITY</span>
             
            </div>
            <Modal.Body>
                <CartProduct items={cartCtx.items}/>
            </Modal.Body>
            <Modal.Footer >
                <Button onClick={handlePurchase}>Purchase</Button>
            </Modal.Footer>
        </Modal>
        </>

    }

    export default CartItems;