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
        <Modal show={props.onShow} onHide={props.onClose} className="mummy">
            <Modal.Header>
                <Modal.Title className="head">
                    <h1>Cart</h1>
                    <button onClick={props.onClose} className="cancel">X</button>

                </Modal.Title>
            <Modal.Header>
                {cartCtx.items.length===0 && <span className="head">add items to cart</span>}
            </Modal.Header> 
                
            </Modal.Header>
            {cartCtx.items.length>0 &&             <div className="sub">
                   
                   <span className="title">ITEM</span>
                   <span className="price">PRICE</span>
                   <span className="quantity">QUANTITY</span>
                   
                  </div>}
           
            <Modal.Body className="product">
                <CartProduct items={cartCtx.items}/>
            </Modal.Body>
            <Modal.Footer >
                {cartCtx.items.length>0 && <Button onClick={handlePurchase}>Purchase</Button>}

            </Modal.Footer>
        </Modal>
        </>

    }

    export default CartItems;