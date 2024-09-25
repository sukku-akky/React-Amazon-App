import React from "react";
import "./Movie.css"
const Movie=(props)=>{
    return(
        <>
        <li key={props.id} className="movie-item">
            <span className="date">{props.date}</span>
            <span className="title">{props.title}</span>
            <span className="director">{props.director}</span>
            <button className="buy-btn">BUY TICKETS</button>
            <button  className="buy-btn" onClick={()=>props.onDelete(props.id)}>Delete</button>
        </li>
        </>
    )

}

export default Movie;