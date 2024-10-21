import React,{useState} from "react";
import "./ContactPage.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const ContactPage=()=>{
   
    const [open,setOpen]=useState(false);
    const [form,setForm]=useState({
        name:'',
        email:'',
        phone:''
    })

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setForm((prevState)=>({
            ...prevState,
            [name]:value,
        }
            
        ))
    }
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
            setOpen(true);
            setForm({
                name:'',
                email:'',
                phone:'',
            })
          

        })


    }
    return <>
        <h1 className="heading">Feel Free To Contact Us</h1>
         
      <form id="userForm" onSubmit={submitFormhandler} className="form">
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" required placeholder="Username" value={form.name} onChange={handleChange}/><br /><br /><br/>

        <label htmlFor="email"></label>
        <input type="email" id="email" name="email" required placeholder="email" value={form.email} onChange={handleChange}/><br /><br /><br/>

        <label htmlFor="phone"></label>
        <input type="text" id="phone" name="phone" required placeholder="phone_number" value={form.phone} onChange={handleChange}/><br /><br /><br/>

        <button type="submit" className="button">Submit</button>
      </form>
      <Popup open={open} onClose={() => setOpen(false)} modal>
        <div className="modal-contact">
          <h2>Thank You!</h2>
          <p>We will reach out to you soon.</p>
          <button onClick={() => setOpen(false)} className="close-button-contact">
            Close
          </button>
        </div>
      </Popup>
    </>
       
     
}

export default ContactPage;