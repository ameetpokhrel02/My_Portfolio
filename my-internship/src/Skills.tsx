import React, { useState } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaGithub, FaWindows, FaLinux, FaFigma, FaCameraRetro, FaVideo } from 'react-icons/fa';
import { SiFlask, SiDjango, SiMysql, SiXampp, SiCanva, SiVscodium, SiPostman, SiEclipseide, SiJavascript, SiAdobephotoshop, SiFlutter, SiTypescript, SiPostgresql, SiIntellijidea } from 'react-icons/si';

const skillCategories = [
  {
    name: 'Front-end',
    skills: [
      { label: 'React', icon: <FaReact color="#61DAFB" size={32} />, emphasize: true },
      { label: 'Flutter', icon: <SiFlutter color="#02569B" size={32} /> },
      { label: 'HTML', icon: <FaHtml5 color="#E34F26" size={32} /> },
      { label: 'CSS', icon: <FaCss3Alt color="#1572B6" size={32} /> },
      { label: 'JavaScript', icon: <SiJavascript color="#F7DF1E" size={32} /> },
    ],
  },
  {
    name: 'Back-end',
    skills: [
      { label: 'Node.js', icon: <FaNodeJs color="#339933" size={32} /> },
      { label: 'Flask', icon: <SiFlask color="#000" size={32} /> },
      { label: 'Django (Learning)', icon: <SiDjango color="#092E20" size={32} /> },
      { label: 'Java Servlet (JSP)', icon: <FaJava color="#007396" size={32} /> },
    ],
  },
  {
    name: 'Database',
    skills: [
      { label: 'MySQL', icon: <SiMysql color="#4479A1" size={32} /> },
      { label: 'XAMPP', icon: <SiXampp color="#FB7A24" size={32} /> },
      { label: 'PostgreSQL', icon: <SiPostgresql color="#336791" size={32} /> },
    ],
  },
  {
    name: 'Languages',
    skills: [
      { label: 'Python', icon: <FaPython color="#3776AB" size={32} /> },
      { label: 'Java', icon: <FaJava color="#007396" size={32} /> },
      { label: 'TypeScript', icon: <SiTypescript color="#3178C6" size={32} /> },
      { label: 'JavaScript', icon: <SiJavascript color="#F7DF1E" size={32} /> },
      { label: 'HTML', icon: <FaHtml5 color="#E34F26" size={32} /> },
      { label: 'CSS', icon: <FaCss3Alt color="#1572B6" size={32} /> },
      { label: 'C', icon: <FaJava color="#007396" size={32} /> }, // No official C icon, using Java as fallback
    ],
  },
  {
    name: 'Tools',
    skills: [
      { label: 'GitHub', icon: <FaGithub color="#181717" size={32} /> },
      { label: 'Postman', icon: <SiPostman color="#FF6C37" size={32} /> },
      { label: 'VS Code', icon: <SiVscodium color="#007ACC" size={32} /> },
      { label: 'Eclipse', icon: <SiEclipseide color="#2C2255" size={32} /> },
      { label: 'IntelliJ', icon: <SiIntellijidea color="#000" size={32} /> },
    ],
  },
  {
    name: 'Others',
    skills: [
      { label: 'Adobe Photoshop', icon: <SiAdobephotoshop color="#31A8FF" size={32} /> },
      { label: 'Canva', icon: <SiCanva color="#00C4CC" size={32} /> },
      { label: 'Figma', icon: <FaFigma color="#F24E1E" size={32} /> },
      { label: 'Windows', icon: <FaWindows color="#0078D6" size={32} /> },
      { label: 'Linux', icon: <FaLinux color="#FCC624" size={32} /> },
      { label: 'Photographer', icon: <FaCameraRetro color="#555" size={32} /> },
      { label: 'Videographer', icon: <FaVideo color="#0077b6" size={32} /> },
    ],
  },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Front-end');
  const current = skillCategories.find((cat) => cat.name === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-categories">
        {skillCategories.map((cat) => (
          <button
            key={cat.name}
            className={`skills-category-btn${activeCategory === cat.name ? ' active' : ''}`}
            onClick={() => setActiveCategory(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <div className="skills-list">
        {current?.skills.map((skill) => (
          <div
            key={skill.label}
            className={`skill-item${skill.emphasize ? ' emphasize' : ''}`}
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-label">{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 