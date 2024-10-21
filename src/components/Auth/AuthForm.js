import React,{useState,useRef,useContext} from "react";
import "./AuthForm.css";
import AuthContext from "../../store/auth-context";
import {useNavigate} from "react-router-dom";
const AuthForm=()=>{
    const history=useNavigate();
    const authCtx=useContext(AuthContext);
    const[isLogin,setIsLogin]=useState(true);
    const [isLoading,setIsLoading]=useState(false);
    const emailInputRef=useRef();
    const passwordInputRef=useRef();

    const switchAuthModeHandler=()=>{
        setIsLogin((prevState)=>{
             return !prevState
        })
    }

    const submitHandler=(event)=>{
        event.preventDefault();

        const enteredEmail=emailInputRef.current.value;
        const enteredPassword=passwordInputRef.current.value;
        setIsLoading(true);
        let url;
        if(isLogin){
            url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBCTNjpWdm0Uxm3FMVxPa-mgrzjJ3LVkrQ"

        } else{
            url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBCTNjpWdm0Uxm3FMVxPa-mgrzjJ3LVkrQ"
        }

        fetch(url,    
            {
                method:"POST",
                body:JSON.stringify({
                    email:enteredEmail,
                    password:enteredPassword,
                    returnSecureToken:true
                }),
                headers:{
                    'Content-Type':'application/json'
                }
            }

            )
            
            .then(res=>{
                setIsLoading(false);
                if(res.ok){
                    return res.json();

                } else{
                    return res.json().then(data=>{
                        let errorMessage="Authentication failed";

                        if(data && data.error && data.error.message){
                            errorMessage=data.error.message;
                        }
                        alert(errorMessage);
                    })
                }
            }).then(data=>{
                authCtx.login(data.idToken,enteredEmail);
               
                history("/store");
            }) .catch((error)=>{
                alert(error.message)
            })
        


    };
    


    return (
        <section>
            <h1>{isLogin? "Login":"sign up"}</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" required ref={emailInputRef}/>
                </div>
                <div>
                    <label htmlFor="password">Your Password</label>
                    <input type="password" id="password" required ref={passwordInputRef}/>
                </div>
            
                <div>
                    {!isLoading && <button>{isLogin? "Login" :"Create Account"}</button>}
                    {isLoading && <p>sending request...</p>}
                    <button
                    type="button"
                    onClick={switchAuthModeHandler}>
                    {isLogin?"Create new account":"Login with existing account"}
                    </button>

                </div>
            </form>
        </section>
    )

}

export default AuthForm;