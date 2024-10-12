import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../assets/css/contact.css';
import { toast } from 'react-toastify';

function Contact() {
  const [fromName, setFromName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [htmlMessage, setHtmlMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      to_name: 'Recipient Name',
      from_name: fromName,
      message: htmlMessage,
      reply_to: fromEmail,
    };


    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_APP_EMAILJS_USER_ID
    )
      .then((result) => {
        setFromName('');
        setFromEmail('');
        setSubject('');
        setHtmlMessage('');
        toast("Your email has been sent successfully!")
      }, (error) => {
        console.log(error.text); // Log errors if any
      });
  }

  return (
    <section id="Contact">
      <h2 className='heading_title_contact'>Contact</h2>
      <div className="container">
        <form className="contact-form col-md-8" onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-12">
              <input type="hidden" name="contact_number" />
            </div>
            <div className="col-md-12">
              <input
                type="text"
                name="subject"
                placeholder='SUBJECT'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="col-md-12">
              <textarea
                name="html_message"
                rows={5}
                placeholder='WRITE YOUR MESSAGE'
                value={htmlMessage}
                onChange={(e) => setHtmlMessage(e.target.value)}
                required
              />
            </div>
            <div className="two_col_contact">
              <div className="col-md-6">
                <input
                  type="text"
                  name="from_name"
                  placeholder='YOUR NAME'
                  value={fromName}
                  onChange={(e) => setFromName(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="from_email"
                  placeholder='YOUR EMAIL'
                  value={fromEmail}
                  onChange={(e) => setFromEmail(e.target.value)}
                  required
                />
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
