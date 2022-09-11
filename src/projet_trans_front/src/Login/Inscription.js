import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { Outlet, Link } from "react-router-dom";


function Sign_up(){
    const [user, SetUser] = useState("");
    const [first_name, SetFirst_name] = useState("");
    const [last_name, SetLast_name] = useState("");
    const [mail, SetMail] = useState("");
    const [password, SetPassword] = useState("");
    const [domaine, SetDomaine] = useState("");
    const [username, SetUsername] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post("http://localhost:8000/api_user/",
        { 
            first_name: first_name,
            last_name: last_name,
            mail: mail,
            password: password,
            domaine:domaine,
            username: username
        }).then((response) => {
          SetUser(response.data);
  
        });
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
                <h2>Already Have an Account ?</h2>
                <button className='signup Btn'>Sign in</button>
            </div>
        </div>

        
        <div className='formBx'>
            <div className='form signinForm'>
                <form onSubmit={handleSubmit}>
                    <h3>Sign Up</h3>
                    <input type='text' placeholder='Nom'  value={last_name} onChange={(e) => SetLast_name(e.target.value)}/>
                    <input type='text' placeholder='Prénom' value={first_name} onChange={(e) => SetFirst_name(e.target.value)}/>
                    <input type='text' placeholder='Username' value={username} onChange={(e) => SetUsername(e.target.value)}/>
                    <input type='text' placeholder='Email'  value={mail} onChange={(e) => SetMail(e.target.value)}/>
                    <input type='password' placeholder='Password'  value={password} onChange={(e) => SetPassword(e.target.value)}/>
                    <input type='text' placeholder='Domaine'  value={domaine} onChange={(e) => SetDomaine(e.target.value)}/>
                    <input type='submit' value='Login'/>
                    <a href='#' className='forgot'>Forgot Password</a>
                </form>
            </div>

        </div>
    </div>
       
           
    </>
      
      );
}
export{Sign_up};