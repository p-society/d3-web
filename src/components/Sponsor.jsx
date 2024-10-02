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
                image="src/assets/images/sponsor/sponsor1.png"
            />
            <SponsorCard
                title="Sponsor Title"
                image="src/assets/images/sponsor/sponsor2.png"
            />
            <SponsorCard
                title="Sponsor Title"
                image="src/assets/images/sponsor/sponsor3.png"
            />
            <SponsorCard
                title="Sponsor Title"
                image="src/assets/images/sponsor/sponsor4.png"
            />
            <SponsorCard
                title="Sponsor Title"
                image="src/assets/images/sponsor/sponsor1.png"
            />
            <SponsorCard
                title="Sponsor Title"
                image="src/assets/images/sponsor/sponsor2.png"
            />
            <SponsorCard
                title="Sponsor Title"
                image="src/assets/images/sponsor/sponsor3.png"
            />
            <SponsorCard
                title="Sponsor Title"
                image="src/assets/images/sponsor/sponsor4.png"
            />
            </div>
        </div>
    )
}
export default Sponsor;
