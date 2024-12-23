'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Use environment variable
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Use environment variable
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Use environment variable
      )
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setError('Failed to send message. Please try again later.');
          console.error(error);
        }
      );
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Contact Me</h2>
      {isSubmitted ? (
        <p style={successMessageStyle}>Thank you for reaching out! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={textareaStyle}
          />
          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
      )}
      {error && <p style={errorMessageStyle}>{error}</p>}
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
  backgroundImage: 'url(/images/contact.jpg)', // Add a background image for the contact page
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '50px',
  color: '#fff',
  fontFamily: 'Arial, sans-serif',
};

const headingStyle = {
  fontSize: '3rem',
  marginBottom: '20px',
};

const formStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  padding: '20px',
  borderRadius: '10px',
  width: '400px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
};

const inputStyle = {
  width: '90%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const textareaStyle = {
  width: '90%',
  height: '100px',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  marginBottom: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  fontSize: '1rem',
  cursor: 'pointer',
};

const successMessageStyle = {
  color: '#28a745',
  fontSize: '1.2rem',
};

const errorMessageStyle = {
  color: '#dc3545',
  fontSize: '1.2rem',
};