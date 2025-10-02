import React, { useEffect, useState } from 'react'
import vector17 from '../assets/Vector-17.svg'
import vector18 from '../assets/Vector-18.svg'
import sparkles from '../assets/Sparkles.svg'
import circle from '../assets/circle-svg.svg'
import { MerchCard } from '../components/MerchCard'
import Navbar from '../components/landingpage/navbar'
import Button from '../components/buttons'
import Footer from '../components/landingpage/footer'

const BackgroundTitle = () => (
  <div className="w-full text-center">
    <span className="text-[#FF8C34] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-['Alfa_Slab_One']">
      DARE
    </span>
    <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-['Alfa_Slab_One']">
      , DREAM ,
    </span>
    <span className="text-[#ED4F30] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-['Alfa_Slab_One']">
      DEVELOP
    </span>
  </div>
)

export const Merch = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-[#FFEABB] w-full min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="w-full flex justify-center relative z-50 pt-2">
        <Navbar isLoaded={isLoaded} />
      </div>

      <main className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col gap-12">
        {/* Background Titles & Merch Banner */}
        <section className="relative flex flex-col items-center pt-7 gap-3 sm:gap-4 md:gap-6">
          {['0ms', '100ms', '200ms', '300ms'].map((delay, idx) => (
            <div
              key={idx}
              className={`transition-all duration-500 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: delay }}
            >
              <BackgroundTitle />
            </div>
          ))}

          {/* Merch Banner */}
          <div
            className={`absolute w-32 sm:w-36 md:w-[11.25rem] lg:w-[12.5rem] xl:w-[13.75rem] h-16 sm:h-20 md:h-24 lg:h-28 transition-all duration-500 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="absolute w-full top-[4rem] xl:top-[5rem] left-[0rem] p-[0.3rem] bg-[#3366FF] rounded-[3rem] md:rounded-[3.5rem] border-2 md:border-[3px] border-black origin-top-left -rotate-6 md:-rotate-8">
              <div className="w-full h-full bg-[#3366FF] rounded-3xl md:rounded-[3.5rem] border-2 md:border-[3px] border-dashed border-[#FFEABB] flex items-center justify-center">
                <div className="text-center text-[#FFEABB] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['Bowlby_One_SC']">
                  Merch
                </div>
              </div>
            </div>
          </div>

          {/* Sparkles */}
          <img
            src={sparkles}
            alt="Sparkles"
            className={`hidden md:block absolute top-6 w-[10rem] lg:w-[12rem] xl:w-[16rem] 2xl:w-[18rem] right-[-3rem] lg:right-[-1.5rem] 2xl:right-[5rem] transition-all duration-500 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: '500ms' }}
          />
          <img
            src={circle}
            alt="Circle"
            className={`hidden md:block absolute top-6 w-[10rem] lg:w-[12rem] xl:w-[16rem] 2xl:w-[18rem] left-[-3rem] lg:left-[0rem] xl:left-[-1rem] 2xl:left-[4rem] transition-all duration-500 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: '600ms' }}
          />
        </section>

        {/* Merch Cards & Buttons */}
        <section className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end pb-5">
          {/* Left decoration */}
          <div
            className={`hidden md:flex justify-end transition-all duration-500 ease-out ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <img src={vector17} alt="Decorative graphic" className="w-24 lg:w-32" />
          </div>

          {/* Cards */}
          <div className="col-span-3 flex flex-col items-center w-full gap-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
              <MerchCard cardText="Front View" isLoaded={isLoaded} delay="750ms" />
              <MerchCard cardText="Back View" isLoaded={isLoaded} delay="800ms" />
            </div>

            {/* Buy button */}
            <div
              className={`flex justify-center mt-6 sm:mt-8 md:mt-10 transition-all duration-500 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: '850ms' }}
            >
              <Button className="bg-blue-400 hover:bg-blue-500 font-aclonica">BUY NOW</Button>
            </div>
          </div>

          {/* Right decoration */}
          <div
            className={`hidden md:flex justify-start transition-all duration-500 ease-out ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            <img src={vector18} alt="Decorative graphic" className="w-24 lg:w-32" />
          </div>
        </section>
      </main>

      <Footer isLoaded={isLoaded} />
    </div>
  )
}
