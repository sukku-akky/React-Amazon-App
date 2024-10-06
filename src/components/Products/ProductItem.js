import React,{useContext} from "react";
import {Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import "./ProductItem.css"
import CartContext from "../../store/cart-context";
import FormatPrice from "../../Helpers/FormatPrice";

import {useProductContext} from "../../store/productcontext"
const ProductItem=(props)=>{
    const cartCtx=useContext(CartContext);
    
    const productsContext=useProductContext();
    
    const productsArray=productsContext.featureProducts;
    


    const addItemHandler=(product)=>{
        
        const item={
            id:product.id,
            title:product.name,
            imageUrl:product.image,
            price:product.price,
            quantity:1

        }
       cartCtx.addItem(item);
       
    }
    const navigate=useNavigate();
    const imageClickHandler=(productId)=>{
        

        navigate(`/products/${productId}`);

    }

    return <>
    <ul className="products">
        {productsArray.map((product)=>(
            <li key={product.id} className="pro">
                <div className="title">
                   <h1>{product.name}</h1>
                </div>
                <div className="image">
                   <img src={product.image} onClick={()=>imageClickHandler(product.id)}/>
                </div>
                <div className="footer">
                   <p>{<FormatPrice price={product.price}/>}</p>
               
                   <Button onClick={()=>addItemHandler(product)}>Add To Cart</Button>
                </div>
                  
            </li>

        ))}
    </ul>
    </>

}

export default ProductItem;