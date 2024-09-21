import React,{useState} from "react";
import "./Home.css"
import MoviesList from "./Movies/MoviesList";

const Home=()=>{
    const[movies,setMovies]=useState([]);
    const[isLoading,setIsLoading]=useState(false);

    async function fetchMoviesHandler(){
        setIsLoading(true);
        const response=await fetch("https://swapi.dev/api/films");
        const data=await response.json();
        const transformedMovies=data.results.map((movieData)=>{
            return {
                id:movieData.episode_id,
                title:movieData.title,
                date:movieData.release_date,
                director:movieData.director
            }
            })
            setMovies(transformedMovies);
            setIsLoading(false);
        
        
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
            <div >
                {!isLoading && <MoviesList moviesList={movies}/>}
                {isLoading && <div className="spinner"></div>}

            </div>
        </div>
    )

}

export default Home;