import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Event from './pages/Event'
import Register from './pages/Register'
import Contactus from './pages/Contactus'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/events" element={<Event />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
