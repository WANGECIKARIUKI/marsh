import React, {useState} from 'react';
import './Signup.css';
import {Link} from 'react-router-dom';
import firebase from './firebaseConfig';



function Signup(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[visible, setVisible] = useState(false)


    const handleSubmit = async(e) =>{
        e.preventDefault();

        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
            if(user){
                alert("Account created successfully")
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
                <h1>Sign Up</h1>
            </div>
            <div className ="box">
                <input type = "name" value= {name} placeholder = "Username" onChange = {(e) => setName(e.target.value)}></input>
            </div>
            <div className ="box">
                <input type = "email" value= {email} placeholder = "Email" onChange = {(e) => setEmail(e.target.value)}></input>
            </div>
            <div className ="box">
                <input type = {visible ? "text": "password"} value= {password} placeholder = "Password" onChange = {(e) => setPassword(e.target.value)}></input>
            </div>
            <p>Already Have an Account <Link to = "/Login">Login Now</Link></p>
            <button onClick = {handleSubmit}>SignUp</button>
        </div>
        </>
    )
}

export default Signup;