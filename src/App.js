import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
//import Temp from "./Components/pages/Temp";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Join from "./Components/pages/Join";
import Contact from "./Components/pages/Contact";


const App = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userCookie = Cookies.get('user');

    if (!userCookie) {
      Cookies.set('user', 'John Doe', { expires: 7 });
      setUserName('John Doe');
      console.log('Cookie set for the first time');
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
          <Route path="/Contact" element={<Contact />} />
          
          {/* Define other routes that you need*/}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
