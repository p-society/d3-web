import React from 'react'
import Navbar from '../components/landingpage/navbar'
import Hero from '../components/landingpage/hero'
import Sidebar from '../components/landingpage/sidebar'
import Grid from '../components/landingpage/grid'

const Landingpage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Sidebar />
      <Grid />
      <div className="ml-42">
        {' '}
        {/* Offset for sidebar */}
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default Landingpage
