import React, { useState, useRef } from 'react'
import EventCard from './Events.jsx'
import '../assets/css/eventpage.css'

function EventPage() {
  return (
    <div className="app-container">
      <div className="parent-container">
        <div className="header-container">
          <h1 className="main-title">Events</h1>
          <h2 className="sub-title">Welcome to D Fest - Where Technology Meets Innovation!
            <br />
            Get ready to fuel your passion and amplify your skills at D , the
            electrifying Techno-Management Fest of IIIT Bhubaneswar! Organized
            by the Tech Society of IIIT Bhubaneswar, in collaboration with the
            dynamic Automation and Robotics Society and RIPIT Company , D
            Fest promises an exciting blend of tech-centric competitions, mind-
            bending challenges, and management feats that will test your
            strategic prowess.

          </h2>
        </div>
        <div className="event-card-container">
          <EventCard
            title="CraftNCode 2024"
            image="src/assets/images/image.png"
            description="This national-level hackathon which invites brilliant minds from across the country to innovate,collaborate, and solve real-world challenges."
          />
          <EventCard
            title="CyberSec Battle"
            image="src/assets/images/cybersecbattle.png"
            description="This competition challenges you to address critical issues like financial fraud,security breaches, national security threats, and emerging cyberattacks."
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
    </div>
  )
}

export default EventPage
