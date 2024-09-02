import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { BiLogoWhatsapp } from "react-icons/bi";
//import { FaBity } from "react-icons/fa6";

import Button from "./Button";

function Navbar() {
    return (
<nav class="navbar navbar-expand-lg bg navbar-black">
<div class="container-fluid">
<Link to = "/" className = "navbar-logo">
<Icons.FaBity />
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
<Link to = "/Dashboard"class="nav-link active" aria-current="page">Dashboard</Link>
</li>

<li class="nav-item dropdown">

<Link to = './Features' class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
General Features
</Link>
<ul class="dropdown-menu">
<li><Link to= "./Calendar" class="dropdown-item">Calendar</Link></li>
<li><Link to= "./Browser" class="dropdown-item">Browser</Link></li>
<li><Link to= "./Contacts" class="dropdown-item">Contacts</Link></li>
<li><Link to= "./Message" class="dropdown-item">Message</Link></li>
<li><Link to= "./Calls" class="dropdown-item">Calls</Link></li>
<li><Link to= "./Location" class="dropdown-item">Location</Link></li>
<li><Link to= "./Screenrecord-Activities" class="dropdown-item">Screenrecord-Activities</Link></li>
<li><Link to= "./Audio" class="dropdown-item">Audio</Link></li>
<li><Link to= "./Photos" class="dropdown-item">Photos</Link></li>
<li><Link to = './Socialnetwork' class="dropdown-item">
Social Network Features
</Link></li>
<li><Link to = './Features' class="dropdown-item">
All Features
</Link></li>

</ul>


</li>

<li class="nav-item dropdown">
<Link to = './Socialnetwork' class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
Social Network Features
</Link>
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


