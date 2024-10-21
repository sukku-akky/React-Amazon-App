import React,{useState,useRef,useEffect,useCallback,useMemo} from "react";
import "./Home.css"
import MoviesList from "./Movies/MoviesList";
import Input from "../components/Input/Input";
import { addMovieToEnd ,fetchMoviesFromEnd} from "../store/movie-actions";
import { useDispatch,useSelector } from "react-redux";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

const Home=()=>{
    
    const authCtx=useContext(AuthContext);
    const email=authCtx.email;
    const dispatch=useDispatch();
    console.log(email);

    

    

    
    
    

  const addMovieHandler=(movie)=>{
    const updatedMovie={
        email:email,
        ...movie,
    }
    dispatch(addMovieToEnd(updatedMovie));
    


  }

  const fetchMoviesHandler=(email)=>{
    dispatch(fetchMoviesFromEnd(email));


  }

    
    
    return (
        <div className="container">
            <div style={{textAlign:"center",backgroundColor:"grey",fontSize:"90px"}}>
            <h1 >Generic Movies</h1>
            <button className="latest-album">Get Our Latest Album</button>
            <button className="play-btn"> &#9658; </button>
            </div>
            <Input onAdd={addMovieHandler}/>
            <h2>Films</h2>
            <button onClick={()=>fetchMoviesHandler(email)}>Fetch Films</button>
           
            <div >
               <MoviesList />

            </div>
        </div>
    )

}

export default Home;