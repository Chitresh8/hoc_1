import React from 'react';
import withAuth from '../WithAuth/WithAuth';

const ProtectedContent = () => {
  return <div>This is protected content visible only to authenticated users!</div>;
};

// Enhance the component with the HOC
export default withAuth(ProtectedContent);
