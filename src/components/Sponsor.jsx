import React from 'react';
import SponsorCard from './SponsorCard.jsx';
import '../assets/css/sponsors.css';

import SponsorImage from '../assets/images/soon.png';

// Array of sponsor data
const sponsors = [
    { title: "Sponsor Title 1", image: SponsorImage },
    { title: "Sponsor Title 2", image: SponsorImage },
    { title: "Sponsor Title 3", image: SponsorImage },
    { title: "Sponsor Title 4", image: SponsorImage },
    { title: "Sponsor Title 5", image: SponsorImage },
    { title: "Sponsor Title 6", image: SponsorImage },
    { title: "Sponsor Title 7", image: SponsorImage },
    { title: "Sponsor Title 8", image: SponsorImage },
    { title: "Sponsor Title 9", image: SponsorImage },
];

function Sponsor() {
    return (
        <div className="sponsor-container" id='sponsors'>
            <h1 className="sponsor-title">Presenting our Sponsors</h1>
            <div className="sponsor-card-container">
                {sponsors.map((sponsor, index) => (
                    <SponsorCard
                        key={index} // Using index as key for simplicity
                        title={sponsor.title}
                        image={sponsor.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Sponsor;
