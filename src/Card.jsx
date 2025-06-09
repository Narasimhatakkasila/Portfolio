import React, { useState } from 'react';
import './style.css';

const Card = ({ imageUrl, altText, title, description, live, github }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 50; // Maximum characters to show before truncating

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to truncate text and add ellipsis if needed
  const renderDescription = () => {
    if (description.length <= maxLength || isExpanded) {
      return description;
    }
    return `${description.substring(0, maxLength)}...`;
  };

  return (
    <div className="card">
      <img className="card__img" src={imageUrl} alt={altText} />
      <div className="card__content">
        <h1 className="card__header">{title}</h1>
        <div className="card__text-wrapper">
          <p className="card__text">
            {renderDescription()}
            {description.length > maxLength && (
              <button onClick={toggleExpand} className="card__read-more">
                {isExpanded ? ' Show Less' : ' Read More'}
              </button>
            )}
          </p>
        </div>
        {live && (
          <button className="card__btn" onClick={() => window.open(live)}>
            Live Site <span>&rarr;</span>
          </button>
        )}
        {github && (
          <button className="card__btn" onClick={() => window.open(github)}>
            GitHub <span>&rarr;</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;