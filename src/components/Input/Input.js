import React from "react";
import "./Input.css"
const Input=()=>{

    const formSubmitHandler=(event)=>{
        event.preventDefault();
        const newMovie={
            id:Math.random(),
            title:event.target.title.value,
            director:event.target.director.value,
            date:event.target.date.value
        }

        console.log(newMovie);

    }
    return (
        <form onSubmit={formSubmitHandler} className="form">
            <label htmlfor="title" className="input">TITLE</label>
            <input type="text" id="title" className="box" name="title"/>
            <label htmlFor="director" className="input">DIRECTOR</label>
            <input id="director" type="text" className="box" name="director"/>
            <label htmlFor="date" className="input">RELEASE DATE</label>
            <input id="date" type="date" className="box" name="date"/>
            <button type="submit" className="button">ADD MOVIE</button>
        </form>
    )

}

export default Input;