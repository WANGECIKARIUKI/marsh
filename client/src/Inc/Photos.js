import React from 'react';
//import {Link} from 'react-router-dom';
import photos3 from '../components/images/photos3.jpeg';
import  '../components/Home.css';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import { FcAndroidOs } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { IoIosFlash } from "react-icons/io";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { LuListRestart } from "react-icons/lu";
import { MdFolderDelete } from "react-icons/md";


function Photos() {
  const navigate = useNavigate();

  return (
    <>
    <section className="hero" style={{ backgroundImage: `url(${photos3})` }}>
      <div className="content">
        <h1 style = {{padding: "20px"}}>Photos Spy.</h1>
        <p>Check how you can spy on photos and videos. All pictures and videos saved in the gallery will be available for viewing on your dashboard. Start tracking photos data with Redspy now!</p>
        <ul class ="list-coil-hook-black pt-2">
          {" "}

<li>Gain full access to a person's gallery.</li>

<li>Check saved and deleted photos and videos.</li>

<li>Get any visual data received in any messenger app.</li>

<li>Compatible with both iPhones and Android devices.</li>

<li>Affordable plans in place.</li>


          
        </ul>
        <button type="button" className="btn btn-primary mb1 teal" onClick = {() =>{
navigate("/Signup");}} >Get Started</button>
      </div>
      
    </section>

    <section className="hero2" style={{ backgroundColor: "lightblue" }}>
    <div className="content2">
      <Container id = "features">
        <h1> Start Photos Monitoring in 3 steps</h1>
        <Cards>
      
        {" "}

        <Card 
        Icon = {Bs1CircleFill}
        title = {"Account Creation"}
        disc = {"Enter you Email address and a password you won't forget to create your account. Choose a suitable plan for your needs and then proceed to installation."}/>
        <Card 
        Icon = {Bs2CircleFill}
        title = {"Installation"}
        disc= {"For android devices you will need to install Redspy manually. For iPhones you will login to your target's icloud using your phone and follow the steps presented on the screen for successful installation."}/>

        <Card 
        Icon = {Bs3CircleFill}
        title = {"Start Monitoring"}
        disc = {"You will login to your account once step one and two are successfully done and check the dashboard to see all the information you need."}/>


      </Cards>
      </Container>
      <button type="button" className="btn btn-primary mb1 teal" onClick = {() =>{
navigate("/Signup");}} >Get Started</button>
  
    </div>
  </section> 

  <section className="hero8" style={{ backgroundColor: "white" }}>
    <div className="content8">
      <Container id = "features">
        <h1>Why Track One's Visual Media with RedSpy?</h1>
        <Cards>
      
        {" "}

        <Card 
        Icon = {FcAndroidOs}
        title = {"Android Tracking"}
        disc = {"Comptible with all android phones, easy install and registration process, totally hidden, protected data and very confidential."}/>
        <Card 
        Icon = {BsApple}
        title = {"Iphone tracking"}
        disc={"Compatible with all Iphones regardless of the IoS version, easy install, icloud friendly, encrypted data, best packages you can get."}/>


    <Card 
        Icon = {IoIosFlash }
        title = {"Fast Updates"}
        disc = {"You will receive on time data from the app. The maximum wait period is 3 minutes and you won't miss any important media from your target's device."} />

    <Card 
        Icon = {LiaMoneyCheckAltSolid }
        title = {"Affordable Payment Plans"}
        disc = {"The services we offer are very affordable, you will get the full plans at very client friendly rates."} />
    <Card 
        Icon = {LuListRestart}
        title = {"Start Immediately"}
        disc = {"No delays, once you have installed the app you will be able to access the target's photos."} />
      <Card 
        Icon = {MdFolderDelete }
        title = {"Access to Deleted Media"}
        disc ={" You will have access to all deleted media. Deleted does not mean lost when using RedSpy."} />



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

export default Photos;

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