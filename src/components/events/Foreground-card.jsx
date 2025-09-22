import React from 'react'

const ForegroundCard = ({
  eventName,
  eventDescription,
  applyLink,
  imagePosition = 'left', // default left
}) => {
  const isImageLeft = imagePosition === 'left'

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-8 w-full max-w-[1100px] ${
        isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Image Section */}
      <div className="w-full md:w-[456px] h-80 bg-zinc-300 rounded-3xl relative flex-shrink-0">
        <img src="" alt={eventName} className="absolute top-0 left-0" />

        {/* Decorative Circles */}
        {isImageLeft ? (
          <>
            {/* Bottom Right Circle */}
            <div className="w-24 h-24 bg-lime-400 rounded-full border-[3px] border-black absolute bottom-[-29.91px] right-[-10px] md:right-[-38.32px]" />

            {/* Top Left Dotted Circle */}
            <div className="absolute top-[-20px] left-[-10px] md:left-[-20px] flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-4 border-black border-dotted absolute" />
              <div className="w-12 h-12 bg-lime-400 rounded-full border-[3px] border-black relative z-10" />
            </div>
          </>
        ) : (
          <>
            {/* Bottom Left Circle */}
            <div className="w-24 h-24 bg-lime-400 rounded-full border-[3px] border-black absolute bottom-[-29.91px] left-[-10px] md:left-[-38.32px]" />

            {/* Top Right Dotted Circle */}
            <div className="absolute top-[-20px] right-[-10px] md:right-[-20px] flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-4 border-black border-dotted absolute" />
              <div className="w-12 h-12 bg-lime-400 rounded-full border-[3px] border-black relative z-10" />
            </div>
          </>
        )}
      </div>

      {/* Content Section */}
      <div
        className={`max-w-[630px] flex flex-col gap-9 flex-shrink-0 items-center text-center md:items-start md:text-left ${
          isImageLeft ? 'md:items-start' : 'md:items-end md:text-right'
        }`}
      >
        {/* Event Title */}
        <div
          className={`flex flex-col gap-2.5 items-center ${
            isImageLeft ? 'md:items-start' : 'md:items-end'
          }`}
        >
          <h2 className={`text-black font-bold text-4xl font-['ADLaM_Display'] leading-[48px]`}>
            {eventName}
          </h2>
          <div
            className={`w-60 h-0 outline-3 outline-offset-[-2px] outline-lime-400 rounded-full`}
          />
        </div>

        {/* Description */}
        <p className={`max-w-[610px] text-black text-xl font-['Cascadia_Code'] lowercase`}>
          {eventDescription}
        </p>

        {/* Apply Button */}
        <a
          href={applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center px-6 py-3 rounded-full bg-lime-400 font-['Aclonica'] text-lg text-black outline outline-2 outline-black shadow-[0px_7px_0px_0px_rgba(0,0,0,1)]"
        >
          Apply Now
        </a>
      </div>
    </div>
  )
}

export default ForegroundCard
