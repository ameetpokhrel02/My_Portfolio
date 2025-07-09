import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTwitter, FaHome, FaBrain, FaBriefcase, FaCode, FaTrophy, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const socials = [
  { href: 'https://www.linkedin.com/in/ameet-pokhrel-82533433b/', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://github.com/ameetpokhrel02', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://www.instagram.com/ameet_pokhrel/', icon: <FaInstagram />, label: 'Instagram' },
  { href: 'https://www.facebook.com/amit.pokhrel.961/', icon: <FaFacebook />, label: 'Facebook' },
  { href: 'https://x.com/pokhrelameet2', icon: <FaTwitter />, label: 'Twitter' },
  { href: 'https://www.credly.com/users/amit-pokhrel.4f415440/edit#credly', icon: (
    <span className="footer-credly-icon">Credly</span>
  ), label: 'Credly' },
];

const footerNav = [
  { label: 'Home', icon: <FaHome />, href: '#home' },
  { label: 'Skills', icon: <FaBrain />, href: '#skills' },
  { label: 'Experience', icon: <FaBriefcase />, href: '#experience' },
  { label: 'Awards', icon: <FaTrophy />, href: '#awards' },
  { label: 'Projects', icon: <FaCode />, href: '#work' },
  { label: 'Contact', icon: <FaEnvelope />, href: '#contact' },
];

const Footer: React.FC = () => (
  <footer className="footer-section">
    <div className="footer-nav" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
      {footerNav.map(item => (
        <a
          key={item.label}
          href={item.href}
          className="navbar-link"
          onClick={e => {
            e.preventDefault();
            const el = document.querySelector(item.href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="navbar-icon">{item.icon}</span>
          <span className="navbar-label">{item.label}</span>
        </a>
      ))}
    </div>
    <div className="footer-socials-row" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <div className="footer-socials">
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              className="footer-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      <button
        className="back-to-top-btn"
        aria-label="Back to top"
        onClick={e => {
          e.preventDefault();
          const el = document.querySelector('#home');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <FaArrowUp style={{ marginRight: 8 }} /> Back to Top
      </button>
    </div>
    <div className="footer-copyright">
      &copy; {new Date().getFullYear()} amitpokhrel
    </div>
  </footer>
);

export default Footer; 