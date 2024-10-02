import { useState } from 'react'
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Events from './components/Events';
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
      <Events />
      <Sponsor />
      <Register />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
