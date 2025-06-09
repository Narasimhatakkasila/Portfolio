import React from 'react'
import './about_me.css'
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className='about_me'
      id="aboutMey"
    >
      <h2 className='heading'>About Me</h2>
      <div className="about_me_info">
        <p className='about_me_text'>
          Hello! I'm Takkasila Narasimha, a budding Full Stack Developer and AI/ML enthusiast.
          I'm diving into front-end and back-end technologies, as well as exploring AI and 
          machine learning tools and models.I have a good grasp of data structures and algorithms.
           Excited to connect and collaborate on innovative projects!
        </p>
      </div>
    </motion.div>
  )
}

export default AboutMe
