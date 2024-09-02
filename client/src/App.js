import './App.css';
import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Calendar from './components/Calendar';
import Login from './components/Login';
import Features from './components/Features';
//import Message from './components/Message';
//import Contacts from './components/Contacts';
import Dashboard from './components/Dashboard';
//import ContactList from './components/ContactList';
//import ContactForm from './components/ContactForm';




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
        <Route path = '/Dashboard' element = {<Dashboard/>} />
        <Route path = "/Features" element = {<Features/>} />

      
      </Routes>



    </div>
  );
}

export default App;
