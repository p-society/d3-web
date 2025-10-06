import React from 'react'
import Navbar from '../components/landingpage/navbar'
import RegisterHero from '../components/register/RegisterHero'
import useRouteAnimation from '../utils/animatie'
import Footer from '../components/landingpage/footer'

const Register = () => {
  const isLoaded = useRouteAnimation()

  return (
    <div className={`min-h-screen bg-[#3366FF] relative overflow-x-hidden flex flex-col`}>
      <div className="w-full flex justify-center pt-2 z-50">
        <Navbar
          isLoaded={isLoaded}
          color="#FFEAAB" // Desktop link text color (light yellow)
          borderColor="#FFEAAB" // Desktop border color (light yellow)
          hoverColor="#FFEAAB" // Hover background for both desktop and mobile (light yellow)
          hoverTextColor="#000000" // Hover text color for both (black)
          sidebarBg="#3366FF" // Mobile sidebar background (blue)
          mobileTextColor="#FFFFFF" // Mobile sidebar text color (white, for contrast)
          hamburgerColor="#3366FF" // Hamburger lines color (blue on the yellow button)
        />
      </div>
      <main className="flex-grow">
        <RegisterHero isLoaded={isLoaded} />
      </main>
      <Footer isLoaded={isLoaded} />
    </div>
  )
}

export default Register
