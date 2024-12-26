'use client';

import React from 'react';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';


export default function Layout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>ShivamKoli.Portfolio</title>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            rel="stylesheet"
          />
        </head>
        <body style={bodyStyle}>
          {/* Video Background */}
          <div style={videoContainerStyle}>
            <video
              autoPlay
              loop
              muted
              style={videoStyle}
              src="/videos/layout.mp4" // Replace with your video file path
              type="video/mp4"
            />
          </div>

          {/* Content Overlay */}
          <div style={contentOverlayStyle}>
            <header style={headerStyle}>
              <h1 className="animate__animated animate__fadeInDown">|| Jaimatadi ||</h1>
              <nav>
                <a href="/" style={linkStyle} className="animate__animated animate__fadeInUp animate__delay-1s">
                  Home
                </a>
                <a href="/about" style={linkStyle} className="animate__animated animate__fadeInUp animate__delay-1s">
                  About
                </a>
                <a href="/projects" style={linkStyle} className="animate__animated animate__fadeInUp animate__delay-1s">
                  Projects
                </a>
                <a href="/contact" style={linkStyle} className="animate__animated animate__fadeInUp animate__delay-1s">
                  Contact
                </a>
              </nav>
            </header>
            <main style={mainStyle}>{children}</main>
          </div>

          {/* Footer */}
          <footer style={footerStyle}>
            <div style={footerContainerStyle}>
              

              {/* Footer Description */}
              <div>
                <p>&copy; 2024 ShivamKoli. All rights reserved.</p>
              </div>

              {/* Social Media Links */}
              <div style={socialMediaStyle}>
                <a
                  href="https://www.instagram.com/shivamkoli.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://x.com/DevOpsShivam"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/shivam7053"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </>
  );
}

const bodyStyle = {
  margin: 0,
  padding: 0,
  fontFamily: 'Arial, sans-serif',
  height: '100%',
};

const videoContainerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  overflow: 'hidden',
};

const videoStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const contentOverlayStyle = {
  position: 'relative',
  zIndex: 1,
  color: '#fff',
  textAlign: 'center',
  minHeight: '100vh',
};

const headerStyle = {
  backgroundColor: 'rgba(14, 25, 158, 0.7)',
  padding: '10px 20px',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 2,
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  marginLeft: '20px',
  fontSize: '1.2rem',
};

const mainStyle = {
  padding: '20px',
};

const footerStyle = {
  textAlign: 'center',
  backgroundColor: 'rgba(14, 25, 158, 0.7)',
  color: '#fff',
  padding: '20px 0',
};

const footerContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  flexWrap: 'wrap',
};

const socialMediaStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '15px',
};

const socialLinkStyle = {
  color: '#fff',
  fontSize: '1.5rem',
  textDecoration: 'none',
};
