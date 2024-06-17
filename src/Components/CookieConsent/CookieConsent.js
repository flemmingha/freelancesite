// src/components/CookieConsent/CookieConsent.js
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './CookieConsent.css';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    const consentTime = new Date().toISOString();
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    Cookies.set('cookieConsentTime', consentTime, { expires: 365 });
    setShowBanner(false);
  };

  const handleDecline = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent-banner">
      <p>
        We use cookies to improve your experience. By using our site, you agree to our use of cookies. 
        <a href="/cookie-policy" target="_blank" rel="noopener noreferrer"> Learn more</a>
      </p>
      <button onClick={handleAccept}>Accept</button>
      <button onClick={handleDecline}>Decline</button>
    </div>
  );
};

export default CookieConsent;
