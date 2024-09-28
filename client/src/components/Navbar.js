import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import image24 from "./images/image24.jpg";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg navbar-black">
            <div className="container-fluid">
                <Link to="/" className="navbar-logo">
                    <img className="image" src={image24} alt="Logo" /> RedSpy
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link to='./Features' className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                General Features
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="./Browser" className="dropdown-item">Browser</Link></li>
                                <li><Link to="./Contacts" className="dropdown-item">Contacts</Link></li>
                                <li><Link to="./Message" className="dropdown-item">Message</Link></li>
                                <li><Link to="./Calls" className="dropdown-item">Calls</Link></li>
                                <li><Link to="./Location" className="dropdown-item">Location</Link></li>
                                <li><Link to="./Screenrecorder" className="dropdown-item">Screen Recorder</Link></li>
                                <li><Link to="./Audio" className="dropdown-item">Audio</Link></li>
                                <li><Link to="./Photos" className="dropdown-item">Photos</Link></li>
                                <li><Link to='./Socials' className="dropdown-item">Socials</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link to="./Dashboard" className="nav-link active" aria-current="page">Demo</Link>
                        </li>

                        <li class="nav-item dropdown">
                    <Link to = './Socials' class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Socials</Link>
                <ul class="dropdown-menu">
                   <li><Link to= "./Whatsapp" class="dropdown-item">Whatsapp</Link></li>
                   <li><Link to= "./Snapchat" class="dropdown-item">Snapchat</Link></li>
                   <li><Link to= "./Facebook" class="dropdown-item">Facebook</Link></li>
                   <li><Link to= "./Instagram" class="dropdown-item">Instagram</Link></li>
                   <li><Link to= "./Twitter" class="dropdown-item">Twitter</Link></li>
                </ul>
                </li>

                        {/* Add Login and Sign Up buttons */}
                        <li className="nav-item">
                            <Link to="/login" className="btn navbar-btn btn-lightblue">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="btn navbar-btn btn-lightblue signup-btn">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
