import React from 'react'
import D2Image from '../../assets/D2.png'

const RegistrationsBanner = ({ text = 'REGISTRATIONS OPEN', icon = '', className = '' }) => {
  return (
    <div className={`inline-block relative ${className}`}>
      {/* Main banner with relative positioning */}
      <div
        className="relative text-black px-6 py-3 rounded-xl transform -rotate-1 shadow-lg border-2 border-black"
        style={{ backgroundColor: '#C6F806' }}
      >
        <span
          className="text-xl lg:text-4xl font-bold flex items-center justify-center"
          style={{ fontFamily: 'Alfa Slab One' }}
        >
          {text} {icon}
        </span>
        {/* D2 Image in top right corner of the banner */}
        <div className="absolute -top-4 -right-4 z-20">
          <img src={D2Image} alt="D2" className="w-8 h-8 lg:w-15 lg:h-15 object-contain" />
        </div>
      </div>
      {/* Optional shadow/depth effect */}
      <div className="absolute top-1 left-1 bg-gray-900 px-6 py-3 rounded-full transform -rotate-2 -z-10 opacity-60 border-2 border-black"></div>
    </div>
  )
}

export default RegistrationsBanner
