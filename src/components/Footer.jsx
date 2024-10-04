import React from 'react';
import "../assets/css/footer.css";
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

import alex from '../assets/images/alex.png';
import steve from '../assets/images/steve.png';
import tech from '../assets/images/tech.png';
import X from '../assets/images/X.png';
import tars from '../assets/images/tars.png';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-logo hidden lg:block'>
        <img src={alex} alt="A Minecraft character named Alex!" />
      </div>
      <div className='footer-content'>
        <div className='footer-logos'>
          <img src={tech} alt="Tech society logo" />
          <img src={X} alt="X logo" />
          <img src={tars} alt="TARS logo" />
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
        <img src={steve} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
