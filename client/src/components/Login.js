import React, {useState} from 'react';
import './Login.css'
import {Link} from 'react-router-dom'
import firebase from './firebaseConfig'
import { FaEye, FaEyeSlash} from "react-icons/fa";




function Login(){

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[visible, setVisible] = useState(false);
    //const [show_input, setShowInput] = useState('')


    const handleSubmit = async(e) =>{
        e.preventDefault();

        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password)
            if(user){
                alert("Login successfully")
            }
        }
        catch(error)
        {
            alert(error);
        }
    }

    return (

        <>
        <div className="main-container-signup">
            <div className="header">
                <h1>Log in</h1>
            </div>
            <div className ="box">
                <input type = "email" value= {email} placeholder = "Email" onChange = {(e) => setEmail(e.target.value)}></input>
            </div>
    
            <div className ="box">
                <input type = {visible ? "text": "password"} value= {password} placeholder = "Password" onChange = {(e) => setPassword(e.target.value)}>
                </input>
                <span className = "icons-span" onClick = {() => setVisible(!visible)}>
                    {
                        visible ? <FaEye /> : <FaEyeSlash />
                    }
            </span>
            </div>
            <p><a href = "/forgotpassword">Forgot password</a></p>
            <p>Don't Have an Account <Link to = "/Signup">Create Account</Link></p>
            <button onClick = {handleSubmit}>Login</button>
        </div>

        </>
    )
}

export default Login;