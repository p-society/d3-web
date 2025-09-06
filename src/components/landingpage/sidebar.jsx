import React from 'react'

const Sidebar = () => {
  return (
    <div className="fixed left-20 top-0 h-1/2 flex items-start justify-start">
      {/* Vertical bars - pink, lime/yellow, orange with proper spacing from edge */}
      <div className="flex h-full">
        <div className="w-14 h-full bg-[#ff0066] border-2 border-black"></div>
        <div className="w-14 h-full bg-[#c6f806] border-2 border-black"></div>
        <div className="w-14 h-full bg-[#ff8c34] border-2 border-black"></div>
      </div>
    </div>
  )
}

export default Sidebar
