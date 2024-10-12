import React from 'react';
import EventCard from './Events.jsx';
import '../assets/css/eventpage.css';

// Dynamically imported images
import Digicast from '../assets/images/v1/digicast.png';
import CraftNCode from '../assets/images/v1/cnc.png';
import CyberSecBattle from '../assets/images/v1/cybersec-battle.png';
import CodeOLympics from '../assets/images/v1/col.png';
import PitchAndWin from '../assets/images/v1/paw.png';
import BeyondBoundaries from '../assets/images/v1/tech-talk.png';
import Autobot from '../assets/images/v1/autobot.png';
import BuildABot from '../assets/images/v1/bab.png';
import Etalk from '../assets/images/v1/etalk.png';
import RoboRace from '../assets/images/v1/roborace.png';

function EventPage() {
  return (
    <div className="app-container" id='events'>
      <div className="parent-container">
        <div className="header-container">
          <h1 className="main-title">Events</h1>
          <h2 className="sub-title">
            Welcome to D3 Fest - Where Technology Meets Innovation!
            <br />
            Get ready to fuel your passion and amplify your skills at D3, the
            electrifying Techno-Management Fest of IIIT Bhubaneswar! Organized
            by the Tech Society of IIIT Bhubaneswar, in collaboration with the
            dynamic Automation and Robotics Society (TARS) and E-Cell, D
            Fest promises an exciting blend of tech-centric competitions, mind-
            bending challenges, and management feats that will test your
            strategic prowess.
          </h2>
        </div>
        <div className="event-card-container">
          <EventCard
            title="CraftNCode 2024"
            image={CraftNCode}
            description="This national-level hackathon invites brilliant minds from across the country to innovate, collaborate, and solve real-world challenges."
            date="Date: 8th Nov 2024, 10:00 PM - 9th Nov 2024, 8:00 AM"
            prize_pool="Prize Pool: INR 50,000"
            coordinators="Co-ordinators: Soubhik Gon, Saswat Parasar Behera"
          />
          <EventCard
            title="CyberSec Battle"
            image={CyberSecBattle}
            description="This competition challenges you to address critical issues like financial fraud, security breaches, national security threats, and emerging cyberattacks."
            date="Date: 9th Nov 2024, 10:00 PM - 10th Nov 2024, 8:00 AM"
            prize_pool="Prize Pool: INR 16,000"
            coordinators="Co-ordinators: Gourav Munjan, Soubhik Gon"
          />
          <EventCard
            title="Code-O-Lympics"
            image={CodeOLympics}
            description="Cod-o-lympics is an ICPC-inspired programming competition where each team competes to solve a set of problems within a given time frame."
            date="Date: 9th Nov 2024, 4:00 PM - 7:30 PM"
            prize_pool="Prize Pool: INR 16,000"
            coordinators="Co-ordinators: Krishna Kalra, Saswat Parasar Behera"
          />
          <EventCard
            title="Pitch and Win"
            image={PitchAndWin}
            description="The Pitch and Win competition challenges participants to create groundbreaking solutions to existing problems and pitch them to industry experts."
            date="Date: 10th Nov 2024, 10:00 AM - 1:00 PM"
            prize_pool="Prize Pool: INR 35,000"
            coordinators="Co-ordinators: Anirudh Pradhan, Pinaki RS"
          />
          <EventCard
            title="Tech Talk"
            image={BeyondBoundaries}
            description="Industry experts and passionate developers converge to share insights on the latest trends, tools, and innovations in software development."
            date="Date: 8th Nov 2024, 7:00 PM - 9:00 PM"
            coordinators="Co-ordinators: Soubhik Gon, Saswat Parasar Behera"
          />
          <EventCard
            title="Digicast"
            image={Digicast}
            description="A dynamic forum where hardware enthusiasts and industry leaders come together to explore cutting-edge technologies."
            date="Date: 10th Nov 2024, 4:00 PM - 5:00 PM"
            coordinators="Co-ordinators: Abhijeet Mukherjee, Preetam"
          />
          <EventCard
            title="E-Talk"
            image={Etalk}
            description="A captivating session where industry leaders and visionary developers will dive into the latest advancements and future directions in technology. Discover innovative tools, gain fresh perspectives on emerging trends, and participate in a lively Q&A session. This is an unmissable opportunity to expand your knowledge, network with experts, and get inspired to drive innovation in your own projects."
            date="Date: 10th Nov 2024, 5:00 PM - 6:00 PM"
            coordinators="Co-ordinators: Anirudh Pradhan, Pinaki R.S."
          />
          <EventCard
            title="AutoBot"
            image={Autobot}
            description="This competition challenges you to build and program a fully autonomous robot capable of navigating a complex course."
            date="Date: 10th Nov 2024, 10:00 AM - 3:00 PM"
            prize_pool="Prize Pool: INR 15,000"
            coordinators="Co-ordinators: Abhijeet Mukherjee, Preetam"
          />
          <EventCard
            title="Robo Race"
            image={RoboRace}
            description="Competitors will design and construct robots capable of navigating a specially designed obstacle course."
            date="Date: 9th Nov 2024, 10:00 AM - 6:00 PM"
            prize_pool="Prize Pool: INR 10,000"
            coordinators="Co-ordinators: Abhijeet Mukherjee, Preetam"
          />
          <EventCard
            title="Build A Bot"
            image={BuildABot}
            description="This event invites students to engage in a thrilling 24-hour challenge where they design and build a functional bot."
            date="Date: 8th Nov 2024, 10:00 PM - 9th Nov 2024, 8:00 AM"
            prize_pool="Prize Pool: INR 30,000"
            coordinators="Co-ordinators: Abhijeet Mukherjee, Preetam"
          />
        </div>
      </div>
    </div>
  );
}

export default EventPage;
