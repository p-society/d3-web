import React from 'react'
import Button from '../buttons'

const ForegroundCard = ({
  eventName,
  eventDescription,
  applyLink,
  imagePosition = 'left',
  imageSrc,
}) => {
  const isImageLeft = imagePosition === 'left'

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-4 sm:gap-8 w-full max-w-[1100px] ${
        isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Image Section */}
      <div className="w-full md:w-[456px] h-60 sm:h-80 bg-zinc-300 rounded-3xl relative flex-shrink-0">
        <img
          src={imageSrc}
          alt={eventName}
          className="absolute  top-0 left-0 w-full h-full object-cover rounded-3xl"
        />

        {/* Decorative Circles */}
        {isImageLeft ? (
          <>
            <div className="w-24 h-24 bg-lime-400 rounded-full border-[3px] border-black absolute bottom-[-29.91px] right-[-10px] md:right-[-38.32px]" />
            <div className="absolute top-[-20px] left-[-10px] md:left-[-20px] flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-4 border-black border-dotted absolute" />
              <div className="w-12 h-12 bg-lime-400 rounded-full border-[3px] border-black relative z-10" />
            </div>
          </>
        ) : (
          <>
            <div className="w-24 h-24 bg-lime-400 rounded-full border-[3px] border-black absolute bottom-[-29.91px] left-[-10px] md:left-[-38.32px]" />
            <div className="absolute top-[-20px] right-[-10px] md:right-[-20px] flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-4 border-black border-dotted absolute" />
              <div className="w-12 h-12 bg-lime-400 rounded-full border-[3px] border-black relative z-10" />
            </div>
          </>
        )}
      </div>

      {/* Content Section */}
      <div
        className={`max-w-[630px] flex flex-col gap-4 sm:gap-9 flex-shrink-0 items-center text-center md:items-start md:text-left ${
          isImageLeft ? 'md:items-start' : 'md:items-end md:text-right'
        }`}
      >
        <div
          className={`flex flex-col gap-2.5 items-center ${
            isImageLeft ? 'md:items-start' : 'md:items-end'
          }`}
        >
          <h2
            className={`text-black font-bold text-3xl sm:text-4xl font-['ADLaM_Display'] leading-tight sm:leading-[48px]`}
          >
            {eventName}
          </h2>
          <div
            className={`w-60 h-0 outline-3 outline-offset-[-2px] outline-lime-400 rounded-full`}
          />
        </div>

        <p
          className={`max-w-[610px] text-black text-base sm:text-xl font-['Cascadia_Code'] lowercase`}
        >
          {eventDescription}
        </p>

        <Button href={applyLink} className="w-full md:w-auto">
          Register Now
        </Button>
      </div>
    </div>
  )
}

export default ForegroundCard
