import React from "react";


const ProductItem=(props)=>{
    return <>
    <ul>
        {props.products.map((product)=>(
            <li>
                <h1>{product.title}</h1>
                <p>{product.price}</p>
                <img src={product.imageUrl}/>
            </li>

        ))}
    </ul>
    </>

}

export default ProductItem;