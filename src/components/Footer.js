'use client';
import React from 'react';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <p>&copy; 2025-26 ShivamKoli. All rights reserved.</p>
        <div style={socialMediaStyle}>
          <a href="https://www.instagram.com/shivamkoli.tech/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}><FaInstagram /></a>
          <a href="https://x.com/DevOpsShivam" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}><FaTwitter /></a>
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}><FaLinkedin /></a>
          <a href="https://github.com/shivam7053" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
}

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
