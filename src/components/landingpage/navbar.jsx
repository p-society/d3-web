import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=" z-20">
      <div className="bg-transparent border-2 border-[#ff0066] rounded-2xl p-2 backdrop-blur-sm">
        <div className="flex gap-8 items-center justify-center px-2">
          <Link
            to="/"
            className="text-[#e30f70] px-4 py-2 rounded-lg font-bold uppercase text-xl tracking-wide hover:bg-[#e30560] hover:text-[#ffffff] transition-colors"
          >
            HOME
          </Link>
          <Link
            to="/events"
            className="text-[#e30f70] px-4 py-2 font-bold rounded-lg uppercase text-xl tracking-wide hover:bg-[#e30560] hover:text-[#ffffff] transition-colors"
          >
            EVENTS
          </Link>
          <button className="text-[#e30f70] px-4 py-2 font-bold rounded-lg uppercase text-xl tracking-wide hover:bg-[#e30560] hover:text-[#ffffff] transition-colors">
            MERCH
          </button>
          <button className="text-[#e30f70] px-4 py-2 font-bold rounded-lg uppercase text-xl tracking-wide hover:bg-[#e30560] hover:text-[#ffffff] transition-colors">
            CONTACT US
          </button>
          <Link
            to="/about-us"
            className="text-[#e30f70] px-4 py-2 font-bold rounded-lg uppercase text-xl tracking-wide hover:bg-[#e30560] hover:text-[#ffffff] transition-colors"
          >
            ABOUT US
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
