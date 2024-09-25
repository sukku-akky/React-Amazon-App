import React,{useState,useRef,useEffect,useCallback,useMemo} from "react";
import "./Home.css"
import MoviesList from "./Movies/MoviesList";
import Input from "../components/Input/Input";


const Home=()=>{
    const[movies,setMovies]=useState([]);
    

    

    const fetchMoviesHandler=async()=>{
        
        try{
        const response=await fetch("https://crudcrud.com/api/76dac5a6b6e0434a8de36eb84bf26045/films");
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
    
        } catch(error){
           
           console.log(error)

        }
        
        
        
    }

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
        const response=await fetch("https://crudcrud.com/api/76dac5a6b6e0434a8de36eb84bf26045/films",{
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
           
            <div >
               <MoviesList moviesList={movies} onDelete={deleteMovieHandler}/>

            </div>
        </div>
    )

}

export default Home;