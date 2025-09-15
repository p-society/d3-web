import React from 'react'

const StackedCard = ({
  title = 'D3 TECH FEST',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut at massa mi, aliquam in hendrerit urna, pellentesque sit amet elit, ut et massa mi, aliquam in hendrerit urna, pellentesque sit amet',
  buttonText = 'Register Now',
  onRegisterClick = () => {},
  className = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Background stacked cards for depth effect */}
      <div className="absolute top-2 left-2 w-full h-full bg-green-400 rounded-2xl opacity-60"></div>
      <div className="absolute top-1 left-1 w-full h-full bg-yellow-300 rounded-2xl opacity-70"></div>

      {/* Main card */}
      <div className="relative bg-[#FFEABB] rounded-2xl p-8 shadow-xl border-4 border-black">
        {/* Card header with title */}
        <div className="mb-6">
          <h3
            className="text-2xl lg:text-3xl font-bold text-black leading-tight text-left"
            style={{ fontFamily: 'Bowlby One SC' }}
          >
            {title}
          </h3>
        </div>

        {/* Description text */}
        <div className="mb-8">
          <p
            className="text-black text-base lg:text-lg leading-relaxed text-left"
            style={{ fontFamily: 'CascadiaCode' }}
          >
            {description}
          </p>
        </div>

        {/* Register button container */}
        <div className="flex items-center">
          {/* Blue squares decoration */}
          <div className="flex items-center mr-6">
            <div className="w-4 h-4 bg-blue-600 mr-1"></div>
            <div className="w-4 h-4 bg-blue-600"></div>
          </div>

          {/* Register button */}
          <button
            onClick={onRegisterClick}
            className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-black"
            style={{ fontFamily: 'CascadiaCode' }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default StackedCard
