import React from "react";
import "./ContactPage.css";

const ContactPage=()=>{

    const submitFormhandler=(event)=>{
        event.preventDefault();
        const user={
            id:event.target.phone.value,
            name:event.target.name.value,
            emailId:event.target.email.value,
            phone:event.target.phone.value
        }
        fetch("https://fir-8e8d2-default-rtdb.firebaseio.com/register.json",{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                "content-type":"application/json"

            }

        }).then((response)=>{
            console.log(response)
        })


    }
    return <>
        <h1 className="heading">Feel Free To Contact Us</h1>
         
      <form id="userForm" onSubmit={submitFormhandler} className="form">
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" required placeholder="Username"/><br /><br /><br/>

        <label htmlFor="email"></label>
        <input type="email" id="email" name="email" required placeholder="email"/><br /><br /><br/>

        <label htmlFor="phone"></label>
        <input type="text" id="phone" name="phone" required placeholder="phone_number"/><br /><br /><br/>

        <button type="submit" className="button">Submit</button>
      </form>
    </>
       
     
}

export default ContactPage;