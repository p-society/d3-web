import React from 'react'
import Frame from '../assets/Frame.svg'
import useRouteAnimation from '../utils/animatie'
import Navbar from '../components/landingpage/navbar'
import Footer from '../components/landingpage/footer'

const AboutUs = () => {
  const isLoaded = useRouteAnimation()

  return (
    <div className="min-h-screen bg-[#F6E9D0] overflow-x-hidden flex flex-col items-start justify-center p-4 sm:p-8 sm:pt-2 relative font-['ADLaM_Display']">
      <div className="w-full flex justify-center relative z-20">
        <Navbar isLoaded={isLoaded} />
      </div>
      <div className="m-2 flex">
        <div
          className={`absolute top-16 xl:top-24 left-4 sm:left-28 flex items-center gap-6 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="transform -rotate-12 bg-[#ff8c34] px-4 sm:px-8 py-2 rounded border-2 border-black text-white font-bold shadow-[8px_8px_0_rgba(0,0,0,0.75)] hover:shadow-[12px_12px_0_rgba(0,0,0,0.75)] hover:scale-105 transition-all duration-300">
            About US
          </div>
        </div>

        {/* Decorative green circles (top-right) */}
        <div
          className={`absolute top-16 right-4 sm:right-12 flex flex-col items-center gap-4 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
          style={{ transitionDelay: '300ms' }}
          <svg
            aria-hidden="true"
            width="100"
            height="130"
            viewBox="0 0 162 207"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-20 sm:w-auto sm:h-auto"
          >
            <circle
              cx="23.625"
              cy="183.375"
              r="22.125"
              fill="#C6F806"
              stroke="black"
              strokeWidth="3"
            />
            <circle cx="99" cy="105.75" r="61.5" fill="#C6F806" stroke="black" strokeWidth="3" />
            <circle cx="96.75" cy="12" r="10.5" fill="#C6F806" stroke="black" strokeWidth="3" />
          </svg>
        </div>
      </div>

      {/* Main title */}
      <div
        className={`ml-4 sm:ml-10 mt-20 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '400ms' }}
      >
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold">
          <span className="text-black mr-2 sm:mr-6">WHO ARE</span>
          <span className="text-[#FF8A33] font-black">WE</span>
          <span className="text-black ml-2 sm:ml-6">?</span>
        </h1>
      </div>

      {/* Main card */}
      <div className="flex flex-col xl:flex-row gap-2 lg:gap-2 p-4 sm:p-10 w-full">
        {/* Left column: Paragraph */}
        <div
          className={`w-full relative gap-1 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <p className="transition-all duration-300 hover:text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ab quo sint nihil
            tempore deserunt modi nesciunt temporibus debitis, numquam impedit nulla. Quos,
            distinctio voluptate alias.
          </p>
          <p
            className={`mt-1 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
            style={{ transitionDelay: '600ms' }}
          >
            Nam finibus faucibus nibh iaculis vulputate. Donec orci lectus, commodo vitae
            sollicitudin vel, vulputate quis purus. dolor sit amet consectetur adipisicing elit.
          </p>
          <p
            className={`mt-1 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
            style={{ transitionDelay: '700ms' }}
          >
            Cras ullamcorper porta justo at porttitor. Etiam bibendum ultricies gravida. dolor sit
            amet, consectetur adipisicing elit. Tempora qui accusamus enim ullam modi deleniti
            eaque. Quam, odit!
          </p>
          <div
            className={`mt-1 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-3 rotate-12'}`}
            style={{ transitionDelay: '800ms' }}
          >
            <img
              src={Frame}
              alt="My Icon"
              className="w-10 h-10 hover:scale-110 hover:rotate-12 transition-all duration-300"
            />
          </div>
        </div>

        <div
          className={`hidden xl:block w-[8px] bg-black mx-5 h-[340px] transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
          style={{ transitionDelay: '600ms', transformOrigin: 'top' }}
        ></div>

        <div className="flex flex-col sm:flex-row gap-5 lg:gap-10 lg:ml-5 w-full lg:w-auto">
          {/* Card 1 */}
          <div
            className={`flex-1 w-full sm:w-[300px] h-[300px] bg-white border-2 border-black rounded-md shadow-[8px_8px_0_rgba(0,0,0,0.75)] overflow-hidden transition-all duration-700 ease-out hover:shadow-[12px_12px_0_rgba(0,0,0,0.75)] hover:-translate-y-1 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="px-4 py-2 flex items-center justify-between border-b-2 border-black bg-[#0B57FF] transition-colors duration-300 hover:bg-[#0040CC]">
              <span className="text-white font-bold text-sm">NEWS</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold"></h3>
              <p className="text-sm text-gray-700 mt-2"></p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`flex-1 w-full sm:w-[300px] h-[300px] bg-white border-2 border-black rounded-md shadow-[8px_8px_0_rgba(0,0,0,0.75)] overflow-hidden transition-all duration-700 ease-out hover:shadow-[12px_12px_0_rgba(0,0,0,0.75)] hover:-translate-y-1 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="px-4 py-2 flex items-center justify-between border-b-2 border-black bg-[#FF7A2D] transition-colors duration-300 hover:bg-[#E55A0D]">
              <span className="text-white font-bold text-sm">NEWS</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold"></h3>
              <p className="text-sm text-gray-700 mt-2"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-0 left-0 z-20 pt-2">
        <Footer isLoaded={isLoaded} />
      </div>
    </div>
  )
}

export default AboutUs
