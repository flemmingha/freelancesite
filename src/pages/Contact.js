import React from "react";
import './Contact.css'; // Create a CSS file for styling

const Contact = () => {
  return (
    <div>
        <h1 id='SpectoConsultHelp'>Contact</h1>
        <div id="flexContainer">
            <div className='box4'>
                  <h2>Contact Details</h2>
                  <br></br>
                  <br></br>
                  <p>Tel: +45 20 89 40 86</p>
                  <br></br>
                  <p>Mail: flemming_ha@hotmail.com</p>
                  <br></br>
                  <p>Address: Kjeldsgaardsvej 33, 1.th.</p>
                  <br></br>
                  <p>2500 Valby, Denmark</p>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="100">
  
  <rect x="0" y="0" width="120" height="120" fill="#FFA500" />
  
  <text x="30" y="60" font-family="Arial" font-size="40" fill="#000000">S</text>
  
  <text x="90" y="60" font-family="Arial" font-size="40" fill="#000000">C</text>
</svg>
    </div>

  );
};

export default Contact;
