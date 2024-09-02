import React from 'react';
import {Link} from 'react-router-dom';
import "./Button.css";

function Button(){
    return (
        <>
      
        <Link to = "signup">
            <button className = "btn-up">Sign Up</button>
        </Link>

        <Link to = "Login">
            <button className = "btn-up">Login</button>
        </Link>

      </>  
        
    )
}
export default Button;