'use client';

import Link from 'next/link';
import 'animate.css';

export default function Research() {
  const researchs = [
    {
      id: 1,
      name: 'Koli-V1: A Hybrid U-Net Encoder with Residual Squeeze-and-Excitation and Spatial Attention for Brain Tumor Classification',
      description: 'Brain tumor classification is a critical task in medical imaging, essential for accurate diagnosis and treatment planning. Traditional deep learning models, including CNNs and U-Net variants, often struggle with extracting meaningful features from complex MRI scans.',
      imageUrl: '/images/research/koli-v1.png',
      link: 'https://www.journal-cand.com/article_220475.html'
    },
    {
      id: 2,
      name: 'Shree-L1: A dynamic CNN architecture for efficient tumor classification in medical imaging',
      description: 'Brain tumor classification is a crucial task in medical imaging for early diagnosis. In this paper, we propose a novel deep learning architecture, Shree-L1, designed for efficient brain tumor classification.',
      imageUrl: '/images/research/shree-l1.png',
      link: 'https://www.bidacv.com/article_212474.html'
    },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>My Researches</h2>
      <div style={projectsContainerStyle}>
        {researchs.map((project) => (
          <Link key={project.id} href={project.link} style={cardStyle}>
            <div className="animate__animated animate__fadeIn animate__delay-1s" style={cardContentStyle}>
                <img src={project.imageUrl} alt={project.name} style={projectImageStyle} />
                <h3 style={projectTitleStyle}>{project.name}</h3>
                <p style={projectDescriptionStyle}>{project.description}</p>
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
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundImage: 'url(/images/research.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  paddingTop: '50px',
  paddingBottom: '30px',
  color: '#fff',
  fontFamily: 'Arial, sans-serif',
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
  width: '500px',
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

const projectTitleStyle = {
  fontFamily: 'cursive',
  textDecoration: 'underline',
  fontSize: '1.1rem',
  marginTop: '10px',
};

const projectDescriptionStyle = {
  marginTop: '10px',
  fontSize: '0.95rem',
};
