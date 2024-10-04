// src/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>CCS KHANA HUB</h2>
          <p><b>@2025 SCRIET Technologies Pvt. Ltd </b></p>
          <div>
            
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100028480991621" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://x.com/Sarvjeet_Singh2?t=voYg4S_nlbYcCPdP5skPUw&s=08" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/sarvjeet_singh2/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/sarvjeet-singh-113a36267/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
              
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/careers"}>Careers</Link></li>
              <li><Link to={"/team"}>Team</Link></li>
              <li><Link to={"/ccskhana"}>CCSKHANA</Link></li>
              <li><Link to={"/instamart"}>CCSKHANA Instamart</Link></li>
              <li><Link to={"/genie"}>CCSKHANA Genie</Link></li>
            </ul>
        </div>
        <div className="footer-section">
          <h3>Contact US</h3>
          <ul>
              <li><Link to={"/help"}>Help & Support</Link></li>
              <li><Link to={"/partner"}>Partner with us</Link></li>
              <li><Link to={"/team"}>Ride with us</Link></li>
            </ul>
        </div>
        <div className="footer-section">
          <h3>We deliver to:</h3>
          <ul>
            <li><Link to="/ddu">DDU Hostel</Link></li>
            <li><Link to="/apj">APJ Hostel</Link></li>
            <li><Link to="/rk">RK Hostel</Link></li>
            <li><Link to="/kp">KP Hostel</Link></li>
            <li><Link to="/mp">MP Hostel</Link></li>
            <li><Link to="/ground">Ground</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 FoodDelivery. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
