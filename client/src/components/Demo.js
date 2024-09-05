import React, { useState } from 'react';
import {Link} from "react-router-dom"

function Demo() {
  const [isDemoActive, setIsDemoActive] = useState(false);

  const demoButtonHandler = () => {
    setIsDemoActive(!isDemoActive);
    // Optionally start a timer here if you want to limit the demo's duration
  };

  return (
    <div>
      {isDemoActive ? (
        <div>
          {/* Demo content here */}
          <Link to = "./" class="nav-link active" aria-current="page">Home</Link>
          <Link to= "./Contacts" class="dropdown-item">Contacts</Link>
          
        </div>
      ) : (
        <button onClick={demoButtonHandler}>Start Demo</button>
      )}
    </div>
  );
}

export default Demo;