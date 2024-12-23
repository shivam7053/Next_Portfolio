'use client';

import 'animate.css';

export default function About() {
  const certificates = [
    {
      id: 1,
      name: 'Cloud Native',
      image: '/images/certificates/cloudnativetour.png', // Replace with the actual certificate image
      description: 'This certificate acknowledges my completion of cloud native tour.',
    },
    {
      id: 2,
      name: 'LLM Fine Tune',
      image: '/images/certificates/infosys_fine_tune.png', // Replace with the actual certificate image
      description: 'Certified in LLM model fine tune.',
    },
    {
      id: 3,
      name: 'Pytorch',
      image: '/images/certificates/pytorch_infosys.png', // Replace with the actual certificate image
      description: 'Certification in Pytorch',
    },
    // Add more certificates as needed
  ];

  return (
    <div style={containerStyle}>
      {/* About Section */}
      <div className="animate__animated animate__fadeIn animate__delay-1s" style={aboutSectionStyle}>
        <h2 style={headingStyle}>About Me</h2>
        <p style={descriptionStyle}>
          Hi, I'm Shivam Koli, a passionate researcher and developer. I have a keen interest in exploring
          new technologies and applying them to real-world problems. I have worked with several technologies
          such as Python, React, MongoDB, and many more.
        </p>
      </div>

      {/* Images Section */}
      <div className="animate__animated animate__fadeIn animate__delay-2s" style={imageSectionStyle}>
        <div style={imageContainerStyle}>
          <img
            src="/images/name.jpg"
            alt="My Profile"
            style={{ ...imageStyle, marginRight: '20px' }}
          />
          <img
            src="/images/college.jpg"
            alt="My College"
            style={imageStyle}
          />
        </div>
      </div>

      {/* Certificates Section */}
      <div className="animate__animated animate__fadeIn animate__delay-3s" style={certificatesSectionStyle}>
        <h2 style={headingStyle}>Certificates</h2>
        <div style={certificatesContainerStyle}>
          {certificates.map((certificate) => (
            <div key={certificate.id} style={cardStyle}>
              <img src={certificate.image} alt={certificate.name} style={certificateImageStyle} />
              <h3 style={certificateNameStyle}>{certificate.name}</h3>
              <p style={certificateDescriptionStyle}>{certificate.description}</p>
            </div>
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
  backgroundImage: 'url(/images/about.jpg)', // Add background image here
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  paddingTop: '50px',
  paddingBottom: '50px',
  color: '#fff',
  fontFamily: 'Arial, sans-serif',
  backgroundAttachment: 'fixed',
};

const aboutSectionStyle = {
  marginBottom: '40px',
};

const headingStyle = {
  fontSize: '3rem',
  marginBottom: '10px',
  animation: 'fadeIn 2s ease-out',
};

const descriptionStyle = {
  fontSize: '1.5rem',
  color: '#ccc',
  maxWidth: '800px',
  margin: '0 auto',
};

const imageSectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '50px',
};

const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '40px',
};

const imageStyle = {
  width: '250px',
  height: '250px',
  objectFit: 'cover',
  borderRadius: '8px',
};

const certificatesSectionStyle = {
  marginTop: '50px',
  width: '100%',
  textAlign: 'center',
};

const certificatesContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
};

const cardStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  padding: '20px',
  borderRadius: '10px',
  width: '300px',
  textAlign: 'center',
  color: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s',
};

const certificateImageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '10px',
};

const certificateNameStyle = {
  fontSize: '1.5rem',
  marginBottom: '5px',
};

const certificateDescriptionStyle = {
  fontSize: '1rem',
  color: '#ccc',
};
