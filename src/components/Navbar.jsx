import React from 'react';
import '../assets/css/navbar.css'

function Navbar() {
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
            <li><a className='navbar_links' href="#events">Events</a></li>
            <li><a className='navbar_links' href="#register">Register</a></li>
            <li><a className='navbar_links' href="#contact">Contact</a></li>
          </div>
        </div>
      </div>
      <div className='pc_navbar'>
        <span><a className='navbar_links' href="#landing">Home</a></span>
        <span><a className='navbar_links' href="#events">Events</a></span>
        <span><a className='navbar_links' href="#register">Register</a></span>
        <span><a className='navbar_links' href="#contact">Contact</a></span>
      </div>
    </nav>
  );
}

export default Navbar;
