import React from 'react';
import "../assets/css/footer.css"
import alex from '../assets/images/alex.png'
function Footer() {
  return (
    <footer>
      <p>© 2024 D3. All rights reserved.</p>
      <img className='alex' src={alex} alt="" />
    </footer>
  );
}

export default Footer;
