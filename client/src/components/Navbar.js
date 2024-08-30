import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { IoLogoBuffer } from "react-icons/io5";
import { TbLetterX } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar(){

    const [click, setClick] = useState(false);
   
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>

        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                MARSHWARE <IoLogoBuffer className = "logo-icon"/>
                </Link>
                <div className = 'Menu-icon'  onClick = {handleClick}>
                    {click ? <GiHamburgerMenu /> : <TbLetterX  />
                    }
                </div>

                <ul className ={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className = "nav-item">
                        <Link to = './' className = 'nav-links' onClick = {closeMobileMenu}>
                        Home
                        </Link>
                    </li>
                    <li className = "nav-item">
                        <Link to = './dashboard' className = 'nav-links' onClick = {closeMobileMenu}>
                        Dashboard
                        </Link>
                    </li>
                    <li className = "nav-item">
                        <Link to = '.features/' className = 'nav-links' onClick = {closeMobileMenu}>
                        Features
                        </Link>
                    </li>
                    <li className = "nav-item">
                        <Link to = './Signup' className = 'nav-links' onClick = {closeMobileMenu}>
                        Signup
                        </Link>
                    </li>
                    <li className = "nav-item">
                        <Link to = './Login' className = 'nav-links' onClick = {closeMobileMenu}>
                        Login
                        </Link>
                    </li>
                    <li className = "nav-item">
                        <Link to = '.social-networks/' className = 'nav-links' onClick = {closeMobileMenu}>
                        Social networks
                        </Link>
                    </li>
                    <li className = "nav-item">
                        <Link to = './calendar' className = 'nav-links' onClick = {closeMobileMenu}>
                        Calendar
                        </Link>
                    </li>
                    <li className = "nav-item">
                        <Link to = './Location' className = 'nav-links' onClick = {closeMobileMenu}>
                        Location
                        </Link>
                    </li>
                </ul>




            </div>
        </nav>
        
        
        
        </>
    )
}

export default Navbar;