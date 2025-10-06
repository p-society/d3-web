import React from 'react'
import Navbar from '../components/landingpage/navbar.jsx'
import Footer from '../components/landingpage/footer.jsx'
import SponsorsComponent from '../components/sponsors/SponsorsComponent.jsx'
import useRouteAnimation from '../utils/animatie.jsx'

const Sponsors = () => {
  const isLoaded = useRouteAnimation()

  return (
    <div className="min-h-screen flex flex-col relative bg-[#ffeabb] overflow-hidden">
      <div className="w-full flex justify-center pt-2">
        <Navbar isLoaded={isLoaded} />
      </div>
      <div className="flex-grow flex items-center justify-center w-full">
        <SponsorsComponent isLoaded={isLoaded} />
      </div>
      <div className="w-full">
        <Footer isLoaded={isLoaded} />
      </div>
    </div>
  )
}

export default Sponsors
