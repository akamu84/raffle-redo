import React from 'react';
import { useNavigate } from 'react-router-dom';
import OktaAuth, { toRelativeUrl } from '@okta/okta-auth-js';
import { Security } from '@okta/okta-react';

interface AuthProviderProps {
  children: React.ReactElement
}

const oktaAuth = new OktaAuth({
  issuer: 'https://stjude.oktapreview.com/oauth2/ausxgmm5t1rzwKDxv0h7',
  clientId: '0oaxgm0vubeyXf7SA0h7',
  redirectUri: 'http://localhost:3000/callback'
});

export const AuthProvider = ({ children }: AuthProviderProps): React.ReactElement => {
  const navigate = useNavigate();
  const restoreOriginalUri = (_oktaAuth: any, originalUri: string): void => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
    {children}
  </Security>;
};
