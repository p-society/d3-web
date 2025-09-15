import React from 'react'
import Register from './register'
import StackedCard from './StackedCard'
import RegistrationsBanner from './RegistrationsBanner'

const AboutUsHero = () => {
  return (
    <div className="relative px-8 py-16 overflow-hidden">
      {/* Background*/}
      <div className="absolute inset-0 bg-[#3366FF] opacity-90"></div>

      {/* Main content container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left column - Hero title and Stacked Card */}
          <div className="space-y-8">
            {/* Hero title section */}
            <div className="text-center lg:text-left relative">
              <h1
                className="text-4xl lg:text-6xl mb-6 leading-tight"
                style={{ fontFamily: 'Alfa Slab One', color: '#FFEABB' }}
              >
                Unleash
                <br />
                <span>Your Potential.</span>
              </h1>

              {/* Registrations Banner - positioned at top right */}
              <div className="absolute -top-12 -right-18 lg:-right-60 lg:top-3">
                <div className="transform rotate-[7deg]">
                  <RegistrationsBanner />
                </div>
              </div>
            </div>

            {/* Stacked Card section */}
            <div className="flex justify-center lg:justify-start">
              <StackedCard
                title="D3 TECH FEST"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut at massa mi, aliquam in hendrerit urna, pellentesque sit amet elit, ut et massa mi, aliquam in hendrerit urna, pellentesque sit amet"
                buttonText="Register Now"
                className="max-w-md"
                onRegisterClick={() => console.log('Register clicked')}
              />
            </div>
          </div>

          {/* Right column - Empty for now */}
          <div className="hidden lg:block">{/* Right column content can be added here */}</div>
        </div>

        {/* Register component below columns */}
        <div className="flex justify-center">
          <Register />
        </div>
      </div>
    </div>
  )
}

export default AboutUsHero
