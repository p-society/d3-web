import React from 'react';
import '../assets/css/landing.css'
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import pdf_brouch from '../assets/pdf/d3_brouch.pdf'

function Landing() {
  return (
    <section id="landing">
      <p className='landing_main_text'>
        <span className='landing_text_gradient'>
          <span>Dream.</span><br />
          <span>Dare.</span><br />
          <span>Develop.</span><br />
        </span>
        <span className='brochure_btn'><a target='_blank' href={pdf_brouch}>Download The Brochure</a></span>
      </p>
      <div className="icons_list">
        <a href=""><Instagram /></a>
        <a href=""><Linkedin /></a>
        <a href=""><Facebook /></a>
        <a href=""><Twitter /></a>
      </div>
    </section>
  );
}

export default Landing;
