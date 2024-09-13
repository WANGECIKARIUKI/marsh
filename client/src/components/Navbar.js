import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";
import image24 from "./images/image24.jpg";

import Button from "./Button";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg navbar-black">
            <div class="container-fluid">
                    <Link to = "/" className = "navbar-logo">
                        <img className = "image"src = {image24} alt = ""/> RedSpy
                    </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link to = "./" class="nav-link active" aria-current="page">Home</Link>
                </li>

                <li class="nav-item">
                    <Link to = "./dashboard"class="nav-link active" aria-current="page">Dashboard</Link>
                </li>

                <li class="nav-item">
                    <Link to = "./ClientDashboard"class="nav-link active" aria-current="page">Client-Dashboard</Link>
                </li>

                <li class="nav-item">
                    <Link to = "./Pricing"class="nav-link active" aria-current="page">Pricing</Link>
                </li>


                <li class="nav-item">
                    <Link to = "./Admin"class="nav-link active" aria-current="page">Admin</Link>
                </li>



                <li class="nav-item dropdown">

                    <Link to = './Features' class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              General Features
                    </Link>
                <ul class="dropdown-menu">
                    <li><Link to= "./Browser" class="dropdown-item">Browser</Link></li>
                    <li><Link to= "./Contacts" class="dropdown-item">Contacts</Link></li>
                    <li><Link to= "./Message" class="dropdown-item">Message</Link></li>
                    <li><Link to= "./Calls" class="dropdown-item">Calls</Link></li>
                    <li><Link to= "./Location" class="dropdown-item">Location</Link></li>
                    <li><Link to= "./Screenrecorder" class="dropdown-item">Screenrecorder</Link></li>
                    <li><Link to= "./Audio" class="dropdown-item">Audio</Link></li>
                    <li><Link to= "./Photos" class="dropdown-item">Photos</Link></li>
                    <li><Link to = './Socials' class="dropdown-item">Socials</Link></li>
                    <li><Link to = './Features' class="dropdown-item">All Features</Link></li>
                </ul>
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
            </ul>

        </div>
    </div>
<Button />
</nav>
)};

export default Navbar;


