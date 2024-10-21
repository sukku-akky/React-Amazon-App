import React, { useContext } from "react";
import "./MoviesList.css";

import { movieActions } from "../../store/reduc.store";
import { useDispatch,useSelector } from "react-redux";
import { deleteMovieFromEnd } from "../../store/movie-actions";
import AuthContext from "../../store/auth-context";
const MoviesList=(props)=>{
    const dispatch=useDispatch();
    const authCtx=useContext(AuthContext);
    const movies=useSelector(state=>state.movie.movies);
    const email=authCtx.email;
    const deleteHandler=(movie)=>{
        const updatedMovie={
            email:email,
            ...movie
        }
        dispatch(deleteMovieFromEnd(updatedMovie));
    }
    return <>
    <ul style={{display:"flex",flexDirection:"column"}}>{movies.map((movie)=>(
        
    <li key={movie.id} className="movie-item">
        <span className="date">{movie.releaseDate}</span>
        <span className="title">{movie.title}</span>
        <span className="director">{movie.director}</span>
        <button className="buy-btn">BUY TICKETS</button>
        <button  className="buy-btn" onClick={()=>deleteHandler(movie)}>Delete</button>
    </li>
    ))}

    </ul>
    </>
}

export default MoviesList;