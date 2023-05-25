import { Outlet } from 'react-router-dom';
import React from 'react';

export const UnsecureRoute = (): React.ReactElement => {
  return (
    <Outlet />
  );
};
