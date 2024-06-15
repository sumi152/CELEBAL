// src/components/Success.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const { state } = useLocation();
  return (
    <div>
      <h2>Form Submission Successful!</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Success;
