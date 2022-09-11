import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { Outlet, Link } from "react-router-dom";

/*  Cette fonction de connexion ne marche pas pour le moment*/
function Sign_in() {

    const [user, SetUser] = useState("");
    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api_user/").then((response) => {
            SetUser(response.data);
  
        });
      },[]);
    
    const handleSubmit = (event) => {
        event.preventDefault()
        for (let x of user[0].username){
            if(username == x){
                alert(x);
            };
  }
          }
          
    

    return (
      <>
        <div className="container ">
        <div className="blueBg">
            <div className='box signin'>
                <h2>Already Have an Account ?</h2>
                <button className='signinBtn'>Sign in</button>
            </div>
            <div className='box signup'>
                <h2> Don't Already Have an Account ?</h2>
                <a href='./signup.html'><button className='signup Btn'>Sign up</button></a>
            </div>
        </div>
        <div className='formBx'>
            <div className='form signinForm'>
                <form onSubmit={handleSubmit}>
                    <h3>Sign In</h3>
                    <input type='text'  placeholder='Username'  value={username} onChange={(e) => SetUsername(e.target.value)}/>
                    <input type='password' placeholder='Password' value={password} onChange={(e) => SetPassword(e.target.value)}/>
                    <input type='submit' value='Login'/>
                    <a href='#' className='forgot'>Forgot Password</a>
                </form>
            </div>

        </div>
    </div>
       
           
  
      </>
      
      
    );
    
  }

export{Sign_in};