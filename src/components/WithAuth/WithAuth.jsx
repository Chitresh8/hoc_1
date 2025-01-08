import React, { useState, useEffect } from 'react';

// HOC to protect components
const withAuth = (WrappedComponent) => {
  return (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      // Simulate an authentication check
      const userIsAuthenticated = localStorage.getItem('authenticated') === 'true';
      setIsAuthenticated(userIsAuthenticated);
    }, []);

    if (!isAuthenticated) {
      return <div>Please log in to view this content.</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
