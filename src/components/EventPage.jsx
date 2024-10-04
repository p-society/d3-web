import React, { useState, useRef } from 'react'
import EventCard from './Events.jsx'
import '../assets/css/eventpage.css'
// Import all images
import cncImage from '../assets/images/v1/cnc.png';
import cybersecImage from '../assets/images/v1/cybersec-battle.png';
import colImage from '../assets/images/v1/col.png';
import pawImage from '../assets/images/v1/paw.png';
import techTalkImage from '../assets/images/v1/tech-talk.png';
import autobotImage from '../assets/images/v1/autobot.png';
import digicastImage from '../assets/images/v1/digicast.png';
import babImage from '../assets/images/v1/bab.png';
function EventPage() {
  return (
    <div className="app-container">
      <div className="parent-container">
        <div className="header-container">
          <h1 className="main-title">Events</h1>
          <h2 className="sub-title">Welcome to D3 Fest - Where Technology Meets Innovation!
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
            image={cncImage}
            description="This national-level hackathon which invites brilliant minds from across the country to innovate,collaborate, and solve real-world challenges."
          />
          <EventCard
            title="CyberSec Battle"
            image={cybersecImage}
            description="This competition challenges you to address critical issues like financial fraud,security breaches, national security threats, and emerging cyberattacks."
          />
          <EventCard
            title="Code-O-Lympics"
            image={colImage}
            description="This competition challenges you to address critical issues like financial fraud,security breaches, national security threats, and emerging cyberattacks."
          />
          <EventCard
            title="Pitch and Win"
            image={pawImage}
            description="This competition challenges you to address critical issues like financial fraud,security breaches, national security threats, and emerging cyberattacks."
          />
          <EventCard
            title="Tech Talk (Software Edition)"
            image={techTalkImage}
            description="Industry experts and passionate developers converge to share insights on the latest trends, tools, and innovations in software development. Engage in thought-provoking discussions, interactive workshops, and networking opportunities that will inspire your tech journey!"
          />
          <EventCard
            title="Tech Talk (Hardware Edition)"
            image={digicastImage}
            description="A dynamic forum where hardware enthusiasts and industry leaders come together to explore cutting-edge technologies, emerging trends, and practical applications in hardware development. Participate in engaging talks, hands-on demonstrations, and collaborative discussions that will elevate your understanding of the hardware landscape!"
          />
          <EventCard
            title="Autobot"
            image={autobotImage}
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <EventCard
            title="Robo Race"
            image={autobotImage}
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <EventCard
            title="Build A Bot"
            image={babImage}
            description="A brief description of the event goes here."
          />
        </div>
      </div>
    </div>
  )
}

export default EventPage
