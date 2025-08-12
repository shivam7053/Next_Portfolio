'use client';
import React from 'react';
import Image from 'next/image';
import img from '../../public/images/name.jpg';
import htmlLogo from '../../public/images/html.png';
import jsLogo from '../../public/images/js.png';
import reactLogo from '../../public/images/react.png';
import tfLogo from '../../public/images/tensorflow.png';

export default function SplashScreen() {
  return (
    <>
      <style jsx global>{globalStyles}</style>
      <div style={splashStyle}>
        <div style={{ position: 'relative', width: '200px', height: '200px' }}>
          {/* Main Image */}
          <Image
            src={img}
            alt="Shivam Koli"
            width={120}
            height={120}
            style={{
              borderRadius: '50%',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
            }}
          />

          {/* Rotating Container */}
          <div className="orbit">
            <Image src={htmlLogo} alt="HTML" width={40} height={40} className="orbit-item pos1" />
            <Image src={jsLogo} alt="JavaScript" width={40} height={40} className="orbit-item pos2" />
            <Image src={reactLogo} alt="React" width={40} height={40} className="orbit-item pos3" />
            <Image src={tfLogo} alt="TensorFlow" width={40} height={40} className="orbit-item pos4" />
          </div>
        </div>
        <h2 style={{ color: '#fff', marginTop: '20px' }}>Welcome to Portfolio</h2>
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

@keyframes orbitAnim {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 160px;
  height: 160px;
  margin-left: -80px;
  margin-top: -80px;
  animation: orbitAnim 6s linear infinite;
}

.orbit-item {
  position: absolute;
}

.pos1 { top: 0; left: 50%; transform: translate(-50%, -50%); }
.pos2 { right: 0; top: 50%; transform: translate(50%, -50%); }
.pos3 { bottom: 0; left: 50%; transform: translate(-50%, 50%); }
.pos4 { left: 0; top: 50%; transform: translate(-50%, -50%); }
`;
