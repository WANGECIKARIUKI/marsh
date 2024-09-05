import React from 'react';
import './Features.css';
import {Link} from 'react-router-dom';
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaFirefoxBrowser } from "react-icons/fa6";
import { RiContactsBook3Fill } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";
import { FaMapLocation } from "react-icons/fa6";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { SiAudiobookshelf } from "react-icons/si";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { TiSocialAtCircular } from "react-icons/ti";
import { ImWhatsapp } from "react-icons/im";
import { FaSnapchat } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import Footer from "./Footer"

function Features(){
    return (
        <>
        <h1 style = {{color: "purple", padding: "10px"}}>General Features</h1>
        <div className = "row-container">

            
    
            <div className = "column">
            
            
            <Link to= "./Message"  class="dropdown-item">
            <span className ="span" style={{ color: "purple" }}><BiMessageRoundedDots /></span>
            <h1 style = {{color:"red", fontSize: "20px" }}> Text Message Monitor</h1>
            <p>You can be able to access all messages, <br/>
                sent and received, all attachments.<br/>
                This is all on invisible mode.</p></Link>
            </div>
                
            <div className = "column">
            <Link to= "./Browser" class="dropdown-item">
            <span className ="span" style={{ color: "purple" }}><FaFirefoxBrowser className = "browser" /></span>
            <h1 style = {{color:"red", fontSize: "20px" }}> Browser History Tracker</h1>
            <p> You can keep track of the browser history <br/> and know what they are searching.</p>
            </Link>
            </div>

            <div className = "column">
            <Link to= "./Contacts" class="dropdown-item">
            
            
            <span className ="span" style={{ color: "purple" }}><RiContactsBook3Fill /></span>
            <h1 style = {{color:"red", fontSize: "20px" }}> Contact Information Spy</h1>
            <p>Check the contact list of a device<br /> and the contact information.</p></Link>
            </div>

            <div className = "column">
            <Link to= "./Calls" class="dropdown-item">
            
            <span className ="span" style={{ color: "purple" }}><IoCallSharp /></span>
            <h1 style = {{color:"red", fontSize: "20px" }}> Calls Tracker</h1>
            <p>Track all incoming and outgoing calls, <br /> check the timestamp and call duration.</p></Link>
            </div>
            
            <div className = "column">
            <Link to= "./Location" class="dropdown-item">
            
            <span className ="span" style={{ color: "purple" }}><FaMapLocation /></span>
            <h1 style = {{color:"red", fontSize: "20px" }}> Location Tracker</h1>
            <p>Check the precise location of the device <br /> and the location history of every stop made.</p></Link>
            </div>

            <div className = "column">
            <Link to= "./Screenrecorder" class="dropdown-item">
            
            
            <span className ="span" style={{ color: "purple" }}><AiOutlineFundProjectionScreen  /></span>
            <h1 style = {{color:"red", fontSize: "20px" }}> Screen Recorder Spy</h1>
            <p>Access all the screen recordings of the device.</p></Link>
            </div>

            <div className = "column">
            <Link to= "./Audio" class="dropdown-item">
            
            <span className ="span" style={{ color: "purple" }}><SiAudiobookshelf /></span>
            <h1 style = {{color:"red", fontSize: "20px" }}> Audio Listener</h1>
            <p>Have access on all audio files on the device's phone.</p></Link>
            </div>

            <div className = "column">
            <Link to= "./Photos" class="dropdown-item">
            
            <span className ="span" style={{ color: "purple" }}><MdPhotoSizeSelectActual /></span>
            <h1 style = {{color:"red", fontSize: "20px" }}> Photos Spy</h1>
            <p>Have access to all the photos on the device<br/> either screenshot, camera photos, saved photos <br/>and deleted photos.</p></Link>
            </div>

            <div className = "column">
            <Link to = './Socialnetwork' class="dropdown-item">
            
            <span className ="span" style={{ color: "purple" }}><TiSocialAtCircular /></span>
            <h1 style = {{color:"red", fontSize: "20px" }}> Social Networks Spy</h1>
            <p>Access all the social meddia platforms and <br />check the activities.</p></Link>
            </div>

            <div className = "column">
            <Link to= "./Whatsapp" class="dropdown-item">
            
            <span className ="span" style={{ color: "purple" }}><ImWhatsapp /></span>
            <h1 style = {{color:"red", fontSize: "20px" }}> WhatsApp Spy</h1>
            <p>Access whatsapp messages, calls, and <br/>files on the device.</p></Link>
            </div>

            <div className = "column">
            <Link to= "./Snapchat" class="dropdown-item">
            
            <span className ="span" style={{ color: "purple" }}><FaSnapchat /></span>
            <h1 style = {{color:"red", fontSize: "20px" }}> Snapchat Spy</h1>
            <p>Access the interactions and <br /> activities taking place on snapchat.</p></Link>
            </div>

            <div className = "column">
            <Link to= "./Facebook" class="dropdown-item">
            
            <span className ="span" style={{ color: "purple" }}><BsFacebook /></span>
            <h1 style = {{color:"red", fontSize: "20px" }}>Facebook Spy</h1>
            <p>You can be able to access all messages, <br /> sent and received, all attachments. <br />This is all on invisible mode.</p></Link>
            </div>

            <div className = "column">
            <Link to= "./Instagram" class="dropdown-item">
            
            
            <span className ="span" style={{ color: "purple" }}><IoLogoInstagram /></span>
            <h1 style = {{color:"red", fontSize: "20px" }}> Instagram Spy</h1>
            <p>Access all interactions and <br /> activities that are taking place on the device.</p></Link>
            </div>

            <div className = "column">
            <Link to= "./Twitter" class="dropdown-item">
            
            
            <span className ="span" style={{ color: "purple" }}><BsTwitterX /></span>
            <h1 style = {{color:"red", fontSize: "20px" }}> Twitter Spy</h1>
            <p>Check on the retweets, comments and direct messages.</p></Link>
            </div>
                     
        </div>
        <Footer />
        </>
    )
}

export default Features;