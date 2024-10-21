import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import CartProduct from "./CartProduct";
import "./CartItems.css";
import { useSelector, useDispatch } from "react-redux";

const CartItems = (props) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const cartIsVisible = useSelector((state) => state.cart.cartIsVisible);

    const handlePurchase = () => {
        alert("Thanks for the purchase");
    };

    // Calculate total quantity and price
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <Modal show={cartIsVisible} onHide={props.onClose} className="mummy">
            <Modal.Header>
                <Modal.Title className="head">
                    <h1>Cart</h1>
                    <button onClick={props.onClose} className="cancel">X</button>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {items.length === 0 && <span className="head">Add items to cart</span>}
                {items.length > 0 && (
                    <>
                        <div className="sub">
                            <span className="title">ITEM</span>
                            <span className="price">PRICE</span>
                            <span className="quantity">QUANTITY</span>
                        </div>
                        <CartProduct className="product-item" items={items} />
                    </>
                )}
            </Modal.Body>
            <Modal.Footer className="cart-footer123">
                {items.length > 0 && <button>Total Quantity: {totalQuantity}</button>}
                {items.length > 0 && <button>Total Price: ${totalPrice.toFixed(2)}</button>}
                {items.length > 0 && <Button onClick={handlePurchase}>Purchase</Button>}
            </Modal.Footer>
        </Modal>
    );
};

export default CartItems;
