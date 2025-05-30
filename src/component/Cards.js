import React from 'react';
import './Cards.css';
// import starr from '../Components/starr.jpg';
// import taxi from '../Components/taxi.jpg';
//  import handshake from '../Components/handshake.jpg'; // typo fixed
//  import work from '../Components/work.jpg';
import logo from "./Img/logo.png";


function Cards() {
  return (
    <div className="cards-wrapper">
      <div className="header-contain">
        <h1>Why Choose Us | Silver Taxi Service Sydney</h1>
      </div>

      <div className="cards-contain">
        {/* Card 1 */}
        <div className="card">
          <div className="card-img-container">
            {/* <img src={starr} alt="Vehicles of a High Standard" /> */}
            <img src={logo} alt="Vehicles of a High Standard" /> 
            
          </div>
          <div className="card-content">
            <p className="card-title"><strong>Vehicles of a High Standard</strong></p>
            <p className="card-description">Luxury vehicles maintained to perfection for your comfort</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="card-img-container">
            {/* <img src={taxi} alt="Premium Services" /> */}
            <img src={logo} alt="Premium Services" />
          </div>
          <div className="card-content">
            <p className="card-title"><strong>Premium Services</strong></p>
            <p className="card-description">Exceptional service with professional chauffeurs</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="card-img-container">
           {/* <img src={taxi} alt="Premium Services" /> */}
           <img src={logo} alt="Premium Services" />
          </div>
          <div className="card-content">
            <p className="card-title"><strong>Reliable Transfers</strong></p>
            <p className="card-description">On-time guaranteed for all your important transfers</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <div className="card-img-container">
            {/* <img src={work} alt="Available 24/7" /> */}
            <img src={logo} alt="Available 24/7" />
          </div>
          <div className="card-content">
            <p className="card-title"><strong>Available 24/7</strong></p>
            <p className="card-description">Round-the-clock service whenever you need us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;