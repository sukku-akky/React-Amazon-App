import React,{useState,useReducer} from "react";
import CartContext from "./cart-context";

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

    if(action.type==="REMOVE"){
        const updatedItems=[...state.items];
        const filteredItems=updatedItems.filter((item)=>(
            item.id!==action.id
        ));
        return {
            ...state,
            items:filteredItems
        }

    }
    return state;

}

const CartProvider=(props)=>{
    const[cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);

    const addItemToCartHandler=(item)=>{
        dispatchCartAction({type:"ADD",item:item});

    }

    const removeItemFromCartHandler=(id)=>{
        dispatchCartAction({type:"REMOVE",id:id});

    }


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