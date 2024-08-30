import React from 'react';
import { Link } from 'react-router-dom'


function Home(){
    return(
        <div className = "container">
            <div className= "card mt-4">
                <div className = "card-body">
                <h1> Device Remote Monitoring System</h1>
                </div>
                <span className='login_icon'><Link to={'/Login'}></Link></span>
                <span className='signup_icon'><Link to={'/Signup'}></Link></span>
            </div>
        </div>
    )
}

export default Home;