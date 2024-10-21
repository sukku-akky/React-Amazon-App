import { cartActions } from "./reduc.store";

export const addItemToEnd=(item)=>{
    
    const{email,...itemToPost}=item;
    const encodedEmail = email.split('@')[0];
    return async (dispatch)=>{
        const sendItemToEnd=async ()=>{
            
        const response =await fetch(`https://fir-8e8d2-default-rtdb.firebaseio.com//cart/${encodedEmail}.json`,
        {
                method:"POST",
                body:JSON.stringify({
                    itemToPost
                }),
                headers:{
                    'Content-Type':'application/json',
                }
            });
            if(!response.ok){
                console.log(response);
                throw new Error ('failed to send item to cart');
                
            }
            const data=response.json();
            return data;

        }
        try{
            const result=await sendItemToEnd();
            dispatch(cartActions.addItemToCart(itemToPost));
            console.log(result);

        }catch(e){
            console.error(e.message);
        }

    }
}

export const updateItemQuantityToEnd = (item) => {
    const { email, id, quantity } = item;

    return async (dispatch) => {
        const sendUpdateToEnd = async () => {
            const response = await fetch(`https://fir-8e8d2-default-rtdb.firebaseio.com/cart/${email}/${id}.json`, {
                method: "PUT", // Use PUT to update the item
                body: JSON.stringify({ ...item, quantity}), // Update with new quantity
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) {
                throw new Error('Failed to update item quantity');
            }
            const data = await response.json();
            return data;
        };

        try {
            const result = await sendUpdateToEnd();
            dispatch(cartActions.updateItemQuantity({ id, quantity })); // Dispatch update to Redux store
            console.log(result);
        } catch (e) {
            console.error(e.message);
        }
    };
};
