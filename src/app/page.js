'use client';

import { useState } from 'react';
import 'animate.css';

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const logos = [
    { src: '/images/py.png', alt: 'Tech Logo 1' },
    { src: '/images/react.webp', alt: 'Tech Logo 2' },
    { src: '/images/mongodb.avif', alt: 'Tech Logo 3' },
    { src: '/images/aidev.webp', alt: 'Tech Logo 4' },
  ];

  return (
    <div style={containerStyle}>
      {/* Main Section */}
      <div className="animate__animated animate__fadeIn animate__delay-1s" style={mainContentStyle}>
        <h2 style={headingStyle}>Shivam Koli</h2>
        <p style={statusStyle}>Researcher & Developer</p>

        {/* Profile Image */}
        <div className="animate__animated animate__zoomIn animate__delay-2s">
          <img src="/images/name.jpg" alt="My Profile" style={profileImageStyle} />
        </div>
      </div>

      {/* Technology Logos */}
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
  justifyContent: 'center', // Centers content vertically
  alignItems: 'center', // Centers content horizontally
  background: 'url(/images/home.jpg) no-repeat center center/cover', // Add background image here
  paddingTop: '50px', // Add margin from the top (header)
  paddingBottom: '50px', // Add margin from the bottom (footer)
  color: '#fff',
  fontFamily: 'Arial, sans-serif',
  backgroundAttachment: 'fixed', // Keeps background fixed during scroll
};

const mainContentStyle = {
  marginBottom: '40px',
};

const headingStyle = {
  fontSize: '3rem',
  marginBottom: '10px',
  animation: 'fadeIn 2s ease-out',
};

const statusStyle = {
  fontSize: '1.5rem',
  color: '#ccc',
};

const profileImageStyle = {
  width: '150px',
  borderRadius: '50%',
  marginTop: '20px',
  animation: 'zoomIn 1s ease-out',
};

const techLogosStyle = {
  marginTop: '50px',
};

const logosContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '20px',
};

const logoStyle = {
  width: '60px',
  height: '60px',
  objectFit: 'contain',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Add transition for smooth effect
};

const hoverStyle = {
  transform: 'scale(1.2)', // Scale image on hover
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow on hover
};
