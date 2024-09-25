import React from "react";
import Movie from "./Movie"; 
const MoviesList=(props)=>{
    return <>
    <ul style={{display:"flex",flexDirection:"column"}}>{props.moviesList.map((movie)=>(
        <Movie id={movie.id} date={movie.date} title={movie.title} director={movie.director} onDelete={props.onDelete}/>
    ))}

    </ul>
    </>
}

export default MoviesList;