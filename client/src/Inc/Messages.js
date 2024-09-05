import React from 'react';
//import {Link} from 'react-router-dom';
import message4 from '../components/images/message4.jpeg';
import { FaFirefox } from "react-icons/fa";
import  '../components/Home.css';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import { MdOutlineStopScreenShare } from "react-icons/md";
import { BsPhoneFlip } from "react-icons/bs";
import { SiLetsencrypt } from "react-icons/si";
import { RiCustomerService2Line } from "react-icons/ri";
import Footer from "../components/Footer";
import Card from "../components/Card";



function Messages() {
  const navigate = useNavigate();

  return (
    <>
    <section className="hero" style={{ backgroundImage: `url(${message4})` }}>
      <div className="content">
        <h1 style = {{padding: "20px"}}>Text Messages Spy.</h1>
        <ul class ="list-coil-hook-black pt-2">
          {" "}

<li>Read all Messages, both sent received and deleted.</li>

<li>Access all file attachments, photos and videos.</li>

<li>Track messages without rooting or jailbreaking the target device.</li>

<li>Check messages remotely and in invisible mode.</li>

<li>Ability to see the timestamp of all messages.</li>


          
        </ul>
        <button type="button" className="btn btn-primary mb1 teal" onClick = {() =>{
navigate("/Signup");}} >Get Started</button>
      </div>
      
    </section>

    <section className="hero2" style={{ backgroundColor: "lightblue" }}>
    <div className="content2">
      <Container id = "features">
        <h1>How to Install the App</h1>
        <Cards>
      
        {" "}

        <Card 
        Icon = {Bs1CircleFill}
        title = {"Register"}
        disc = {"Create an account and choose a preferred subscription plan. Complete the payment process and check your email for further instructions."}/>
        <Card 
        Icon = {Bs2CircleFill}
        title = {"Install"}
        disc={"Follow the instructions sent to install the Message online tracker on the target device. The process is fast and easy."}/>

        <Card 
        Icon = {Bs3CircleFill}
        title = {"Start Tracking"}
        disc = {"Log into your Redspy account, and you will see a dashboard with all the app’s tracking features. Navigate to Messages and get the detailed reports from the person’s device."}/>


      </Cards>
      </Container>
  
    </div>
  </section> 


    <section className="hero6" style={{ backgroundColor: "white" }}>
      <div className="content6">
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
    
      </div>

      
    </section>
    <section className="hero12" style={{ backgroundColor: "lightblue" }}>
      <div className="content12">
        
        <h1 style = {{padding: "20px", textAlign: "center", fontWeight: "600"}}>Powerful Mobile Tracker. Sign Up Free.</h1>


        <button style = {{
          position: "absolute",
          top: "70%",
          right: "50%",
          
        }}type="button" className="btn btn-primary mb1 teal" onClick = {() =>{
navigate("/Signup");}} >Get Started</button>
      </div>
      
    </section>
    <Footer />  
</>
  );
}

export default Messages;

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
    color: red;
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