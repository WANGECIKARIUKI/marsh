
import React from 'react';
import Button from './Button';
//import {Link} from 'react-router-dom';
import image17 from './images/image17.jpeg';
import { FaFirefox } from "react-icons/fa";
import  './Home.css';
import styled from 'styled-components';
import Card from './Card.js';
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosText } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import { MdOutlineSupport } from "react-icons/md";
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import { MdOutlineStopScreenShare } from "react-icons/md";
import { BsPhoneFlip } from "react-icons/bs";
import { SiLetsencrypt } from "react-icons/si";
import { RiCustomerService2Line } from "react-icons/ri";

function Home() {
  const navigate = useNavigate();

  return (
    <>
    <section className="hero" style={{ backgroundImage: `url(${image17})` }}>
      <div className="content">
        <h1>Your Security Simplified.</h1>
        <ul class ="list-coil-hook-black pt-2">
          {" "}

<li>Real-time alerts: Receive instant notifications for any suspicious activity.</li>

<li>HD video surveillance: Monitor your property from anywhere with crystal-clear video.</li>

<li>Smart home integration: Seamlessly connect your security system to other smart devices.</li>

<li>Customizable settings: Tailor your security plan to your specific needs.</li>

<li>Professional monitoring: 24/7 surveillance by trained security experts.</li>

<li>Experience the future of home and business security.</li>


          
        </ul>
        <button type="button" className="btn btn-primary mb1 teal" onClick = {() =>{
navigate("/Signup");}} >Get Started</button>
      </div>
      
    </section>

    <section className="hero2" style={{ backgroundColor: "lightblue" }}>
    <div className="content2">
      <Container id = "features">
        <h1> Start Phone Monitoring in 3 steps</h1>
        <Cards>
      
        {" "}

        <Card 
        Icon = {Bs1CircleFill}
        title = {"Account Creation"}
        disc = {"Enter you Email address and a password you won't forget to create your account."}/>
        <Card 
        Icon = {Bs2CircleFill}
        title = {"Pick your plan"}
        disc={"We have plans suitable for everyone's need, you will select a plan that best suites your needs."}/>

        <Card 
        Icon = {Bs3CircleFill}
        title = {"Start Monitoring"}
        disc = {"Upon registering and payment you can start tracking your target device's data."}/>


      </Cards>
      </Container>
      <button type="button" className="btn btn-primary mb1 teal" onClick = {() =>{
navigate("/Signup");}} >Get Started</button>
  
    </div>

    
  </section> 

    <section className="hero" style={{ backgroundColor: "white" }}>
      <div className="content">
        <h1></h1>
        <p>
          {" "}
          Hello World!
        </p>
        <button type="button" className="btn btn-primary mb1 teal" onClick = {() =>{
navigate("/Signup");}} >Get Started</button>

      </div>

      
    </section> 

    <section className="hero1" style={{ backgroundColor: "lightblue" }}>
      <div className="content1">
        <Container id = "features">
          <h1>Monitor activity on all Devices.</h1>
          <Cards>
        
          {" "}

          <Card 
          Icon = {IoLogoWhatsapp}
          title = {"WhatsApp Tracking"}
          disc = {"Monitor all WhatsApp chats and contacts. View and download all Photos, video, documents and voice calls."}/>
          <Card 
          Icon = {IoIosText}
          title = {"Text Messages Tracker"}
          disc = {"Read all sent, received and deleted messages. View all images, videos and files."}/>

          <Card 
          Icon = {FaInstagram}
          title = {"Instagram Spy"}
          disc = {"Monitor all social media activities."}/>

          <Card 
          Icon = { FaLocationDot}
          title = {"GPS Location Tracker"}
          disc = {"Track the current loaction of the device and also access the devices location history."}/>

        <Card 
          Icon = {IoMdPhotos}
          title = {"Photos & Videos Viewer"}
          disc = {"View all received, saved and shared media files."}/>

        <Card 
          Icon = {IoCallSharp}
          title = {"Phone Calls Tracker"}
          disc = {"Access all incoming and outgoing calls with the contact info of the caller, call duration and timestamp."}/>



        </Cards>
        </Container>
        <button type="button" className="btn btn-primary mb1 teal" onClick = {() =>{
navigate("/Signup");}} >Get Started</button>
    
      </div>

      
    </section>

    <section className="hero4" style={{ backgroundColor: "white" }}>
      <div className="content4">
        <Container id = "features">
          <h1> Why Choose Us?</h1>
          <Cards>
        
          {" "}

          <Card 
          Icon = {MdOutlineStopScreenShare}
          title =
          {"Undetectable Tracking"}
          disc = {"Monitor data from any device without the owner being aware. Our software operates in a hidden mode, leaving no visible signs of its presence."}/>
          <Card 
          Icon = {BsPhoneFlip }
          title = {"Compatible with every device"}
          disc={"Our software works on every smartphone regardless of the operating  system."}/>

          <Card 
          Icon = {FaFirefox}
          title = {"Get updated Information"}
          disc = {"Our sofware offers real time and updated information on the device you are tracking. The updates take place every 2 to 3 minutes."}/>

          <Card 
          Icon = { SiLetsencrypt }
          title = {"Highly Encrypted"}
          disc = {"Our software employs advanced system encryption when transfering data and only you can access it."}/>

        <Card 
          Icon = {RiCustomerService2Line}
          title = {"Support at All Times"}
          disc = {"We have a 24/7 customer support agency, where your needs are met and problms resolved in the shortest time possible."}/>



        </Cards>
        </Container>
        <button type="button" className="btn btn-primary mb1 teal" onClick = {() =>{
navigate("/Signup");}} >Get Started</button>
    
      </div>

      
    </section>  
</>
  );
}

export default Home;

const Container = styled.div`
width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
    font-weight: bolder;
    color: coral;
    font-size: 3rem;
  }
    h2 {
    padding-top: 1rem;
    font-weight: 700;
    color: purple;
  }`;


const Cards = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
margin-top: 4rem;
gap: 1rem; 
`;