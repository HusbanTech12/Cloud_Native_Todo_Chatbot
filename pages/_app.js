import '../styles/globals.css';
import { AuthProvider } from '../contexts/AuthContext';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Listen for custom events to switch between login and register views
    const handleSwitchToRegister = () => {
      // This would typically update state in the parent component
      console.log('Switching to register view');
    };

    const handleSwitchToLogin = () => {
      // This would typically update state in the parent component
      console.log('Switching to login view');
    };

    window.addEventListener('switchToRegister', handleSwitchToRegister);
    window.addEventListener('switchToLogin', handleSwitchToLogin);

    return () => {
      window.removeEventListener('switchToRegister', handleSwitchToRegister);
      window.removeEventListener('switchToLogin', handleSwitchToLogin);
    };
  }, []);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;