import React, { useState } from 'react';
import { FaAward, FaCertificate, FaEye } from 'react-icons/fa';

const awards = [
  {
    icon: <FaAward />,
    title: 'Participant - ACES TechFest Hackathon',
    subtitle: 'Purwanchal Engineering Campus, Dharan',
  },
];

const certifications = [
  'Introduction to Python',
  'AWS Academy Graduate (Machine Learning Foundations, Cloud Foundations, Machine Learning for Natural Language Processing, Data Engineering)',
  'Flutter Masterclass (Dart, APIs, Firebase & More)',
  'Ubuntu Linux: Providing Services',
];

const certificateImages = [
  { src: '/CertificateOfCompletion_Ubuntu Linux Providing Services_page-0001.jpg', alt: 'Ubuntu Linux Certificate', title: 'Ubuntu Linux: Providing Services' },
  { src: '/Machine_Learning_Foundations_Badge.jpg', alt: 'ML Foundations Badge', title: 'AWS ML Foundations' },
  { src: '/Machine_Learning_for_Natural_Language_Processing_.jpg', alt: 'ML for NLP Badge', title: 'AWS ML for NLP' },
  { src: '/AWS_Academy_Graduate___AWS_Academy_Data_Engineering_Badge20250629-26-8wt82n_page-0001.jpg', alt: 'AWS Data Engineering Badge', title: 'AWS Data Engineering' },
  { src: '/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations.jpg', alt: 'AWS Cloud Foundations', title: 'AWS Cloud Foundations' },
  { src: '/python-ccc_page-0001.jpg', alt: 'Python CCC Certificate', title: 'Python CCC' },
  { src: '/python certificate.jpg', alt: 'Python Certificate', title: 'Python (Saylor.org)' },
  { src: '/flutter.png', alt: 'Flutter Certificate', title: 'Flutter Masterclass' },
  { src: '/Software-Hackathon-certificate-Data-Set-60-copy.jpg', alt: 'Hackathon Certificate', title: 'ACES TechFest Hackathon' },
];

const Awards: React.FC = () => {
  const [modalImg, setModalImg] = useState<string | null>(null);
  return (
    <section id="awards" className="awards-section">
      <h2 className="section-title">Awards & Certifications</h2>
      <div className="awards-list">
        <h3 className="awards-subtitle"><FaAward style={{ marginRight: 8 }} /> Awards</h3>
        <ul className="awards-items">
          {awards.map((a, i) => (
            <li key={a.title + i} className="award-item">
              <span className="award-icon">{a.icon}</span>
              <span className="award-title">{a.title}</span>
              <span className="award-subtitle">{a.subtitle}</span>
            </li>
          ))}
        </ul>
        <h3 className="awards-subtitle"><FaCertificate style={{ marginRight: 8 }} /> Certifications</h3>
        <ul className="awards-items">
          {certifications.map((c, i) => (
            <li key={c + i} className="award-item">
              <span className="award-icon"><FaCertificate /></span>
              <span className="award-title">{c}</span>
            </li>
          ))}
        </ul>
        <div className="cert-gallery">
          {certificateImages.map((img,) => (
            <div className="cert-card" key={img.src}>
              <img src={img.src} alt={img.alt} className="cert-img" />
              <div className="cert-title">{img.title}</div>
              <button className="cert-view-btn" onClick={() => setModalImg(img.src)}>
                <FaEye style={{ marginRight: 6, verticalAlign: 'middle' }} /> View
              </button>
            </div>
          ))}
        </div>
        {modalImg && (
          <div className="cert-modal" onClick={() => setModalImg(null)}>
            <img src={modalImg} alt="Certificate" className="cert-modal-img" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Awards; 