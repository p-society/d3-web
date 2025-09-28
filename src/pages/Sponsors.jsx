import React from 'react'
import Navbar from '../components/landingpage/navbar.jsx'
import Footer from '../components/landingpage/footer.jsx'
import SponsorsComponent from '../components/sponsors/SponsorsComponent.jsx'
import useRouteAnimation from '../utils/animatie.jsx'

const Sponsors = () => {
  const isLoaded = useRouteAnimation()

  return (
    <div className="min-h-screen bg-[#ffeabb] relative overflow-hidden">
      <div className="w-full flex justify-center pt-2">
        <Navbar isLoaded={isLoaded} />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <SponsorsComponent isLoaded={isLoaded} />
      </div>
      <Footer isLoaded={isLoaded} />
    </div>
  )
}

export default Sponsors
