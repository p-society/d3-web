import React from 'react'
import Navbar from '../components/landingpage/navbar'
import AboutUsHero from '../components/about-us/hero'
import Register from '../components/about-us/register'
import useRouteAnimation from '../utils/animatie'

const AboutUs = () => {
  const isLoaded = useRouteAnimation()
  return <AboutUsHero isLoaded={isLoaded} />
}

export default AboutUs
