import React, { useState } from 'react';
import "../assets/css/footer.css";
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

// Import images dynamically
import alexImage from '../assets/images/alex.png';
import techImage from '../assets/images/tech.png';
import xImage from '../assets/images/X.png';
import tarsImage from '../assets/images/tars.png';
import steveImage from '../assets/images/steve.png';
import { toast } from 'react-toastify';

const Tooltip = ({ text, position }) => {
  return (
    <p
      style={{
        backgroundColor: 'white', 
        color:'black',
        position: 'absolute', 
        left: position.x, 
        top: position.y + 20,
        background:'black',
        color: '#fff', 
        padding: '5px 10px', 
        borderRadius: '5px', 
        zIndex: 1000 
      }}
    >
      {text}
    </p>
  );
};



function Footer() {
  const [tooltipData, setTooltipData] = useState({ visible: false, text: '', position: { x: 0, y: 0 } });
  const contact_A = {
    name: 'Ehtisham',
    no: '+91 91988 51103'
  }
  const contact_B = {
    name: 'Soubhik',
    no: '+91 63704 62354'
  }
  const contact_C = {
    name: 'Saswat',
    no: '+91 73279 03685'
  }
  const contact_D = {
    name: "Abhijeet",
    no: '+91 01234 56789'
  }

  const copyPhoneNumber = (number) => {
    console.log(number)
    const tempInput = document.createElement('input');
    tempInput.value = number;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    toast("Phone Number copied to clipboard")
  }

  const showTooltip = (contact, event) => {
    setTooltipData({
      visible: true,
      text: `For queries contact ${contact.name}`,
      position: { x: event.pageX, y: event.pageY },
    });
  };
  const hideTooltip = () => {
    setTooltipData({ ...tooltipData, visible: false });
  };

  return (
    <footer className='footer'>
      <div className='footer-logo hidden lg:block'>
        {/* Dynamically imported image */}
        <img src={alexImage} alt="Alex Logo" />
      </div>
      <div className='footer-content'>
        <div className='footer-logos'>
          {/* Dynamically imported images */}
          <img src={techImage} alt="Tech Logo" />
          <img src={xImage} alt="X Logo" />
          <img src={tarsImage} alt="TARS Logo" />
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

        <div className='contact'>
          <li onMouseEnter={(e) => showTooltip(contact_A, e)} onMouseLeave={() => hideTooltip()} style={{ cursor: 'pointer' }}>
            <p>Ehtisham Mohd  <p className='contact-item' onClick={() => copyPhoneNumber(contact_A.no.split(' ').join(''))}>
              {contact_A.no}</p>
            </p>
          </li>
          <li onMouseEnter={(e) => showTooltip(contact_B, e)} onMouseLeave={() => hideTooltip()} style={{ cursor: 'pointer' }}>
            <p>Soubhik Kumar Gon  <p className='contact-item' onClick={() => copyPhoneNumber(contact_B.no.split(' ').join(''))}>
              {contact_B.no}</p>
            </p>
          </li>
          <li onMouseEnter={(e) => showTooltip(contact_C, e)} onMouseLeave={() => hideTooltip()} style={{ cursor: 'pointer' }}>
            <p>Saswat Parasar Behera <p className='contact-item' onClick={() => copyPhoneNumber(contact_C.no.split(' ').join(''))} >
              {contact_C.no}</p>
            </p>
          </li>
          <li onMouseEnter={(e) => showTooltip(contact_D, e)} onMouseLeave={() => hideTooltip()} style={{ cursor: 'pointer' }}>
            <p>Abhijeet  <p className='contact-item' onClick={() => copyPhoneNumber(contact_D.no.split(' ').join(''))} >
              {contact_D.no}</p>
            </p>
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
        {/* Dynamically imported image */}
        <img src={steveImage} alt="Steve Logo" />
      </div>
      {tooltipData.visible && <Tooltip text={tooltipData.text} position={tooltipData.position} />}
    </footer>
  );
}

export default Footer;
