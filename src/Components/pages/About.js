import React from "react";
import './About.css'; // Create a CSS file for styling

const About = () => {
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>About</h1>
        <div id="flexContainer">
            <div className='box2'>
              <div>
              <h2>Flemming Hein Andersen, Founder</h2>
              <br></br>
                <p>Flemming is the founder of Specto Consult. He has previously worked for a range of pharmaceutical companies in Denmark and for various companies in Switzerland both as an employee and as a consultant. </p>
                <br></br>
                <p>He holds a M.Sc. in International Business & Finance from the University of Aarhus, a B.Sc. in Medicine with Industrial Specialization from the University of Aalborg 
                and various certifications from Microsoft and Snowflake.</p>
                <br></br>
                <p>He has experience with data-based solutions within clinical study reporting, clinical operations, safety, pharmaceutical marketing and IT-security from Danish pharmaceutical companies.</p>
                <br></br>
                <br></br>
                <br></br>
                </div>
                  <div id="certifications">
                    <h2>Certifications</h2>
                    <br></br>
                    <br></br>
                    <img className='imagecert' src={`${process.env.PUBLIC_URL}/AboutImages/microsoft-certified-associate-badge.svg`} alt="Microsoft Associate Badge Logo" />
                    <br></br>
                    <ul>Azure Data Engineer Associate</ul>
                    <ul>Azure Data Science Associate</ul>
                    <ul>PowerBI Data Analyst Associate</ul>
                    <br></br>
                    <img className='imagecert' src={`${process.env.PUBLIC_URL}/AboutImages/snowflake-certified-snowprocore-badge.png`} alt="Snowflake SnowPro Core Badge Logo" />
                    <br></br>
                    <ul>Snowflake SnowPro Core</ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
