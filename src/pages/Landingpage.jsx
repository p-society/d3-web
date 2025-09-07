import React from 'react'
import { FaInstagram, FaLinkedin, FaXTwitter, FaLink } from 'react-icons/fa6' // FaLink used for Unstop placeholder
// import your assets as already done
import Navbar from '../components/landingpage/navbar'
import Hero from '../components/landingpage/hero'
import Sidebar from '../components/landingpage/sidebar'
import Event from './Event'
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

      {/* Social Icons - bottom right */}
      <div className="absolute bottom-8 right-10 z-30 flex gap-6">
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-[#000000] w-8 h-8 hover:scale-110 transition" />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-[#000000] w-8 h-8 hover:scale-110 transition" />
        </a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="text-black w-8 h-8 hover:scale-110 transition" />
        </a>
        <a href="https://unstop.com/" target="_blank" rel="noopener noreferrer">
          <FaLink className="text-[#000000] w-8 h-8 hover:scale-110 transition" />
        </a>
      </div>

      {/* Vector Top in top right corner */}
      <div className="absolute top-1 right-1 z-30">
        <img src={vectorTop} alt="Vector Top" className="w-52 h-auto" />
      </div>

      {/* D3 Logo in bottom left */}
      <div className="absolute top-6/7 left-16 z-30">
        <img src={d3Logo} alt="D3 Logo" className="w-64" />
      </div>
      {/* <Event /> */}
    </div>
  )
}

export default Landingpage
