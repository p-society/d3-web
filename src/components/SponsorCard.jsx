import React from 'react'
import './SponsorCard.css';
const SponsorCard = ({ title, image }) => {
    return (
        <div className="sponsor-card" >
            <img src={image} alt={title}  className="event-image" />
        </div>
    );
}

export default SponsorCard;
