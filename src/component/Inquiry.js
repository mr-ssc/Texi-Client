import React, { useState } from 'react';
import './Inquiry.css';

const Inquiry = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    pickupAddress: '',
    dropAddress: '',
    pickupDate: '',
    pickupTime: '',
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+61',
    mobile: '',
    businessName: '',
    passengers: '1',
    taxiType: '',
    tripType: 'one_way',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your inquiry! We will contact you shortly.');
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        serviceType: '',
        pickupAddress: '',
        dropAddress: '',
        pickupDate: '',
        pickupTime: '',
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+61',
        mobile: '',
        businessName: '',
        passengers: '1',
        taxiType: '',
        tripType: 'one_way',
        additionalInfo: ''
      });
    }, 1500);
  };

  return (
    <div className="inquiry-container">
      <div className="inquiry-header">
        <h2 className="inquiry-title animate-pop">Platinum Taxi Service</h2>
        <p className="inquiry-subtitle animate-fade">
          Looking For Taxi? Just Call Us To Have A Hassle Free Sydney Ride With Platinum Taxi Service.
        </p>
        <p className="inquiry-contact animate-fade">
          <i className="fas fa-phone-alt"></i> Mobile: +61 123 456 789
        </p>
      </div>

      <form className="inquiry-form animate-slide-up" onSubmit={handleSubmit}>
        <div className="form-grid">
          {/* Row 1 */}
          <div className="form-group">
            <label htmlFor="serviceType" className="form-label">Service Type *</label>
            <select 
              id="serviceType"
              className="form-select"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
            >
              <option value="">Select Service Type</option>
              <option value="general">General Transfers</option>
              <option value="airport">Airport Transport</option>
              <option value="cruise">Cruise Transport</option>
              <option value="event">Event Transport</option>
              <option value="wedding">Wedding Transport</option>
              <option value="racecourse">Racecourse Transport</option>
              <option value="birthday">Birthday Transport</option>
              <option value="school">School Transport</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="pickupAddress" className="form-label">Pickup Address *</label>
            <input 
              type="text" 
              id="pickupAddress"
              className="form-input" 
              placeholder="Enter pickup address" 
              name="pickupAddress"
              value={formData.pickupAddress}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dropAddress" className="form-label">Drop Address *</label>
            <input 
              type="text" 
              id="dropAddress"
              className="form-input" 
              placeholder="Enter drop address" 
              name="dropAddress"
              value={formData.dropAddress}
              onChange={handleChange}
              required
            />
          </div>

          {/* Row 2 */}
          <div className="form-group">
            <label htmlFor="pickupDate" className="form-label">Pickup Date *</label>
            <input 
              type="date" 
              id="pickupDate"
              className="form-input" 
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="pickupTime" className="form-label">Pickup Time *</label>
            <input 
              type="time" 
              id="pickupTime"
              className="form-input" 
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="passengers" className="form-label">Passengers *</label>
            <select 
              id="passengers"
              className="form-select"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7+</option>
            </select>
          </div>

          {/* Row 3 */}
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">First Name *</label>
            <input 
              type="text" 
              id="firstName"
              className="form-input" 
              placeholder="Enter first name" 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName" className="form-label">Last Name *</label>
            <input 
              type="text" 
              id="lastName"
              className="form-input" 
              placeholder="Enter last name" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email *</label>
            <input 
              type="email" 
              id="email"
              className="form-input" 
              placeholder="Enter email address" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Row 4 */}
          <div className="form-group">
            <label htmlFor="mobile" className="form-label">Mobile Number *</label>
            <div className="phone-input">
              <select 
                className="country-code"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
              >
                <option value="+61">🇦🇺 +61</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+64">🇳🇿 +64</option>
                <option value="+91">🇮🇳 +91</option>
              </select>
              <input 
                type="tel" 
                id="mobile"
                className="form-input phone-number" 
                placeholder="123 456 789" 
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="businessName" className="form-label">Business Name</label>
            <input 
              type="text" 
              id="businessName"
              className="form-input" 
              placeholder="Enter business name" 
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="taxiType" className="form-label">Taxi Type *</label>
            <select 
              id="taxiType"
              className="form-select"
              name="taxiType"
              value={formData.taxiType}
              onChange={handleChange}
              required
            >
              <option value="">Select Taxi Type</option>
              <option value="sedan">Sedan</option>
              <option value="baby_seat">Baby Seat Maxi</option>
              <option value="maxi_7">Maxi 7 Seats</option>
              <option value="maxi_11">Maxi 11 Seats</option>
              <option value="party_bus">Party Bus</option>
              <option value="wheelchair">Wheelchair Taxi</option>
            </select>
          </div>

          {/* Row 5 */}
          <div className="form-group">
            <label htmlFor="tripType" className="form-label">Trip Type *</label>
            <select 
              id="tripType"
              className="form-select"
              name="tripType"
              value={formData.tripType}
              onChange={handleChange}
              required
            >
              <option value="one_way">One Way</option>
              <option value="return">Return Trip</option>
            </select>
          </div>
          
          <div className="form-group full-width">
            <label htmlFor="additionalInfo" className="form-label">Additional Information</label>
            <textarea 
              id="additionalInfo"
              className="form-textarea" 
              placeholder="E.g.: Room No, Additional Contact Number"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <i className="fas fa-spinner fa-spin"></i> Processing...
            </>
          ) : (
            <>
              <i className="fas fa-taxi"></i> Submit Booking
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Inquiry;