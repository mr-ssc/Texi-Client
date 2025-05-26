import React from 'react';
import './Elementor.css';

const Elementor = () => {
  return (
    <div className="elementor-section elementor-section-boxed">
      <div className="elementor-container">
        <div className="elementor-row">
          <div className="elementor-column elementor-col-100">
            <div className="elementor-widget-wrap">
              {/* Heading */}
              <h2 className="elementor-heading-title animate__animated animate__fadeInDown">
                Get Premium Ride Every Time With Easy2Solutions Taxi Service Sydney
              </h2>
              
              {/* Introductory Paragraph */}
              <p className="elementor-paragraph animate__animated animate__fadeIn animate__delay-1s">
                What could be more convenient than hopping into a taxi or Maxi service? Choose Silver Taxi Service Sydney to complete your travel needs.
              </p>
              
              <div className="elementor-image-text-wrapper">
                {/* Image (50% width on right side) */}
                <div className="elementor-image-box animate__animated animate__fadeInRight">
                  <img 
                    src="https://via.placeholder.com/600x400" 
                    alt="Silver Taxi Sydney" 
                    className="elementor-image"
                  />
                </div>
                
                {/* Content Box */}
                <div className="elementor-text-box animate__animated animate__fadeInLeft">
                  <h3 className="elementor-subheading">Easy2Solutions Cab/Taxi Services in Sydney</h3>
                  
                  <p className="elementor-paragraph">
                    In today's fast-paced world, where time is of the essence, Taxi Maxi Sydney services provide a hassle-free travel experience. 
                    And when it comes to providing top-notch convenience, Silver Taxi Service in Sydney is undoubtedly matchless.
                  </p>
                  
                  <p className="elementor-paragraph">
                    Among the myriad of options available, there's only one that can deliver the perfect blend of comfort, safety, and reliability – 
                    and that's the Silver taxi service in Sydney. With a fleet of top-notch vehicles and experienced drivers at the helm, 
                    you can sit back, relax, and let the journey unfold, knowing that you're in good hands. Whether you're heading to the 
                    airport or exploring the city, Silver taxi service is the way to go – your ticket to hassle-free travel.
                  </p>
                  
                  <p className="elementor-paragraph">
                    No other service can match the level of comfort and ease that Silver Taxi Service in Sydney offers. 
                    Call us to know more about Silver Taxi Service Sydney.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elementor ;