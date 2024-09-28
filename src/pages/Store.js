import React from "react";
import Products from "../components/Products/Products";
import Header from "../components/Header/Header";
const Store=()=>{
    return (
        <>
        <Header/>
        <div style={{border:"1px solid green",backgroundColor:"gold",textAlign:"center"}}>
        <span>CHECK NOW</span>
        <h3>Our Feature Services</h3>
        </div>
        <Products/>
        </>
    )
    
}

export default Store;