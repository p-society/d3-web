import React from 'react';
import SponsorCard from './SponsorCard.jsx';
import '../assets/css/sponsors.css';
import soon from '../assets/images/soon.png';
function Sponsor() {
    return (
        <div className="sponsor-container">
            <h1 className="sponsor-title">Presenting our Sponsors</h1>
            <div className="sponsor-card-container">
                <SponsorCard
                    title="Sponsor Title"
                    image= {soon}
                />
                <SponsorCard
                    title="Sponsor Title"
                    image= {soon}
                />
                <SponsorCard
                    title="Sponsor Title"
                    image= {soon}
                />
                <SponsorCard
                    title="Sponsor Title"
                    image= {soon}
                />
                <SponsorCard
                    title="Sponsor Title"
                    image= {soon}
                />
                <SponsorCard
                    image= {soon}
                />
            </div>
        </div>
    )
}
export default Sponsor;
