import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { toRelativeUrl } from '@okta/okta-auth-js';
import { Outlet } from 'react-router-dom';
import { LoadingOverlay } from '@mantine/core';
import { client } from '../services/raffleApi';

export const SecureRoute: React.FC = () => {
  const { oktaAuth, authState } = useOktaAuth();

  useEffect(() => {
    if (!authState) {
      return;
    }

    if (!authState?.isAuthenticated) {
      const originalUri = toRelativeUrl(window.location.href, window.location.origin);
      oktaAuth.setOriginalUri(originalUri);
      void oktaAuth.signInWithRedirect();
    }

    if (authState?.isAuthenticated && authState?.accessToken?.accessToken) {
      client.defaults.headers.common.Authorization = `Bearer ${authState.accessToken?.accessToken}`;
    }
  }, [oktaAuth, !!authState, authState?.isAuthenticated]);

  if (!authState?.isAuthenticated) {
    return (<LoadingOverlay visible />);
  }

  return (<Outlet />);
};
