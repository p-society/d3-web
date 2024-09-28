import { useState } from 'react'
import  EventCard from './components/Events'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="event-card-container">
      <EventCard
      title="Event Title"
      image="src/components/Cole-Palmer-vs-Manchester-City.jpg"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/components/Cole-Palmer-vs-Manchester-City.jpg"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/components/Cole-Palmer-vs-Manchester-City.jpg"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/components/Cole-Palmer-vs-Manchester-City.jpg"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/components/Cole-Palmer-vs-Manchester-City.jpg"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/components/Cole-Palmer-vs-Manchester-City.jpg"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/components/Cole-Palmer-vs-Manchester-City.jpg"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/components/Cole-Palmer-vs-Manchester-City.jpg"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/components/Cole-Palmer-vs-Manchester-City.jpg"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/components/Cole-Palmer-vs-Manchester-City.jpg"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/components/Cole-Palmer-vs-Manchester-City.jpg"
      description="A brief description of the event goes here."
        />
      </div>
    </>
  )
}

export default App
