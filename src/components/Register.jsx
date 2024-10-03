import React from 'react';
import '../assets/css/EventRegistration.css'
import EventDetails from './EventComponent/EventDetails';
function Register() {
  const Events = [
    {
      Event: 'LOREM IPSUM',
      Details: 'DETAILS',
      Register: 'Link'
    },
    {
      Event: 'LOREM IPSUM',
      Details: 'DETAILS',
      Register: 'Link'
    },
    {
      Event: 'LOREM IPSUM',
      Details: 'DETAILS',
      Register: 'Link'
    },
    {
      Event: 'LOREM IPSUM',
      Details: 'DETAILS',
      Register: 'Link'
    },
    {
      Event: 'LOREM IPSUM',
      Details: 'DETAILS',
      Register: 'Link'
    },
    {
      Event: 'LOREM IPSUM',
      Details: 'DETAILS',
      Register: 'Link'
    },
    {
      Event: 'LOREM IPSUM',
      Details: 'DETAILS',
      Register: 'Link'
    },
    {
      Event: 'LOREM IPSUM',
      Details: 'DETAILS',
      Register: 'Link'
    },
    {
      Event: 'LOREM IPSUM',
      Details: 'DETAILS',
      Register: 'Link'
    },
    {
      Event: 'LOREM IPSUM',
      Details: 'DETAILS',
      Register: 'Link'
    },
    {
      Event: 'LOREM IPSUM',
      Details: 'DETAILS',
      Register: 'Link'
    }
  ]
  return (
    <section id="Register">
      <div className='EventHeading'>
        <p className='RFEHeading'>REGISTER FOR EVENTS</p>
        <p className='ELHeading'>EVENT LIST</p>
      </div>
      {Events.map((e) => (
        <EventDetails props={e} />
      ))}

    </section>
  );
}

export default Register;
