'use client'
// HOC/withAuthRedirect.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Protectetroute = (redirectPath) => (WrappedComponent) => {
  const AuthRedirectWrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      // Check if user is authenticated, if not, redirect
      // Replace this with your authentication logic
      const isAuthenticated = true; // Replace with your authentication check

      if (!isAuthenticated) {
        router.push(redirectPath);
      }
    }, []);

    if (!isAuthenticated) {
      return null; // Or a loading component or something
    }

    return <WrappedComponent {...props} />;
  };

  return AuthRedirectWrapper;
};

export default Protectetroute;
