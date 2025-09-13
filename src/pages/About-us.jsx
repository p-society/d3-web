import React from 'react'
import Navbar from '../components/landingpage/navbar'
import Register from '../components/about-us/register'

const AboutUs = () => {
  return (
    <div className="page-wrapper">
      <div className="min-h-screen bg-[#ffeabb] w-full relative overflow-x-hidden">
        <div className="w-full flex mt-2 justify-center">
          <Navbar />
        </div>
        <div className="flex flex-col items-center justify-center pt-20 pb-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-[#e30f70] mb-8">About Us</h1>
            <p className="text-2xl text-[#333] max-w-4xl mx-auto mb-12">
              Welcome to D3 - where innovation meets creativity. We are passionate about bringing
              amazing experiences through technology and design.
            </p>
          </div>
          <Register />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
