import React from 'react';
//import {Link} from 'react-router-dom';
import calls2 from '../components/images/calls2.jpeg';
import  '../components/Home.css';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { BsFill1SquareFill } from "react-icons/bs";
import { Bs2SquareFill } from "react-icons/bs";
import { Bs3SquareFill } from "react-icons/bs";



function Calls() {
  const navigate = useNavigate();

  return (
    <>
    <section className="hero" style={{ backgroundImage: `url(${calls2})` }}>
      <div className="content">
        <h1 style = {{padding: "20px"}}>Call Tracker.</h1>
        <p>Redspy calls tracker is a great tool to spy on your targe's call logs. With this tracker at your disposal, you can consistently stay informed about whom the device owner communicates to. You will get all the information needed on incoming, missed, outgoing and deleted calls history.</p>
        <ul class ="list-coil-hook-black pt-2">
          {" "}

<li>View incoming, outgoing, missed, and deleted calls.</li>

<li>Monitor duration, state, timestamps, and caller details.</li>
<li>Track calls in real time.</li>
<li>Compatible with Android and iOS devices.</li>

<li>Works without rooting or jailbreaking.</li>


          
        </ul>
        <button type="button" className="btn btn-primary mb1 teal" onClick = {() =>{
navigate("/Signup");}} >Get Started</button>
      </div>
      
    </section>

    <section className="hero7" style={{ backgroundColor: "white" }}>
    <div className="content7">
      <Container id = "features">
        <h1> How to Track calls on Android</h1>
        <Cards>
      
        {" "}

        <Card 
        Icon = {Bs1CircleFill}
        title = {"Create an Account you will use."}
        disc = {"On the browser page of Redspy click on the get started button, enter your email address and your desired password to create the account."}/>
        <Card 
        Icon = {Bs2CircleFill}
        title = {"Set up RedSpy"}
        disc={"You will receive detailed instructions on how to set up the software on the target device. Complete each of the steps carefully as you can, once done click the Continue button to continue with the set up. Incase there's a step you have missed you can go back and rectify with ease."}/>

        <Card 
        Icon = {Bs3CircleFill}
        title = {"Start Monitoring"}
        disc = {"You can now access the account and track the calls of the target device.Follow the instructions on how to view the history,"}/>


      </Cards>
      </Container>
  
    </div>
  </section>

  <section className="hero7" style={{ backgroundColor: "lightblue" }}>
    <div className="content7">
      <Container id = "features">
        <h1> How to Track calls using an iPhone</h1>
        <Cards>
      
        {" "}

        <Card 
        Icon = {BsFill1SquareFill}
        title = {"Create an Account you will use on your IOS Device."}
        disc = {"On the browser page of Redspy click on the get started button, enter your email address and your desired password to create the account."}/>
        <Card 
        Icon = {Bs2SquareFill }
        title = {"Set up RedSpy"}
        disc={"When monitoring calls on an iPhone, you will need to connect Redspy to the device by providing the iCloud login details on the target device. Once you are done with inputting the email and password press continue to proceed to the last step."}/>

        <Card 
        Icon = {Bs3SquareFill}
        title = {"Start Monitoring"}
        disc = {"Access the calls section and easily view all the visited websites."}/>


      </Cards>
      </Container>
  
    </div>
  </section> 

  <section className="hero12" style={{ backgroundColor: "white" }}>
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

export default Calls;

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