import React, {useState} from 'react';
import './Login.css'
import {Link} from 'react-router-dom'
import firebase from './firebaseConfig'
import { FaEye, FaEyeSlash} from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';



function Login(){

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[visible, setVisible] = useState(false);

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
          const result = await signInWithPopup(firebase.auth(), provider);
          // Handle successful Google sign-in
    
        } catch (error) {
            alert(error);
          // Handle Google sign-in errors
        }
      };
    
    //const [show_input, setShowInput] = useState('')

    const navigate = useNavigate();
    const isLoggedIn = true;

    if (isLoggedIn) {
        navigate('/MonitoringApp')
    }else{
        navigate('/');
    }


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
            <p style = {{textALign: "center"}}><a href = "/forgotpassword">Forgot password</a></p>
            <p style = {{textAlign: "left"}}>
                            No account yet? {' '}
                            <Link to="/Signup">
                                Sign up
                            </Link>
                        </p>
            <button onClick = {handleSubmit}>Login</button>
            <span>or</span>            <button onClick={handleGoogleSignIn}>Sign in with Google</button>

        </div>

        </>
    )
}

export default Login;