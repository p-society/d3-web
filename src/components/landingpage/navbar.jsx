import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({
  isLoaded,
  hamburgerColor = 'white',
  // New optional props with safe defaults to preserve current production look
  color = '#e30f70', // link text color + hamburger bg
  hoverColor = '#e30560', // hover background color
  hoverTextColor = '#ffffff', // hover text color
  borderColor = '#ff0066', // borders (desktop frame + mobile sidebar border)
  sidebarBg = '#ffeabb', // mobile sidebar background
  mobileTextColor, // NEW: mobile sidebar text color
}) => {
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
    // Provide CSS variables for all child elements
    <div
      style={{
        ['--nav-color']: color,
        ['--nav-hover']: hoverColor,
        ['--nav-hover-text']: hoverTextColor,
        ['--nav-border']: borderColor,
        ['--nav-sidebar-bg']: sidebarBg,
        // Use mobileTextColor if provided, otherwise fall back to the main color
        ['--nav-mobile-text']: mobileTextColor || color,
      }}
    >
      {/* Local styles to hook into CSS variables without changing layout classes */}
      <style>{`
        .nav-link-desktop { color: var(--nav-color); }
        .nav-link-desktop:hover { background-color: var(--nav-hover); color: var(--nav-hover-text); }
        .nav-link-mobile { color: var(--nav-mobile-text); }
        .nav-link-mobile:hover { background-color: var(--nav-hover); color: var(--nav-hover-text); }
        .nav-hamburger { background-color: var(--nav-color); }
        .nav-hamburger:hover { background-color: var(--nav-hover); }
        .nav-border { border-color: var(--nav-border) !important; }
        .nav-sidebar { background-color: var(--nav-sidebar-bg); }
      `}</style>

      {/* Hamburger Menu Button - visible on sm and md only */}
      <div className="lg:hidden z-50 fixed top-4 right-4">
        <button
          onClick={toggleSidebar}
          className={`nav-hamburger text-white p-2 rounded-lg focus:outline-none transition-all duration-300 ${isOpen ? 'rotate-[360deg] scale-110' : ''}`}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}
              style={{ backgroundColor: hamburgerColor }}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
              style={{ backgroundColor: hamburgerColor }}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}
              style={{ backgroundColor: hamburgerColor }}
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
          className={`fixed inset-0 bg-black opacity-80 transition-opacity duration-300 ${isOpen ? 'bg-opacity-50' : 'bg-opacity-0'}`}
          onClick={closeSidebar}
        ></div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 nav-sidebar border-l-2 nav-border transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col pt-16 px-4">
            {/* Menu items with staggered animation */}
            <Link
              to="/"
              onClick={closeSidebar}
              className={`nav-link-mobile px-4 py-3 mb-2 rounded-lg font-bold uppercase text-xl tracking-wide transition-all duration-300 transform ${animateItems ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              style={{ transitionDelay: '50ms' }}
            >
              HOME
            </Link>
            <Link
              to="/about-us"
              onClick={closeSidebar}
              className={`nav-link-mobile px-4 py-3 mb-2 rounded-lg font-bold uppercase text-xl tracking-wide transition-all duration-300 transform ${animateItems ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              style={{ transitionDelay: '100ms' }}
            >
              ABOUT US
            </Link>
            <Link
              to="/events"
              onClick={closeSidebar}
              className={`nav-link-mobile px-4 py-3 mb-2 font-bold rounded-lg uppercase text-xl tracking-wide transition-all duration-300 transform ${animateItems ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              style={{ transitionDelay: '150ms' }}
            >
              EVENTS
            </Link>
            {/* <button
              onClick={closeSidebar}
              className={`nav-link-mobile px-4 py-3 mb-2 font-bold rounded-lg uppercase text-xl tracking-wide transition-all duration-300 transform ${animateItems ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'} text-left`}
              style={{ transitionDelay: '150ms' }}
            >
              MERCH
            </button> */}
            <Link
              to="/contact-us"
              onClick={closeSidebar}
              className={`nav-link-mobile px-4 py-3 mb-2 font-bold rounded-lg uppercase text-xl tracking-wide transition-all duration-300 transform ${animateItems ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              style={{ transitionDelay: '200ms' }}
            >
              CONTACT US
            </Link>
            <Link
              to="/register"
              onClick={closeSidebar}
              className={`nav-link-mobile px-4 py-3 mb-2 font-bold rounded-lg uppercase text-xl tracking-wide transition-all duration-300 transform ${animateItems ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              style={{ transitionDelay: '250ms' }}
            >
              REGISTER
            </Link>
            <Link
              to="/sponsors"
              onClick={closeSidebar}
              className={`nav-link-mobile px-4 py-3 mb-2 font-bold rounded-lg uppercase text-xl tracking-wide transition-all duration-300 transform ${animateItems ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              style={{ transitionDelay: '300ms' }}
            >
              SPONSORS
            </Link>
            <Link
              to="/merch"
              onClick={closeSidebar}
              className={`nav-link-mobile px-4 py-3 mb-2 font-bold rounded-lg uppercase text-xl tracking-wide transition-all duration-300 transform ${animateItems ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              style={{ transitionDelay: '350ms' }}
            >
              MERCH
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Navbar - visible on lg and above only */}
      <nav
        className={`hidden lg:block z-20 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
        style={{ transitionDelay: '100ms' }}
      >
        <div className="bg-transparent border-2 nav-border rounded-2xl p-2 backdrop-blur-sm">
          <div className="flex gap-5 items-center justify-center px-2">
            <Link
              to="/"
              className="nav-link-desktop px-4 py-2 rounded-lg font-bold uppercase text-xl tracking-wide transition-colors"
            >
              HOME
            </Link>
            <Link
              to="/about-us"
              className="nav-link-desktop px-4 py-2 rounded-lg font-bold uppercase text-xl tracking-wide transition-colors"
            >
              ABOUT US
            </Link>
            <Link
              to="/events"
              className="nav-link-desktop px-4 py-2 font-bold rounded-lg uppercase text-xl tracking-wide transition-colors"
            >
              EVENTS
            </Link>
            <Link
              to="/contact-us"
              className="nav-link-desktop px-4 py-2 font-bold rounded-lg uppercase text-xl tracking-wide transition-colors"
            >
              CONTACT US
            </Link>
            <Link
              to="/register"
              className="nav-link-desktop px-4 py-2 font-bold rounded-lg uppercase text-xl tracking-wide transition-colors"
            >
              REGISTER
            </Link>
            <Link
              to="/sponsors"
              className="nav-link-desktop px-4 py-2 font-bold rounded-lg uppercase text-xl tracking-wide transition-colors"
            >
              SPONSORS
            </Link>
            <Link
              to="/merch"
              className="nav-link-desktop px-4 py-2 font-bold rounded-lg uppercase text-xl tracking-wide transition-colors"
            >
              MERCH
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
