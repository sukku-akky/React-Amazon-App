import React from "react";
import {Button} from "react-bootstrap"
import "./ProductItem.css"


const ProductItem=(props)=>{
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
               
                   <Button>Add To Cart</Button>
                </div>
                  
            </li>

        ))}
    </ul>
    </>

}

export default ProductItem;