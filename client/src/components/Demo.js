import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
//import ButtonWithPopup from './ButtonWithPopUp';

function Demo() {
  const [isDemoActive, setIsDemoActive] = useState(false);
  const navigate = useNavigate();
  const isComplete = true;

  if (isComplete){
    navigate('/Pricing');
  } else {
    navigate('/')
  }

  const demoButtonHandler = () => {
    alert(
      "Please note that the live demo provides real-time data from multiple active devices, including your own, Only an activated account can add or disconnect devices for monitoring at any time."
      )
    setIsDemoActive(!isDemoActive);
    // Optionally start a timer here if you want to limit the demo's duration
  };

  return (
    <div>
      {isDemoActive ? (
        <div>
          {/* Demo content here */}
          <a href = "http://localhost:3000/Contacts">Contacts</a>
          <Link to = "./" class="nav-link active" aria-current="page">Home</Link>
          <Link to= "./Contacts" class="dropdown-item">Contacts</Link>
          
        </div>
      ) : (
        <button  onClick={demoButtonHandler}>Start Demo</button>
      )}

    </div>
  );
}

export default Demo;