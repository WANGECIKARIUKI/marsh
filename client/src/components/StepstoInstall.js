import React from 'react';
import './StepstoInstall.css'; // Link to the CSS file

const StepsToInstall = () => {
  return (
    <div className="install-steps-section">
      <h2 style={{ color: 'white' }}>Easy Installation</h2>
      <div className="install-steps-container">
        {/* Step 1 */}
        <div className="install-step-card">
          <span role="img" aria-label="Download" className="install-step-icon">⬇️</span>
          <h3 style={{ color: 'lightblue' , fontSize: '1.4rem' }}>Register</h3>
          <p>Choose your subscription plan. Complete the purchase and receive the email with further instructions..</p>
        </div>

        {/* Arrow */}
        <span role="img" aria-label="Arrow" className="install-arrow">➡️</span>

        {/* Step 2 */}
        <div className="install-step-card">
          <span role="img" aria-label="Install" className="install-step-icon">📲</span>
          <h3 style={{ color: 'lightblue' , fontSize: '1.4rem' }}>Set Up</h3>
          <p>Install redSpy on a target Android device or provide iCloud credentials for a target iOS device in your user account.</p>
        </div>

        {/* Arrow */}
        <span role="img" aria-label="Arrow" className="install-arrow">➡️</span>

        {/* Step 3 */}
        <div className="install-step-card">
          <span role="img" aria-label="Configure" className="install-step-icon">⚙️</span>
          <h3 style={{ color: 'lightblue', fontSize: '1.4rem' }}>Start Monitoring</h3>
          <p>Go to your account and wait until devices are linked and the data starts sending.</p>
        </div>
      </div>
    </div>
  );
};

export default StepsToInstall;
