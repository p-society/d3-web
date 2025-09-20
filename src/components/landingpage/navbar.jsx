import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [animateItems, setAnimateItems] = useState(false)

  // Control menu item animations
  useEffect(() => {
    if (isOpen) {
      // Delay menu items animation to start after sidebar opens
      setTimeout(() => setAnimateItems(true), 300)
    } else {
      setAnimateItems(false)
    }
  }, [isOpen])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Hamburger Menu Button - visible on sm and md only */}
      <div className="lg:hidden z-50 fixed top-4 right-4">
        <button
          onClick={toggleSidebar}
          className={`bg-[#e30f70] text-white p-2 rounded-lg focus:outline-none hover:bg-[#e30560] transition-all duration-300 ${isOpen ? 'rotate-[360deg] scale-110' : ''}`}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Sidebar - visible on sm and md only */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'bg-opacity-50' : 'bg-opacity-0'}`}
          onClick={closeSidebar}
        ></div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#ffeabb] border-l-2 border-[#ff0066] transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col pt-16 px-4">
            {/* Menu items with staggered animation */}
            <Link
              to="/"
              onClick={closeSidebar}
              className={`text-[#e30f70] px-4 py-3 mb-2 rounded-lg font-bold uppercase text-xl tracking-wide hover:bg-[#e30560] hover:text-[#ffffff] transition-all duration-300 transform ${animateItems ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              style={{ transitionDelay: '50ms' }}
            >
              HOME
            </Link>
            <Link
              to="/events"
              onClick={closeSidebar}
              className={`text-[#e30f70] px-4 py-3 mb-2 font-bold rounded-lg uppercase text-xl tracking-wide hover:bg-[#e30560] hover:text-[#ffffff] transition-all duration-300 transform ${animateItems ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              style={{ transitionDelay: '100ms' }}
            >
              EVENTS
            </Link>
            <button
              onClick={closeSidebar}
              className={`text-[#e30f70] px-4 py-3 mb-2 font-bold rounded-lg uppercase text-xl tracking-wide hover:bg-[#e30560] hover:text-[#ffffff] transition-all duration-300 transform ${animateItems ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'} text-left`}
              style={{ transitionDelay: '150ms' }}
            >
              MERCH
            </button>
            <button
              onClick={closeSidebar}
              className={`text-[#e30f70] px-4 py-3 mb-2 font-bold rounded-lg uppercase text-xl tracking-wide hover:bg-[#e30560] hover:text-[#ffffff] transition-all duration-300 transform ${animateItems ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'} text-left`}
              style={{ transitionDelay: '200ms' }}
            >
              CONTACT US
            </button>
            <Link
              to="/about-us"
              onClick={closeSidebar}
              className={`text-[#e30f70] px-4 py-3 mb-2 font-bold rounded-lg uppercase text-xl tracking-wide hover:bg-[#e30560] hover:text-[#ffffff] transition-all duration-300 transform ${animateItems ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              style={{ transitionDelay: '250ms' }}
            >
              ABOUT US
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Navbar - visible on lg and above only */}
      <nav className="hidden lg:block z-20">
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
    </>
  )
}

export default Navbar
