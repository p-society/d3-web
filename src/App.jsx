// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import EventPage from './components/EventPage';
import Landing from './components/Landing';
import Sponsor from './components/Sponsor';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'
const Events = EventPage

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
