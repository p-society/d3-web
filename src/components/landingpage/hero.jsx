import React from 'react'
import Button from '../buttons'
import computerImage from '../../assets/computer.png' // Ensure this path is correct

const Hero = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden z-20">
      {/* Orange section */}
      <div className="absolute bottom-25 w-full h-1/2 bg-[#ff8c34]">
        <div className="flex justify-left px-4 lg:px-16 pt-20 lg:pt-0">
          <div className="ml-10 lg:mb-16 flex flex-col h-full">
            <h1
              className="text-white font-bold leading-none flex-1 flex flex-col"
              style={{ fontFamily: 'Lemon Smash' }}
            >
              <div className="text-5xl md:text-6xl lg:text-7xl xl:text-[125px] flex items-center -mb-4 lg:-mb-6">
                dare
              </div>
              <div className="text-5xl md:text-6xl lg:text-7xl xl:text-[125px] flex items-center -mb-4 lg:-mb-6">
                dream
              </div>
              <div className="text-5xl md:text-6xl lg:text-7xl xl:text-[125px] flex items-center">
                develop
              </div>
            </h1>
          </div>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative left-60 bottom-20  z-10 flex flex-col lg:flex-row min-h-screen ">
        {/* Left side - Text */}

        {/* Right side - Computer and content */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 lg:px-8 relative">
          {/* Computer image */}
          <div className="mb-6 right-10 relative z-30">
            <img
              src={computerImage}
              alt="Vintage Computer"
              className="w-full max-w-sm lg:max-w-md"
            />
          </div>

          {/* Description text */}
          <div className="mb-2 max-w-lg text-left">
            <p className="text-white text-sm md:text-base font-mono lowercase">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. ut et massa mi. aliquam in
              hendrerit urna. pellentesque sit amet
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-lg w-full">
            <Button onClick={() => console.log('Explore clicked')}>explore</Button>
            <Button onClick={() => console.log('Download Brochure clicked')}>
              download brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
