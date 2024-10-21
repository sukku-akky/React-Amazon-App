import React,{useState,useContext} from "react";
import "./Input.css"

import { useDispatch } from "react-redux";

const Input=(props)=>{
    
    
    
    const[movie,setMovie]=useState({
        title:'',
        director:'',
        releaseDate:''
    });

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

    const formSubmitHandler=(event)=>{
        event.preventDefault();
        const newMovie={
            
            title:movie.title,
            director:movie.director,
            date:movie.releaseDate
        }
        props.onAdd(newMovie);
        setMovie({
            title:'',
        director:'',
        releaseDate:''
        })
        
        

    }
    return (
        <form onSubmit={formSubmitHandler} className="form">
            <label htmlFor="title" className="input">TITLE</label>
            <input type="text" id="title" className="box" name="title" value={movie.title} onChange={handleChange}/>
            <label htmlFor="director" className="input">DIRECTOR</label>
            <input id="director" type="text" className="box" name="director" value={movie.director} onChange={handleChange}/>
            <label htmlFor="date" className="input">RELEASE DATE</label>
            <input id="date" type="date" className="box" name="releaseDate" value={movie.releaseDate} onChange={handleChange}/>
            <button type="submit" className="button" >ADD MOVIE</button>
        </form>
    )

}

export default Input;