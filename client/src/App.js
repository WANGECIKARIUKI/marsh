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
import ClientDashboard from './ClientDashboard';
//import AdminDashboard from './components/AdminDashboard';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Admin from './components/Admin';
import Google from './components/Google';
import Payment from './components/Payment';
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import  Team from "./scenes/team";
import  Invoices from "./scenes/invoices";
import  Contact from "./scenes/contacts";
import  Bar from "./scenes/bar";
import  Form from "./scenes/form";
import  Line from "./scenes/line";
import  Pie from "./scenes/pie";
import  FAQ from "./scenes/faq";
import  Geography from "./scenes/Geography";
import  { CssBaseline, ThemeProvider } from "@mui/material";
import  { ColorModeContext, useMode } from "./theme";
import  Calendar from "./scenes/calendar";

//import Footer from './Inc/Footer';
 //import "./App.scss"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom";







function App() {
   const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);


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
        <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
       
    

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