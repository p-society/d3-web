import React from 'react';
import '../assets/css/navbar.css'

function Navbar() {
  const scrollToEvents = (e) =>{
      print('click hua')
      e.preventDefault();
      const eventsSection = document.getElementById('app-container');
      if (eventsSection) {
      console.log('kuch toh hua')
      eventsSection.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#events');
    }
  }
  return (
    <nav className='d3_navbar'>
      <div class="mobile_navbar">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="menu-items">
            <li><a className='navbar_links' href="#landing">Home</a></li>
            <li><a className='navbar_links' href="#events" onClick={scrollToEvents}>Events</a></li>
            <li><a className='navbar_links' href="#Register">Register</a></li>
            <li><a className='navbar_links' href="#Contact">Contact</a></li>
          </div>
        </div>
      </div>
      <div className='pc_navbar'>
        <span><a className='navbar_links' href="#landing">Home</a></span>
        <span><a className='navbar_links' href="#events">Events</a></span>
        <span><a className='navbar_links' href="#Register">Register</a></span>
        <span><a className='navbar_links' href="#Contact">Contact</a></span>
      </div>
    </nav>
  );
}

export default Navbar;
