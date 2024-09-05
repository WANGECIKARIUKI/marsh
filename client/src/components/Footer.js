import React from 'react';
import './Footer.css'
import {Link} from 'react-router-dom';

function Footer(){
    return (
        <div className = "footer">
            <div className = "sb-footer section-padding">
                <div className = "sb-footer-links">
                    <div className = "sb-footer-links_div">
                        <h4>Top Features</h4>
                        <Link to = "./Message">
                        <p>Messages</p></Link>
                        <Link to = "./Location">
                        <p>Gps Location</p></Link>
                        <Link to = "./Contacts">
                        <p>Contacts</p></Link>
                        <Link to = "./Features">
                        <p>All Features</p></Link>
                    </div>
                    <div className = "sb-footer-links_div">
                        <h4>Reosurces</h4>
                        <a href = "/resources">
                          <p>FAQs</p></a>
                        <a href = "/resources">
                          <p>Phone Spy</p></a>
                        <a href = "/resources">
                          <p>Spy App Reviews</p></a>
                        <a href = "/resources">
                          <p>Phone Monitor</p></a>
                        <a href = "/resources">
                          <p>Solutions</p></a>
                        <a href = "/resources">
                          <p>Parental Control</p></a>
                    </div>
                    <div className = "sb-footer-links_div">
                        <h4>Partners</h4>
                        <a href = "/employer">
                        <p>Marshall Goodman Technologies</p></a>
                    </div>
                    <div className= "sb-footer-links_div">
                        <h4>Company</h4>
                        <a href = "/about">
                        <p>About Us</p></a>
                        <a href = "/contact">
                        <p>Contact Us</p></a>
                        <a href = "/contact">
                        <p>support@redspy.com</p></a>
                    </div>
                </div>
            </div>
            <hr></hr>

            <div className = "sb-footer-below">
                <div className = "sb-footer-copyright">
                    <p>
                        @{new Date().getFullYear} RedSpy. All rights reserved.
                    </p>
                </div>
                <div className = "sb-footer-below-links">
                    <a href = "/terms"><p>Terms & Conditions</p></a>
                    <a href = "/privacy"><p>Privacy</p></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;