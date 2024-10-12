// src/App.jsx
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import EventPage from './components/EventPage';
import Landing from './components/Landing';
import Sponsor from './components/Sponsor';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'
import Announcement from './components/Announcement';
const Events = EventPage

function App() {
  return (
    <>
    <Announcement/>
      <ToastContainer />
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
