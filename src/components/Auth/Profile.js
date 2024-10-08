import AuthContext from "../../store/auth-context";
import "./Profile.css"
import { useContext ,useRef} from "react";
import { useNavigate } from "react-router-dom";
const Profile=()=>{
    const authctx=useContext(AuthContext);
    const navigate=useNavigate();
    const enteredPasswordRef=useRef();

    const submitHandler=(e)=>{
        e.preventDefault();
        const newPassword=enteredPasswordRef.current.value;

        fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBCTNjpWdm0Uxm3FMVxPa-mgrzjJ3LVkrQ",{
            method:"POST",
            body:JSON.stringify({
                idToken:authctx.token,
                password:newPassword,
                returnSecureToken:false
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>{

        })
    }

    
    return <>
    <h1>Your User Profile</h1>
    <form onSubmit={submitHandler}>
        <label htmlFor="password">New Password</label>
        <input type="password" minLength="7" name="password" id="password" ref={enteredPasswordRef}/>
        <button >Change Password</button>
    </form>
    </>

}

export default Profile;