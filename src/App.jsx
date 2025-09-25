import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Event from './pages/Event'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import { Merch } from './pages/Merch'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/events" element={<Event />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/merch" element={<Merch />} />
      </Routes>
    </Router>
  )
}

export default App
