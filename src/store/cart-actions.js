
import { cartActions } from "./reduc.store";



export const addItemToEnd=(item)=>{
    
    const{email}=item;
    const encodedEmail = email.split('@')[0];
    return async (dispatch)=>{
        const sendItemToEnd=async ()=>{
            
        const response =await fetch(`https://fir-8e8d2-default-rtdb.firebaseio.com//cart/${encodedEmail}.json`,
        {
                method:"POST",
                body:JSON.stringify({
                    id:item.id,
                    imageUrl:item.imageUrl,
                    price:item.price,
                    quantity:item.quantity,
                    title:item.title,
                }),
                headers:{
                    'Content-Type':'application/json',
                }
            });
            if(!response.ok){
                
                throw new Error ('failed to send item to cart');
                
            }
            const data=await response.json();
            console.log(data);
            return data;

        }
        try{
            const result=await sendItemToEnd();
            dispatch(cartActions.addItemToCart({
                firebaseId:result.name,
                id:item.id,
                imageUrl:item.imageUrl,
                price:item.price,
                quantity:item.quantity,
                title:item.title,
            }));
            

        }catch(e){
            console.error(e.message);
        }

    }
}

export const updateItemQuantityToEnd = (item) => {
    const { email, id, quantity ,firebaseId} = item;
    const updatedItem={
        id:item.id,
        title:item.title,
        price:item.price,
        quantity:item.quantity,
        imageUrl:item.imageUrl
    }
    const encodedEmail = email.split('@')[0];
    return async (dispatch) => {
        const sendUpdateToEnd = async () => {
            const response = await fetch(`https://fir-8e8d2-default-rtdb.firebaseio.com//cart/${encodedEmail}/${firebaseId}.json`, {
                method: "PUT", // Use PUT to update the item
                body: JSON.stringify(updatedItem), // Update with new quantity
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


export const deleteItemfromEnd=(item)=>{
    const {email,firebaseId}=item;
    const encodedEmail=email.split('@')[0];
    return async (dispatch)=>{
        const removeItemFromEnd=async ()=>{
            const response=await fetch(`https://fir-8e8d2-default-rtdb.firebaseio.com//cart/${encodedEmail}/${firebaseId}.json`,{
                method:"DELETE",
                
            })
            if(!response.ok){
                throw new Error('failed to delete from end');
            }
            return response;

        }
        try{
            const result=await removeItemFromEnd();
            if(result.ok){
                dispatch(cartActions.deleteItemFromCart(item));
            }
           

        }catch(error){
            console.error('Error deleting item:', error);

        }
    }

}

export const fetchingItemsFromEnd=(email)=>{
   const encodedEmail=email.split('@')[0];
    return async (dispatch)=>{
        const getItemsFromEnd=async()=>{
            const response=await fetch(`https://fir-8e8d2-default-rtdb.firebaseio.com//cart/${encodedEmail}.json`);
            const data=await response.json();
            return data

        }
        try{
            const cartData=await getItemsFromEnd();
            const transformedCartItems = Object.keys(cartData).map((firebaseId) => {
                return {
                  firebaseId: firebaseId,    // Firebase-generated ID
                  id: cartData[firebaseId].id,  // Cart item ID
                  imageUrl: cartData[firebaseId].imageUrl,
                  price: cartData[firebaseId].price,
                  quantity: cartData[firebaseId].quantity,
                  title: cartData[firebaseId].title,
                };
            });
            dispatch(cartActions.replaceCartItems(transformedCartItems));
                

        }catch(e){
            console.log(e.message);
        }
    }
}