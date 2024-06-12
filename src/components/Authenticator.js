// src/AuthenticatorComponent.js
import React from 'react';
import { Button } from '@mui/material';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { getCurrentUser } from 'aws-amplify/auth';

const AuthenticatorComponent = () => {
  const isAuthenticated = (getCurrentUser.name == null ? false : true);

  return isAuthenticated ? (
    <Authenticator>
      {({ signOut, user }) => (
          <Button color="inherit" type="button" onClick={signOut}>Sign Out</Button>
      )}
    </Authenticator>
  ) : <></>;
};

export default AuthenticatorComponent;
