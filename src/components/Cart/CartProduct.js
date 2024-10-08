import React,{useContext} from "react";
import {Button} from "react-bootstrap"
import "./CartProduct.css";
import CartContext from "../../store/cart-context";
const CartProduct=(props)=>{
    const cartCtx=useContext(CartContext);
    const removeItemhandler=(id)=>{
        cartCtx.removeItem(id);
    }
    return (
        <>
        <ul className="mega">{
            props.items.map((item)=>(
                <li className="mini" key={item.id}>
                    <img src={item.imageUrl} className="miniImage"/>
                    <p className="title">{item.title} </p>
                    <p className="price">{item.price} </p>
                    <p className="quantity">{item.quantity}</p>
                    <Button variant="danger" className="button" onClick={()=>removeItemhandler(item.id)}>REMOVE</Button>
                    </li>
            )

            )}

        </ul>
        </>
    )

}

export default CartProduct;