import AuthContext from "../../store/auth-context";
import "./Profile.css"
import { useContext ,useRef, useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "reactjs-popup/dist/index.css";
const Profile=()=>{
    const [showPassword,setShowPassword]=useState(false)
    const authctx=useContext(AuthContext);
    const navigate=useNavigate();
    const enteredPasswordRef=useRef();
    const token=authctx.token;
    const [open,setOpen]=useState(false);
    const[updateData,setUpdateData]=useState({
        fullName:'',
        url:""
    })
    const handleChange=(e)=>{
        setUpdateData({
            ...updateData,
            [e.target.name]:e.target.value,
        })
    }

    const fetchProfileData = async () => {
    
        try {
          const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBCTNjpWdm0Uxm3FMVxPa-mgrzjJ3LVkrQ",
            {
              method: "POST",
              body: JSON.stringify({
                idToken: token
              }),
              headers: {
                "Content-Type": "application/json"
              }
            }
          );
          
  
          if (!response.ok) {
            throw new Error("Could not fetch profile data.");
          }
  
          const data = await response.json();
          console.log(data);
          const userData = data.users[0];
          authctx.setFullNameHandler(userData.displayName);
          authctx.setUrlHandler(userData.photoUrl);
  
          setUpdateData({
            fullName: userData.displayName || "",
            url: userData.photoUrl || ""
          });
          
        } catch (error) {
            console.log(error.message)
         
        }
      };




      useEffect(()=>{
        fetchProfileData();

      },[token])


      const submitFormHandler=(e)=>{
        e.preventDefault();
        const {fullName,url}=updateData;

        if(!fullName || !url){
            throw new Error('please fill details')
            
        }

        fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBCTNjpWdm0Uxm3FMVxPa-mgrzjJ3LVkrQ",{
            method:"POST",
            body:JSON.stringify({
                idToken:token,
                displayName:updateData.fullName,
                photoUrl:updateData.url,
                returnSecureToken:true,
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>{
            if(res.ok){
                
                return res.json();
            } else{
                return res.json().then((data)=>{
                    let errorMessage="update failed";
                    if(data && data.error && data.error.message){
                        errorMessage=data.error.message;
                    }
                    alert(errorMessage);

                })
            }
        }).then(data=>{
            alert('your profile is successfully updated')
            authctx.setFullNameHandler(data.displayName);
            authctx.setUrlHandler(data.photoUrl)
            console.log(data);
        }) .catch((e)=>{
            console.log(e.message)
        })
    }



    const submitHandler=(e)=>{
        e.preventDefault();
        const newPassword=enteredPasswordRef.current.value;

        fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBCTNjpWdm0Uxm3FMVxPa-mgrzjJ3LVkrQ",{
            method:"POST",
            body:JSON.stringify({
                idToken:authctx.token,
                password:newPassword,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>{
            enteredPasswordRef.current.value='';
            setOpen(true);

        })
    }
    const togglePasswordVisibility=()=>{
        setShowPassword((prev)=>!prev)
    }

    
    return <>
    <h1>Your User Profile</h1>
    <form onSubmit={submitHandler}>
        <label htmlFor="password">New Password</label>
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"} // Toggle input type between text and password
            minLength="7"
            name="password"
            id="password"
            ref={enteredPasswordRef}
          />
          <span
            className="eye-icon"
            onClick={togglePasswordVisibility}
            style={{ cursor: "pointer", marginLeft: "10px" }}
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </span>
        </div>
        <button >Change Password</button>
    </form>
    <div className="bt-p">
            <h1>Winners never quit,Quitters never win.</h1>
            <button>Your profile is 64% completed.A complete profile has higher chances of landing a job.<span>complete now</span></button>
        </div>
        <hr/>
        <div className="form-dp">
            <div className="form-heading">
                <h1>Contact Details</h1>
                <button className="dp-bt">Cancel</button>
            </div>
            <div className="form-body">
                <form onSubmit={submitFormHandler}>
                    <div className="dp">
                        <div>
                        <label htmlFor="name">Full Name:</label>
                        <input id="name" type="text" name="fullName" value={updateData.fullName} onChange={handleChange}/>
                        </div>
                        <div>
                        <label htmlFor="url">Profile Photo Url:</label>
                        <input id="url" type="text" name="url" value={updateData.url} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="form-bottom">
                        <button type="submit" className="dp-pt">update</button>
                    </div>
                </form>
            </div>
        </div>
    <Popup open={open} >
    <div className="modal-contact">
          <h2>Thank You!</h2>
          <p>Your password is changed successfully</p>
          <button onClick={() => setOpen(false)} className="close-button-contact">
            Close
          </button>
        </div>
    </Popup>
    </>

}

export default Profile;