import React,{useRef} from "react";
import "./Input.css"
const Input=(props)=>{
    const titleRef=useRef('');
    const dateRef=useRef('');
    const directorRef=useRef('');

    const formSubmitHandler=(event)=>{
        event.preventDefault();
        const newMovie={
            id:Math.random(),
            title:titleRef.current.value,
            director:directorRef.current.value,
            date:dateRef.current.value
        }
        
        props.addMovie(newMovie);

    }
    return (
        <form onSubmit={formSubmitHandler} className="form">
            <label htmlFor="title" className="input">TITLE</label>
            <input type="text" id="title" className="box" name="title" ref={titleRef}/>
            <label htmlFor="director" className="input">DIRECTOR</label>
            <input id="director" type="text" className="box" name="director" ref={directorRef}/>
            <label htmlFor="date" className="input">RELEASE DATE</label>
            <input id="date" type="date" className="box" name="date" ref={dateRef}/>
            <button type="submit" className="button">ADD MOVIE</button>
        </form>
    )

}

export default Input;