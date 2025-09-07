import React from 'react'

const Navbar = () => {
  return (
    <nav className=" z-20">
      <div className="bg-transparent border-2 border-[#ff0066] rounded-2xl p-2 backdrop-blur-sm">
        <div className="flex gap-8 items-center justify-center px-2">
          <button className="text-[#e30f70] px-4 py-2 rounded-lg font-bold uppercase text-xl tracking-wide hover:bg-[#e30560] hover:text-[#ffffff] transition-colors">
            HOME
          </button>
          <button className="text-[#e30f70] px-4 py-2 font-bold rounded-lg uppercase text-xl tracking-wide hover:bg-[#e30560] hover:text-[#ffffff] transition-colors">
            EVENTS
          </button>
          <button className="text-[#e30f70] px-4 py-2 font-bold rounded-lg uppercase text-xl tracking-wide hover:bg-[#e30560] hover:text-[#ffffff] transition-colors">
            MERCH
          </button>
          <button className="text-[#e30f70] px-4 py-2 font-bold rounded-lg uppercase text-xl tracking-wide hover:bg-[#e30560] hover:text-[#ffffff] transition-colors">
            CONTACT US
          </button>
          <button className="text-[#e30f70] px-4 py-2 font-bold rounded-lg uppercase text-xl tracking-wide hover:bg-[#e30560] hover:text-[#ffffff] transition-colors">
            ABOUT US
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
