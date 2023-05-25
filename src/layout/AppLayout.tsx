import { AppShell, Header } from '@mantine/core';
import { SideNavigation } from './SideNavigation';
import { Outlet } from 'react-router-dom';
import React from 'react';

export const AppLayout = (): React.ReactElement => {
  return (
    <AppShell
      padding="md"
      navbar={<SideNavigation />}
      header={<Header height={80}>{/* Header content */}</Header>}
    >
      <Outlet />
    </AppShell>
  );
};
