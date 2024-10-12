import React, { useState } from 'react';
import "../assets/css/footer.css";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

// Import images dynamically
import alexImage from '../assets/images/alex.png';
import techImage from '../assets/images/tech.png';
import xImage from '../assets/images/X.png';
import tarsImage from '../assets/images/tars.png';
import steveImage from '../assets/images/steve.png';
import EcellImage from '../assets/images/v1/ecell.png'
import { toast } from 'react-toastify';

const Tooltip = ({ text, position }) => {
  return (
    <p
      style={{
        backgroundColor: 'white',
        color: 'black',
        position: 'absolute',
        left: position.x,
        top: position.y + 20,
        background: 'black',
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
          <img src={xImage} alt="X Logo" />
          <img src={EcellImage} alt="E-Cell Logo" />
        </div>

        <div className='footer-links'>
          <li><a href="#landing">Home</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
          <li><a href="#Register">Register</a></li>
          <li><a href="#Contact">Contact</a></li>
        </div>
        <div className='footer-socials'>
          <li className='social-item'>
            <Instagram />
            <a href="https://www.instagram.com/d3fest.iiitbh/">Instagram</a>
          </li>
          <li className='social-item'>
            <Linkedin />
            <a href="https://www.linkedin.com/company/tech-society-iiitbh/">Linkedin</a>
          </li>
          <li className='social-item'>
            <Mail />
            <a href="mailto:Dcube_techfest@iiit-bh.ac.in">Mail</a>
          </li>
        </div>

        <div className='contact'>
          <li onMouseEnter={(e) => showTooltip(contact_A, e)} onMouseLeave={() => hideTooltip()} style={{ cursor: 'pointer' }}>
            <p>
              Ehtisham Mohd
              <span className='contact-item' onClick={() => copyPhoneNumber(contact_A.no.split(' ').join(''))}>
                {contact_A.no}
              </span>
            </p>
          </li>
          <li onMouseEnter={(e) => showTooltip(contact_B, e)} onMouseLeave={() => hideTooltip()} style={{ cursor: 'pointer' }}>
            <p>
              Soubhik Kumar Gon
              <span className='contact-item' onClick={() => copyPhoneNumber(contact_B.no.split(' ').join(''))}>
                {contact_B.no}
              </span>
            </p>
          </li>
          <li onMouseEnter={(e) => showTooltip(contact_C, e)} onMouseLeave={() => hideTooltip()} style={{ cursor: 'pointer' }}>
            <p>
              Saswat Parasar Behera
              <span className='contact-item' onClick={() => copyPhoneNumber(contact_C.no.split(' ').join(''))}>
                {contact_C.no}
              </span>
            </p>
          </li>
          <li onMouseEnter={(e) => showTooltip(contact_D, e)} onMouseLeave={() => hideTooltip()} style={{ cursor: 'pointer' }}>
            <p>
              Abhijeet
              <span className='contact-item' onClick={() => copyPhoneNumber(contact_D.no.split(' ').join(''))}>
                {contact_D.no}
              </span>
            </p>
          </li>
        </div>


        <div className='footer-address'>
          <p>IIIT Bhubaneswar, Gothapatna, Bhubaneswar, Odisha, 751003</p>
          <p>Email: techsociety@iiitbh.ac.in</p>
          <p>Phone: +91-9198851103</p>
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
