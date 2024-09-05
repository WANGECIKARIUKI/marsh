import React from 'react';
//import {Link} from 'react-router-dom';
import socials3 from '../components/images/socials3.jpeg';
import { FaFirefox } from "react-icons/fa";
import  '../components/Home.css';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import { BsPhoneFlip } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { FaHourglassStart } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa";
import { FaHourglass } from "react-icons/fa";
import { TbSocial } from "react-icons/tb";
import { FaUserSecret } from "react-icons/fa";
import { TiCloudStorage } from "react-icons/ti";



function Socials() {
  const navigate = useNavigate();

  return (
    <>
    <section className="hero" style={{ backgroundImage: `url(${socials3})` }}>
      <div className="content">
        <h1 style = {{padding: "20px"}}>Social Media Spy App.</h1>
        <p>
          Get full access to your target's social media accounts. You will be able to see their interactions on all socials installed on their phones.
        </p>
        <ul class ="list-coil-hook-black pt-2">
          {" "}

<li>Track social media activities remotely and anonymously.</li>

<li>View posts, stories, comments, liked photos, who they follow and send direct messages to..</li>

<li>.Read comments on their socials.</li>

<li> See liked posts and read the comments they have written.</li>

<li>See saved, downloaded and bookmarked posts.</li>

<li>Ability to see posts and stories they have been targed on.</li>


          
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
        disc={"Install the app on the target device for android manually, enter iCloud credentials for iPhone. Then follow the instructions detailed on how to install the app."}/>

        <Card 
        Icon = {FaHourglass }
        title = {"Start Monitoring"}
        disc = {"Log in to your account and wait until devices are connected and the required information will start being sent. It takes a few minutes."}/>


      </Cards>
      </Container>
  
    </div>
  </section> 


    <section className="hero10" style={{ backgroundColor: "white" }}>
      <div className="content10">
        <Container id = "features">
          <h1> Why purchase Redspy Social Media's Tracker?</h1>
          <Cards>
        
          {" "}

          <Card 
          Icon = {TbSocial }
          title =
          {"Full Access"}
          disc = {"Monitor someone's social media accounts without limitations. You will be able to see their interactions on social media accounts such as WhatsApp, Facebook, Instagram, Snapchat and all dating sites they are on."}/>
          <Card 
          Icon = {BsPhoneFlip }
          title = {"Compatible with every device"}
          disc={"Our software works on every smartphone regardless of the operating  system."}/>

          <Card 
          Icon = {FaFirefox}
          title = {"Get updated Information"}
          disc = {"Our sofware offers real time and updated information on the device you are tracking. The updates take place every 2 to 3 minutes."}/>

          <Card 
          Icon = { FaUserSecret }
          title = {"Anonymity"}
          disc = {"The tracker installation does no leave any traces of who has installed it on the target's device anywhere. No one would know that you are the one who installed the Redspy App. This makes it easy for you to install the app and enjoy the tracking services offered."}/>

        <Card 
          Icon = {RiCustomerService2Line}
          title = {"Support at All Times"}
          disc = {"We have a 24/7 customer support agency, where your needs are met and problms resolved in the shortest time possible."}/>

        <Card 
          Icon = {TiCloudStorage}
          title = {"Online Storage"}
          disc = {"All tracked information is sent to a convenient online dashboard that syncronizes with the target device at certain intervals. These intervals are different for Android and iOS but you will always get the most-up-to-date tracking data."}/>

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

export default Socials;

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