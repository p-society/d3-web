import React from 'react'

// --- Array of positions for the decorative blobs to avoid repetition ---
const blobPositions = [
  { left: '7.9%', top: '15.4%' },
  { left: '-33.6%', top: '49.1%' },
  { left: '-6.3%', top: '53.0%' },
  { left: '-19.3%', top: '84.7%' },
  { left: '23.0%', top: '54.9%' },
  { left: '64.9%', top: '22.1%' },
  { left: '44.9%', top: '59.8%' },
  { left: '34.7%', top: '20.3%' },
  { left: '69.8%', top: '64.0%' },
  { left: '60.6%', top: '97.2%' },
  { left: '23.4%', top: '97.2%' },
  { left: '-2.8%', top: '95.6%' },
]

// Decorative Blob component
const DecorativeBlob = ({ left, top, isLoaded, delay }) => (
  <div
    className={`absolute w-[48%] h-[13.4%] origin-top-left -rotate-45 bg-[#4271FF] rounded-[75px] transition-all duration-700 ease-out ${
      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
    }`}
    style={{ left, top, transitionDelay: delay }}
  />
)

export const MerchCard = ({ cardText = 'Front View', imageSrc, isLoaded, delay = '0ms' }) => {
  return (
    <div
      className={`relative w-full max-w-[388px] aspect-[388/497] mx-auto sm:max-w-[320px] md:max-w-[360px] lg:max-w-[388px] transition-all duration-700 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
      style={{ transitionDelay: delay }}
    >
      {/* Shadow Element */}
      <div className="absolute w-[94.7%] h-[96.3%] left-[5.4%] top-[3.8%] bg-[#171717] rounded-[5vw] md:rounded-[37.5px]" />

      {/* Main Card */}
      <div className="absolute w-[94.7%] h-[96.3%] left-0 top-0 bg-[#3366FF] rounded-[5vw] md:rounded-[37.5px] overflow-hidden">
        {/* Decorative blobs */}
        {blobPositions.map((pos, index) => (
          <DecorativeBlob
            key={index}
            left={pos.left}
            top={pos.top}
            isLoaded={isLoaded}
            delay={`${100 + index * 50}ms`} // staggered fade-in for blobs
          />
        ))}

        {/* Product Image */}
        <div className="absolute w-[85.6%] h-[95%] left-1/2 top-0 transform -translate-x-1/2 flex items-center justify-center">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={cardText}
              className={`w-full h-full object-contain transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: '200ms' }}
            />
          )}
        </div>

        {/* Text */}
        <div
          style={{ fontFamily: 'Aclonica', transitionDelay: '300ms' }}
          className={`absolute w-[70.2%] left-[16.7%] top-[89.1%] text-center text-[#FFEABB] text-lg sm:text-xl md:text-xl lg:text-2xl font-aclonica font-normal leading-tight transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {cardText}
        </div>
      </div>
    </div>
  )
}
