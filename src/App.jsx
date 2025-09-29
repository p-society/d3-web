import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Event from './pages/Event'
import Register from './pages/Register'
import ContactUs from './pages/Contactus'
import NotFound from './pages/NotFound'
import Sponsors from './pages/Sponsors'
import { Merch } from './pages/Merch'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/events" element={<Event />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  )
}

export default App
