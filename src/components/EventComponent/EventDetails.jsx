import React from 'react'
import './EventComponent.css'
function EventDetails({ props }) {
  return (
    <div className='outer-border'>
      <div>
        <p className='Event'>{props.Event}</p>
        <p className='Details'>{props.Details}</p>
        {console.log(props)}
      </div>
      <div>
        <a className='Register' href="https://www.google.com">Register</a>
      </div>
    </div>
  )
}

export default EventDetails