import { useState } from 'react'
import  EventCard from './components/Events'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="app-container">
      <div className="header-container">
        <h1 className="main-title">EVENTS</h1>
        <h2 className="sub-title">Lorem Ipsum</h2>
      </div>
      <div className="event-card-container">
      <EventCard
      title="Event Title"
      image="src/assets/event1.png"
      description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      <EventCard
      title="Event Title"
      image="src/assets/event2.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/event3.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/event4.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/event1.png"
      description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      <EventCard
      title="Event Title"
      image="src/assets/event2.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/event3.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/event4.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/event1.png"
      description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      <EventCard
      title="Event Title"
      image="src/assets/event2.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/event3.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/event4.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/event3.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/event4.png"
      description="A brief description of the event goes here."
        />
      </div>
      </div>
  )
}

export default App
