import React from 'react'
import Register from './register'
import StackedCard from './StackedCard'
import RegistrationsBanner from './RegistrationsBanner'
import GroupImage from '../../assets/Group.png'
import FrameImage from '../../assets/Frame.png'

const AboutUsHero = ({ isLoaded }) => {
  return (
    <div
      className={`relative min-h-screen h-full px-8 py-16 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
      style={{ transitionDelay: '300ms' }}
    >
      {/* Background*/}
      <div className="absolute inset-0 h-full bg-[#3366FF] opacity-90"></div>

      {/* Main content container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Responsive layout: single column for mobile/sm, two columns for md and above */}
        {/* Responsive: single column for <md, two columns for md+ */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 mb-8 md:mb-16">
          {/* Left column for md+, main column for mobile */}
          <div className="space-y-8 order-2 md:order-1">
            {/* Hero title section */}
            <div className="text-center md:text-left relative">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
                style={{ fontFamily: 'Alfa Slab One', color: '#FFEABB' }}
              >
                Unleash
                <br />
                <span>Your Potential.</span>
              </h1>

              {/* Registrations Banner - positioned at top right for md+, below title for mobile */}
              <div className="md:absolute md:-top-12 md:-right-18 lg:-right-60 md:top-3 flex justify-center md:block mt-4 md:mt-0">
                <div className="transform rotate-[7deg]">
                  <RegistrationsBanner />
                </div>
              </div>
            </div>

            {/* Stacked Card section */}
            <div className="flex justify-center md:justify-start">
              <StackedCard
                title="D3 TECH FEST"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut at massa mi, aliquam in hendrerit urna, pellentesque sit amet elit, ut et massa mi, aliquam in hendrerit urna, pellentesque sit amet"
                buttonText="Register Now"
                className="max-w-md"
                onRegisterClick={() => console.log('Register clicked')}
              />
            </div>

            {/* Right column content for mobile: show below StackedCard, hide on md+ */}
            <div className="flex flex-col items-center w-full ml-auto relative md:hidden">
              {/* Large circular container for future images */}
              <div className="mx-auto mt-10 md:-mt-8 rounded-full bg-white/80 w-95 h-95 lg:w-100 lg:h-100 flex items-center justify-center shadow-xl relative">
                {/* Top left circle (dashed border) */}
                <div
                  className="absolute top-2 left-6 w-14 h-14 rounded-full border-2 border-black border-dashed flex items-center justify-center z-20"
                  style={{ boxSizing: 'border-box' }}
                >
                  <div className="w-8 h-8 rounded-full bg-lime-300 border border-black"></div>
                </div>
                {/* Bottom right circles */}
                {/* Large bottom right circle */}
                <div className="absolute bottom-0 right-4 w-24 h-24 rounded-full bg-lime-300 border-2 border-black z-20"></div>
                {/* Medium bottom right circle */}
                <div className="absolute -bottom-12 right-32 w-10 h-10 rounded-full bg-lime-300 border-2 border-black z-20"></div>
                {/* Small bottom right circle */}
                <div className="absolute bottom-30 right-8 w-5 h-5 rounded-full bg-lime-300 border-2 border-black z-20"></div>
                {/* Future images will go here */}
                <img
                  src={FrameImage}
                  alt="Frame"
                  className="absolute left-0 bottom-0 w-20 lg:w-18 mb-14 -ml-10 z-10 pointer-events-none select-none"
                  style={{ zIndex: 10 }}
                />
              </div>
            </div>

            {/* Register component for mobile/sm: show below right column content, hide on md+ */}
            {
              <div className="md:hidden w-screen relative left-1/2 -translate-x-1/2 mt-8">
                <Register />
              </div>
            }
          </div>
          {/* Right column for md+ only */}
          <div className="hidden md:flex flex-col items-center w-full ml-auto relative order-1 md:order-2">
            {' '}
            {/* Group image at the top of the right column */}
            <img
              src={GroupImage}
              alt="Group"
              className="hidden md:block w-34 max-w-full -mt-4 mb-37 object-contain ml-auto"
              style={{ display: 'block' }}
            />
            {/* Large circular container for future images */}
            <div className="mx-auto -mt-8 rounded-full bg-white/80 w-60 h-60 lg:w-100 lg:h-100 flex items-center justify-center shadow-xl relative">
              {/* Top left circle (dashed border) */}
              <div
                className="absolute top-2 left-6 w-14 h-14 rounded-full border-2 border-black border-dashed flex items-center justify-center z-20"
                style={{ boxSizing: 'border-box' }}
              >
                <div className="w-8 h-8 rounded-full bg-lime-300 border border-black"></div>
              </div>
              {/* Bottom right circles */}
              {/* Large bottom right circle */}
              <div className="absolute bottom-0 right-4 w-24 h-24 rounded-full bg-lime-300 border-2 border-black z-20"></div>
              {/* Medium bottom right circle */}
              <div className="absolute -bottom-12 right-32 w-10 h-10 rounded-full bg-lime-300 border-2 border-black z-20"></div>
              {/* Small bottom right circle */}
              <div className="absolute bottom-30 right-8 w-5 h-5 rounded-full bg-lime-300 border-2 border-black z-20"></div>
              {/* Future images will go here */}
              <img
                src={FrameImage}
                alt="Frame"
                className="absolute left-0 bottom-0 w-20 lg:w-18 mb-14 -ml-10 z-10 pointer-events-none select-none"
                style={{ zIndex: 10 }}
              />
            </div>
          </div>
        </div>

        {/* Register component for md and above: below columns */}
        <div className="hidden md:flex justify-center w-screen relative left-1/2 -translate-x-1/2">
          <Register />
        </div>
      </div>
    </div>
  )
}

export default AboutUsHero
