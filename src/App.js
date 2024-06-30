import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/pages/Home';
import Join from './Components/pages/Join';
import ContactForm from './Components/ContactForm/ContactForm';
import CookieConsent from './Components/CookieConsent/CookieConsent';
import CookiePolicy from './Components/pages/CookiePolicy';

const App = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Initialize Google Analytics
    initializeGoogleAnalytics('G-19DN8SNDPS');

    // Handle user cookies
    handleUserCookies();
  }, []);

  const initializeGoogleAnalytics = (trackingId) => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', trackingId);
  };

  const handleUserCookies = () => {
    const userCookie = Cookies.get('user');

    if (!userCookie) {
      const newUserName = uuidv4();
      Cookies.set('user', newUserName, { expires: 7, sameSite: 'Lax' });
      setUserName(newUserName);
      console.log('Cookie set for the first time:', newUserName);
    } else {
      setUserName(userCookie);
      console.log('Cookie already exists:', userCookie);
    }
  };

  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/contact-form" element={<ContactForm />} />
          {/* Define other routes that you need */}
        </Routes>
        <CookieConsent />
      </main>
    </Router>
  );
};

export default App;
