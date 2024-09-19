import React from "react";
import {Button} from "react-bootstrap"
import "./CartProduct.css";
const CartProduct=(props)=>{
    return (
        <>
        <ul>{
            props.items.map((item)=>(
                <li className="product">
                    <img src={item.imageUrl} className="image"/>
                    <p className="title">{item.title} </p>
                    <p className="price">{item.price} </p>
                    <p className="quantity">{item.quantity}</p>
                    <Button variant="danger" className="button">REMOVE</Button>
                    </li>
            )

            )}

        </ul>
        </>
    )

}

export default CartProduct;