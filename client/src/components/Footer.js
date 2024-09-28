// Footer.js
import React from 'react';
import './Footer.css'; // Link to your CSS file

const Footer = () => {
  return (
    <section className="footer">
      <hr />
      <h4>About Us</h4>
      <p>We offer the best and accurate services to our clients. The results are realtime.</p>
      <div className="icons">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-linkedin"></i>
      </div>
      <p>Made with <i className="fas fa-heart"></i> by <a href="index.html">Marshall Goodman Industries</a></p>
      <p>Copyright © 2024 <a href="index.html">RedSpy</a>. All Rights Reserved</p>
    </section>
  );
};

export default Footer;
