import BgcardStack from '../components/events/Bgcard-stack'
import ForegroundCard from '../components/events/Foreground-card'
import Navbar from '../components/landingpage/navbar'
import useRouteAnimation from '../utils/animatie'
import EventHero from '../components/events/EventHero'
import Footer from '../components/landingpage/footer'
import col from '../assets/codeolympics.webp'
import rr from '../assets/rewindandrecode.webp'
import bop from '../assets/bitofpast.webp'
import tt from '../assets/terratrek.webp'
import wrkshp from '../assets/workshop.webp'
import row from '../assets/drone.webp'
import ctf from '../assets/ctf.webp'
import roborogue from '../assets/roborogue.webp'
import sts from '../assets/sts.webp'

// Data for events
const eventsData = [
  {
    eventName: 'Rewind and Recode',
    eventDescription:
      'Gear up for the ultimate national-level hackathon, a 24-hour non-stop coding competition. Innovate, collaborate, and solve real-world challenges while competing with top talents from across the country.',
    eventLocation: 'TBD',
    eventTime: '4 PM (7th Nov) – 5 PM (8th Nov)',
    applyLink:
      'https://unstop.com/hackathons/rewind-and-recodeodisha-d3-tech-fest-iiit-bhubaneswar-international-institute-of-information-technology-iiit--1547834',
    color: '#FFEABB',
    image: rr,
  },
  {
    eventName: 'Code-o-lympics',
    eventDescription:
      'Join an ICPC-inspired programming competition where teams of coders solve a series of algorithmic problems. Tackle a variety of computational challenges that test your coding skills, problem-solving abilities, and efficiency.',
    eventLocation: 'CG-05,06,07,08',
    eventTime: '1:30 PM – 4:30 PM (9th Nov)',
    applyLink:
      'https://unstop.com/hackathons/code-o-lympics-d3-tech-fest-iiit-bhubaneswar-international-institute-of-information-technology-iiit-bhubanesw-1563853',
    color: '#ff8c34',
    image: col,
  },
  {
    eventName: 'Workshop.exe',
    eventDescription:
      'Engage in hands-on learning with industry experts in cutting-edge technologies like AI, Blockchain, and Web3. This workshop is designed to provide practical experience and in-depth knowledge in Augmented Reality (AR) and Virtual Reality (VR).',
    eventLocation: 'AG-01 / CG-02',
    eventTime: 'Whole Day (8th Nov)',
    applyLink:
      'https://unstop.com/workshops-webinars/workshopexe-d3-tech-fest-iiit-bhubaneswar-international-institute-of-information-technology-bhubanesw-1512447',
    color: '#4271FF',
    image: wrkshp,
  },
  {
    eventName: 'Bits of Past',
    eventDescription:
      'Join us for an inspiring Tech Talk where leading industry experts and innovators dive into the latest trends. This session will spark new ideas, broaden your perspective, and give you a front-row seat to the future of technology.',
    eventLocation: 'Open Space / CG-02',
    eventTime: '6 PM – 8 PM (8th Nov)',
    applyLink:
      'https://unstop.com/workshops-webinars/bits-of-past-d3-tech-fest-iiit-bhubaneswar-international-institute-of-information-technology-bhubanes-1512454',
    color: '#FFEABB',
    image: bop,
  },
  {
    eventName: 'Capture the Flag',
    eventDescription:
      'Join the CyberSec Battle and demonstrate your expertise in protecting digital assets and national security. Address critical issues like financial fraud, security breaches, and emerging cyberattacks.',
    eventLocation: 'TBD',
    eventTime: '10 PM – 6 AM (7th–8th Nov)',
    applyLink:
      'https://unstop.com/hackathons/capture-the-flag-ctf-d3-tech-fest-iiit-bhubaneswar-international-institute-of-information-technology-iiit-bhu-1570516',
    color: '#ff8c34',
    image: ctf,
  },
  {
    eventName: 'Race of Wings',
    eventDescription:
      'Experience the electrifying world of competitive drone racing where speed meets surgical precision. Pilots must navigate a fast-paced aerial obstacle course, combining throttle with control, focus, and instinct.',
    eventLocation: 'AG-02',
    eventTime: '9 AM – 5 PM (8th Nov)',
    applyLink:
      'https://unstop.com/competitions/race-of-wings-d3-tech-fest-iiit-bhubaneswar-international-institute-of-information-technology-iiit-bhubanes-1555951',
    color: '#4271FF',
    image: row,
  },
  {
    eventName: 'Terra Trek',
    eventDescription:
      'Welcome to the ultimate all-terrain robotics challenge where teams design a mobile robot to navigate complex multi-surface courses. Compete in record time on sand, gravel, and slopes with minimum loss of stability and control.',
    eventLocation: 'AG-02',
    eventTime: '9 AM – 5 PM (7th Nov)',
    applyLink:
      'https://unstop.com/competitions/terratrek-d3-tech-fest-iiit-bhubaneswar-international-institute-of-information-technology-bhubaneswar-1561048',
    color: '#FFEABB',
    image: tt,
  },
  {
    eventName: 'Robo Rogue',
    eventDescription:
      'Step into the arena for an adrenaline-charged RoboSoccer challenge where bots dribble, pass, and score in a mini soccer field. It’s a battle of agility, strategy, and engineering finesse to decide the champions. ',
    eventLocation: 'AG-02',
    eventTime: '11 AM – 5 PM (9th Nov)',
    applyLink:
      'https://unstop.com/competitions/roborogue-d3-tech-fest-iiit-bhubaneswar-international-institute-of-information-technology-bhubaneswar-1561019',
    color: '#ff8c34',
    image: roborogue,
  },
  {
    eventName: 'Save the Survivors',
    eventDescription:
      'Guide your rescue bot through a disaster zone to save the right victims, whether Alive, Injured, or Dead. Drop them at their designated safe spots using smart moves and quick thinking, with no human help allowed!',
    eventLocation: 'AG-02',
    eventTime: '9 AM – 2 PM (9th Nov)',
    applyLink:
      'https://unstop.com/competitions/save-the-survivor-d3-tech-fest-iiit-bhubaneswar-international-institute-of-information-technology-iiit-bhub-1562135',
    color: '#4271FF',
    image: sts,
  },
]

export default function Event() {
  const isLoaded = useRouteAnimation()

  return (
    <div className="page-wrapper">
      <div className="min-h-screen bg-[#ffeabb] w-full relative overflow-x-hidden">
        <div className="w-full flex mt-2 justify-center z-50">
          <Navbar
            isLoaded={isLoaded}
            color="#ff8c34"
            borderColor="#ff8c34"
            hoverColor="#e67e2e"
            sidebarBg="#fff3d4"
            hoverTextColor="#ffffff"
            mobileTextColor="#ff8c34"
          />
        </div>

        {/* === New Hero Section === */}
        <EventHero isLoaded={isLoaded} />

        {/* === Existing Event Cards Section === */}
        <div className="py-16 -mt-25 space-y-0 px-4 md:px-8">
          {eventsData.map((event, index) => {
            const isEven = (index + 1) % 2 === 0
            return (
              <div
                key={index}
                className={`flex w-full ${isEven ? 'justify-end' : 'justify-start'}`}
              >
                <div className="w-full md:w-auto">
                  <BgcardStack
                    isLoaded={isLoaded}
                    animationDelay={`${800 + index * 150}ms`}
                    prop={{ isright: isEven, color: event.color }}
                    ComponentToRender={ForegroundCard}
                    componentProps={{
                      eventName: event.eventName,
                      eventDescription: event.eventDescription,
                      applyLink: event.applyLink,
                      eventLocation: event.eventLocation,
                      eventTime: event.eventTime,
                      imagePosition: isEven ? 'right' : 'left',
                      imageSrc: event.image,
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
