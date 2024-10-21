import React,{useContext} from "react";
import {Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import "./ProductItem.css"
import { useDispatch,useSelector } from "react-redux";
import FormatPrice from "../../Helpers/FormatPrice";
import { cartActions } from "../../store/reduc.store";
import {useProductContext} from "../../store/productcontext"
import AuthContext from "../../store/auth-context";
import { addItemToEnd } from "../../store/cart-actions";
const ProductItem=(props)=>{
    
    const dispatch=useDispatch();
    const items=useSelector(state=>state.cart.items)
    const productsContext=useProductContext();
    const authCtx=useContext(AuthContext);
    const productsArray=productsContext.featureProducts;
    const email=authCtx.email;

    


    const addItemHandler=(product)=>{
        
        const item={
            id:product.id,
            title:product.name,
            imageUrl:product.image,
            price:product.price,
            quantity:1,
            email:email,

        }
        const existingItem=items.find(it=>it.id===item.id);
        if(existingItem){
            alert('item is already added to cart')
        } else{
            dispatch(addItemToEnd(item))
        }
        
    
       
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
                <div className="pd-image">
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