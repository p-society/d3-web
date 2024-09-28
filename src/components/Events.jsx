// src/components/EventCard.jsx
import React from 'react';
import './Events.css'; // Import the CSS file for styling

const EventCard = ({ title, image, description }) => {
    return (
        <div className="event-card-container">
        <div className="event-card">
            <img src={image} alt={title} className="event-image" />
            <div className="event-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
        </div>
    );
};

export default EventCard;

