'use client';

import { useState } from 'react';
import 'animate.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter();

  const logos = [
    { src: '/images/py.png', alt: 'Python' },
    { src: '/images/react.webp', alt: 'React' },
    { src: '/images/mongodb.avif', alt: 'MongoDB' },
    { src: '/images/aidev.webp', alt: 'AI Development' },
  ];

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div style={containerStyle}>
      {/* Main Section */}
      <div className="animate__animated animate__fadeIn animate__delay-1s" style={mainContentStyle}>
        <h2 style={headingStyle}>Shivam Koli</h2>
        <p style={statusStyle}>Researcher & Developer</p>

        {/* Profile Image */}
        <div className="animate__animated animate__zoomIn animate__delay-2s" style={imageWrapperStyle}>
          <img src="/images/name.jpg" alt="Shivam Koli" style={profileImageStyle} />
        </div>
      </div>

      {/* Founder Tagline */}
      <div style={founderSectionStyle}>
        <p style={founderTextStyle}>Founder of <strong>Shivumagic</strong></p>
        <button onClick={() => router.push('https://shivumagic.netlify.app/')} style={buttonStyle}>
          Visit Shivumagic
        </button>
      </div>

      {/* Technologies Section */}
      <div className="animate__animated animate__fadeIn animate__delay-3s" style={techLogosStyle}>
        <h3>Technologies I Use</h3>
        <div style={logosContainerStyle}>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              style={hoveredIndex === index ? { ...logoStyle, ...hoverStyle } : logoStyle}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  textAlign: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'url(/images/home.jpg) no-repeat center center/cover',
  padding: '60px 20px',
  color: '#fff',
  fontFamily: 'Arial, sans-serif',
  backgroundAttachment: 'fixed',
};

const mainContentStyle = {
  marginBottom: '30px',
};

const headingStyle = {
  fontSize: '3rem',
  marginBottom: '10px',
};

const statusStyle = {
  fontSize: '1.5rem',
  color: '#ccc',
};

const imageWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
};

const profileImageStyle = {
  width: '160px',
  height: '160px',
  borderRadius: '50%',
  objectFit: 'cover',
  border: '3px solid #fff',
};

const founderSectionStyle = {
  marginTop: '30px',
  textAlign: 'center',
};

const founderTextStyle = {
  fontSize: '1.2rem',
  marginBottom: '10px',
};

const buttonStyle = {
  backgroundColor: '#16a7ff',
  color: '#fff',
  padding: '10px 20px',
  fontSize: '1rem',
  border: 'none',
  borderRadius: '30px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const techLogosStyle = {
  marginTop: '50px',
};

const logosContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '20px',
  marginTop: '20px',
};

const logoStyle = {
  width: '60px',
  height: '60px',
  objectFit: 'contain',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const hoverStyle = {
  transform: 'scale(1.2)',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
};
