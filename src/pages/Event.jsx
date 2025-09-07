import React from 'react'
import BgcardStack from '../components/events/Bgcard-stack'
import ForegroundCard from '../components/events/Foreground-card'
import Navbar from '../components/landingpage/navbar'
export default function Event() {
  return (
    <div className="min-h-screen bg-[#ffeabb] max-w-screen relative overflow-hidden">
      <div className="w-full flex mt-2 justify-center">
        <Navbar />{' '}
      </div>
      <div>
        <BgcardStack
          prop={{ isright: false, color: '#4271FF' }}
          ComponentToRender={ForegroundCard}
          componentProps={{
            eventName: 'Sample Event',
            eventDescription: 'This is a sample event description.',
            applyLink: 'https://example.com/apply',
            imagePosition: 'left',
          }}
        />
        <BgcardStack
          prop={{ isright: true, color: '#FFEABB' }}
          ComponentToRender={ForegroundCard}
          componentProps={{
            eventName: 'Sample Event',
            eventDescription: 'This is a sample event description.',
            applyLink: 'https://example.com/apply',
            imagePosition: 'right',
          }}
        />
      </div>
    </div>
  )
}
