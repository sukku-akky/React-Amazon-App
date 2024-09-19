import React,{useContext} from "react";
import {Button} from "react-bootstrap"
import "./ProductItem.css"
import CartContext from "../../store/cart-context";


const ProductItem=(props)=>{
    const cartCtx=useContext(CartContext);

    const addItemHandler=(product)=>{
        
        const item={
            id:product.title,
            title:product.title,
            imageUrl:product.imageUrl,
            price:product.price,
            quantity:1

        }
       cartCtx.addItem(item);
       
    }

    return <>
    <ul className="products">
        {props.products.map((product)=>(
            <li key={product.title} className="pro">
                <div className="title">
                   <h1>{product.title}</h1>
                </div>
                <div className="image">
                   <img src={product.imageUrl}/>
                </div>
                <div className="footer">
                   <p>{product.price}</p>
               
                   <Button onClick={()=>addItemHandler(product)}>Add To Cart</Button>
                </div>
                  
            </li>

        ))}
    </ul>
    </>

}

export default ProductItem;