import './main.css';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className="left">
          <h2 className='title'>
            <a href="https://www.linkedin.com/in/narasimha-takkasila-2048b6257/" target="_blank" rel="noreferrer">
              Portfolio
            </a>
          </h2>
        </div>
        <div className="right">
          <ScrollLink to="mainy" spy={true} smooth={true} offset={-140} duration={600} className='button'>
            Home
          </ScrollLink>
          <ScrollLink to="aboutMey" spy={true} smooth={true} offset={-140} duration={600} className='button'>
            About Me
          </ScrollLink>
          <ScrollLink to="skills" spy={true} smooth={true} offset={-140} duration={600} className='button'>
            Skills
          </ScrollLink>
          <ScrollLink to="project" spy={true} smooth={true} offset={-140} duration={600} className='button'>
            Projects
          </ScrollLink>
          <ScrollLink to="contact" spy={true} smooth={true} offset={-140} duration={600} className='button'>
            Contact Me
          </ScrollLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
