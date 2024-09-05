import React from 'react';
import '../components/Features.css';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import Socials2 from '../components/images/Socials2.jpeg';
import Footer from "../components/Footer";


function Facebook(){

  const navigate = useNavigate();
    return (
        <>
        <section className="hero" style={{ backgroundImage: `url(${Socials2})` }}>
      <div className="content">
        <h1 style = {{padding: "20px"}}>Facebook Monitor</h1>
        <p>Don't pass by if you need a Facebook spy app. With RedSpy you will be able to access everything they do on Facebook.</p>
        <ul class ="list-coil-hook-black pt-2">
          {" "}

<li>Have access to their Facebook page remotely.</li>

<li>Able to see their posts, profile, and liked comments.</li>

<li>Check their friends on Facebook.</li>

<li>Check who they are talking to on Facebook Messenger.</li>

<li>Use RedSpy on both Android and iOS devices.</li>


          
        </ul>
        <button type="button" className="btn btn-primary mb1 teal" onClick = {() =>{
navigate("/Signup");}} >Get Started</button>
      </div>
      
    </section>

    <section className="hero4" style={{ backgroundColor: "lightblue" }}>
      <div className="content4">
        
        <h1 style = {{padding: "20px", textAlign: "center", fontWeight: "600"}}>Powerful Mobile Tracker. Sign Up Free.</h1>


        <button style = {{
          position: "absolute",
          top: "70%",
          right: "50%",
          
        }}type="button" className="btn btn-primary mb1 teal" onClick = {() =>{
navigate("/Signup");}} >Get Started</button>
      </div>
      
    </section>
        <Footer/>
        </>
    )
}

export default Facebook;
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