import React from 'react'
import Navbar from '../components/landingpage/navbar'
import AboutUsHero from '../components/about-us/hero'
import Register from '../components/about-us/register'
import useRouteAnimation from '../utils/animatie'

const AboutUs = () => {
  const isLoaded = useRouteAnimation()
  return (
    <div className="page-wrapper">
      <div className="min-h-screen bg-[#ffeabb] w-full relative overflow-x-hidden flex flex-col items-center justify-center">
        <div className="w-full flex justify-center">{/* <Navbar /> */}</div>
        <AboutUsHero isLoaded={isLoaded} />
      </div>
    </div>
  )
}

export default AboutUs
