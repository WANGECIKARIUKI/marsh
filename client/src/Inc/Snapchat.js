import React from 'react';
//import {Link} from 'react-router-dom';
import image17 from '../components/images/image17.jpeg';
import  '../components/Home.css';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import { SiLetsencrypt } from "react-icons/si";
import { RiCustomerService2Line } from "react-icons/ri";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { MdOutlineInstallMobile } from "react-icons/md";
import { PiGlobeStandFill } from "react-icons/pi";
import { FcApproval } from "react-icons/fc";
import { TbCircleDashedNumber1 } from "react-icons/tb";
import { TbCircleDashedNumber2 } from "react-icons/tb";
import { TbCircleDashedNumber3 } from "react-icons/tb";


function Snapchat() {
  const navigate = useNavigate();

  return (
    <>
    <section className="hero" style={{ backgroundImage: `url(${image17})` }}>
      <div className="content">
        
        <h1 style = {{padding: "20px", textAlign: "center"}}>Snapchat Tracker.</h1>
        <p>Find out the advanced access to the person's Snapchat activity. All information from the snapchat app will be available for you in your account. Start monitoring with RedSpy in 3 simple steps.</p>
        <ul class ="list-coil-hook-black pt-2">
          {" "}

<li>Obtain full access to incoming and outgoing chats.</li>

<li>Privately monitor every activity that is taking place because of stealth Mode.</li>

<li>Access their streak activity.</li>

<li>Get access to old and deleted chats undetected.</li>

<li>Extract their shared and received media files, documents and links.</li>

<li>Know the people they are communicating with online.</li>


          
        </ul>
        <button type="button" className="btn btn-primary mb1 teal" onClick = {() =>{
navigate("/Signup");}} >Get Started</button>
      </div>
      
    </section>

    <section className="hero2" style={{ backgroundColor: "lightblue" }}>
    <div className="content2">
      <Container id = "features">
        <h1 style = {{textAlign: "center"}}> How to Install</h1>
        <Cards>
      
        {" "}

        <Card 
        Icon = {TbCircleDashedNumber1}
        title = {"Account Creation"}
        disc = {"Enter you Email address and a password you won't forget to create your account. Choose the subscription plan that best suites you, complete the order and proceed to step 2."}/>
        <Card 
        Icon = {TbCircleDashedNumber2}
        title = {"Installation"}
        disc={"Install the app on Android device manually, for iOS devices you will need their iCloud credentials to proceed. This process is not time consuming."}/>

        <Card 
        Icon = {TbCircleDashedNumber3}
        title = {"Start Monitoring"}
        disc = {"Visit your RedSpy account and check the detailed report from the target's device. RedSpy will arrange the results in an easy way for you to understand in the shortest time possible."}/>


      </Cards>
      </Container>
  
    </div>
  </section> 

    <section className="hero6" style={{ backgroundColor: "white" }}>
      <div className="content6">
        <Container id = "features">
          <h1> Why you should choose RedSpy</h1>
          <Cards>
        
          {" "}

          <Card 
          Icon = {MdOutlineInstallMobile}
          title =
          {"Fast and Easy Installation"}
          disc = {"Tracking is enabled immediately. You don't need to have some technical knowledge to complete the installation the instructions are listed down and it will only take a few minutes to set up the account and start tracking."}/>
          <Card 
          Icon = {PiGlobeStandFill }
          title = {"Real-time updates"}
          disc={"It will take you atmost 3 minutes to get an update on what you are currently tracking and get the report which is summarised in a way you will understand. The app gathers data regularly and no important information will be missed."}/>

          <Card 
          Icon = {FcApproval}
          title = {"Access to Alot of the Phone Applications"}
          disc = {"RedSpy is designed to access and track all applications installed on the target's device and it is compatible with both iOS and Android devices."}/>

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

export default Snapchat;

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