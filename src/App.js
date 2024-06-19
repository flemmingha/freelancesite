import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid'; // Import the UUID library
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
//import Temp from "./Components/pages/Temp";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Join from "./Components/pages/Join";
import Contact from "./Components/pages/Contact";
import ContactForm from "./Components/ContactForm/ContactForm";
import CookieConsent from './Components/CookieConsent/CookieConsent';
import CookiePolicy from './Components/pages/CookiePolicy';


const useGoogleAnalytics = (trackingId) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    window.gtag = gtag;

    const scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(scriptTag);

    gtag('js', new Date());
    gtag('config', trackingId);
  }, [trackingId]);
};

const App = () => {
  useGoogleAnalytics('G-19DN8SNDPS');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userCookie = Cookies.get('user');

    if (!userCookie) {
      const newUserName = uuidv4();
      Cookies.set('user', newUserName, { expires: 7, sameSite: 'Lax' }); // Set SameSite attribute
      setUserName(newUserName);
      console.log('Cookie set for the first time:', newUserName);
    } else {
      setUserName(userCookie);
      console.log('Cookie already exists:', userCookie);
    }
  }, []);

  return (
    <Router>
      <Navbar /> 
      <main className="main-content">
        <Routes>
          {/*<Route path="/" element={<Temp />} />
          */}
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Join" element={<Join />} />
          {/*<Route path="/Contact" element={<Contact />} /> */}
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/contact-form" element={<ContactForm />} />          
          {/* Define other routes that you need*/}
        </Routes>
        <CookieConsent />
      </main>
    </Router>
  );
};

export default App;
