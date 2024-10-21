import AuthContext from "../../store/auth-context";
import "./Profile.css"
import { useContext ,useRef, useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./ChangePassword.css";
import "reactjs-popup/dist/index.css";


const ChangePassword=()=>{
    const [showPassword,setShowPassword]=useState(false)
    const authctx=useContext(AuthContext);
    const navigate=useNavigate();
    const enteredPasswordRef=useRef();
    const token=authctx.token;
    const [open,setOpen]=useState(false);
    const submitHandler=(e)=>{
        e.preventDefault();
        const newPassword=enteredPasswordRef.current.value;

        fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBCTNjpWdm0Uxm3FMVxPa-mgrzjJ3LVkrQ",{
            method:"POST",
            body:JSON.stringify({
                idToken:token,
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

    return (
        <>
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
    )
}

export default ChangePassword;