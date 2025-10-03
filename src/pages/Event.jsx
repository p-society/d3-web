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
    eventName: 'Race of Wings',
    eventDescription:
      'Experience the electrifying world of competitive drone racing where speed meets surgical precision. Pilots must navigate a fast-paced aerial obstacle course, combining throttle with control, focus, and instinct.',
    applyLink: '',
    color: '#4271FF',
    image: row,
  },
  {
    eventName: 'Terra Trek',
    eventDescription:
      'Welcome to the ultimate all-terrain robotics challenge where teams design a mobile robot to navigate complex multi-surface courses. Compete in record time on sand, gravel, and slopes with minimum loss of stability and control.',
    applyLink: '',
    color: '#FFEABB',
    image: tt,
  },
  {
    eventName: 'Robo Rogue',
    eventDescription:
      'Step into the arena for an adrenaline-charged RoboSoccer challenge where bots dribble, pass, and score in a mini soccer field. It’s a battle of agility, strategy, and engineering finesse to decide the champions. ',
    applyLink: '',
    color: '#ff8c34',
    image: roborogue,
  },
  {
    eventName: 'Save the Survivors',
    eventDescription:
      'Guide your rescue bot through a disaster zone to save the right victims, whether Alive, Injured, or Dead. Drop them at their designated safe spots using smart moves and quick thinking, with no human help allowed!',
    applyLink: '',
    color: '#4271FF',
    image: sts,
  },
  {
    eventName: 'Rewind and Recode',
    eventDescription:
      'Gear up for the ultimate national-level hackathon, a 24-hour non-stop coding competition. Innovate, collaborate, and solve real-world challenges while competing with top talents from across the country.',
    applyLink: '',
    color: '#FFEABB',
    image: rr,
  },
  {
    eventName: 'Code-o-lympics',
    eventDescription:
      'Join an ICPC-inspired programming competition where teams of coders solve a series of algorithmic problems. Tackle a variety of computational challenges that test your coding skills, problem-solving abilities, and efficiency.',
    applyLink: '',
    color: '#ff8c34',
    image: col,
  },
  {
    eventName: 'Workshop.exe',
    eventDescription:
      'Engage in hands-on learning with industry experts in cutting-edge technologies like AI, Blockchain, and Web3. This workshop is designed to provide practical experience and in-depth knowledge in Augmented Reality (AR) and Virtual Reality (VR).',
    applyLink: '',
    color: '#4271FF',
    image: wrkshp,
  },
  {
    eventName: 'Bits of Past',
    eventDescription:
      'Join us for an inspiring Tech Talk where leading industry experts and innovators dive into the latest trends. This session will spark new ideas, broaden your perspective, and give you a front-row seat to the future of technology.',
    applyLink: '',
    color: '#FFEABB',
    image: bop,
  },
  {
    eventName: 'Capture the Flag',
    eventDescription:
      'Join the CyberSec Battle and demonstrate your expertise in protecting digital assets and national security. Address critical issues like financial fraud, security breaches, and emerging cyberattacks.',
    applyLink: '',
    color: '#ff8c34',
    image: ctf,
  },
]

export default function Event() {
  const isLoaded = useRouteAnimation()

  return (
    <div className="page-wrapper">
      <div className="min-h-screen bg-[#ffeabb] w-full relative overflow-x-hidden">
        <div className="w-full flex mt-2 justify-center">
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
