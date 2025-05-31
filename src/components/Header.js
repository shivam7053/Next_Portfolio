'use client';
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1 className="animate__animated animate__fadeInDown">|| Jaimatadi ||</h1>
      <nav>
        <Link href="/" style={linkStyle} className="animate__animated animate__fadeInUp animate__delay-1s">Home</Link>
        <Link href="/about" style={linkStyle} className="animate__animated animate__fadeInUp animate__delay-1s">About</Link>
        <Link href="/projects" style={linkStyle} className="animate__animated animate__fadeInUp animate__delay-1s">Projects</Link>
        <Link href="/contact" style={linkStyle} className="animate__animated animate__fadeInUp animate__delay-1s">Contact</Link>
        <Link href="/research" style={linkStyle} className="animate__animated animate__fadeInUp animate__delay-1s">Research</Link>
      </nav>
    </header>
  );
}

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
