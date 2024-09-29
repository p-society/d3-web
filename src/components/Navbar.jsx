import React from 'react';
import '../assets/css/navbar.css'

function Navbar() {
  return (
    <nav className='d3_navbar'>
      <ul>
        <span><a className='navbar_links' href="#landing">Home</a></span>
        <span><a className='navbar_links' href="#events">Events</a></span>
        <span><a className='navbar_links' href="#register">Register</a></span>
        <span><a className='navbar_links' href="#contact">Contact</a></span>
      </ul>
    </nav>
  );
}

export default Navbar;
