import React,{useContext} from "react";
import {Button} from "react-bootstrap"
import "./CartProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/reduc.store";
import { updateItemQuantityToEnd } from "../../store/cart-actions";
const CartProduct=(props)=>{
    const dispatch=useDispatch();
    const removeItemhandler=(id)=>{
        dispatch(cartActions.deleteItemFromCart(id));
    }
    const increaseQuantityOfItem=(item)=>{
        const updatedItem={
            ...item,
            quantity:item.quantity+1
        }
        dispatch(updateItemQuantityToEnd(updatedItem));
        dispatch(cartActions.addItemToCart(item));

    }

    const decreaseQuantityOfItem = (item) => {
        if (item.quantity > 1) { // Prevent quantity from going below 1
            const updatedItem = {
                ...item,
                quantity: item.quantity - 1 // Correctly decrement quantity
            };
            dispatch(updateItemQuantityToEnd(updatedItem));
        }
    };
    return (
        <>
        <ul className="mega">{
            props.items.map((item)=>(
                <li className="mini-p" key={item.id}>
                    <div className="mini-q">
                    <img src={item.imageUrl} className="miniImage"/>
                    <p className="mini-title">{item.title} </p>
                    <p className="mini-price">{item.price} </p>
                    <p className="mini-quantity">{item.quantity}</p>
                    </div>
                    <div className="miniButtons">
                    <button variant="danger" className="button" onClick={()=>removeItemhandler(item)}>REMOVE</button>
                    <button onClick={()=>increaseQuantityOfItem(item)}>+</button>
                    <button onClick={()=>decreaseQuantityOfItem(item)}>-</button>
                    </div>
                </li>
            )

            )}

        </ul>
        </>
    )

}

export default CartProduct;