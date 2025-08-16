'use client'
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="section-bg-heading">Get In Touch</div>
      <h1 className="section-heading">Contact Us</h1>
      <h3 className="sub-heading">Send Us a <span>Message</span></h3>

      <div className="contact-container">
        <div className="contact-info">
          <h3 className="info-heading">Our Studio</h3>
          <address className="address">
            123 Design Street<br />
            Architecture City, AC 10001<br /><br />
            Phone: (123) 456-7890<br />
            Email: studio@archdesign.com
          </address>
          
          <div className="business-hours">
            <h4>Business Hours</h4>
            <p>Monday - Friday: 9am - 6pm</p>
            <p>Saturday: 10am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              placeholder=" "
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <label htmlFor="name">Your Name</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder=" "
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <label htmlFor="email">Email Address</label>
          </div>

          <div className="form-group">
            <textarea
              id="message"
              placeholder=" "
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
            <label htmlFor="message">Your Message</label>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
            <span className="arrow-icon">→</span>
          </button>
        </form>
      </div>
      
      <div className="section-border"></div>
    </section>
  );
}