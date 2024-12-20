import React from 'react';
import './form.css';
const form = () => {
  return (
    <div className="form-container">
    <h2 className="form-title">Contact Us</h2>
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Enter your message" rows="4"></textarea>
      </div>
      <button type="submit" className="form-button">Submit</button>
    </form>
  </div>
  )
}

export default form
