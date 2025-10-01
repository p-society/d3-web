import React from 'react'
import Button from '../buttons'
import computerImage from '../../assets/computer.png'
import Sidebar from './sidebar'
import Grid from './grid'
import './hero.css'
import { useNavigate } from 'react-router-dom'

const Hero = ({ isLoaded }) => {
  const navigate = useNavigate()

  const handleExplore = () => {
    navigate('/events')
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/brochure.pdf'
    link.download = 'D3-TechnoFest-Brochure.pdf'
    link.click()
  }

  return (
    <div className={`min-h-screen w-full overflow-hidden z-20`}>
      <Sidebar isLoaded={isLoaded} />
      <Grid isLoaded={isLoaded} />

      <div
        className={`absolute w-full bg-[#ff8c34] top-[50vh] transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
        style={{ transitionDelay: '300ms' }}
      >
        <div className="flex justify-between px-2 phone:px-3 sm:px-4 lg:px-16 pt-4 phone:pt-6 sm:pt-8 lg:pt-2">
          <div className="ml-2 phone:ml-4 sm:ml-10 lg:mb-4 flex flex-col h-full pt-2 phone:pt-3 sm:pt-4">
            <h1 className="text-white font-bold leading-none flex-1 flex flex-col lemon-smash-font">
              <div className="text-3xl phone:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[125px] flex items-center -mb-2 phone:-mb-3 sm:-mb-4 lg:-mb-6">
                dare
              </div>
              <div className="text-3xl phone:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[125px] flex items-center -mb-2 phone:-mb-3 sm:-mb-4 lg:-mb-6">
                dream
              </div>
              <div className="text-3xl phone:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[125px] flex items-center">
                develop
              </div>
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center px-2 phone:px-3 sm:px-4 lg:px-8 relative flex-1">
            <div className="image-wrapper mb-2 phone:mb-3 sm:mb-4 max-w-[240px] phone:max-w-[250px] sm:max-w-xs md:max-w-sm lg:max-w-sm absolute -top-28 phone:-top-32 sm:-top-40 md:-top-52 lg:-top-48">
              <div className="relative w-full h-full">
                <img
                  src={computerImage}
                  alt="Retro computer screen"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute flex items-center justify-center bg-[#2e2e2e] tv-screen">
                  <span className="px-4 py-2 rounded-lg font-bold text-lg sm:text-2xl coming-text">
                    Coming soon
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-1 phone:mb-2 sm:mb-2 pt-16 phone:pt-18 sm:pt-22 lg:pt-18 max-w-xs phone:max-w-sm sm:max-w-lg text-left">
              <p className="text-white text-xs phone:text-sm md:text-base font-mono lowercase">
                Get ready to rewind the past and fast-forward the future at D3 Techno Fest! Brought
                to life by the Tech and Robotics Societies of IIIT Bhubaneswar.
              </p>
            </div>

            <div className="flex flex-col gap-2 phone:gap-3 sm:flex-row sm:gap-4 mb-4 phone:mb-6 sm:mb-8 max-w-xs phone:max-w-sm sm:max-w-lg w-full">
              <Button onClick={handleExplore}>Explore</Button>
              <Button onClick={handleDownload}>Download Brochure</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
