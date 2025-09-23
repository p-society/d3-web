import React from 'react'
import Button from '../buttons'

const EventHero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left Side: Image Placeholder */}
        <div className="w-full md:w-1/2 order-1">
          <div className="bg-zinc-300 aspect-[4/3] rounded-3xl shadow-lg flex items-center justify-center border-4 border-black">
            <span className="text-zinc-500 text-2xl font-bold font-['ADLaM_Display']">
              Event Image
            </span>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 font-['ADLaM_Display'] leading-tight">
            Our Premier Events
          </h1>
          <p className="max-w-lg text-lg text-black font-['Cascadia_Code'] lowercase mb-8">
            Explore a series of engaging and innovative events designed to challenge and inspire.
            Join us to learn, create, and connect.
          </p>
          <Button
            onClick={() => console.log('Register Now clicked')}
            className="w-auto" // Keeps the button from being full-width
          >
            REGISTER NOW
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EventHero
