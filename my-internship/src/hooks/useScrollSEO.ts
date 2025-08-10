import { useEffect, useState } from 'react';

interface SectionSEO {
  id: string;
  title: string;
  description: string;
  keywords: string;
}

const sections: SectionSEO[] = [
  {
    id: 'home',
    title: 'Amit Pokhrel - Frontend Developer | IoT Developer | Creative Professional',
    description: 'Amit Pokhrel is a skilled Frontend Developer, IoT Developer, and Creative Professional from Nepal. Specializing in React, TypeScript, Flutter, and IoT projects.',
    keywords: 'Amit Pokhrel, Frontend Developer, IoT Developer, React Developer, TypeScript, Flutter, Nepal, Portfolio'
  },
  {
    id: 'skills',
    title: 'Skills & Technologies - Amit Pokhrel Portfolio',
    description: 'Explore Amit Pokhrel\'s technical skills including React, TypeScript, Flutter, IoT Development, Python, Java, and more. View comprehensive skill categories.',
    keywords: 'React, TypeScript, Flutter, IoT, Python, Java, JavaScript, Frontend Development, Skills, Technologies'
  },
  {
    id: 'experience',
    title: 'Work Experience - Amit Pokhrel Portfolio',
    description: 'Amit Pokhrel\'s professional experience including Frontend Intern at ING Tech, Graphic Designer roles, and creative work experience.',
    keywords: 'Work Experience, Frontend Intern, ING Tech, Graphic Designer, Videographer, Professional Experience'
  },
  {
    id: 'awards',
    title: 'Awards & Certifications - Amit Pokhrel Portfolio',
    description: 'Amit Pokhrel\'s achievements including AWS certifications, hackathon participation, Flutter masterclass, and professional certifications.',
    keywords: 'AWS Certifications, Hackathon, Flutter, Python, Ubuntu Linux, Awards, Certifications'
  },
  {
    id: 'work',
    title: 'Projects Portfolio - Amit Pokhrel',
    description: 'View Amit Pokhrel\'s projects including Mental Health Care App, IoT projects, Online Pandit Booking, Store Management System, and more.',
    keywords: 'Projects, Mental Health App, IoT Projects, Flutter, React, Java, Python, Portfolio Projects'
  },
  {
    id: 'contact',
    title: 'Contact Amit Pokhrel - Get In Touch',
    description: 'Contact Amit Pokhrel for collaboration opportunities, project inquiries, or professional networking. Available for freelance and full-time opportunities.',
    keywords: 'Contact, Get In Touch, Collaboration, Freelance, Job Opportunities, Professional Network'
  }
];

export const useScrollSEO = () => {
  const [currentSection, setCurrentSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let activeSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            activeSection = section.id;
            break;
          }
        }
      }
      
      if (activeSection !== currentSection) {
        setCurrentSection(activeSection);
        
        // Update SEO meta tags
        const sectionData = sections.find(s => s.id === activeSection);
        if (sectionData) {
          // Update document title
          document.title = sectionData.title;
          
          // Update meta description
          let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
          if (metaDesc) {
            metaDesc.content = sectionData.description;
          }
          
          // Update Open Graph tags
          let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement;
          if (ogTitle) {
            ogTitle.content = sectionData.title;
          }
          
          let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement;
          if (ogDesc) {
            ogDesc.content = sectionData.description;
          }
          
          // Update Twitter Card tags
          let twitterTitle = document.querySelector('meta[property="twitter:title"]') as HTMLMetaElement;
          if (twitterTitle) {
            twitterTitle.content = sectionData.title;
          }
          
          let twitterDesc = document.querySelector('meta[property="twitter:description"]') as HTMLMetaElement;
          if (twitterDesc) {
            twitterDesc.content = sectionData.description;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  return { currentSection, sections };
}; 