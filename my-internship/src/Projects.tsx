import React, { useState } from 'react';
import { FaGithub, FaPlay, FaTimes } from 'react-icons/fa';

const projectVideos: Record<string, string> = {
  'Mental Health Care App': '/videos/mnental health.mp4',
  'Python Snake Game': '/videos/snakegame.mp4',
  'Online Food Ordering & Delivery Web App': '/videos/online food.mp4',
  'Smart Waste Collection System (IoT + Cloud)': '/videos/iot-car.mp4',
  'Online Pandit Booking Website': '/videos/Book Pandit - Online Pandit Booking Platform and 8 more pages - Person 2 - Microsoft​ Edge 2025-07-03 14-07-15.mp4',
  'Smart Obstacles Detecting Vehicle (IoT + Robotics)': '/videos/obstacle detecting.mp4',
  'Autonomous Fire Extinguisher Robot (IoT)': '/videos/fire extinguesr iot .mp4',
  'Store Management System (GUI)': '/videos/Store GUI 2025-07-03 14-30-48.mp4',
  'Brewandchew Cafe Website': '/videos/Brew nad chew.mp4',
};

const projects = [
  // Academic Projects
  {
    type: 'Academic',
    title: 'Appointment Booking System (Full Stack)',
    technologies: ['Java Servlet', 'JSP', 'XAMPP', 'MySQL', 'Figma'],
    description: 'Full-stack appointment booking web system with admin/user roles. Backend in Java Servlet, frontend in JSP, and MySQL for data storage. Features: Secure login, appointment request/approval, responsive frontend.',
    github: 'https://github.com/ameetpokhrel02/Healthcare',
    demo: '',
  },
  {
    type: 'Academic',
    title: 'Mental Health Care App',
    technologies: ['Flutter', 'Node.js', 'MySQL'],
    description: 'Cross-platform mobile app for booking doctor appointments with secure login and role-based access.',
    github: 'https://github.com/ameetpokhrel02/Mental-Health-Care-App',
    demo: '#',
  },
  {
    type: 'Academic',
    title: 'Smart Waste Collection System (IoT + Cloud)',
    technologies: ['Arduino', 'ESP32', 'Python'],
    description: 'An IoT robot that detects trash using sensors and sends alerts to a cloud server. Tracks bin levels and routes in real time.',
    github: '#',
    demo: '#',
  },
  {
    type: 'Academic',
    title: 'Store Management System (GUI)',
    technologies: ['Java', 'JavaFX/Swing', 'File Handling'],
    description: 'Stock management using object-oriented concept.',
    github: 'https://github.com/ameetpokhrel02/STORE-MGMT-GUI',
    demo: '#',
  },
  {
    type: 'Academic',
    title: 'Movie Rent System (Full Stack)',
    technologies: ['Java', 'JSP', 'MySQL', 'XAMPP', 'Figma'],
    description: 'Full-stack movie rental web system with role-based authentication.',
    github: 'https://github.com/ameetpokhrel02/CineRent',
    demo: '#',
  },
  // Personal Projects
  {
    type: 'Personal',
    title: 'Online Pandit Booking Website',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js (in progress)'],
    description: 'A website for booking Hindu priests (Pandits) for events like weddings, pujas, etc. Includes ceremony filtering and responsive UI.',
    github: 'https://github.com/ameetpokhrel02/Online-Pandit-Booking',
    demo: '#',
  },
  {
    type: 'Personal',
    title: 'Python Snake Game',
    technologies: ['Python', 'Pygame'],
    description: 'A classic Snake game. Controlled by keyboard with score tracking and increasing difficulty. Learned game loop, OOP, and collision detection.',
    github: '#',
    demo: '#',
  },
  {
    type: 'Personal',
    title: 'Online Food Ordering & Delivery Web App',
    technologies: ['React.js', 'Node.js'],
    description: 'A food delivery website with real-time order tracking, cart, checkout, and user login. (In progress).',
    github: 'https://github.com/ameetpokhrel02/ameetpokhrel02-Online-Food-Ordering-System',
    demo: '#',
  },
  {
    type: 'Personal',
    title: 'Smart Obstacles Detecting Vehicle (IoT + Robotics)',
    technologies: ['Arduino', 'ESP32', 'Ultrasonic Sensors'],
    description: 'A robot car that avoids obstacles using real-time sensor data. Has both auto and manual modes with LED indicators.',
    github: 'https://github.com/ameetpokhrel02/Obstacle_Avoid_Vehicle',
    demo: '#',
  },
  {
    type: 'Personal',
    title: 'Autonomous Fire Extinguisher Robot (IoT)',
    technologies: ['Arduino', 'ESP32', 'IR Sensors'],
    description: 'A smart robot that detects fire and sprays water automatically. Sends alerts via WiFi and logs fire data to the cloud.',
    github: '#',
    demo: '#',
  },
  {
    type: 'Personal',
    title: 'Brewandchew Cafe Website',
    technologies: ['Python Django', 'HTML', 'CSS', 'JavaScript'],
    description: 'A complete café website built using Django. It includes menu pages, order forms, feedback, and contact sections. Data is stored in a Django database with dynamic content loading.',
    github: 'https://github.com/ameetpokhrel02/Second-Year-Project-SYP-',
    demo: '#',
  },
];

const tabs = [
  { label: 'All Projects', value: 'All' },
  { label: 'Academic Projects', value: 'Academic' },
  { label: 'Personal Projects', value: 'Personal' },
];

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const filtered = activeTab === 'All' ? projects : projects.filter(p => p.type === activeTab);

  return (
    <section id="work" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-tabs">
        {tabs.map(tab => (
          <button
            key={tab.value}
            className={`projects-tab-btn${activeTab === tab.value ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="projects-list">
        {filtered.map((project, idx) => (
          <div className="project-card" key={project.title + idx}>
            <h3>{project.title}</h3>
            <div className="project-techs">
              {project.technologies.map(tech => (
                <span className="project-tech" key={tech}>{tech}</span>
              ))}
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-links-row">
              <a href={project.github} className="project-link small" target="_blank" rel="noopener noreferrer">
                <FaGithub style={{ marginRight: 6, verticalAlign: 'middle' }} /> GitHub
              </a>
              {projectVideos[project.title] ? (
                <button
                  className="project-link small demo"
                  onClick={() => setVideoUrl(projectVideos[project.title])}
                  style={{ border: 'none', background: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
                >
                  <FaPlay style={{ marginRight: 6, verticalAlign: 'middle' }} /> Watch Demo
                </button>
              ) : (
                <a href={project.demo} className="project-link small demo" target="_blank" rel="noopener noreferrer">
                  <FaPlay style={{ marginRight: 6, verticalAlign: 'middle' }} /> Watch Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {videoUrl && (
        <div className="project-video-modal" onClick={() => setVideoUrl(null)}>
          <div className="project-video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="project-video-modal-close" onClick={() => setVideoUrl(null)} aria-label="Close video">
              <FaTimes />
            </button>
            <video src={videoUrl} controls autoPlay style={{ width: '100%', borderRadius: '12px', background: '#000' }} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; 