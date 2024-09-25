import React,{useState,useRef,useEffect,useCallback,useMemo} from "react";
import "./Home.css"
import MoviesList from "./Movies/MoviesList";
import Input from "../components/Input/Input";


const Home=()=>{
    const[movies,setMovies]=useState([]);
    const[isLoading,setIsLoading]=useState(false);
    const[error,setError]=useState(null);
    const [retry,setRetry]=useState(false);
    const[isRetryCancelled,setIsRetryCancelled]=useState(false);
    const retryTimer=useRef(null);

    const memoizedMovies = useMemo(() => movies, [movies]);

    const cancelRetryHandler = useCallback(() => {
        setRetry(false);
        setIsRetryCancelled(true);
        if (retryTimer.current) {
          clearTimeout(retryTimer.current);
           // Stop the retry timer
        }
      },[]);

    const fetchMoviesHandler=useCallback(async()=>{
        setIsLoading(true);
        setError(null);
        
        setIsRetryCancelled(false);

        try{
        const response=await fetch("https://crudcrud.com/api/fcd8efa49d4046d8835a543418d6e074/films");
        if (!response.ok){
            throw new Error('something went wrong...Retrying');

        }
        const data=await response.json();

        const transformedMovies=data.map((movie)=>{
            return {
                id:movie.episode_id,
                title:movie.title,
                director:movie.director,
                date:movie.release_date,
            }
        })
        setMovies(transformedMovies);
        setRetry(false);
        setIsLoading(false);
        } catch(error){
            setError(error.message);
            setIsLoading(false);
            setRetry(true)
            if(retry){
                retryTimer.current=setTimeout(fetchMoviesHandler,5000);
            }

        }
        
        
        
    },[retry])

    // useEffect(() => {
    //     fetchMoviesHandler(); // Fetch data when the component mounts
    //     return () => {
    //       // Clean up any retry timers on unmount
    //       if (retryTimer.current) {
    //         clearTimeout(retryTimer.current);
    //       }
    //     };
    //   },[fetchMoviesHandler] );

    

    const addMovieHandler=async(movie)=>{
        const response=await fetch("https://crudcrud.com/api/fcd8efa49d4046d8835a543418d6e074/films",{
            method:"POST",
            body:JSON.stringify(movie),
            headers:{
                'content-Type':'application/json'
            }
        });
        const data=await response.text();
        console.log(data);
        

    }

    const deleteMovieHandler=async(Id)=>{
        try{

            const response=await fetch(`https://crudcrud.com/api/fcd8efa49d4046d8835a543418d6e074/films${Id}`,{
                method:"DELETE"
            })

            console.log("movie deleted successfully")

        } catch(error){
            console.log(error)

        }
    }

    let content=<p>Found no movies</p>;

    if(memoizedMovies.length>0){
        content=<MoviesList moviesList={memoizedMovies}  onDelete={deleteMovieHandler}></MoviesList>
    }
    if(error){
        content=<p>{error}</p>
    }
    if(isLoading){
        content=<p>Loading...</p>
    }
    if(isRetryCancelled){
        content=<p>check after sometime</p>
    }
    return (
        <div className="container">
            <div style={{textAlign:"center",backgroundColor:"grey",fontSize:"90px"}}>
            <h1 >Generic Music</h1>
            <button className="latest-album">Get Our Latest Album</button>
            <button className="play-btn"> &#9658; </button>
            </div>
            <Input addMovie={addMovieHandler}/>
            <h2>Films</h2>
            <button onClick={fetchMoviesHandler}>Fetch Films</button>
            {retry && <button onClick={cancelRetryHandler}>Cancel</button>}
            <div >
                {content}

            </div>
        </div>
    )

}

export default Home;