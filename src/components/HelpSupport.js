import React from 'react';

import { FaPhoneAlt, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';

function HelpSupport() {
  const handlePhoneClick = () => {
    
    // Implement the phone call functionality here
    window.location.href = 'tel:9889141494';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:sarvjeet.osc@gmail.com';
    // Implement the email functionality here
  };

  const handleFaqClick = () => {
    window.location.href = '/faqs';
    // Implement the FAQ redirection functionality here
  };

  return (
    <div className="container">
      <h1 className="header">Help & Support</h1>
      <p className="description">
        Need help? Reach out to us through any of the following options.
      </p>
      <div className="support-options">
        <div className="option" onClick={handlePhoneClick}>
          <div className="icon">
            <FaPhoneAlt />
          </div>
          <span className="option-text">Call Us</span>
        </div>
        <div className="option" onClick={handleEmailClick}>
          <div className="icon">
            <FaEnvelope />
          </div>
          <span className="option-text">Email Us</span>
        </div>
        <div className="option" onClick={handleFaqClick}>
          <div className="icon">
            <FaQuestionCircle />
          </div>
          <span className="option-text">FAQs</span>
        </div>
      </div>
      <button className="button">Contact Support</button>
    </div>
  );
}

export default HelpSupport;