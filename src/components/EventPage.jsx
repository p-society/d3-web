import React, { useState , useRef} from 'react'
import  EventCard from './Events.jsx'
import '../assets/css/eventpage.css'

function EventPage() {
  return (
      <div className="app-container">
      <div className="header-container">
       <h1 className="main-title">Events</h1>
        <h2 className="sub-title">Lorem Ipsum</h2>
      </div>
      <div className="event-card-container">
      <EventCard
      title="Event Title"
      image="src/assets/images/events/event1.png"
      description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      <EventCard
      title="Event Title"
      image="src/assets/images/events/event2.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/images/events/event3.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/images/events/event4.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/images/events/event1.png"
      description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      <EventCard
      title="Event Title"
      image="src/assets/images/events/event2.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/images/events/event3.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/images/events/event4.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/images/events/event1.png"
      description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      <EventCard
      title="Event Title"
      image="src/assets/images/events/event2.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/images/events/event3.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/images/events/event2.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/images/events/event3.png"
      description="A brief description of the event goes here."
        />
      <EventCard
      title="Event Title"
      image="src/assets/images/events/event4.png"
      description="A brief description of the event goes here."
        />
      </div>
      </div>
  )
}

export default EventPage
