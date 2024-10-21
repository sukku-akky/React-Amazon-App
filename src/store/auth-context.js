import React, { useState } from "react";

const AuthContext=React.createContext({
    token:"",
    isLoggedIn:false,
    email:'',
    login:(token)=>{},
    logout:()=>{},
    fullName:'',
    url:''
});

 export const AuthContextProvider=(props)=>{
   const initialToken=localStorage.getItem("token");
   const initialEmail=localStorage.getItem("email");
    const [token,setToken]=useState(initialToken);
    const[email,setEmail]=useState(initialEmail);
    const[fullName,setFullName]=useState('');
    const[url,setUrl]=useState('');

    const userIsLoggedIn=!!token;

    const loginHandler=(token,email)=>{
        localStorage.setItem("token",token)
        localStorage.setItem("email",email);
        setToken(localStorage.getItem("token"));
        setEmail(localStorage.getItem("email"));

    }

    const logoutHandler=()=>{
        setToken(localStorage.removeItem("token"));
        
        setEmail(localStorage.removeItem("email"));
    }

    const setFullNameHandler=(fullName)=>{
        setFullName(fullName);
    }
    const setUrlHandler=(url)=>{
        setUrl(url);
    }

    const contextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        email:email,
        login:loginHandler,
        logout:logoutHandler,
        setFullNameHandler,
        setUrlHandler,
        fullName:fullName,
        url:url
    };

   return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;