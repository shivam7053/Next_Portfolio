'use client';
import { useEffect, useState } from 'react';
import SplashScreen from './SplashScreen';

export default function SplashWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('hasVisited', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) return <SplashScreen />;
  return <>{children}</>;
}
