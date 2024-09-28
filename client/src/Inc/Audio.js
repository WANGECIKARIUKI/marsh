import React from 'react';
//import {Link} from 'react-router-dom';
import screen1 from '../components/images/screen1.jpeg';
import { FaFirefox } from "react-icons/fa";
import  '../components/Home.css';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import { MdOutlineStopScreenShare } from "react-icons/md";
import { BsPhoneFlip } from "react-icons/bs";
import { SiLetsencrypt } from "react-icons/si";
import { RiCustomerService2Line } from "react-icons/ri";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { MdPriceCheck } from "react-icons/md";
import { FaHourglassStart } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa";
import { FaHourglass } from "react-icons/fa";



function Audio() {
  const navigate = useNavigate();

  return (
    <>
    <section className="hero" style={{ backgroundImage: `url(${screen1})` }}>
      <div className="content">
        <h1 style = {{padding: "20px"}}>Audio Tracker.</h1>
        <p>
          Redspy presents the modern feature enabling access to audio files of the target device you are spying on. Benefits of gps location tracker are listed below.
        </p>
        <ul class ="list-coil-hook-black pt-2">
          {" "}

<li>Get the audio records of the target device in real time.</li>

<li>Get detailed records information including the deleted ones remotely.</li>

<li>Know the information on the audio files.</li>

<li>Parents will know the kind of information being recorded by their children at all times and there will be no secrets.</li>

<li>Affordable packages at Redspy.</li>


          
        </ul>
        <button type="button" className="btn btn-primary mb1 teal" onClick = {() =>{
navigate("/Signup");}} >Get Started</button>
      </div>
      
    </section>

    <section className="hero2" style={{ backgroundColor: "lightblue" }}>
    <div className="content2">
      <Container id = "features">
        <h1> How to Install</h1>
        <Cards>
      
        {" "}

        <Card 
        Icon = {FaHourglassStart }
        title = {"Account Creation"}
        disc = {"Enter you Email address and a password you won't forget to create your account. Then Select the subscription plan that will be the best for your needs. Complete the order and receive further instructions."}/>
        <Card 
        Icon = {FaHourglassHalf}
        title = {"App Installation"}
        disc={"Install the app on the target device for android, enter iCloud credentials for iPhone. Then follow the instructions detailed on how to install the app."}/>

        <Card 
        Icon = {FaHourglass }
        title = {"Start Monitoring"}
        disc = {"Log in to your account and wait until devices are connected and the required information starts to be sent. It takes only a few minutes."}/>


      </Cards>
      </Container>
  
    </div>
  </section> 


    <section className="hero6" style={{ backgroundColor: "white" }}>
      <div className="content6">
        <Container id = "features">
          <h1> Why purchase Redspy Audio Tracker</h1>
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

        <Card
          Icon = {MdPriceCheck}
          title = {"Friendly Prices and Discounts"}
          disc = {"We have packages that are pocket friendly and affordable. We also offer discounts on our packages."}/>




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

export default Audio;

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