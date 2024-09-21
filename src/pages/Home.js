import React,{useState,useRef,useEffect,useCallback,useMemo} from "react";
import "./Home.css"
import MoviesList from "./Movies/MoviesList";

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
        const response=await fetch("https://swapi.dev/api/films");
        if (!response.ok){
            throw new Error('something went wrong...Retrying');

        }
        const data=await response.json();

        const transformedMovies=data.results.map((movie)=>{
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

    useEffect(() => {
        fetchMoviesHandler(); // Fetch data when the component mounts
        return () => {
          // Clean up any retry timers on unmount
          if (retryTimer.current) {
            clearTimeout(retryTimer.current);
          }
        };
      },[fetchMoviesHandler] );

    let content=<p>Found no movies</p>;

    if(memoizedMovies.length>0){
        content=<MoviesList moviesList={memoizedMovies}></MoviesList>
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
            
            <h2>Films</h2>
            <button onClick={fetchMoviesHandler}>Get latest films</button>
            {retry && <button onClick={cancelRetryHandler}>Cancel</button>}
            <div >
                {content}

            </div>
        </div>
    )

}

export default Home;