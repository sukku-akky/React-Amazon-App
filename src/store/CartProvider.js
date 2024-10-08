import React,{useState,useContext,useReducer} from "react";
import CartContext from "./cart-context";
import { useEffect } from "react";
import AuthContext from "./auth-context";

const defaultCartState={
    items:[]
};

const cartReducer=(state,action)=>{
    
    if(action.type==="ADD"){
        const updatedItems=[...state.items];
        const existingItemIndex=updatedItems.findIndex((item)=>
            item.id===action.item.id
        )
        const existingItem=updatedItems[existingItemIndex];
        if(existingItem){
            alert("this item is already added to the cart");
        } else{
            updatedItems.push({...action.item});
        }
       
        return{
            ...state,
            items:updatedItems,
        }
       
    }

    if (action.type === "SET_CART_ITEMS") {
        return {
          ...state,
          items: action.items,
        };
      }
    

    if(action.type==="REMOVE"){
        const updatedItems=[...state.items];
        const filteredItems=updatedItems.filter(item=>item.id!==action.id);
        return {
            ...state,
            items:filteredItems
        }

    }
    return state;

}

const CartProvider=(props)=>{
    const[cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);
    const authCtx=useContext(AuthContext);

    const userEmail=authCtx.email;

    const addItemToCartHandler=async(item)=>{
        try{
            const response=await fetch(`https://crudcrud.com/api/8d77d7d649a3424691b42a2f04616107/cart${userEmail}`,{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(item)
            })
            if(response.ok){
                dispatchCartAction({type:"ADD",item:item});
            } else{
                console.error("Error adding item to cart")
            }
        } catch(error){
            console.error("Error adding item to cart",error);
        }
        
    }

    const removeItemFromCartHandler=(id)=>{
        dispatchCartAction({type:"REMOVE",id:id});

    }

    const fetchCartItems = async () => {
        try {
          const response = await fetch(
            `https://crudcrud.com/api/8d77d7d649a3424691b42a2f04616107/cart${userEmail}`
          );
          if (response.ok) {
            const cartItems = await response.json();
            dispatchCartAction({ type: "SET_CART_ITEMS", items: cartItems });

          } else {
            console.error("Error fetching cart items");
          }
        } catch (error) {
          console.error("Error fetching cart items", error);
        }
      };

      useEffect(()=>{
        fetchCartItems();
      },[]);

    


    const cartContext={
        items:cartState.items,
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,

    }
    return(
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )


}

export default CartProvider;