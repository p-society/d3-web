import React from 'react';
import "../assets/css/footer.css";
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-logo hidden lg:block'>
        <img src="src/assets/images/alex.png" alt="" />
      </div>
      <div className='footer-content'>
        <div className='footer-logos'>
          <img src="src/assets/images/tech.png" alt="" />
          <img src="src/assets/images/X.png" alt="" />
          <img src="src/assets/images/tars.png" alt="" />
        </div>
        <div className='footer-links'>
          <li><a href="#landing">Home</a></li>
          <li><a href="#landing">Community</a></li>
          <li><a href="#landing">Gallery</a></li>
          <li><a href="#landing">About</a></li>
          <li><a href="#landing">Contact</a></li>
        </div>
        <div className='footer-socials'>
          <li className='social-item'>
            <Facebook />
            <a href="">Facebook</a>
          </li>
          <li className='social-item'>
            <Instagram />
            <a href="">Instagram</a>
          </li>
          <li className='social-item'>
            <Linkedin />
            <a href="">Linkedin</a>
          </li>
          <li className='social-item'>
            <Twitter />
            <a href="">Twitter</a>
          </li>
        </div>
        <div className='footer-address'>
          <p>IIIT Bhubaneswar, Gothapatna, Bhubaneswar, Odisha, 751003</p>
          <p>Email: techsociety@iiitbh.ac.in</p>
          <p>Phone: +91-1234567890</p>
          <p>© 2024 IIIT Bhubaneswar Tech Society. All Rights Reserved.</p>
        </div>
      </div>
      <div className='footer-logo hidden lg:block'>
        <img src="src/assets/images/steve.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
