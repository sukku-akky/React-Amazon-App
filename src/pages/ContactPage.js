import React from "react";


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
         <h2>User Form</h2>
      <form id="userForm" onSubmit={submitFormhandler}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required /><br /><br />

        <label htmlFor="email">Email ID:</label>
        <input type="email" id="email" name="email" required /><br /><br />

        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" required /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </>
       
     
}

export default ContactPage;