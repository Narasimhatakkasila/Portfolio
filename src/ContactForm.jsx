import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import BackToTopButton from './BackToTopButton';
import './stylle.css';

const ContactInfo = () => {
  return (
    <section id="contact">
      <h1 className="section-header">Contact Me</h1>
      <div className="contact-wrapper">
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <FontAwesomeIcon icon={faPhone} />
              <span className="contact-text">
                <a href="tel:7013807482">+91-7013807482</a>
              </span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="contact-text">
                <a href="mailto:narasimhatakasila@gmail.com">
                  narasimhatakasila@gmail.com
                </a>
              </span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="contact-text">
                <a href="https://www.linkedin.com/in/narasimha-takkasila-2048b6257/">
                  LinkedIn
                </a>
              </span>
            </li>
          </ul>
          <ul className="social-media-list">
            <li>
              <a href="https://www.instagram.com/narasimha_takkasila" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/narasimha_takkasila" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/narasimha_takkasila" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <BackToTopButton />
    </section>
  );
};

export default ContactInfo;
