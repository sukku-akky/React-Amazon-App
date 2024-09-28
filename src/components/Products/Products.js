import React from "react";
import ProductItem from "./ProductItem";
import {useProductContext} from "../../store/productcontext"


const Products=()=>{
    const productsContext=useProductContext();
    
    const productsArray=productsContext.featureProducts;
    console.log(productsArray);


    return <>
    <ProductItem products={productsArray}/>
    </>

}

export default Products;