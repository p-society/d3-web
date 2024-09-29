import { useState } from 'react'
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Events from './components/Events';
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
