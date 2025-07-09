import React, { useState } from 'react';
import { FaHome, FaBriefcase, FaBrain, FaCode, FaTrophy, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: 'Home', icon: <FaHome />, href: '#home' },
  { label: 'Skills', icon: <FaBrain />, href: '#skills' },
  { label: 'Experience', icon: <FaBriefcase />, href: '#experience' },
  { label: 'Awards', icon: <FaTrophy />, href: '#awards' },
  { label: 'Projects', icon: <FaCode />, href: '#work' },
  { label: 'Contact', icon: <FaEnvelope />, href: '#contact' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar-section">
      <div className="navbar-inner">
        <span className="navbar-logo">AP</span>
        <button className="navbar-hamburger" onClick={() => setMenuOpen(m => !m)} aria-label="Toggle menu">
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
        <ul className={`navbar-list${menuOpen ? ' open' : ''}`}>
          {navItems.map(item => (
            <li key={item.label} className="navbar-item">
              <a
                href={item.href}
                className="navbar-link"
                onClick={e => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                <span className="navbar-icon">{item.icon}</span>
                <span className="navbar-label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 