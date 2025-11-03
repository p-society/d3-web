import React, { useState, useRef, useLayoutEffect, useCallback, useEffect, useMemo } from 'react'
import './Sponsors.css'
import circleImage from '../../assets/circles.webp'
import sparklesImage from '../../assets/sparkles.webp'
import Logo from '../../assets/comingsoon.webp'
import iete from '../../assets/iete.webp'
import ietl from '../../assets/ietl.webp'
import iiitbgp from '../../assets/iiitbgp.webp'
import issacc from '../../assets/issacc.webp'
import logo from '../../assets/logo.webp'
import mitj from '../../assets/mitj.webp'
import nitj from '../../assets/nitj.webp'
import nsut from '../../assets/nsut.webp'
import sitp from '../../assets/sitp.webp'
import vitap from '../../assets/vitap.webp'
import vitc from '../../assets/vitc.webp'

import bitm from '../../assets/bitm.webp'
import igdtuw from '../../assets/igdtuw.webp'
import jgec from '../../assets/jgec.webp'
import nfsu from '../../assets/nfsu.webp'
import rvu from '../../assets/rvu.webp'
import svce from '../../assets/svce.webp'

import hamleys from '../../assets/hamleys.webp'
import aeropioneer from '../../assets/aeropioneer.webp'

const sponsorLogos = [hamleys, aeropioneer, hamleys, aeropioneer, hamleys, aeropioneer]

const coOrganiserLogos = [iete, ietl, iiitbgp, issacc, logo, mitj, nitj, nsut, sitp, vitap, vitc]

const communityLogos = [bitm, igdtuw, jgec, nfsu, rvu, svce]

const TAB_CONFIG = {
  sponsors: {
    logos: sponsorLogos,
    title: 'SPONSORS',
  },
  'co-organisers': {
    logos: coOrganiserLogos,
    title: 'CO-ORGANISERS',
  },
  community: {
    logos: communityLogos,
    title: 'COMMUNITY PARTNERS',
  },
}

const ANIMATION_DELAYS = {
  tabSelector: '300ms',
  title: '500ms',
  logos: '700ms',
}

const SponsorsComponent = ({ isLoaded }) => {
  const [activeTab, setActiveTab] = useState('sponsors')
  const [sliderStyle, setSliderStyle] = useState({})
  const [isFlipping, setIsFlipping] = useState(false)

  const triggerFlip = useCallback(() => {
    clearTimeout(timeoutRef.current)
    setIsFlipping(true)
    timeoutRef.current = setTimeout(() => setIsFlipping(false), 600)
  }, [])

  const buttonRefs = useRef({
    sponsors: null,
    'co-organisers': null,
    community: null,
  })
  const containerRef = useRef(null)

  const timeoutRef = useRef(null)

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current)
  }, [])

  const updateSlider = useCallback(() => {
    if (!containerRef.current) return
    const activeButton = buttonRefs.current[activeTab]
    if (activeButton) {
      setSliderStyle({
        left: `${activeButton.offsetLeft}px`,
        width: `${activeButton.offsetWidth}px`,
      })
    }
  }, [activeTab])

  useLayoutEffect(() => {
    updateSlider()
    window.addEventListener('resize', updateSlider)
    return () => window.removeEventListener('resize', updateSlider)
  }, [updateSlider])

  const currentTabData = useMemo(() => TAB_CONFIG[activeTab], [activeTab])

  const repeatedLogos = useMemo(() => {
    const { logos } = currentTabData
    return [...logos, ...logos]
  }, [currentTabData])

  const handleTabChange = useCallback(
    tab => {
      setActiveTab(tab)
      triggerFlip()
    },
    [triggerFlip]
  )

  const renderTabButton = useCallback(
    (tabKey, label) => (
      <button
        key={tabKey}
        ref={el => (buttonRefs.current[tabKey] = el)}
        onClick={() => handleTabChange(tabKey)}
        className="px-3 sm:px-6 py-2 rounded-full text-xs sm:text-sm md:text-base font-['ADLaM_Display'] font-bold transition-colors duration-300 z-10 relative hover:text-gray-600"
        aria-pressed={activeTab === tabKey}
      >
        {label}
      </button>
    ),
    [activeTab, handleTabChange]
  )

  return (
    <div className="relative w-full max-w-7xl mx-auto transition-all px-4 sm:px-8 py-12">
      <img
        src={circleImage}
        alt=""
        className="w-24 lg:w-48 h-auto object-contain absolute top-2 left-0 hidden md:block"
      />
      <img
        src={sparklesImage}
        alt=""
        className="w-24 lg:w-48 h-auto object-contain absolute top-0 right-0 hidden md:block"
      />

      <div className="flex flex-col gap-16 sm:gap-20 pt-2">
        <div
          className={`flex justify-center transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{ transitionDelay: ANIMATION_DELAYS.tabSelector }}
        >
          <div
            ref={containerRef}
            className="bg-white rounded-full border-2 border-black p-1 flex items-center gap-1 sm:gap-1 relative max-w-full overflow-hidden"
            role="tablist"
          >
            <span
              className="absolute -inset-y-[1px] -inset-x-[1px] bg-[#c6f806] rounded-full transition-all duration-300 ease-in-out"
              style={sliderStyle}
              aria-hidden="true"
            />
            {renderTabButton('sponsors', 'SPONSORS')}
            <div className="w-px h-5 bg-black opacity-30 z-10" aria-hidden="true" />
            {renderTabButton('co-organisers', 'CO-ORGANISERS')}
            <div className="w-px h-5 bg-black opacity-30 z-10" aria-hidden="true" />
            {renderTabButton('community', 'COMMUNITY PARTNERS')}
          </div>
        </div>

        <div
          className={`flex justify-center transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{ transitionDelay: ANIMATION_DELAYS.title }}
        >
          <div
            className={`p-3 bg-[#ff8c34] rounded-full border-2 border-solid border-black transform -rotate-7 cursor-pointer
              ${isFlipping ? 'coin-flip' : ''}`}
            onClick={triggerFlip}
          >
            <div className="bg-[#ff8c34] text-black font-['ADLaM_Display'] font-bold text-2xl sm:text-4xl p-0.5 sm:p-5 rounded-full border-2 border-dashed border-black">
              <div className="relative h-26 w-64 text-center overflow-hidden">
                <span
                  key={activeTab}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    isFlipping ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {currentTabData.title}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`inline-flex h-56 sm:h-64 w-full flex-nowrap overflow-hidden
                      mask-gradient transition-all duration-700 ease-out ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                      }`}
          style={{ transitionDelay: ANIMATION_DELAYS.logos }}
        >
          <ul
            key={activeTab}
            className="flex items-center justify-start min-w-full shrink-0 [&_li]:mx-10 animate-infinite-scroll animate-fade-in"
            role="list"
          >
            {repeatedLogos.map((logo, index) => (
              <li key={`${activeTab}-${index}`} role="listitem">
                <div className="w-40 h-40 sm:w-48 sm:h-48 bg-white rounded-2xl border-4 border-[#c6f806] shadow-lg flex items-center justify-center p-2 overflow-hidden">
                  <img
                    src={logo}
                    alt={`Logo ${Math.floor(index / 4) + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SponsorsComponent
