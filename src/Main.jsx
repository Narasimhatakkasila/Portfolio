import React from 'react';
import './main2.css';
import github from './images/github.png';
import linked_in from './images/linked_in.png';
import leetcodes from './images/leetcodes.png';
import Narasimha from './images/Narasimha.png';
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, delay: 0.2 }}
      className='Main'
      id="mainy"
    >
      <div className="main_left">
        <h3 className='it_is_me'>Hey! It's Me</h3>
        <h2 className='names'>Narasimha Takkasila</h2>
        <p className='i_am_a'>I am a&nbsp;<span className="typewriter"></span></p>

        <div className="flex1">
          <p className='follow_me'>follow me: </p>
          <div className="logos">
            <a href="https://www.linkedin.com/in/narasimha-takkasila-2048b6257/" target="_blank" rel="noreferrer">
              <img src={linked_in} alt="LinkedIn" />
            </a>
            <a href="https://leetcode.com/u/ap_22bce20152/" target="_blank" rel="noreferrer">
              <img src={leetcodes} alt="Leetcode" />
            </a>
            <a href="https://github.com/Narasimhatakkasila" target="_blank" rel="noreferrer">
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>

        <div className="flex1">
          <a href="mailto:narasimhatakasila@gmail.com">
            <button className='buttonc'>E-Mail Me</button>
          </a>
          <button
            onClick={() =>
              window.open("https://drive.google.com/file/d/1i_OWqGZ7hGq15fcz2QnOgz_hnc_P7mCx/view?usp=sharing", "_blank")
            }
            className='buttonb'
          >
            Resume
          </button>
        </div>
      </div>

      <div className="right_main">
        <div className="image_wrapper">
          <img
            className='my_image round_img'
            src={Narasimha}
            alt="Narasimha"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
