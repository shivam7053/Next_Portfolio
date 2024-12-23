'use client';

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
            <footer style={footerStyle}>
              <p>&copy; 2024-25 ShivamKoli</p>
            </footer>
          </div>
        </body>
      </html>
    </>
  );
}

const bodyStyle = {
  margin: 0,
  padding: 0,
  fontFamily: 'Arial, sans-serif',
  height: '100%', // Full height for body
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
  backgroundColor: 'rgba(14, 25, 158, 0.7)', // Semi-transparent header
  padding: '10px 20px',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky', // Keeps header at the top during scrolling
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
  padding: '10px',
  backgroundColor: 'rgba(14, 25, 158, 0.7)', // Semi-transparent footer
  color: '#fff',
  marginTop: 'auto', // Push footer to the bottom
};
