import React,{useContext} from "react";
import {Button} from "react-bootstrap"
import "./CartProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/reduc.store";
import { deleteItemfromEnd } from "../../store/cart-actions";
import { updateItemQuantityToEnd } from "../../store/cart-actions";
import AuthContext from "../../store/auth-context";
const CartProduct=(props)=>{
    const dispatch=useDispatch();
    const authCtx=useContext(AuthContext);
    const email=authCtx.email;
    const removeItemhandler=(item)=>{
        const updatedItem={
            ...item,
            email,email

        }
        dispatch(deleteItemfromEnd(updatedItem));
    }
    const increaseQuantityOfItem=(item)=>{
        const updatedItem={
            ...item,
            quantity:item.quantity+1,
            email:email
        }
        dispatch(updateItemQuantityToEnd(updatedItem));
        dispatch(cartActions.addItemToCart(item));

    }

    const decreaseQuantityOfItem = (item) => {
        if (item.quantity > 1) { // Prevent quantity from going below 1
            const updatedItem = {
                ...item,
                quantity: item.quantity - 1,
                email:email, 
            };
            dispatch(updateItemQuantityToEnd(updatedItem));
            dispatch(cartActions.deleteItemFromCart(item));
        }
        if(item.quantity===1){
            const updatedItem={
                ...item,
                email,email
    
            }
            dispatch(deleteItemfromEnd(updatedItem));
            dispatch(cartActions.deleteItemFromCart(item));
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
                    <div className="mini-buttons">
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