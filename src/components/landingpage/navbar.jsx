import React from 'react'

const Navbar = () => {
  return (
    <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
      <div className="bg-transparent border-2 border-[#ff0066] rounded-2xl p-2">
        <div className="flex gap-6 items-center justify-center">
          <button className="bg-[#ff0066] text-[#ffeabb] px-6 py-2 rounded-lg font-bold uppercase text-sm tracking-wide hover:bg-[#e30560] transition-colors">
            HOME
          </button>
          <button className="text-[#e30f70] px-4 py-2 font-bold uppercase text-sm tracking-wide hover:text-[#ff0066] transition-colors">
            EVENTS
          </button>
          <button className="text-[#e30f70] px-4 py-2 font-bold uppercase text-sm tracking-wide hover:text-[#ff0066] transition-colors">
            MERCH
          </button>
          <button className="text-[#e30f70] px-4 py-2 font-bold uppercase text-sm tracking-wide hover:text-[#ff0066] transition-colors">
            CONTACT US
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
