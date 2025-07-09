import React from 'react';

const Contact: React.FC = () => (
  <section id="contact" className="contact-section">
    <h2 className="section-title">Contact</h2>
    <form className="contact-form" onSubmit={e => e.preventDefault()}>
      <input type="text" placeholder="Your Name" required className="contact-input" />
      <input type="email" placeholder="Your Email" required className="contact-input" />
      <textarea placeholder="Your Message" required className="contact-textarea" />
      <button type="submit" className="contact-submit">Send Message</button>
    </form>
    <div className="contact-socials">
      <a href="https://github.com/amitpokhrel123" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://linkedin.com/in/amitpokhrel123" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  </section>
);

export default Contact; 