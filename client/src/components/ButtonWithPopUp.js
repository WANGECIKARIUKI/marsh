import React, {useRef, useState }from "react";

function ButtonWithPopup() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const popupRef = useRef(null);
  
    const handleMouseEnter = () => {
      setIsPopupVisible(true);
    };
  
    const handleMouseLeave = () => {
      setIsPopupVisible(false);
    };
  
    return (
      <div>
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Hover Me
        </button>
        {isPopupVisible && (
          <div
            ref={popupRef}
            style={{
              position: 'absolute',
              top: popupRef.current.offsetTop + 20,
              left: popupRef.current.offsetLeft,
              backgroundColor: 'white',
              padding: '10px',
              border: '1px solid black',
              zIndex: 1000,
            }}
          >
            <p>Please note that the live demo provides real-time data from multiple active devices, including your own. </p>
            <p>Only an activated account can add or disconnect devices for monitoring at any time.</p>
          </div>
        )}
      </div>
    );
  }

  export default ButtonWithPopup;