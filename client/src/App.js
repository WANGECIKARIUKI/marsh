import './App.css';
import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Features from './components/Features';
import Contacts from './Inc/Contacts';
import Facebook from './Inc/Facebook';
import Instagram from './Inc/Instagram';
import Twitter from './Inc/Twitter';
import Whatsapp from './Inc/Whatsapp';
import Location from './Inc/Location';
import Messages from './Inc/Messages';
import Snapchat from './Inc/Snapchat';
import Photos from './Inc/Photos';
import Browser from './Inc/Browser';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Calls from './Inc/Calls';
import Screenrecorder from './Inc/Screenrecorder';
import Audio from './Inc/Audio';
import Socials from './Inc/Socials';
import Demo from './components/Demo';
import ProtectedRoutes from './Inc/ProtectedRoutes';
import CallLogs from './Inc/CallLogs';
import SMSLogs from './Inc/SMSLogs';
import LocationLogs from './Inc/LocationLogs';
import CameraCapture from './Inc/CameraCapture';
import AudioRecordings from './Inc/AudioRecordings';
import ContactLogs from './Inc/ContactLogs';
import ClientDashboard from './ClientDashboard';
//import AdminDashboard from './components/AdminDashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Admin from './components/Admin';
import Google from './components/Google';
import Payment from './components/Payment';
//import Footer from './Inc/Footer';
//import "./App.scss";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";







function App() {

  return (
    <div className="App">
      
      <Navbar />
      <div className="bg-slate-600 w-full h-screen"></div>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/Signup' element = {<Signup/>} />
        <Route path = '/Contacts' element = {<Contacts/>} />
        <Route path = "/Facebook" element = {<Facebook/>} />
        <Route path = "/Instagram" element = {<Instagram/>} />
        <Route path = "/Twitter" element = {<Twitter/>} />
        <Route path = "/Whatsapp" element = {<Whatsapp/>} />
        <Route path = "/Location" element = {<Location/>} />
        <Route path = "/Messages" element = {<Messages/>} />
        <Route path = "/Snapchat" element = {<Snapchat/>} />
        <Route path = "/Photos" element = {<Photos/>} />
        <Route path = "/Features" element = {<Features/>} />
        <Route path = "/Browser" element = {<Browser/>} />
        <Route path = "/Footer" element = {<Footer/>} />
        <Route path = "/Calls" element = {<Calls/>} />
        <Route path = "/Screenrecorder" element = {<Screenrecorder/>} />
        <Route path = "/Audio" element = {<Audio/>} />
        <Route path = "/Socials" element = {<Socials/>} />
        <Route path = "/ClientDashboard" element = {<ClientDashboard/>} />
        <Route path = "/dashboard" element = {<Dashboard/>} />
        <Route path = "/Sidebar" element = {<Sidebar/>}/>
        <Route path = "/Header" element = {<Header/>}/>
        <Route path = "/Pricing" element = {<Pricing />} />
        <Route path = '/Login' element = {<Login/>} />
        <Route path = "/Admin" element = {<Admin/>} />
        <Route path = "/Google" element = {<Google/>} />
        <Route path = "/Payment" element = {<Payment/>} />

        <Route element = {<ProtectedRoutes/>}>
            
            <Route path = "/CallLogs" element = {<CallLogs/>} />
            <Route path = "/SMSLogs" element = {<SMSLogs/>} />
            <Route path = "/LocationLogs" element = {<LocationLogs/>} />
            <Route path = "/CameraCapture" element = {<CameraCapture/>} />
            <Route path = "/AudioRecordings" element = {<AudioRecordings/>} />
            <Route path = "/ContactLogs" element = {<ContactLogs/>} />
            <Route path = "/Demo" element = {<Demo/>} />
            
           
            
            
        </Route>

        
      
      </Routes>


    </div>
  );
}

export default App;