import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeService, setActiveService] = useState('Airport Transportation');

  const servicesData = {
    'Airport Transportation': {
      title: 'Airport Transportation',
      description: "Airport transportation can be a hassle, but with Silver Taxi Service Sydney, it becomes a luxurious experience. We are of the opinion that the desire to travel can strike at any moment and for any reason, which is why we offer our Airport Transfer Service throughout Sydney around the clock, twenty-four hours a day, seven days a week. Say goodbye to the stress and frustration of airport transportation and book your Silver Taxi Service today.",
      image: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    'Local Expertise': {
      title: 'Local Expertise',
      description: 'We know how tedious it is to sit for long journeys, hence we have got you our friendly drivers who are no stranger to any of the local streets of Sydney. They know when to choose which route to quickly drop you at your destination without keeping you much awaited. Our Drivers (Local Expertise) are what set us apart from other competitors in this field.',
      image: 'https://images.unsplash.com/photo-1507699622108-4be3abd65ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    'General Transfers': {
      title: 'General Transfers',
      description: 'Silver Taxi Service Sydney can be booked for any kind of transfer be it heading out to market, or a city tour we are all there to serve you in an exceptional manner. You can hire us to travel anywhere around Sydney anytime you wish. Just give us a call or drop an email with all your trip details.',
      image: 'https://images.unsplash.com/photo-1551836027-db56b443610e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    'Regular pickups': {
      title: 'Regular pickups',
      description: 'If you are worried about your regular transportation needs, you can rely on the Silver Service Taxi regular pick-up service. Request us to be picked up at home or business and transported safely and on schedule with our Regular Pickup Service. This is especially useful for people who commute everyday to work or school. Avoid the trouble of everyday transportation and the unpredictability of public transit by employing the regular pickup service by Silver Service Taxi. You may rest confident that you will arrive on schedule time and without issues with Silver Service Regular Pickup Service. For regular transportation needs, the regular pick-up service is reliable and efficient.',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    'Home Pickups': {
      title: 'Home Pickups',
      description: 'Silver Taxi Sydney’s home pickup service is convenient and easy. This service ensures safe and comfortable travel to customers’ destinations. The company’s qualified drivers make Home pickups easy. Silver Taxi Sydney picks up customers from their homes or offices. Customers arrive on time and without hassle since the drivers are prompt, courteous, and familiar with local routes. This service is great for customers who want to be picked up from their doorway without having to find a parking spot or wait for public transportation. Silver Taxi Sydney’s home pickup service lets customers relax and enjoy a stress-free ride.',
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },

     'Baggage Transport': {
      title: 'Baggage Transport',
      description: 'Silver Service Taxis is a leading luggage transporter to and from airports, train stations, and other locations. The company’s cab drivers can handle all kinds of luggage. Drivers use modern equipment to load and unload bags. They deliver every bag on time since they know how crucial it is. Silver Service Taxis provides reliable luggage transport and stress-free travel. Drivers are courteous, professional, and concerned about Client’s Stuff. For business or pleasure, Silver Service Taxis can transport your baggage/luggage. Due to their focus on client satisfaction, you can anticipate the greatest service every time you travel with them.',
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },

     'Rapid City Transfer': {
      title: 'Rapid City Transfer',
      description: 'Silver Taxi Sydney provides fast and convenient city transfers for those that need to go about quickly. The organization realizes that time is of the essence, especially for business travelers and those with busy schedules, and attempts to provide a speedy and efficient transportation service. Silver Taxi Service Sydney’s professional drivers can easily negotiate crowded streets and congested locations due to their vast understanding of the city’s routes and traffic patterns. They arrive on time by choosing the fastest and most efficient route to the customer’s location Skip the hassle of city navigation with Silver Taxi Sydney’s Rapid City Transfer Service. Rest and let our skilled drivers drive. It helps business travelers arrive on time and prepared.',
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