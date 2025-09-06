import React from 'react'
import Button from '../buttons'

const Hero = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden z-20">
      {/* Grid background pattern - centered and more prominent */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[600px] opacity-60">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.3) 2px, transparent 2px),
                linear-gradient(90deg, rgba(0,0,0,0.3) 2px, transparent 2px)
              `,
              backgroundSize: '60px 60px',
            }}
          ></div>
        </div>
      </div> */}

      {/* Orange section */}
      <div className="absolute bottom-25 w-full h-1/2 bg-[#ff8c34]">
        <div className="flex justify-left  px-4 lg:px-16 pt-20 lg:pt-0">
          <div className="mb-8 lg:mb-16 flex flex-col h-full">
            <h1
              className="text-white font-bold leading-none flex-1 flex flex-col justify-between"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex-1 flex items-center">
                dare
              </div>
              <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex-1 flex items-center">
                dream
              </div>
              <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex-1 flex items-center">
                develop
              </div>
            </h1>
          </div>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen ">
        {/* Left side - Text */}

        {/* Right side - Computer and content */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 lg:px-8 relative">
          {/* Computer image with decorative elements */}
          <div className="mb-8 relative z-20">
            {/* <img
              src="http://localhost:3845/assets/c2fe34a06c3026edfea2fb1e0d7ddb8a31607e96.png"
              alt="Vintage Computer"
              className="w-full max-w-sm lg:max-w-md xl:max-w-lg"
            /> */}
            {/* Decorative grid background for computer */}
            {/* <img
              src="http://localhost:3845/assets/f602e6b9b200b2ee1f344cebb3dde891b67e1072.svg"
              alt="Grid Background"
              className="absolute inset-0 w-full h-full object-cover z-[-1]"
            /> */}
          </div>

          {/* Description text */}
          {/* <div className="mb-8 max-w-lg text-center">
            <p className="text-white text-sm md:text-base font-mono lowercase">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. ut et massa mi. aliquam in
              hendrerit urna. pellentesque sit amet
            </p>
          </div> */}

          {/* Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button onClick={() => console.log('Explore clicked')}>explore</Button>
            <Button onClick={() => console.log('Download Brochure clicked')}>
              download brochure
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
