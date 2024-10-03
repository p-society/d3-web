import React from 'react';
import SponsorCard from './SponsorCard.jsx';
import '../assets/css/sponsors.css';
function Sponsor() {
    return (
        <div className="sponsor-container">
            <h1 className="sponsor-title">Presenting our Sponsors</h1>
            <div className="sponsor-card-container">
                <SponsorCard
                    title="Sponsor Title"
                    image="src/assets/images/soon.png"
                />
                <SponsorCard
                    title="Sponsor Title"
                    image="src/assets/images/soon.png"
                />
                <SponsorCard
                    title="Sponsor Title"
                    image="src/assets/images/soon.png"
                />
                <SponsorCard
                    title="Sponsor Title"
                    image="src/assets/images/soon.png"
                />
                <SponsorCard
                    title="Sponsor Title"
                    image="src/assets/images/soon.png"
                />
                <SponsorCard
                    title="Sponsor Title"
                    image="src/assets/images/soon.png"
                />
            </div>
        </div>
    )
}
export default Sponsor;
