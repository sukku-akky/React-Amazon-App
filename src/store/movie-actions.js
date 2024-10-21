import { movieActions } from "./reduc.store";

export const addMovieToEnd=(movie)=>{
    return async (dispatch)=>{
        const {email}=movie;
        const encodedEmail=email.split('@')[0];
        const sendMovieToEnd=async ()=>{
        const response=await fetch(`https://fir-8e8d2-default-rtdb.firebaseio.com/movie/${encodedEmail}.json`,{
            method:"POST",
            body:JSON.stringify({
                title:movie.title,
                director:movie.director,
                releaseDate:movie.releaseDate,

            }),
            headers:{
                'Content-Type':'application/json',
            }

        });
        if(!response.ok){
                
            throw new Error ('failed to send item to cart');
            
        }
        if(response.ok){
            alert('added movie successfully')
        }
        const data=await response.json();
        console.log(data);
        return data;

        }
        try{
            const result=await sendMovieToEnd();
            dispatch(movieActions.addMovie({
                firebaseId:result.name,
                title:movie.title,
                director:movie.director,
                releaseDate:movie.releaseDate

            }));

        }catch(e){
            console.error(e.message);

        }

    }

}


export const deleteMovieFromEnd=(movie)=>{
    const{email,firebaseId}=movie;
    const encodedEmail=email.split('@')[0];
    return async(dispatch)=>{
        const removeMovieFromEnd=async ()=>{
            const response=await fetch(`https://fir-8e8d2-default-rtdb.firebaseio.com//movie/${encodedEmail}/${firebaseId}.json`,{
                method:"DELETE",
            })
            if(!response.ok){
                throw new Error('failed to delete from end');
            }
            return response;
        }
        try{
            const result=await removeMovieFromEnd();
            if(result.ok){
                dispatch(movieActions.deleteMovie(movie));
            }

        }catch(e){

        }
    }
}

export const fetchMoviesFromEnd=(email)=>{
    const encodedEmail=email.split('@')[0];
    return async (dispatch)=>{
        const getItemsFromEnd=async()=>{
            const response=await fetch(`https://fir-8e8d2-default-rtdb.firebaseio.com/movie/${encodedEmail}.json`);
            const data=await response.json();
            return data

        }
        try{
            const movieData=await getItemsFromEnd();
            const transformedMovieItems = Object.keys(movieData).map((firebaseId) => {
                return {
                  firebaseId: firebaseId,    // Firebase-generated ID  // Cart item ID
                  title:movieData[firebaseId].title,
                  director:movieData[firebaseId].director,
                  releaseDate:movieData[firebaseId].releaseDate
                };
            });
            dispatch(movieActions.replaceMovie(transformedMovieItems));
                

        }catch(e){
            console.log(e.message);
        }
    }

}