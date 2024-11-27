import React from 'react';
import '../styles/footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="left-section">
        <img src="huz.png" alt="Girl Illustration" height="250px" />
      </div>
      <div className="right-section">
        <div className="circle-container">
          <div className="circle"><img src="html.png" alt="" /></div>
          <div className="circle"><img src="css.png" alt="" /></div>
          <div className="circle"><img src="js.png" alt="" /></div>
          <div className="circle"><img src="react.png" alt="" /></div>
          <div className="circle"><img src="tailwind.png" alt="" /></div>
          <div className="circle"><img src="bootstrap.png" alt="" /></div>
        </div>
      </div>
      <div className='copy'>
        <h4>"© 2024 MyReact App".</h4>
      </div>
    </div>
  );
};

export default Footer;
