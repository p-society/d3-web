// // import React, { useEffect, useState } from 'react'
// import { FaInstagram, FaLinkedin, FaXTwitter, FaLink } from 'react-icons/fa6'
// import Navbar from '../components/landingpage/navbar'
// import Hero from '../components/landingpage/hero'
// import d3Logo from '../assets/d3-.png'
// import decorLogo from '../assets/decorBottom.png'
// import vectorTop from '../assets/top-vector.svg'
// import useRouteAnimation from '../utils/animatie'
// import Footer from '../components/landingpage/footer'

// const Landingpage = () => {
//   const isLoaded = useRouteAnimation()

//   return (
//     <div className="min-h-screen sm:h-screen bg-[#ffeabb] relative overflow-x-hidden sm:overflow-hidden">
//       {/* Centered container wrapper */}
//       <div className="max-w-screen-2xl mx-auto relative min-h-full sm:h-full">
//         <div className="w-full flex justify-center pt-2">
//           <Navbar isLoaded={isLoaded} />
//         </div>
//         <Hero isLoaded={isLoaded} />

//         {/* Vector Top in top right corner */}
//         <div
//           className={`absolute top-1 right-1 z-30 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
//           style={{ transitionDelay: '500ms' }}
//         >
//           <img
//             src={vectorTop}
//             alt="Vector Top"
//             className="hidden sm:block w-20 phone:w-24 md:w-32 lg:w-32 xl:w-52 2xl:w-60 h-auto"
//           />
//         </div>

//         {/* Floating Footer */}

//         <Footer isLoaded={isLoaded} />
//       </div>
//       {/* <Event /> */}
//     </div>
//   )
// }

// export default Landingpage

import { FaInstagram, FaLinkedin, FaXTwitter, FaLink } from 'react-icons/fa6'
import Navbar from '../components/landingpage/navbar'
import Hero from '../components/landingpage/hero'
import vectorTop from '../assets/top-vector.svg'
import useRouteAnimation from '../utils/animatie'
import Footer from '../components/landingpage/footer'

const Landingpage = () => {
  const isLoaded = useRouteAnimation()

  return (
    <div className="min-h-screen bg-[#ffeabb] relative overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto relative min-h-screen flex flex-col">
        <div className="w-full flex justify-center pt-2 z-30">
          <Navbar isLoaded={isLoaded} />
        </div>

        <Hero isLoaded={isLoaded} />

        {/* Vector Top */}
        <div
          className={`absolute top-1 right-1 z-30 transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <img
            src={vectorTop}
            alt="Vector Top"
            className="hidden sm:block w-20 phone:w-24 md:w-32 lg:w-32 xl:w-52 2xl:w-60 h-auto"
          />
        </div>

        {/* Spacer pushes footer down */}
        <div className="flex-grow"></div>

        {/* Footer */}
        <div className="absolute md:relative bottom-0 w-full">
          <Footer isLoaded={isLoaded} />
        </div>
      </div>
    </div>
  )
}

export default Landingpage
