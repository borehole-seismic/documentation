// src/pages/signout.js

import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

const SignOut = () => {
  const history = useHistory();

  useEffect(() => {
    // Clear the login state
    localStorage.removeItem('isLoggedIn');

    // Redirect to the login page
    history.push('/documentation/login');
  }, [history]);

  return (
    <div>Signing out...</div>
  );
};

export default SignOut;
