import BgcardStack from '../components/events/Bgcard-stack'
import ForegroundCard from '../components/events/Foreground-card'
import Navbar from '../components/landingpage/navbar'
import useRouteAnimation from '../utils/animatie'
import EventHero from '../components/events/EventHero' // Import the new component
import Footer from '../components/landingpage/footer'

// Sample data for events
const eventsData = [
  {
    eventName: 'Sample Event 1',
    eventDescription: 'This is a sample event description for the first event.',
    applyLink: 'https://example.com/apply1',
    color: '#4271FF',
  },
  {
    eventName: 'Sample Event 2',
    eventDescription: 'This is a sample event description for the second event.',
    applyLink: 'https://example.com/apply2',
    color: '#FFEABB',
  },
  {
    eventName: 'Sample Event 3',
    eventDescription: 'This is a sample event description for the third event.',
    applyLink: 'https://example.com/apply3',
    color: '#4271FF',
  },
  {
    eventName: 'Sample Event 4',
    eventDescription: 'This is a sample event description for the fourth event.',
    applyLink: 'https://example.com/apply4',
    color: '#FFEABB',
  },
]

export default function Event() {
  const isLoaded = useRouteAnimation()

  return (
    <div className="page-wrapper">
      <div className="min-h-screen bg-[#ffeabb] w-full relative overflow-x-hidden">
        <div className="w-full flex mt-2 justify-center">
          <Navbar isLoaded={isLoaded} />
        </div>

        {/* === New Hero Section === */}
        <EventHero />

        {/* === Existing Event Cards Section === */}
        <div className="py-16 -mt-25 space-y-0 px-4 md:px-8">
          {eventsData.map((event, index) => {
            const isEven = (index + 1) % 2 === 0
            return (
              <div
                key={index}
                className={`flex w-full ${isEven ? 'justify-end' : 'justify-start'}`}
              >
                <div className="w-full  md:w-auto">
                  <BgcardStack
                    isLoaded={isLoaded}
                    prop={{ isright: isEven, color: event.color }}
                    ComponentToRender={ForegroundCard}
                    componentProps={{
                      eventName: event.eventName,
                      eventDescription: event.eventDescription,
                      applyLink: event.applyLink,
                      imagePosition: isEven ? 'right' : 'left',
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
        <Footer isLoaded={isLoaded} />
      </div>
    </div>
  )
}
