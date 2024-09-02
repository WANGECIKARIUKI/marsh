import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Calendar from './components/Calendar';
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
//import Card from '.components/Card';
import Dashboard from './components/Dashboard';




function App() {

 //const [contacts, setContacts] = useState('');
  //const addContact = (newContact => {
    //setContacts([...contacts, newContact])
  //})


  return (
    <div className="App">
      
      <Navbar />
      <div className="bg-slate-600 w-full h-screen"></div>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/Signup' element = {<Signup/>} />
        <Route path = '/Login' element = {<Login/>} />
        <Route path = '/Calendar' element = {<Calendar/>} />
        <Route path = '/Contacts' element = {<Contacts/>} />
        <Route path = "/Facebook" element = {<Facebook/>} />
        <Route path = "/Instagram" element = {<Instagram/>} />
        <Route path = "/Twitter" element = {<Twitter/>} />
        <Route path = "/Whatsapp" element = {<Whatsapp/>} />
        <Route path = "/Location" element = {<Location/>} />
        <Route path = "/Messages" element = {<Messages/>} />
        <Route path = "/Snapchat" element = {<Snapchat/>} />
        <Route path = "/Photos" element = {<Photos/>} />
        <Route path = "/Dashboard" element = {<Dashboard/>} />
        <Route path = "/Features" element = {<Features/>} />


      
      </Routes>



    </div>
  );
}

export default App;
