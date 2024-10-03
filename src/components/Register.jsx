import React from 'react';
import '../assets/css/EventRegistration.css'
import EventDetails from './EventComponent/EventDetails';
function Register() {
  const Events = [
    {
      Event: 'Craft N Code',
      Details: 'Over 24 hours of non-stop coding, you\'ll build creative solutions, compete with top talents,and showcase your skills to industry leaders.',
      Register: 'https://unstop.com/hackathons/craftncode-d3-techno-management-fest-international-institute-of-information-technology-iiit-bhubaneswar-1171379'
    },
    {
      Event: 'Code-O-Lympics',
      Details: 'ICPC (International Collegiate Programming Contest)- inspired programming competition where teams of coders come together to solve a series of algorithmic problems within a specified time limit.Each teamworks collaboratively to tackle a variety of computational challenges that test their coding skills, problem - solving abilities, and efficiency in implementing algorithms.',
      Register: 'https://unstop.com/hackathons/craftncode-d3-techno-management-fest-international-institute-of-information-technology-iiit-bhubaneswar-1171379'
    },
    {
      Event: 'CyberSec Battle',
      Details: 'his competition challenges you to address critical issues like financial fraud, security breaches,national security threats and emerging cyberattacks. ',
      Register: 'Link'
    },
    {
      Event: 'Pitch And Win',
      Details: 'This event is all about showcasing unique, innovative ideas across any field —be it technology, sustainability, social change, health, or beyond. Whether you\'re tackling global issues or bringing a fresh twist to a common challenge, we want to hear from you!',
      Register: 'unstop.com'
    },
    {
      Event: 'Robo Race',
      Details: 'Design and build a robot capable of navigating a challenging obstacle course while racing against time.Showcase your technical expertise and problem- solving skills in a high - energy competition.',
      Register: 'unstop.com'
    },
    {
      Event: 'AutoBot',
      Details: 'demonstrate your ability to design a fully autonomous robot! Build a bot that can independently follow a marked path while handling twists, turns, and obstacles with precision and speed',
      Register: 'Link'
    },
    {
      Event: 'Build A Bot',
      Details: 'Challenge invites tech enthusiasts and budding engineers to design and create their own robots.Participants will showcase their creativity and technical skills in a dynamic environment',
      Register: 'unstop.com'
    },
      ]
  return (
    <section id="Register">
      <div className='EventHeading'>
        <p className='RFEHeading'>REGISTER FOR EVENTS</p>
      </div>
      {Events.map((e) => (
        <EventDetails props={e} />
      ))}

    </section>
  );
}

export default Register;
