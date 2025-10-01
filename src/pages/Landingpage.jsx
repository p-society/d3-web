// import React, { useEffect, useState } from 'react'
import { FaInstagram, FaLinkedin, FaXTwitter, FaLink } from 'react-icons/fa6'
import Navbar from '../components/landingpage/navbar'
import Hero from '../components/landingpage/hero'
import d3Logo from '../assets/d3-.png'
import decorLogo from '../assets/decorBottom.png'
import vectorTop from '../assets/top-vector.svg'
import useRouteAnimation from '../utils/animatie'

const Landingpage = () => {
  const isLoaded = useRouteAnimation()

  return (
    <div className="min-h-screen sm:h-screen bg-[#ffeabb] relative overflow-x-hidden sm:overflow-hidden">
      {/* Centered container wrapper */}
      <div className="max-w-screen-2xl mx-auto relative min-h-full sm:h-full">
        <div className="w-full flex justify-center pt-2">
          <Navbar isLoaded={isLoaded} />
        </div>
        <Hero isLoaded={isLoaded} />

        {/* Vector Top in top right corner */}
        <div
          className={`absolute top-1 right-1 z-30 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <img
            src={vectorTop}
            alt="Vector Top"
            className="hidden sm:block w-20 phone:w-24 md:w-32 lg:w-32 xl:w-52 2xl:w-60 h-auto"
          />
        </div>

        {/* Floating Footer */}
        <div
          className={`absolute bottom-0 left-0 right-0 z-30 px-2 phone:px-4 sm:px-8 pb-2 phone:pb-4 sm:pb-6 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
          style={{ transitionDelay: '700ms' }}
        >
          <div className="flex justify-between items-end">
            {/* D3 Logo section - left side */}
            <div
              className={`flex flex-col transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
              style={{ transitionDelay: '800ms' }}
            >
              <img src={d3Logo} alt="D3 Logo" className="w-32 phone:w-40 sm:w-48 md:w-64" />
              <img
                src={decorLogo}
                alt="Decorative Bottom"
                className="w-32 phone:w-40 sm:w-48 md:w-64"
              />
            </div>

            {/* Social Icons - right side */}
            <div className="flex gap-2 phone:gap-3 sm:gap-6 pb-1 phone:pb-2 sm:pb-4">
              <a
                href="https://www.instagram.com/d3fest.iiitbh/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: '900ms' }}
              >
                <FaInstagram className="text-[#000000] w-5 h-5 phone:w-6 phone:h-6 sm:w-8 sm:h-8 hover:scale-110 transition" />
              </a>
              <a
                href="https://linkedin.com/company/tech-society-iiitbh/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: '1000ms' }}
              >
                <FaLinkedin className="text-[#000000] w-5 h-5 phone:w-6 phone:h-6 sm:w-8 sm:h-8 hover:scale-110 transition" />
              </a>
              <a
                href="https://x.com/techsociiitbh"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: '1100ms' }}
              >
                <FaXTwitter className="text-black w-5 h-5 phone:w-6 phone:h-6 sm:w-8 sm:h-8 hover:scale-110 transition" />
              </a>
              <a
                href="https://unstop.com/college-fests/d3-tech-fest-iiit-bhubaneswar-international-institute-of-information-technology-bhubaneswar-374277"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: '1200ms' }}
              >
                <FaLink className="text-[#000000] w-5 h-5 phone:w-6 phone:h-6 sm:w-8 sm:h-8 hover:scale-110 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <Event /> */}
    </div>
  )
}

export default Landingpage
