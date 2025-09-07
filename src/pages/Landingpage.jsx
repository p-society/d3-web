import React from 'react'
import Navbar from '../components/landingpage/navbar'
import Hero from '../components/landingpage/hero'
import Sidebar from '../components/landingpage/sidebar'
import Grid from '../components/landingpage/grid'
import d3Logo from '../assets/d3-.png'
import vectorTop from '../assets/top-vector.svg'

const Landingpage = () => {
  return (
    <div className="max-h-screen bg-[#ffeabb] w-screen relative overflow-hidden">
      <div className="w-full flex mt-2 justify-center">
        <Navbar />
      </div>
      <Sidebar />
      <Grid />
      <Hero />

      {/* Vector Top in top right corner */}
      <div className="absolute top-1 right-1 z-30">
        <img src={vectorTop} alt="Vector Top" className="w-52 h-auto" />
      </div>

      {/* D3 Logo in bottom left */}
      <div className="absolute top-6/7 left-16 z-30">
        <img src={d3Logo} alt="D3 Logo" className="w-64" />
      </div>
    </div>
  )
}

export default Landingpage
