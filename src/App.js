

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import PatientBooking from './Components/PatientBooking';
import DoctorSchedule from './Components/DoctorSchedule';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(''); 
  const handleLogin = (type, name) => {
    setIsLoggedIn(true);
    setUserType(type);
    alert(`Logged in as ${type.charAt(0).toUpperCase() + type.slice(1)}: ${name}`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType('');
  };

  return (
    <Router>
      <Navbar 
        isLoggedIn={isLoggedIn} 
        userType={userType} 
        onLogin={handleLogin} 
        onLogout={handleLogout} 
      />
      {isLoggedIn && (
        <Routes>
          <Route path="/home" element={userType === 'patient' ? <PatientBooking /> : <DoctorSchedule />} />
          <Route path="/about" element={<About />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
