import React from 'react'
import Navbar from '../components/landingpage/navbar'
import Hero from '../components/landingpage/hero'
import Sidebar from '../components/landingpage/sidebar'
import Grid from '../components/landingpage/grid'

const Landingpage = () => {
  return (
    <div className="min-h-screen bg-[#ffeabb] w-screen relative overflow-hidden">
      <Sidebar />
      {/* <Grid /> */}
      <Hero />
      <div className="flex justify-center">
        {' '}
        {/* Proper offset for sidebar */}
        <Navbar />
      </div>
    </div>
  )
}

export default Landingpage
