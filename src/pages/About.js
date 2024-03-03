import React from "react";
import './About.css'; // Create a CSS file for styling

const About = () => {
  return (
    <div>
        <h1 id='BizviewHelp'>About</h1>
        <div id="flexContainer">
            <div className='box2'>
              <div>
              <h2>Flemming Hein Andersen, Founder</h2>
              <br></br>
                <p>Flemming is the founder of Bizview. He previously worked for a range of pharmaceutical companies in Denmark and for various companies in Switzerland primarily as a consultant.
                   He holds a M.Sc. in International Business & Finance from the University of Aarhus, a B.Sc. in Medicine with Industrial Specialization from the University of Aalborg 
                   and various certifications from Microsoft and Snowflake</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                </div>
                  <div id="certifications">
                    <h2>Certifications</h2>
                    <br></br>
                    <br></br>
                    <img className='image' src={`${process.env.PUBLIC_URL}/AboutImages/microsoft-certified-associate-badge.svg`} alt="Microsoft Associate Badge Logo" />
                    <br></br>
                    <ul>Azure Data Engineer Associate</ul>
                    <ul>Azure Data Science Associate</ul>
                    <ul>PowerBI Data Analyst Associate</ul>
                    <br></br>
                    <img className='image' src={`${process.env.PUBLIC_URL}/AboutImages/snowflake-certified-snowprocore-badge.png`} alt="Snowflake SnowPro Core Badge Logo" />
                    <br></br>
                    <ul>Snowflake SnowPro Core</ul>
                </div>
            </div>
        </div>
    </div>

  );
};

export default About;
