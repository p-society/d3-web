import React from 'react'
import Navbar from '../components/landingpage/navbar'
import AboutUsHero from '../components/about-us/hero'
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
            <AboutUsHero />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
