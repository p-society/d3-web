import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedin, FaXTwitter, FaLink } from 'react-icons/fa6'
import Navbar from '../components/landingpage/navbar'
import Button from '../components/buttons'
import d3Logo from '../assets/d3-.webp'
import decorLogo from '../assets/decorBottom.webp'
import vectorTop from '../assets/top-vector.svg'
import brokenScreen from '../assets/brokenScreen.webp'
import useRouteAnimation from '../utils/animatie'
import '../components/landingpage/hero.css'

const NotFound = () => {
  const isLoaded = useRouteAnimation()

  return (
    <div className="min-h-screen sm:h-screen bg-[#ffeabb] relative overflow-x-hidden sm:overflow-hidden">
      {/* Centered container wrapper */}
      <div className="max-w-screen-2xl mx-auto relative min-h-full sm:h-full">
        <div className="w-full flex justify-center pt-2">
          <Navbar isLoaded={isLoaded} />
        </div>

        {/* Main 404 Content - Artistic rotated text */}
        <div
          className={`min-h-screen w-full flex items-start justify-center relative z-20 transition-all duration-700 ease-out pt-20 sm:pt-32`}
          style={{ transitionDelay: '300ms' }}
        >
          {/* Main 404 text - large and rotated */}
          <div
            className={`text-center relative transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <h1
              className="lemon-smash-font text-[#e30f70] font-bold leading-none transform rotate-[-8deg] skew-x-[-5deg] drop-shadow-2xl"
              style={{
                fontSize: 'clamp(8rem, 20vw, 18rem)',
                filter: 'drop-shadow(8px 8px 0px rgba(0,0,0,0.3))',
              }}
            >
              404!
            </h1>

            {/* Smaller "Page not Found" text - also rotated but less */}
            <h2
              className="lemon-smash-font text-[#e30f70] font-bold leading-tight transform rotate-[3deg] skew-x-[2deg] mt-4 drop-shadow-xl"
              style={{
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                filter: 'drop-shadow(4px 4px 0px rgba(0,0,0,0.3))',
              }}
            >
              Page not Found
            </h2>
          </div>

          {/* Broken screen image - positioned artistically and moved up */}
          <div
            className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none transition-all duration-700 ease-out ${isLoaded ? 'opacity-30 translate-y-0' : 'opacity-0 translate-y-3'}`}
            style={{ zIndex: -1, transitionDelay: '600ms' }}
          >
            <img
              src={brokenScreen}
              alt="Broken computer screen - 404 error"
              className="w-64 sm:w-80 md:w-96 h-auto object-contain transform rotate-12"
            />
          </div>

          {/* Description and buttons - positioned higher up */}
          <div
            className={`absolute bottom-48 left-1/2 transform -translate-x-1/2 text-center max-w-md px-4 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <p className="text-black text-sm sm:text-base font-mono lowercase mb-6 opacity-90">
              oops! the page you're looking for seems to have crashed. don't worry, even the best
              systems have their glitches.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/">
                <Button>Go Home</Button>
              </Link>
              <Link to="/events">
                <Button>Explore Events</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Vector Top in top right corner */}
        <div
          className={`absolute top-1 right-1 z-30 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <img
            src={vectorTop}
            alt="Vector Top"
            className="hidden sm:block w-20 phone:w-24 md:w-32 lg:w-32 xl:w-52 2xl:w-60 h-auto"
          />
        </div>

        {/* Floating Footer */}
        <div
          className={`absolute bottom-0 left-0 right-0 z-30 px-2 phone:px-4 sm:px-8 pb-2 phone:pb-4 sm:pb-6 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
          style={{ transitionDelay: '700ms' }}
        >
          <div className="flex justify-between items-end">
            {/* D3 Logo section - left side */}
            <div
              className={`flex flex-col transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
              style={{ transitionDelay: '800ms' }}
            >
              <img src={d3Logo} alt="D3 Logo" className="w-32 phone:w-40 sm:w-48 md:w-64" />
              <img
                src={decorLogo}
                alt="Decorative Bottom"
                className="w-32 phone:w-40 sm:w-48 md:w-64"
              />
            </div>

            {/* Social Icons - right side */}
            <div className="flex gap-2 phone:gap-3 sm:gap-6 pb-1 phone:pb-2 sm:pb-4">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: '900ms' }}
              >
                <FaInstagram className="text-[#000000] w-5 h-5 phone:w-6 phone:h-6 sm:w-8 sm:h-8 hover:scale-110 transition" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: '1000ms' }}
              >
                <FaLinkedin className="text-[#000000] w-5 h-5 phone:w-6 phone:h-6 sm:w-8 sm:h-8 hover:scale-110 transition" />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: '1100ms' }}
              >
                <FaXTwitter className="text-black w-5 h-5 phone:w-6 phone:h-6 sm:w-8 sm:h-8 hover:scale-110 transition" />
              </a>
              <a
                href="https://unstop.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: '1200ms' }}
              >
                <FaLink className="text-[#000000] w-5 h-5 phone:w-6 phone:h-6 sm:w-8 sm:h-8 hover:scale-110 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
