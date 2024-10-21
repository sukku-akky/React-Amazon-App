import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialCartState={
    cartIsVisible:false,
    items:[],
    totalQuantity:0,
    totalAmount:0,
    

}

const cartSlice=createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        toggle(state){
            state.cartIsVisible=!state.cartIsVisible;
        },
        addItemToCart(state,action){
            const item=action.payload;
            const existingItem=state.items.find(it=>it.id===item.id);
            if(existingItem){
                existingItem.quantity+=1;
            } else{
                state.items.push(item);
            }
        },
        deleteItemFromCart(state,action){
            const item=action.payload;
            const existingItem=state.items.find(it=>it.id===item.id);
            if(existingItem.quantity>1){
                existingItem.quantity-=1
            } 


        }  
    }
    }
)


const store=configureStore({
    reducer:{
        cart:cartSlice.reducer,
    }
})

export const cartActions=cartSlice.actions;
export default store;
