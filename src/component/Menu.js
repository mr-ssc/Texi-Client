import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeService, setActiveService] = useState('Airport Transportation');

  const servicesData = {
    'Airport Transportation': {
      title: 'Airport Transportation',
      description: 'Premium airport transfer service available 24/7 with flight tracking to ensure timely pickups. Our vehicles are equipped with spacious luggage compartments to accommodate all your travel needs.',
      image: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    'Local Expertise': {
      title: 'Local Expertise',
      description: 'Knowledgeable drivers familiar with all Sydney routes to get you to your destination efficiently. We know all the shortcuts and best routes to avoid traffic during peak hours.',
      image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    'Corporate Travel': {
      title: 'Corporate Travel',
      description: 'Professional service for business travelers with premium vehicles and executive amenities. Enjoy Wi-Fi, charging ports, and a quiet environment to work during your commute.',
      image: 'https://images.unsplash.com/photo-1551836027-db56b443610e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    'Special Events': {
      title: 'Special Events',
      description: 'Elegant transportation for weddings, proms, and other special occasions. Our luxury fleet will make your event even more memorable with style and comfort.',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    'Hourly Charter': {
      title: 'Hourly Charter',
      description: 'Flexible hourly rentals for multiple stops or extended service throughout Sydney. Perfect for city tours, shopping trips, or business meetings across town.',
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  };

  return (
    <div className="menu-container">
      <h2 className="section-title">We Provide Premium Taxi Services in Sydney</h2>
      
      <div className="horizontal-services">
        {Object.keys(servicesData).map((service) => (
          <button
            key={service}
            className={`service-btn ${activeService === service ? 'active' : ''}`}
            onClick={() => setActiveService(service)}
            aria-label={`Show ${service} details`}
          >
            {service}
          </button>
        ))}
      </div>
      
      <div className="service-display">
        <div className="image-container">
          <img 
            src={servicesData[activeService].image} 
            alt={activeService} 
            className="service-image"
          />
        </div>
        <div className="service-info">
          <h3 className="service-title">{servicesData[activeService].title}</h3>
          <p className="service-description">{servicesData[activeService].description}</p>
          <div className="action-buttons">
            <button className="call-btn">
              <span className="phone-icon">📞</span> Call Now
            </button>
            <button className="book-btn">Book Online</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;