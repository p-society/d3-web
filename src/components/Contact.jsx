import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../assets/css/contact.css';

function Contact() {
  const [successMessage, setSuccessMessage] = useState(''); 

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_zin4nyz', 'template_c4bir93', e.target, 'LqKAhPE3L0Md4zlV3')
      .then((result) => {
          setSuccessMessage('Your email has been sent successfully!');
          e.target.reset();
          setTimeout(() => setSuccessMessage(''), 4000);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <section id="Contact">
      <h2 className='heading_title_contact'>Contact</h2>
      <div className="container">
        {successMessage && ( 
          <div className="prompt-message">
            {successMessage}
          </div>
        )}
        <form className="contact-form col-md-8" onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-12">
              <input type="hidden" name="contact_number" />
            </div>
            <div className="col-md-12">
              <input type="text" name="subject" placeholder='SUBJECT' required/>
            </div>
            <div className="col-md-12">
              <textarea name="html_message" rows={5} placeholder='WRITE YOUR MESSAGE' required/>
            </div>
            <div className="two_col_contact">
              <div className="col-md-6">
                <input type="text" name="from_name" placeholder='YOUR NAME' required/>
              </div>
              <div className="col-md-6">
                <input type="email" name="from_email" placeholder='YOUR EMAIL' required/>
              </div>
            </div>
          </div>
          <input type="submit" value="Send" className='contact_submission' />
        </form>
      </div>
    </section>
  );
}

export default Contact;
