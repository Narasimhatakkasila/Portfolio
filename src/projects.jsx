import React from 'react';
import Card from './Card';
import withyou from "./images/WithYou.jpg";
import learn from "./images/languagelearing.jpg";
import DWDM from "./images/weather.jpg";
import ubox from "./images/ubox.png";
import { motion } from 'framer-motion';

const Projects = () => {
  const cards = [
    {
      imageUrl: withyou,
      altText: 'WithYou website',
      title: 'WithYou',
      description: `WithYou is a doctor appointment system with three roles:
      
      Admin: Manages doctor registrations (approve/reject)
      Doctor: Handles appointment scheduling
      User: Books appointments and tracks status
      
      Built with the MERN stack (MongoDB, Express, React, Node.js).`,
      live: "https://with-you.onrender.com",
      github: "https://github.com/Narasimhatakkasila/WithYou"
    },
    {
      imageUrl: learn,
      altText: 'Language Learning App',
      title: 'Learning Made Easy',
      description: `A language learning platform with:
      
      Secure user authentication
      Progress tracking features
      Intuitive React-based UI
      Node.js/Express backend with MongoDB
      
      Collaborated with a team of 4 developers to build responsive interfaces and optimize backend logic for seamless user experience.`,
      live: "https://frontend-learning-app.onrender.com/login",
      github: "https://github.com/Narasimhatakkasila/frontend-learning-app"
    },
    {
      imageUrl: DWDM,
      altText: 'Weather Prediction Dashboard using Data Mining',
      title: 'Weather Prediction Analysis (DWDM)',
      description: `A data mining and machine learning project for weather prediction:
      
      • Implemented data warehousing and mining techniques
      • Evaluated multiple ML models (Random Forest, SVM, etc.)
      • Compared accuracy metrics for different weather parameters
      • Processed historical weather data for pattern recognition
      
      Technologies: Python, Pandas, Scikit-learn, Matplotlib`,
      github: "https://github.com/Narasimhatakkasila/DataMining"
    },
    {
      imageUrl: ubox,
      altText: 'U-Box',
      title: 'U-Box:Book Your ticket',
      description: `this is a basic java code to shohwcase my skill in oops concepts`,
      github: "https://github.com/Narasimhatakkasila/java-projects"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className="up_gap"
      id="project"
    >
      <h2 className='heading1 down_gap'>Projects</h2>
      <div className="completely">
        <div className="grid">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              altText={card.altText}
              title={card.title}
              description={card.description}
              live={card.live}
              github={card.github}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;