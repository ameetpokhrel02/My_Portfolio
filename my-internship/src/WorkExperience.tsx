import React from 'react';

const WorkExperience: React.FC = () => (
  <section id="experience" className="experience-section">
    <h2 className="section-title">Work Experience</h2>
    <div className="experience-list">
      {/* ING Tec */}
      <div className="experience-card">
        <h3>Frontend Intern (React)</h3>
        <div className="experience-meta">
          <span className="company">ING Tech, Islington College Kathmandu</span>
          <span className="duration">Currently ongoing</span>
        </div>
        <ul className="experience-responsibilities">
          <li>Developing and maintaining user interfaces using React and TypeScript.</li>
          <li>Collaborating with design teams to implement responsive and intuitive UI/UX.</li>
          <li>Participating in code reviews and contributing to front-end architecture decisions.</li>
        </ul>
      </div>
      {/* KIEC Itahari */}
      <div className="experience-card">
        <h3>Graphic Designer | Videographer | Editor | Social Media Handler</h3>
        <div className="experience-meta">
          <span className="company">KIEC Itahari</span>
          <span className="duration">Present</span>
        </div>
        <ul className="experience-responsibilities">
          <li>Created marketing materials including posters, banners, and reels for Educational Webniar.</li>
          <li>Managed official social media accounts (Facebook, Instagram, TikTok), improving audience reach and engagement.</li>
          <li>Captured and edited videos/photos for educational and promotional purposes.</li>
        </ul>
      </div>
      {/* KIEC Avenue */}
      <div className="experience-card">
        <h3>Graphic Designer | Videographer | Editor</h3>
        <div className="experience-meta">
          <span className="company">KIEC Avenue, Kathmandu</span>
        </div>
        <ul className="experience-responsibilities">
          <li>Designed digital content and edited videos for student success stories.</li>
          <li>Contributed to social content strategy and visual consistency.</li>
          <li>Worked closely with the counseling and marketing team to execute daily content delivery.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default WorkExperience; 