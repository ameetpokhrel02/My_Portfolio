import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaDownload, FaInstagram } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import mee from '/mee.jpg';

const roles = [
  'Frontend Developer',
  'IOT Developer',
  'Photographer & Videographer',
  'Creative Professional',
];

const TYPING_SPEED = 80;
const PAUSE = 1200;

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const current = words[index];
    if (!deleting && displayed.length < current.length) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), TYPING_SPEED);
    } else if (!deleting && displayed.length === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), PAUSE);
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), TYPING_SPEED / 2);
    } else if (deleting && displayed.length === 0) {
      timeout.current = setTimeout(() => {
        setDeleting(false);
        setIndex((index + 1) % words.length);
      }, 400);
    }
    return () => { if (timeout.current) clearTimeout(timeout.current); };
  }, [displayed, deleting, index, words]);

  return displayed;
}

const Hero: React.FC = () => {
  const typedRole = useTypewriter(roles);
  const [photoTransform, setPhotoTransform] = useState('translate(0, 0)');

  function handlePhotoMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const dx = x < centerX - rect.width * 0.1 ? -1 : x > centerX + rect.width * 0.1 ? 1 : 0;
    const dy = y < centerY - rect.height * 0.1 ? -1 : y > centerY + rect.height * 0.1 ? 1 : 0;
    setPhotoTransform(`translate(${dx * 18}px, ${dy * 18}px)`);
  }
  function handlePhotoReset() {
    setPhotoTransform('translate(0, 0)');
  }

  return (
    <section id="home" className="hero-section hero-gradient-bg">
      <div className="hero-flex">
        <div className="hero-content-col">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-highlight">Amit Pokhrel</span>
          </h1>
          <h2 className="hero-typewriter">
            {typedRole}
            <span className="hero-cursor">|</span>
          </h2>
          <p className="hero-intro">
            BSc (Hons) Computing, Itahari International College
          </p>
          <div className="hero-location">
            <span className="hero-location-icon">
              <MdLocationOn size={22} style={{ verticalAlign: 'middle', marginRight: 6 }} />
            </span>
            <span className="hero-location-text">Tehrathum, Nepal</span>
          </div>
          <div className="hero-links">
            <a href="https://www.linkedin.com/in/ameet-pokhrel-82533433b/" target="_blank" rel="noopener noreferrer" className="hero-link">
              <FaLinkedin size={20} style={{ marginRight: 6, verticalAlign: 'middle' }} />
            </a>
            <a href="https://github.com/ameetpokhrel02" target="_blank" rel="noopener noreferrer" className="hero-link">
              <FaGithub size={20} style={{ marginRight: 6, verticalAlign: 'middle' }} />
            </a>
            <a
              href="/Amit-Pokhrel-1CV-Resume.pdf"
              className="hero-link"
              download
              aria-label="Download CV (PDF)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload size={20} style={{ marginRight: 6, verticalAlign: 'middle' }} />
            </a>
          </div>
          <div className="hero-btns">
            <a href="#contact" className="hero-cta hero-cta-yellow">Get In Touch</a>
            <a href="#work" className="hero-cta">View My Work</a>
          </div>
        </div>
        <div className="hero-photo-code-col">
          <div className="hero-photo-code-flex" style={{ position: 'relative' }}>
            {/* Social Media Icons Around Profile Photo */}
            <a
              href="https://www.linkedin.com/in/ameet-pokhrel-82533433b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon hero-social-linkedin"
            >
              <FaLinkedin size={32} />
              <span className="hero-social-tooltip">LinkedIn</span>
            </a>
            <a
              href="https://github.com/ameetpokhrel02"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon hero-social-github"
            >
              <FaGithub size={32} />
              <span className="hero-social-tooltip">GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/ameetpokhrel02/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon hero-social-instagram"
            >
              <FaInstagram size={32} />
              <span className="hero-social-tooltip">Instagram</span>
            </a>
            <div
              className="hero-photo-frame"
              style={{ transform: photoTransform, transition: 'transform 0.35s cubic-bezier(.4,2,.6,1)' }}
              onMouseMove={handlePhotoMove}
              onMouseLeave={handlePhotoReset}
            >
              <img src={mee} alt="Amit Pokhrel" className="hero-photo" />
            </div>
            <div
              className="hero-code-block"
              style={{ transform: photoTransform, transition: 'transform 0.35s cubic-bezier(.4,2,.6,1)' }}
              onMouseMove={handlePhotoMove}
              onMouseLeave={handlePhotoReset}
            >
              <div className="hero-code-header">
                <span className="hero-code-dot red"></span>
                <span className="hero-code-dot yellow"></span>
                <span className="hero-code-dot green"></span>
              </div>
              <pre className="hero-code-content">
{`const amit = {
  name: "Amit Pokhrel",
  roles: ["Frontend Developer", "IOT Developer", "Creative Professional", "Photographer & Videographer"],
  skills: ["React", "IOT", "JavaScript"],
  passion: "Creating innovative solutions",
  location: "Nepal"
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 