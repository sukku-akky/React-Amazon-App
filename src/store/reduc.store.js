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
            state.totalQuantity=state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalAmount=state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        deleteItemFromCart(state,action){
            const item=action.payload;
            const existingItem=state.items.find(it=>it.id===item.id);
            if(existingItem.quantity>1){
                existingItem.quantity-=1
            } else{
                state.items.pop(item);
            }
            state.totalQuantity=state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalAmount=state.items.reduce((total, item) => total + item.price * item.quantity, 0);



        },
        replaceCartItems(state,action){
            state.items=action.payload;
            state.totalQuantity=state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalAmount=state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        }
     
    }
    }
)

const movieSlice=createSlice({
    name:'movie',
    initialState:{
        movies:[]
    },
    reducers:{
        addMovie(state,action){
            state.movies.push(action.payload);

        },
        deleteMovie(state,action){
            state.movies.pop(action.payload);

        },
        replaceMovie(state,action){
            state.movies=action.payload;

        }
    }
})


const store=configureStore({
    reducer:{
        cart:cartSlice.reducer,
        movie:movieSlice.reducer,
    }
})

export const cartActions=cartSlice.actions;
export const movieActions=movieSlice.actions;
export default store;
