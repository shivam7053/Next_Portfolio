'use client';
import React from 'react';
import Image from 'next/image';
import img from '../../public/images/name.jpg';

export default function SplashScreen() {
  return (
    <>
      <style jsx global>{globalStyles}</style>
      <div style={splashStyle}>
        <Image
          src={img}
          alt="Shivam Koli"
          width={120}
          height={120}
          style={{ borderRadius: '50%', marginBottom: '20px' }}
        />
        <h2 style={{ color: '#fff', marginBottom: '10px' }}>Welcome to Portfolio</h2>
        <div className="spinner small-spinner"></div>
      </div>
    </>
  );
}

const splashStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: 'linear-gradient(-45deg, #00aaff, #004e92, #1f4037, #4ca1af)',
  backgroundSize: '400% 400%',
  animation: 'gradientBG 8s ease infinite',
  flexDirection: 'column',
};

const globalStyles = `
@keyframes gradientBG {
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
}
@keyframes spinnerAnim {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.spinner {
  width: 70px;
  height: 70px;
  border: 8px solid rgba(255, 255, 255, 0.2);
  border-top: 8px solid #ffffff;
  border-radius: 50%;
  animation: spinnerAnim 1s linear infinite;
}
.small-spinner {
  width: 40px;
  height: 40px;
  border-width: 5px;
}
`;
