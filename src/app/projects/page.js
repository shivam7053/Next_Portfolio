'use client';

import Link from 'next/link';
import 'animate.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Quiz',
      description: 'A Quiz Gaame',
      imageUrl: '/images/projects/quiz.png',
      link: 'https://quiz-reactjs-shivam.netlify.app/'
    },
    {
      id: 2,
      name: 'ML Platform',
      description: 'A Platform to train machine learning models on your dataset',
      imageUrl: '/images/projects/ml-platform.png',
      link: 'https://ml-platform-latest.onrender.com/'
    },
    {
      id: 3,
      name: 'Journal',
      description: 'A Journal App',
      imageUrl: '/images/projects/journal.png',
      link: 'https://journal-mern-front.onrender.com/'
    },
    {
      id: 4,
      name: 'Maths Solver',
      description: 'A Maths Solver using custom nn model',
      imageUrl: '/images/projects/maths.png',
      link: 'https://maths-solver-1.onrender.com/'
    },
    {
      id: 5,
      name: 'Shivu Store',
      description: 'A simple Ecomm Website',
      imageUrl: '/images/projects/shivustore.png',
      link: 'https://shivustore.netlify.app/'
    },
    {
      id: 6,
      name: 'Portfolio-React',
      description: 'Portfolio using React.js',
      imageUrl: '/images/projects/Port-React.png',
      link: 'https://shivamkoli-engg.netlify.app/'
    },
    {
      id: 7,
      name: 'ShivuMagic',
      description: 'Platform to give services to clients',
      imageUrl: '/images/projects/shivumagic.png',
      link: 'https://shivumagic.netlify.app/'
    },
    // Add more projects as needed
  ];

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>My Projects</h2>
      <div style={projectsContainerStyle}>
        {projects.map((project) => (
          <Link key={project.id} href={project.link} style={cardStyle}>
            <div className="animate__animated animate__fadeIn animate__delay-1s" style={cardContentStyle}>
              <img src={project.imageUrl} alt={project.name} style={projectImageStyle} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
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
  background: 'url(/images/projects-bg.jpg) no-repeat center center/cover',
  backgroundSize: 'cover',
  paddingTop: '50px',
  paddingBottom: '50px',
  color: '#fff',
};

const headingStyle = {
  fontSize: '3rem',
  marginBottom: '40px',
  animation: 'fadeIn 2s ease-out',
};

const projectsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  flexWrap: 'wrap',
};

const cardStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const cardContentStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  padding: '20px',
  borderRadius: '10px',
  width: '250px',
  textAlign: 'center',
  transition: 'transform 0.3s',
  cursor: 'pointer',
};

const projectImageStyle = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '10px',
};

