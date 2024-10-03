import React from 'react';
import '../assets/css/landing.css'
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';

function Landing() {
  return (
    <section id="landing">
      <p className='landing_main_text'>
        <span className='landing_text_gradient'>
          <span>Dream.</span><br />
          <span>Dare.</span><br />
          <span>Develop.</span><br />
        </span>
        <span className='brochure_btn'>Download The Brochure</span>
      </p>
      <div className="icons_list">
        <Instagram />
        <Linkedin />
        <Facebook />
        <Twitter />
      </div>
    </section>
  );
}

export default Landing;
