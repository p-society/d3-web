import React from 'react'
import Button from '../buttons'

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#ffeabb] relative overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Orange section */}
      <div className="absolute bottom-0 left-0 right-0 h-[420px] bg-[#ff8c34]"></div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left side - Text */}
        <div className="flex-1 flex flex-col justify-center px-4 lg:px-12 pt-20 lg:pt-0">
          <div className="mb-8 lg:mb-16">
            <h1 className="text-white font-bold leading-none">
              <div className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-right mb-[-20px]">
                dare
              </div>
              <div className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-[-20px]">dream</div>
              <div className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl">develop</div>
            </h1>
          </div>
        </div>

        {/* Right side - Computer and content */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 lg:px-8 relative">
          {/* Computer image */}
          <div className="mb-8 relative z-20">
            <img
              src="http://localhost:3845/assets/c2fe34a06c3026edfea2fb1e0d7ddb8a31607e96.png"
              alt="Vintage Computer"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </div>

          {/* Description text */}
          <div className="mb-8 max-w-lg text-center">
            <p className="text-white text-sm md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
              hendrerit urna. Pellentesque sit amet
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button onClick={() => console.log('Explore clicked')}>explore</Button>
            <Button onClick={() => console.log('Download Brochure clicked')}>
              download brochure
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom section with logo and social icons */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="flex justify-between items-end px-4 lg:px-12">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <img
              src="http://localhost:3845/assets/90ce3e76e7589a635b9c5b5f9db70ae2b78afaab.png"
              alt="Logo"
              className="h-16 md:h-20"
            />
          </div>

          {/* Right side - Social icons */}
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <img
                src="http://localhost:3845/assets/6036008b8d4053ce23b42da3826ce6b7da6a4545.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <img
                src="http://localhost:3845/assets/e66e48beec290582a803a45b2a151e340e45ec76.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">X</span>
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <img
                src="http://localhost:3845/assets/7ed0fdb165bd9d6cfc0ffb2210b5e14a2c508ed9.png"
                alt="Unstop"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Top right chevron pattern */}
      <div className="absolute top-4 right-4 z-10">
        <div className="flex flex-col gap-1">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-1">
              {[...Array(3)].map((_, j) => (
                <div
                  key={j}
                  className="w-4 h-4 border-2 border-[#ff0066] transform rotate-45"
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
