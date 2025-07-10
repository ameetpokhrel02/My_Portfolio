import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setError(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setError('Could not connect to server.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          required
          className="contact-input"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="contact-input"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          required
          className="contact-textarea"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit" className="contact-submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {status === 'success' && <div style={{ color: 'green', marginTop: 8 }}>Message sent successfully!</div>}
      {status === 'error' && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
      <div className="contact-socials">
        <a href="https://github.com/ameetpokhrel02" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/ameet-pokhrel-82533433b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact; 