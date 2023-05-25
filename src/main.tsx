import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoadingOverlay, MantineProvider } from '@mantine/core';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './dev';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from './contexts/AuthProvider';
import App from './App';
import { UnsecureRoute } from './routes/UnsecureRoute';
import { Home } from './routes/Home';
import { LoginCallback } from '@okta/okta-react';
import { SecureRoute } from './routes/SecureRoute';
import Dashboard, { loader as dashboardLoader } from './routes/Dashboard';
import { Admin } from './routes/Admin';
import { Session } from './routes/Session';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <AuthProvider>
      <App />
    </AuthProvider>,
    // errorElement: <p>Not Found!</p>,
    children: [
      {
        element: <UnsecureRoute />,
        path: '/',
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: '/session',
            element: <SecureRoute />
          },
          {
            path: '/callback',
            element: <LoginCallback loadingElement={<LoadingOverlay visible />} />
          }
        ]
      },
      {
        element: <SecureRoute />,
        children: [
          {
            path: '/dashboard/:externalId',
            loader: dashboardLoader(queryClient),
            element: <Dashboard />
          },
          {
            path: '/admin/:externalId',
            element: <Admin />
          }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <QueryClientProvider client={queryClient}>
        <DevSupport ComponentPreviews={ComponentPreviews}
          useInitialHook={useInitial}
        >
          <RouterProvider router={router} />
        </DevSupport>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>
);
