'use client';

export default function Project1() {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Project 1</h2>
      <div style={contentStyle}>
        <img src="/images/project1-detail.jpg" alt="Project 1" style={imageStyle} />
        <p style={descriptionStyle}>
          This is the detailed description of Project 1. It can include various sections such as the 
          project goals, technologies used, challenges faced, and the outcome.
        </p>
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
  background: 'url(/images/project-detail-bg.jpg) no-repeat center center/cover',
  backgroundSize: 'cover',
  paddingTop: '50px',
  paddingBottom: '50px',
  color: '#fff',
};

const headingStyle = {
  fontSize: '3rem',
  marginBottom: '20px',
};

const contentStyle = {
  maxWidth: '800px',
  margin: '0 auto',
};

const imageStyle = {
  width: '100%',
  height: '400px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '20px',
};

const descriptionStyle = {
  fontSize: '1.5rem',
  color: '#ccc',
};
