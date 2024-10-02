import React from 'react'
import '../assets/css/sponsorcard.css';
const SponsorCard = ({ title, image }) => {
    return (
        <div className="sponsor-card" >
            <img src={image} alt={title}  className="event-image" />
        </div>
    );
}

export default SponsorCard;
