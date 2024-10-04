import React from 'react';
import EventCard from './Events.jsx';
import '../assets/css/eventpage.css';

// Dynamically imported images
import Digicast from '../assets/images/v1/digicast.png';
import CraftNCode from '../assets/images/v1/cnc.png';
import CyberSecBattle from '../assets/images/v1/cybersec-battle.png';
import CodeOLympics from '../assets/images/v1/col.png';
import PitchAndWin from '../assets/images/v1/paw.png';
import TechTalkSoftware from '../assets/images/v1/tech-talk.png';
import TechTalkHardware from '../assets/images/v1/tech-talk.png'; // If this is the same image, you can keep it or import a different one
import Autobot from '../assets/images/v1/autobot.png';
import RoboRace from '../assets/images/v1/digicast.png'; // If this is the same as Digicast, consider renaming for clarity
import BuildABot from '../assets/images/v1/bab.png';

function EventPage() {
  return (
    <div className="app-container" id='events'>
      <div className="parent-container">
        <div className="header-container">
          <h1 className="main-title">Events</h1>
          <h2 className="sub-title">
            Welcome to D3 Fest - Where Technology Meets Innovation!
            <br />
            Get ready to fuel your passion and amplify your skills at D, the
            electrifying Techno-Management Fest of IIIT Bhubaneswar! Organized
            by the Tech Society of IIIT Bhubaneswar, in collaboration with the
            dynamic Automation and Robotics Society and RIPIT Company, D
            Fest promises an exciting blend of tech-centric competitions, mind-
            bending challenges, and management feats that will test your
            strategic prowess.
          </h2>
        </div>
        <div className="event-card-container">
          <EventCard
            title="CraftNCode 2024"
            image={CraftNCode}
            description="This national-level hackathon invites brilliant minds from across the country to innovate, collaborate, and solve real-world challenges. In the first phase, participating colleges will host hackathons in their respective states. The final round will feature the top teams from this phase, who will earn an invitation to compete at IIIT Bhubaneswar."
          />
          <EventCard
            title="CyberSec Battle"
            image={CyberSecBattle}
            description="This competition challenges you to address critical issues like financial fraud, security breaches, national security threats, and emerging cyberattacks. The top teams will converge in Bhubaneswar for a final showdown, vying for the prestigious title of CyberSec Battle Champions!"
          />
          <EventCard
            title="Code-O-Lympics"
            image={CodeOLympics}
            description="Cod-o-lympics is an ICPC-inspired programming competition where each team competes to solve a set of problems within a given time frame. The team that solves the most problems in the least amount of time will be declared the winner. Participants must form a team of exactly 3 members, and each team must have exactly 2 laptops during the event. The maximum allotted time is 3 hours."
          />
          <EventCard
            title="Pitch and Win"
            image={PitchAndWin}
            description="The Pitch and Win competition challenges participants to create groundbreaking solutions to existing problems, pitch them to industry experts, and make their ideas a reality. Do you have what it takes to impress the panel and walk away with the title of Pitch and Win Champion?"
          />
          <EventCard
            title="Tech Talk (Software Edition)"
            image={TechTalkSoftware}
            description="Industry experts and passionate developers converge to share insights on the latest trends, tools, and innovations in software development. Engage in thought-provoking discussions, interactive workshops, and networking opportunities that will inspire your tech journey!"
          />
          <EventCard
            title="Tech Talk (Hardware Edition)"
            image={TechTalkHardware}
            description="A dynamic forum where hardware enthusiasts and industry leaders come together to explore cutting-edge technologies, emerging trends, and practical applications in hardware development. Participate in engaging talks, hands-on demonstrations, and collaborative discussions that will elevate your understanding of the hardware landscape!"
          />
          <EventCard
            title="Autobot"
            image={Autobot}
            description="This competition challenges you to build and program a fully autonomous robot capable of navigating a complex course filled with sharp turns, unexpected obstacles, and high-speed demands. Whether you’re a seasoned robotics pro or a passionate newcomer, AutoBot offers the perfect platform to compete with fellow enthusiasts and showcase your cutting-edge designs."
          />
          <EventCard
            title="Robo Race"
            image={RoboRace}
            description="Competitors will design and construct robots capable of navigating a specially designed obstacle course that challenges not just speed, but also precision and agility. Your task is to create a robot that can overcome every hurdle and complete the course in the shortest time possible. Every second counts!"
          />
          <EventCard
            title="Digicast"
            image={Digicast}
            description="Competitors will design and construct robots capable of navigating a specially designed obstacle course that challenges not just speed, but also precision and agility. Your task is to create a robot that can overcome every hurdle and complete the course in the shortest time possible. Every second counts!"
          />
          <EventCard
            title="Build A Bot"
            image={BuildABot}
            description="This event invites students to engage in a thrilling 24-hour challenge where they design and build a functional bot using Arduino or Raspberry Pi. Build a Bot is designed to showcase innovative creations while testing participants' creativity and technical skills."
          />
        </div>
      </div>
    </div>
  );
}

export default EventPage;
