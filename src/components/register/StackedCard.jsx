import React from 'react'
import SparkleImage from '../../assets/Sparkle.webp'
import arrowImage from '../../assets/arrow.webp'

const StackedCard = ({
  title = 'D3 TECH FEST',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut at massa mi, aliquam in hendrerit urna, pellentesque sit amet elit, ut et massa mi, aliquam in hendrerit urna, pellentesque sit amet',
  buttonText = 'Register Now',
  onRegisterClick = () => {},
  className = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Arrow image at top right, outside the cards */}
      <img
        src={arrowImage}
        alt="Arrow decoration"
        className="hidden sm:block absolute -top-22 -right-36 w-16 h-16 md:-right-25 lg:-right-35 lg:w-24 lg:h-34 z-20 pointer-events-none select-none"
        style={{}}
      />

      {/* Background stacked card for depth effect - more prominent green shadow */}
      <div
        className="absolute top-4 left-4 w-full h-full rounded-2xl border-2 border-black"
        style={{ backgroundColor: '#C6F806' }}
      ></div>

      {/* Main card */}
      <div className="relative bg-[#FFEABB] rounded-2xl p-6 lg:p-8 shadow-xl border-2 border-black max-w-2xl w-[95%] mx-auto sm:w-[90%] md:w-[95%] md:max-w-lg">
        {/* Card header with title */}
        <div className="mb-4">
          <h3
            className="text-2xl lg:text-3xl font-bold text-black leading-tight text-left"
            style={{ fontFamily: 'Bowlby One SC' }}
          >
            {title}
          </h3>
        </div>

        {/* Description text */}
        <div className="mb-6">
          <p
            className="text-black text-base lg:text-lg leading-relaxed text-left"
            style={{ fontFamily: 'CascadiaCode' }}
          >
            {description}
          </p>
        </div>

        {/* Bottom section with squares and button */}
        <div className="flex justify-between items-end">
          {/* Blue squares decoration - positioned at bottom left */}
          <div className="relative w-8 h-8">
            {/* Bottom left square */}
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-blue-600 border-2 border-black"></div>
            {/* Top right square */}
            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-600 border-2 border-black"></div>
          </div>

          {/* Register button container - positioned at bottom right */}
          <div className="relative">
            {/* Sparkle image at top left of button */}
            <div className="absolute -top-4 -left-5 z-10">
              <img
                src={SparkleImage}
                alt="Sparkle"
                className="w-6 h-6 lg:w-8 lg:h-8 object-contain"
              />
            </div>

            {/* Register button */}
            <button
              onClick={onRegisterClick}
              className="text-black px-6 py-3 rounded-full font-bold text-lg transition-all duration-150 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-1"
              style={{ fontFamily: 'CascadiaCode', backgroundColor: '#C6F806' }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StackedCard
