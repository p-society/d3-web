// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react'
import Navbar from './components/Navbar';
import EventPage from './components/EventPage';
import Landing from './components/Landing';
import Sponsor from './components/Sponsor';
import Register from './components/Register';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Landing />
      <Events/>
      <Sponsor />
      <Register />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
