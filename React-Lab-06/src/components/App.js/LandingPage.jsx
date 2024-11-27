import React from 'react';
import '../styles/LandingPage.css'; // Import CSS file
// import logo from './assets/huz.png'; // Correct path to the image

function LandingPage() {
  return (
    <div className="landing-container">
      <img src="huz.png" alt="" />
      <div className="content">
        <h1 className="landing-title">Welcome to Our Website</h1>
        <p className="landing-subtitle">
          Master React JS with Zoha – Your Gateway to Building Dynamic, Professional Web Applications
        </p>
        
        <button className="landing-button">Learn More</button>
      </div>
    </div>
  );
}

export default LandingPage;
