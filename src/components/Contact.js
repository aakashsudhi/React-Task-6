import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div id="contact-section" style={{ marginBottom: "20px" }}>
      <br/><br/>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
        <div className="contact-info text-start ms-1">
          <h2 className="fw-bolder">Contact Us</h2>
          <div className="mb-3 d-flex flex-sm-row flex-column justify-content-center align-items-center">
            <ContactItem icon={faEnvelope} text="aakashsudhi@gmail.com" link="mailto:aakashsudhi@gmail.com" />
            <ContactItem icon={faPhone} text="9173316962" link="tel:9173316962" />
            <ContactItem icon={faLinkedin} text="LinkedIn" link="https://www.linkedin.com/in/aakash-sudhi-0b11bb277/" target="_blank" />
            <ContactItem icon={faGithub} text="GitHub" link="https://github.com/aakashsudhi" target="_blank" />
          </div>
        </div>
        <div className="newsletter">
          <h3 className='fw-bolder text-start'>Subscribe to Newsletter</h3>
          <form>
            <div className="mb-3 d-flex flex-column flex-sm-row justify-content-center align-items-center">
                <input type="text" className="form-control m-1" placeholder="Your Name" />
                <input type="email" className="form-control m-1" placeholder="Your Email" />
                <button type="submit" className="btn btn-outline-success w-100 m-1">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, text, link, target }) {
  return (
    <div className="mb-3 mx-2">
      <a href={link} target={target} className="text-decoration-none text-white">
        <FontAwesomeIcon icon={icon} className="text-primary me-2 text-success contact-icon" />
        {text}
      </a>
    </div>
  );
}

export default Contact;