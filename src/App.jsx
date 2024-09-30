// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Events from './pages/EventPage.jsx';

import { useState } from 'react'
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Sponsor from './components/Sponsor';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Events />
      <Sponsor />
      <Register />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
