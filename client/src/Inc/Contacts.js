import React from 'react';
import '../components/Features.css';
import styled from 'styled-components';
import Footer from "../components/Footer"
import {useNavigate} from "react-router-dom";
import contact3 from '../components/images/contact3.jpeg';


function Contacts(){

  const navigate = useNavigate();
    return (
        <>
        <section className="hero" style={{ backgroundImage: `url(${contact3})` }}>
      <div className="content">
        <h1 style = {{padding: "20px"}}>Contacts Tracker</h1>
        <ul class ="list-coil-hook-black pt-2">
          {" "}

<li style = {{color: "black"}}>Have access to their phonebook remotely.</li>

<li style = {{color: "black"}}>Ability to see all the contact details i.e Phone pictures, email address and home address if listed.</li>

<li style = {{color: "black"}}>View both social media contacts such as WhatsApp contacts.</li>

<li style = {{color: "black"}}>For parents it's easy to spot strange contacts.</li>


          
        </ul>
        <button type="button" className="btn btn-primary mb1 teal" onClick = {() =>{
navigate("/Signup");}} >Get Started</button>
      </div>
      
    </section>

        <section className="hero" style={{ backgroundImage: `url(${contact3})` }}>
      <div className="content">
        <h1 style = {{padding: "20px"}}>Benefits of Contact spy</h1>
        <ul class ="list-coil-hook-black pt-2">
          {" "}

<p style = {{color: "black"}}>Real time access to new contacts saved.</p>

<p style = {{color: "black"}}>Parental Control: identify and block unkown contacts on your child's phone.</p>

<p style = {{color: "black"}}>View both social media contacts such as WhatsApp contacts.</p>

<p style = {{color: "black"}}>Get automatic updates when a new contact is added.</p>


          
        </ul>
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
        <Footer/>
        </>
    )
}

export default Contacts;
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