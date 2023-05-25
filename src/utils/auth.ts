import { type AuthState } from '@okta/okta-auth-js';

export const getToken = (): string | undefined => {
  const storageData = localStorage.getItem('okta-token-storage');
  if (!storageData) return undefined;

  const { accessToken } = JSON.parse(storageData) as AuthState;
  if (!accessToken) return undefined;

  return accessToken?.accessToken;
};

export const hasSession = (): boolean => getToken() !== undefined;
