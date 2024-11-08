import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to email, API call, etc.)
    console.log("Form submitted: ", formData);
    alert("Thank you for reaching out. We will contact you soon!");
  };

  return (
    <>
    <Navbar />

     <div className="contact-container">
      <h2 className="section-title">Contact Us</h2>
      
      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required
          />
        </label>
        <label>
          Message:
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            rows="5" 
            required
          />
        </label>
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {/* Contact Information */}
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: <a href="mailto:contact@conference.com">contact@conference.com</a></p>
        <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
        <p>Address: 123 Conference St, City, Country</p>
      </div>

      {/* Google Map Embed */}
      <div className="map-container">
        <iframe
          title="Conference Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095933!2d144.96315761531568!3d-37.81627974202167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775c4fa7b42274!2sConference+Center!5e0!3m2!1sen!2sus!4v1605239868081!5m2!1sen!2sus"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </div>
    </div>
    <Footer />  
    </>
   
  );
};

export default ContactUs;
