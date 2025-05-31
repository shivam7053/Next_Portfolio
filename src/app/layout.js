import './globals.css';
import SplashScreen from '../components/SplashScreen';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SplashWrapper from '@/components/SplashWrapper';

export const metadata = {
  title: 'Shivam Portfolio',
  description: 'Welcome to my portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SplashWrapper>
          <div style={videoContainerStyle}>
            <video autoPlay loop muted style={videoStyle} src="/videos/layout.mp4" />
          </div>
          <div style={{ position: 'relative', zIndex: 1, color: '#fff', minHeight: '100vh' }}>
            <Header />
            <main style={{ padding: '20px' }}>
              {children}
            </main>
            <Footer />
          </div>
        </SplashWrapper>
      </body>
    </html>
  );
}


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