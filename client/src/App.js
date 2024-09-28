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
//import Header from './components/Header';
import Pricing from './components/Pricing';
import Admin from './components/Admin';
import Google from './components/Google';
import Payment from './components/Payment';
import Dashboard from "./components/Dashboard";
import ButtonWithPopUp from "./components/ButtonWithPopUp";
import WhatsappLogs from "./Inc/WhatsappLogs";
import SnapchatLogs from "./Inc/SnapchatLogs";
import InstagramLogs from "./Inc/InstagramLogs";
import Chats from "./Inc/Chats";
import ScreenrecordingLogs from "./Inc/ScreenrecordingLogs";
import TwitterLogs from "./Inc/TwitterLogs";
import BrowserLogs from "./Inc/BrowserLogs";
import PhotosLogs from "./Inc/PhotosLogs";
import Events from "./Inc/Events";
import MonitoringApp from './components/MonitoringApp';
import WhyChooseSlider from "./components/WhyChooseSlider";

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
        <Route path = "/Pricing" element = {<Pricing />} />
        <Route path = '/Login' element = {<Login/>} />
        <Route path = "/Admin" element = {<Admin/>} />
        <Route path = "/Google" element = {<Google/>} />
        <Route path = "/Payment" element = {<Payment/>} />
        <Route path = "/ButtonWithPopup" element = {<ButtonWithPopUp/>} />
        <Route path = "/MonitoringApp" element = {< MonitoringApp />} />
        <Route path = "/CallLogs" element = {<CallLogs/>} />
        <Route path = "/SMSLogs" element = {<SMSLogs/>} />
        <Route path = "/LocationLogs" element = {<LocationLogs/>} />
        <Route path = "/CameraCapture" element = {<CameraCapture/>} />
        <Route path = "/AudioRecordings" element = {<AudioRecordings/>} />
        <Route path = "/ContactLogs" element = {<ContactLogs/>} />
        <Route path = "/Demo" element = {<Demo/>} />
        <Route path = "/WhatsappLogs" element = {<WhatsappLogs/>} />
        <Route path = "/SnapchatLogs" element = {<SnapchatLogs/>} />
        <Route path = "/InstagramLogs" element = {<InstagramLogs/>} />
        <Route path = "/TwitterLogs" element = {<TwitterLogs/>} />
        <Route path = "/ScreenrecordingLogs" element = {<ScreenrecordingLogs/>} />
        <Route path = "/BrowserLogs" element = {<BrowserLogs/>} />
        <Route path = "/chats/:id" element = {<Chats/>} />
        <Route path = "/PhotosLogs" element = {<PhotosLogs/>} />
        <Route path = "/Dashboard" element = {<Dashboard/>} />
        <Route path = "/Whychoose" element = {<WhyChooseSlider/>} />
        <Route path = "/Events" element = {<Events/>} />

        <Route element = {<ProtectedRoutes/>}>
            
            

            </Route>
      
      </Routes>
      
    </div>
  );
}

export default App;